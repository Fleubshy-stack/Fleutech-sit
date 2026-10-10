# Déploiement Fleutech sur Vercel

Le site utilise le runtime communautaire `vercel-php@0.9.0` pour ses pages PHP et Node.js 22 pour les fonctions JavaScript.

## Configuration Vercel

1. Importer le dépôt dans Vercel et choisir le dossier `web` comme **Root Directory**.
2. Garder les commandes de build et de sortie par défaut : les pages PHP sont exécutées par le runtime configuré dans `vercel.json`.
3. Ajouter les variables suivantes dans **Settings > Environment Variables** :
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
   - `ADMIN_SECRET`
   - `RESEND_API_KEY`
   - `NOTIFY_EMAIL`
4. Déployer à nouveau après avoir configuré ces variables.

Upstash Redis sert au stockage des avis, des réalisations, des inscriptions et des statistiques de visites sur Vercel. Resend sert aux formulaires de contact et de devis.

## XAMPP en local

Les pages PHP continuent de fonctionner sous Apache/XAMPP. En local, les inscriptions et les statistiques utilisent MySQL, configuré par défaut sur la base `formation`. Les variables `FLEUTECH_DB_HOST`, `FLEUTECH_DB_PORT`, `FLEUTECH_DB_NAME`, `FLEUTECH_DB_USER` et `FLEUTECH_DB_PASSWORD` permettent de remplacer ces réglages.

La base MySQL de XAMPP n’est pas accessible depuis les fonctions Vercel. Ne pas utiliser `localhost` comme adresse MySQL dans les variables Vercel ; l’application hébergée utilise Upstash Redis.

Le dossier `storage/`, qui peut contenir des données locales, est exclu du déploiement par `.vercelignore`.
