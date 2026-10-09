// ================================================================
// FONCTION SERVEUR VERCEL — gestion de "Mes Réalisations"
// ================================================================
// GET    → renvoie la liste actuelle des réalisations
// POST   → ajoute une réalisation (mot de passe requis)
// DELETE → supprime une réalisation par son index (mot de passe requis)
//
// Stockage : Upstash Redis (via le Marketplace Vercel).
// Variables d'environnement nécessaires (à ajouter dans Vercel → Settings → Environment Variables) :
//   - UPSTASH_REDIS_REST_URL et UPSTASH_REDIS_REST_TOKEN (ajoutées automatiquement
//     quand tu connectes l'intégration Upstash depuis le Marketplace Vercel)
//   - ADMIN_SECRET (ton mot de passe administrateur, choisi par toi)

const { Redis } = require("@upstash/redis");

const redis = Redis.fromEnv();
const KEY = "fleutech:realizations";

const DEFAULT_REALIZATIONS = [
  {
    title: "Plateforme e-commerce premium",
    description: "Création d'une boutique en ligne moderne avec paiement sécurisé et gestion des commandes.",
    category: "web",
    tech: ["React", "Node.js", "Stripe"],
    image: ""
  },
  {
    title: "Audit cybersécurité PME",
    description: "Identification des vulnérabilités et mise en place de protections avancées.",
    category: "security",
    tech: ["Kali Linux", "OWASP", "Nmap"],
    image: ""
  },
  {
    title: "Dashboard de supervision",
    description: "Tableau de bord pour suivre les incidents techniques en temps réel.",
    category: "support",
    tech: ["JavaScript", "API REST", "Chart.js"],
    image: ""
  }
];

module.exports = async (req, res) => {
  // ---- Lecture : accessible à tout le monde (pas besoin de mot de passe) ----
  if (req.method === "GET") {
    const current = (await redis.get(KEY)) || DEFAULT_REALIZATIONS;
    return res.status(200).json(current);
  }

  // ---- Ajout et suppression : protégés par mot de passe ----
  if (req.method === "POST" || req.method === "DELETE") {
    const body = req.body || {};
    const expected = process.env.ADMIN_SECRET;

    if (!expected || body.adminKey !== expected) {
      return res.status(401).send("Mot de passe incorrect");
    }

    const current = (await redis.get(KEY)) || DEFAULT_REALIZATIONS;

    if (req.method === "POST") {
      const r = body.realization || {};

      if (typeof r.title !== "string" || !r.title.trim() || r.title.length > 200) {
        return res.status(400).send("Titre invalide (200 caractères max)");
      }
      if (typeof r.description !== "string" || !r.description.trim() || r.description.length > 1000) {
        return res.status(400).send("Description invalide (1000 caractères max)");
      }
      if (r.image && r.image.length > 2_000_000) {
        return res.status(400).send("Photo trop lourde (essaie une image plus légère)");
      }

      const cleanRealization = {
        title: r.title.trim(),
        description: r.description.trim(),
        category: String(r.category || "other").slice(0, 40),
        image: typeof r.image === "string" ? r.image.slice(0, 2_000_000) : "",
        tech: Array.isArray(r.tech) ? r.tech.slice(0, 10).map((t) => String(t).slice(0, 40)) : []
      };

      current.unshift(cleanRealization);
    } else {
      current.splice(body.index, 1);
    }

    await redis.set(KEY, current);
    return res.status(200).json(current);
  }

  return res.status(405).send("Méthode non autorisée");
};
