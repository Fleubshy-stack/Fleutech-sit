// ================================================================
// FONCTION SERVEUR VERCEL — gestion des avis clients (témoignages)
// ================================================================
// GET (public)                 → avis approuvés uniquement
// GET ?pending=1 (admin)       → avis en attente de validation
// POST (public)                → un client soumet un avis → statut "pending"
// PATCH (admin, action=approve)→ approuve un avis en attente
// DELETE (admin)               → supprime un avis (approuvé ou en attente)

const { Redis } = require("@upstash/redis");

const redis = Redis.fromEnv();
const KEY = "fleutech:testimonials";

const DEFAULT_TESTIMONIALS = [
  { id: "seed-1", name: "Marie Dupont", company: "CEO, TechStart France", rating: 5, text: "Fleutech a transformé notre infrastructure informatique. Leur expertise en cybersécurité nous a permis de protéger nos données sensibles. Service professionnel et réactif!", status: "approved" },
  { id: "seed-2", name: "Esaïe PRIME", company: "Directeur, ICME", rating: 5, text: "Notre site est magnifique et performant. Fleutech a compris nos besoins de façon exceptionnelle. Le support est excellent!", status: "approved" },
  { id: "seed-3", name: "Pierre Noel", company: "CTO, InnovateHT", rating: 5, text: "L'application web de gestion de projets développée par Fleutech a amélioré notre productivité de 40%. Une équipe technique compétente et à l'écoute.", status: "approved" },
  { id: "seed-4", name: "Sophie Laurent", company: "Gérante, BureauPlus", rating: 4.5, text: "Service réseau professionnel et fiable. Depuis que Fleutech gère notre infrastructure, nous n'avons plus aucun problème. Investissement recommandé!", status: "approved" }
];

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const all = (await redis.get(KEY)) || DEFAULT_TESTIMONIALS;
    const wantsPending = req.query.pending === "1";

    if (wantsPending) {
      const expected = process.env.ADMIN_SECRET;
      const provided = req.headers["x-admin-key"];
      if (!expected || provided !== expected) {
        return res.status(401).send("Non autorisé");
      }
      return res.status(200).json(all.filter((t) => t.status === "pending"));
    }

    return res.status(200).json(all.filter((t) => t.status === "approved"));
  }

  if (req.method === "POST") {
    const body = req.body || {};
    const t = body.testimonial || {};

    if (typeof t.name !== "string" || !t.name.trim() || t.name.length > 80) {
      return res.status(400).send("Nom invalide (80 caractères max)");
    }
    if (typeof t.text !== "string" || !t.text.trim() || t.text.length > 500) {
      return res.status(400).send("Avis invalide (500 caractères max)");
    }

    const rating = Math.max(1, Math.min(5, Number(t.rating) || 5));
    const clean = {
      id: genId(),
      name: t.name.trim(),
      company: typeof t.company === "string" ? t.company.trim().slice(0, 100) : "",
      rating,
      text: t.text.trim(),
      status: "pending"
    };

    const all = (await redis.get(KEY)) || DEFAULT_TESTIMONIALS;
    all.unshift(clean);
    await redis.set(KEY, all);
    return res.status(200).json({ ok: true });
  }

  if (req.method === "PATCH" || req.method === "DELETE") {
    const body = req.body || {};
    const expected = process.env.ADMIN_SECRET;

    if (!expected || body.adminKey !== expected) {
      return res.status(401).send("Mot de passe incorrect");
    }

    const all = (await redis.get(KEY)) || DEFAULT_TESTIMONIALS;
    const index = all.findIndex((t) => t.id === body.id);
    if (index === -1) {
      return res.status(404).send("Avis introuvable");
    }

    if (req.method === "PATCH" && body.action === "approve") {
      all[index].status = "approved";
    } else if (req.method === "DELETE") {
      all.splice(index, 1);
    }

    await redis.set(KEY, all);
    return res.status(200).json({ ok: true });
  }

  return res.status(405).send("Méthode non autorisée");
};
