Backend Boilerplate
===================

Ce dépôt contient le code pour le backend du projet Boilerplate.

## Après avoir copié ce boilerplate

- Modifier le fichier [`package.json`](package.json) pour changer le nom du projet

## Développement

1. Installer les dépendances avec npm `npm install`
2. Copier le fichier `.env.example` et le renommer en `.env` (pour ceux sous Windows, lancez `npm run setup-env`)<sup id="a1">[1](#f1)</sup>
3. Modfier les valeurs nécessaires pour votre environnement dans le fichier `.env`
4. Lancer le serveur avec `npm start`, il se relancera automatiquement à chaque modification des fichiers source

--------

<b id="f1">1.</b> L'explorateur Windows refuse de créer un fichier qui n'a qu'une extension sans avoir de nom. Par exemple, `coucou.env` marche, mais `.env` non. Là où c'est encore plus fort, c'est que ça marche très bien en ligne de commande... Pour vous épargner ça, le script `npm run setup-env` le fait pour vous (et marche aussi sur Linux et macOS, si jamais vous avez la flemme de le faire à la main vous aussi). [↩](#a1)
