// Enregistre les inscriptions à la conférence dans une liste Upstash Redis.
// Le déploiement doit fournir UPSTASH_REDIS_REST_URL et UPSTASH_REDIS_REST_TOKEN.
const { Redis } = require("@upstash/redis");

const redis = Redis.fromEnv();
const KEY = "fleutech:formation";
const PROFILES = new Set(["etudiant", "ecolier", "autre"]);

function isText(value, maxLength, required = false) {
  return typeof value === "string" &&
    value.length <= maxLength &&
    (!required || value.trim().length > 0);
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Méthode non autorisée" });
  }

  const registration = req.body && req.body.registration;
  if (!registration || typeof registration !== "object" || Array.isArray(registration)) {
    return res.status(400).json({ ok: false, error: "Inscription invalide" });
  }

  if (typeof registration["bot-field"] === "string" && registration["bot-field"].trim()) {
    return res.status(200).json({ ok: true });
  }

  const name = registration.name;
  const email = registration.email;
  const profile = registration.profile;
  const studyDomain = registration.study_domain;
  const schoolClass = registration.school_class;
  const phone = registration.phone;
  const organization = registration.organization;

  if (!isText(name, 120, true)) {
    return res.status(400).json({ ok: false, error: "Nom invalide" });
  }
  if (!isText(email, 254, true) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ ok: false, error: "Adresse courriel invalide" });
  }
  if (!PROFILES.has(profile)) {
    return res.status(400).json({ ok: false, error: "Veuillez choisir votre profil" });
  }
  if (profile === "etudiant" && !isText(studyDomain, 120, true)) {
    return res.status(400).json({ ok: false, error: "Le domaine d’étude est obligatoire pour un étudiant" });
  }
  if (profile === "ecolier" && !isText(schoolClass, 80, true)) {
    return res.status(400).json({ ok: false, error: "La classe fréquentée est obligatoire pour un écolier" });
  }
  if (phone !== undefined && !isText(phone, 40)) {
    return res.status(400).json({ ok: false, error: "Numéro de téléphone invalide" });
  }
  if (organization !== undefined && !isText(organization, 120)) {
    return res.status(400).json({ ok: false, error: "Établissement ou organisation invalide" });
  }

  const savedRegistration = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    profile,
    study_domain: profile === "etudiant" ? studyDomain.trim() : "",
    school_class: profile === "ecolier" ? schoolClass.trim() : "",
    phone: typeof phone === "string" ? phone.trim() : "",
    organization: typeof organization === "string" ? organization.trim() : "",
    created_at: new Date().toISOString()
  };

  try {
    await redis.rpush(KEY, JSON.stringify(savedRegistration));
    return res.status(201).json({ ok: true, registration_id: savedRegistration.id });
  } catch (error) {
    console.error("Impossible d’enregistrer l’inscription à la formation :", error);
    return res.status(500).json({ ok: false, error: "Impossible d’enregistrer l’inscription" });
  }
};
