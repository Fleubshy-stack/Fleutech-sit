// ================================================================
// FONCTION SERVEUR — gestion des avis clients (témoignages)
// ================================================================
// GET (public)                → avis approuvés uniquement
// GET ?pending=1 (admin)       → avis en attente de validation
// POST (public)                → un client soumet un avis → statut "pending"
// PATCH (admin, action=approve)→ approuve un avis en attente
// DELETE (admin)               → supprime un avis (approuvé ou en attente)
//
// Le mot de passe admin vient de la variable d'environnement ADMIN_SECRET
// (la même que pour "Mes Réalisations").

import { getStore } from "@netlify/blobs";

// Les 4 témoignages déjà présents sur le site, gardés comme avis de départ
const DEFAULT_TESTIMONIALS = [
  { id: "seed-1", name: "Marie Dupont", company: "CEO, TechStart France", rating: 5, text: "Fleutech a transformé notre infrastructure informatique. Leur expertise en cybersécurité nous a permis de protéger nos données sensibles. Service professionnel et réactif!", status: "approved" },
  { id: "seed-2", name: "Esaïe PRIME", company: "Directeur, ICME", rating: 5, text: "Notre site est magnifique et performant. Fleutech a compris nos besoins de façon exceptionnelle. Le support est excellent!", status: "approved" },
  { id: "seed-3", name: "Pierre Noel", company: "CTO, InnovateHT", rating: 5, text: "L'application web de gestion de projets développée par Fleutech a amélioré notre productivité de 40%. Une équipe technique compétente et à l'écoute.", status: "approved" },
  { id: "seed-4", name: "Sophie Laurent", company: "Gérante, BureauPlus", rating: 4.5, text: "Service réseau professionnel et fiable. Depuis que Fleutech gère notre infrastructure, nous n'avons plus aucun problème. Investissement recommandé!", status: "approved" }
];

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default async (req) => {
  const store = getStore("testimonials");
  const url = new URL(req.url);

  // ---- Lecture ----
  if (req.method === "GET") {
    const all = (await store.get("list", { type: "json" })) || DEFAULT_TESTIMONIALS;
    const wantsPending = url.searchParams.get("pending") === "1";

    if (wantsPending) {
      const expected = Netlify.env.get("ADMIN_SECRET");
      const provided = req.headers.get("x-admin-key");
      if (!expected || provided !== expected) {
        return new Response("Non autorisé", { status: 401 });
      }
      return Response.json(all.filter((t) => t.status === "pending"));
    }

    // Public : uniquement les avis déjà validés
    return Response.json(all.filter((t) => t.status === "approved"));
  }

  // ---- Soumission publique d'un nouvel avis (aucun mot de passe requis) ----
  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response("Requête invalide", { status: 400 });
    }

    const t = body.testimonial || {};
    if (typeof t.name !== "string" || !t.name.trim() || t.name.length > 80) {
      return new Response("Nom invalide (80 caractères max)", { status: 400 });
    }
    if (typeof t.text !== "string" || !t.text.trim() || t.text.length > 500) {
      return new Response("Avis invalide (500 caractères max)", { status: 400 });
    }

    const rating = Math.max(1, Math.min(5, Number(t.rating) || 5));
    const clean = {
      id: genId(),
      name: t.name.trim(),
      company: typeof t.company === "string" ? t.company.trim().slice(0, 100) : "",
      rating,
      text: t.text.trim(),
      status: "pending" // n'apparaît publiquement qu'après validation admin
    };

    const all = (await store.get("list", { type: "json" })) || DEFAULT_TESTIMONIALS;
    all.unshift(clean);
    await store.setJSON("list", all);
    return Response.json({ ok: true });
  }

  // ---- Modération : approuver ou supprimer (mot de passe requis) ----
  if (req.method === "PATCH" || req.method === "DELETE") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response("Requête invalide", { status: 400 });
    }

    const expected = Netlify.env.get("ADMIN_SECRET");
    if (!expected || body.adminKey !== expected) {
      return new Response("Mot de passe incorrect", { status: 401 });
    }

    const all = (await store.get("list", { type: "json" })) || DEFAULT_TESTIMONIALS;
    const index = all.findIndex((t) => t.id === body.id);
    if (index === -1) {
      return new Response("Avis introuvable", { status: 404 });
    }

    if (req.method === "PATCH" && body.action === "approve") {
      all[index].status = "approved";
    } else if (req.method === "DELETE") {
      all.splice(index, 1);
    }

    await store.setJSON("list", all);
    return Response.json({ ok: true });
  }

  return new Response("Méthode non autorisée", { status: 405 });
};
