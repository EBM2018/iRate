Backend Boilerplate
===================

Ce dépôt contient le code pour le backend du projet Boilerplate.

La documentation de l'API est écrite dans des commentaires [ApiDoc](http://apidocjs.com/), et compilée automatiquement par Travis à chaque push de la branche `master`. Elle est finalement accessible sur la branche `gh-pages`, ou directement à l'adresse https://EBM-2017-2018.github.io/EBM-boilerplate.

## Après avoir copié ce boilerplate

- Modifier le fichier [`package.json`](package.json) pour changer le nom du projet, et le nom et la "sampleUrl" utilisée comme base pour ApiDoc

## Développement

1. Installer les dépendances avec npm `npm install`
2. Copier le fichier `.env.example` et le renommer en `.env` (pour ceux sous Windows, lancez `npm run setup-env`)<sup id="a1">[1](#f1)</sup>
3. Modfier les valeurs nécessaires pour votre environnement dans le fichier `.env`
4. Lancer le serveur avec `npm start`, il se relancera automatiquement à chaque modification des fichiers source

## ApiDoc

ApiDoc fonctionne grâce à des commentaires au dessus de chaque route, qui seront interprétés pour construire une documentation complète. Des exemples de base sont rédigés dans ce projet ; si nécessaire rendez vous sur la [documentation d'ApiDoc](http://apidocjs.com/) pour rechercher toutes les propriétés disponibles.

Une extension Visual Studio Code permet d'avoir de la complétion sur les propriétés ApiDoc : cherchez 'ApiDoc Snippets' et installez l'extension. Si vous n'avez pas de complétion dans les commentaires, ouvrez les réglages de VS Code et ajoutez dans la partie de droite ce bloc de code à la fin (c'est du JSON, faites attention aux virgules et aux guillemets) :
```json
   "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": false
    }
```

--------

<b id="f1">1.</b> L'explorateur Windows refuse de créer un fichier qui n'a qu'une extension sans avoir de nom. Par exemple, `coucou.env` marche, mais `.env` non. Là où c'est encore plus fort, c'est que ça marche très bien en ligne de commande... Pour vous épargner ça, le script `npm run setup-env` le fait pour vous (et marche aussi sur Linux et macOS, si jamais vous avez la flemme de le faire à la main vous aussi). [↩](#a1)
