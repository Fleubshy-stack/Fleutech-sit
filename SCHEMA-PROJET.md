# Schéma d’assemblage du projet Fleutech

Ce document décrit l’organisation du site, le trajet des requêtes et les différences entre l’exécution locale sous XAMPP et l’hébergement sur Vercel.

## 1. Vue d’ensemble

```mermaid
flowchart TD
    Visitor[Visiteur]

    subgraph Site["Site Fleutech — dossier web"]
        Pages["Pages PHP<br/>Accueil · Services · Solutions<br/>Stack Tech · Blog · Avis · Contact"]
        Layout["includes/page-layout.php<br/>Gabarit commun"]
        Sections["includes/sections/<br/>Contenu des pages"]
        Assets["styles.css + script.js<br/>Style, navigation, interactions"]
        Pages --> Layout
        Layout --> Sections
        Layout --> Assets
    end

    subgraph Formation["Inscription autonome — dossier htdocs/formation"]
        RegistrationPage["index.php<br/>Formulaire conférence"]
        RegistrationScript["script.js<br/>Champs, envoi et carte d’entrée"]
        RegistrationApi["api/formation.php"]
        RegistrationPage --> RegistrationScript
        RegistrationScript --> RegistrationApi
        RegistrationPage -. "réutilise" .-> Assets
    end

    subgraph APIs["API du site — web/api"]
        PageRouter["page.php<br/>Routeur des pages PHP sur Vercel"]
        Realizations["realizations.js"]
        Testimonials["testimonials.js"]
        Messages["send-message.js"]
        OnlineFormation["formation.js"]
        VisitCounter["visits.js"]
    end

    subgraph Local["XAMPP — développement local"]
        Apache["Apache + PHP"]
        MySQL[("MySQL — base formation<br/>inscriptions + visites")]
    end

    subgraph Hosting["Vercel — hébergement en ligne"]
        Runtime["Runtime PHP communautaire<br/>vercel-php"]
        NodeFunctions["Fonctions Node.js"]
        Redis[("Upstash Redis<br/>avis, réalisations, inscriptions, visites")]
        Resend["Resend<br/>courriels contact et devis"]
    end

    Visitor --> Pages
    Visitor --> RegistrationPage
    Pages --> Apache
    RegistrationPage --> Apache
    Apache --> MySQL
    Pages --> PageRouter
    PageRouter --> Runtime
    RegistrationPage -. "page conférence en ligne" .-> Runtime
    Runtime --> NodeFunctions
    NodeFunctions --> Realizations
    NodeFunctions --> Testimonials
    NodeFunctions --> Messages
    NodeFunctions --> OnlineFormation
    NodeFunctions --> VisitCounter
    Realizations --> Redis
    Testimonials --> Redis
    OnlineFormation --> Redis
    VisitCounter --> Redis
    Messages --> Resend
```

## 2. Arborescence utile

```text
htdocs/
├── web/                         Racine du site Fleutech
│   ├── index.php                Accueil
│   ├── service.php              Services
│   ├── solution.php             Solutions
│   ├── stack-tech.php           Stack technique
│   ├── blog.php                 Blog
│   ├── avis.php                 Avis
│   ├── contact.php              Contact
│   ├── conference-ia.php        Page conférence / redirection locale
│   ├── statistiques.php         Relevé mensuel des visites
│   ├── styles.css               Style partagé du site
│   ├── script.js                Interactions partagées du site
│   ├── vercel.json              Runtime PHP et routes Vercel
│   ├── api/
│   │   ├── page.php             Routeur vers les pages PHP sur Vercel
│   │   ├── formation.js         Inscriptions sur Vercel
│   │   ├── formation.php        Relais PHP vers la formation locale
│   │   ├── realizations.js      API des réalisations
│   │   ├── testimonials.js      API des avis
│   │   ├── send-message.js      API de contact et de devis
│   │   └── visits.js            API des visites sur Vercel
│   └── includes/
│       ├── page-layout.php      Assemble le gabarit commun
│       ├── head.php             Métadonnées et feuilles de style
│       ├── header.php           Navigation
│       ├── footer.php           Pied de page
│       ├── site-visits.php      Comptage local avec MySQL
│       └── sections/            Sections réutilisables des pages
└── formation/                   Page locale de formation, hors du site web/
    ├── index.php                Formulaire autonome de conférence
    ├── script.js                Soumission et carte d’entrée
    └── api/
        └── formation.php        Validation et insertion MySQL locale
```

Le répertoire `web/storage/` est un ancien stockage local. Il est exclu des livraisons Vercel par `.vercelignore`.

## 3. Parcours d’une inscription à la conférence

```mermaid
sequenceDiagram
    actor Visiteur
    participant Page as Page de formation
    participant JS as script.js
    participant API as API formation
    participant DB as Stockage
    participant Carte as Carte d’entrée

    Visiteur->>Page: Remplit et envoie le formulaire
    Page->>JS: Soumission du formulaire
    JS->>API: POST avec les renseignements d’inscription
    alt XAMPP local
        API->>DB: INSERT dans la table d’inscriptions MySQL
    else Vercel en ligne
        API->>DB: Enregistre l’inscription dans Upstash Redis
    end
    DB-->>API: Confirme l’écriture et fournit une référence
    API-->>JS: Réponse avec registration_id
    JS->>Carte: Affiche le nom et la référence
    Visiteur->>Carte: Télécharge le SVG ou imprime en PDF
```

## 4. Où les données sont stockées

| Fonction | XAMPP local | Vercel |
|---|---|---|
| Inscriptions conférence | MySQL, base `formation`, table `inscription a la formation ia` | Upstash Redis, clé `fleutech:formation` |
| Relevé des visites | MySQL, table `site_monthly_visits` | Upstash Redis, clés `fleutech:visits:*` et `fleutech:visitors:*` |
| Réalisations | API Vercel / Upstash Redis pour la version hébergée | Upstash Redis |
| Avis | API Vercel / Upstash Redis pour la version hébergée | Upstash Redis |
| Courriels de contact et de devis | Service d’envoi configuré par l’API | Resend |

MySQL de XAMPP n’est pas accessible depuis Vercel. Les données locales et les données de production sont donc séparées.

## 5. Déploiement Vercel

- **Root Directory** : `web`
- **Pages PHP** : runtime `vercel-php@0.9.0`, routées par `vercel.json`
- **Fonctions JavaScript** : fichiers `web/api/*.js`
- **Données hébergées** : Upstash Redis
- **Envoi de courriels** : Resend
- **Secrets et identifiants** : variables d’environnement Vercel, jamais dans le code

Variables d’environnement documentées :

- Upstash : `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
- Administration : `ADMIN_SECRET`
- Resend : `RESEND_API_KEY`, `NOTIFY_EMAIL`
- MySQL local facultatif : `FLEUTECH_DB_HOST`, `FLEUTECH_DB_PORT`, `FLEUTECH_DB_NAME`, `FLEUTECH_DB_USER`, `FLEUTECH_DB_PASSWORD`
