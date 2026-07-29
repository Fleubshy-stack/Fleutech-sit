// ================================================================
// FONCTION SERVEUR VERCEL — envoi d'email (contact / devis / chatbot)
// ================================================================
// Vercel n'a pas d'équivalent à "Netlify Forms" — cette fonction envoie
// un vrai email via Resend (resend.com) à chaque soumission.
//
// Variables d'environnement nécessaires :
//   - RESEND_API_KEY (clé API de ton compte Resend, gratuit pour démarrer)
//   - NOTIFY_EMAIL (l'adresse où tu veux recevoir les messages, ex: infofleutech@yahoo.com)
//
// Note : tant que tu n'as pas vérifié ton propre domaine sur Resend, l'envoi
// se fait depuis "onboarding@resend.dev" (adresse de test fournie par Resend,
// ça fonctionne très bien pour démarrer, juste moins "pro" comme expéditeur).

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const SUBJECTS = {
  contact: "Nouveau message de contact — Fleutech",
  quote: "Nouvelle demande de devis — Fleutech",
  "chatbot-lead": "Nouvelle demande via le chatbot — Fleutech"
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Méthode non autorisée");
  }

  const { type, fields } = req.body || {};

  // Anti-spam : le champ honeypot doit rester vide (rempli seulement par des robots)
  if (fields && fields["bot-field"]) {
    return res.status(200).json({ ok: true }); // on répond "ok" sans rien envoyer, pour ne pas alerter le robot
  }

  const subject = SUBJECTS[type] || "Nouveau message — Fleutech";
  const bodyText = Object.entries(fields || {})
    .filter(([key]) => key !== "bot-field" && key !== "form-name")
    .map(([key, value]) => `${key} : ${value}`)
    .join("\n");

  try {
    await resend.emails.send({
      from: "Fleutech Site <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL,
      subject,
      text: bodyText || "(aucun champ reçu)"
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erreur d'envoi Resend :", err);
    return res.status(500).json({ ok: false });
  }
};
