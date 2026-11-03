# Portfolio — Mawuna Boris Merveille Dossa

Portfolio personnel de développeur web full-stack, construit avec React et TanStack Start. Le site présente les projets, leurs captures et leurs démonstrations vidéo.

## Prérequis

- Node.js 22.12 ou plus récent. Sur Vercel, sélectionne Node.js 24.x.
- npm

## Installation et développement

```bash
npm ci
npm run dev
```

Le serveur local est disponible sur `http://localhost:8080`.

## Vérifier le build

```bash
npm run lint
npm run build
```

Le projet utilise Nitro pour produire le déploiement TanStack Start sur Vercel. Vercel détecte la commande de build et la sortie ; conserve les réglages détectés automatiquement.

## Médias et fichiers privés

Le dossier local `sources_informations/` contient aussi des documents de travail personnels (CV, certificats, attestations et exports non utilisés). Le `.gitignore` les exclut. Il ne laisse suivre que les captures et vidéos effectivement importées par `src/data/projectsData.js`.

Ces captures et vidéos sont intégrées au portfolio et seront visibles publiquement sur le site. Vérifie qu’elles ne révèlent aucune donnée privée avant de les publier. Les autres documents du dossier restent uniquement sur ta machine. Ne place jamais de secret, clé API ou fichier `.env` dans `src/` ou `public/`.

Le `.gitignore` empêche l’ajout de nouveaux fichiers ignorés, mais ne retire pas un fichier déjà suivi par Git. Avant le premier push, si des documents privés apparaissent déjà dans `git status`, retire-les de l’index sans les supprimer de l’ordinateur :

```bash
git rm --cached -r --ignore-unmatch sources_informations
git add -A
git status --short
```

Vérifie la liste avant le commit. Si des documents confidentiels ont déjà été poussés sur GitHub, leur suppression du dernier commit ne suffit pas : ils restent dans l’historique du dépôt.

## Publier le dépôt sur GitHub

Crée un dépôt GitHub vide. Depuis ce dossier, si Git n’est pas encore initialisé :

```bash
git init
git branch -M main
git add -A
git status --short
git diff --cached --name-only
git commit -m "Prépare le portfolio pour Vercel"
git remote add origin https://github.com/UTILISATEUR/DEPOT.git
git push -u origin main
```

Remplace `UTILISATEUR/DEPOT` par l’adresse du dépôt. Confirme que la liste préparée pour le commit ne contient aucun CV, certificat ou document privé.

## Déployer sur Vercel

1. Dans Vercel, importe le dépôt GitHub.
2. Vérifie que le framework détecté est **TanStack Start** et que la version de Node.js est **24.x**.
3. Laisse Vercel gérer la commande de build et le dossier de sortie automatiquement, puis lance le déploiement.
4. Aucun secret ni variable d’environnement n’est requis pour le portfolio actuel.

Après avoir obtenu l’adresse Vercel du projet, remplace `https://vercel.app` par cette adresse dans les métadonnées de `src/routes/index.tsx`, le sitemap `public/sitemap.xml` et la déclaration Sitemap de `public/robots.txt`.

Le fichier `vercel.json` fixe le framework TanStack Start. Pour les détails à jour, consulte le [guide d’hébergement TanStack Start](https://tanstack.com/start/latest/docs/framework/react/guide/hosting) et le [guide Vercel](https://vercel.com/kb/guide/deploy-a-tanstack-start-app-to-vercel).

## Scripts

| Commande | Utilité |
| --- | --- |
| `npm run dev` | Démarrer le site en local |
| `npm run lint` | Vérifier le lint |
| `npm run build` | Générer le build de production |
| `npm run preview` | Lancer la prévisualisation Vite |
