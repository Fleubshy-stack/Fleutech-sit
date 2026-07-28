// ================================================================
// FONCTION SERVEUR — gestion de "Mes Réalisations"
// ================================================================
// Ce code tourne sur les serveurs de Netlify (pas dans le navigateur du
// visiteur), et sauvegarde les données dans Netlify Blobs.
//
// GET    → renvoie la liste actuelle des réalisations
// POST   → ajoute une réalisation (mot de passe requis)
// DELETE → supprime une réalisation par son index (mot de passe requis)
//
// Le mot de passe attendu vient de la variable d'environnement ADMIN_SECRET,
// à configurer dans Netlify (Project configuration → Environment variables).
// Il n'apparaît JAMAIS dans le code déployé.

import { getStore } from "@netlify/blobs";

// Contenu de départ, utilisé la toute première fois (avant qu'un admin
// n'ajoute ou ne modifie quoi que ce soit dans Netlify Blobs)
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

export default async (req) => {
  const store = getStore("realizations");

  // ---- Lecture : accessible à tout le monde (pas besoin de mot de passe) ----
  if (req.method === "GET") {
    const current = (await store.get("list", { type: "json" })) || DEFAULT_REALIZATIONS;
    return Response.json(current);
  }

  // ---- Ajout et suppression : protégés par mot de passe ----
  if (req.method === "POST" || req.method === "DELETE") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response("Requête invalide", { status: 400 });
    }

    const expectedPassword = Netlify.env.get("ADMIN_SECRET");
    if (!expectedPassword || body.adminKey !== expectedPassword) {
      return new Response("Mot de passe incorrect", { status: 401 });
    }

    const current = (await store.get("list", { type: "json" })) || DEFAULT_REALIZATIONS;

    if (req.method === "POST") {
      const r = body.realization || {};

      // Validation basique : évite qu'un contenu mal formé ou trop lourd
      // (ex: une photo non compressée) ne casse le site ou sature le stockage.
      if (typeof r.title !== "string" || !r.title.trim() || r.title.length > 200) {
        return new Response("Titre invalide (200 caractères max)", { status: 400 });
      }
      if (typeof r.description !== "string" || !r.description.trim() || r.description.length > 1000) {
        return new Response("Description invalide (1000 caractères max)", { status: 400 });
      }
      if (r.image && r.image.length > 2_000_000) {
        return new Response("Photo trop lourde (essaie une image plus légère)", { status: 400 });
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

    await store.setJSON("list", current);
    return Response.json(current);
  }

  return new Response("Méthode non autorisée", { status: 405 });
};
