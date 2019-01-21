Fil rouge Boilerplate
=====================

[![Build Status](https://travis-ci.com/EBM2018/filrouge-boilerplate.svg?branch=master)](https://travis-ci.com/EBM2018/filrouge-boilerplate)
[![Maintainability](https://api.codeclimate.com/v1/badges/e55bb909d165d1469344/maintainability)](https://codeclimate.com/github/EBM2018/filrouge-boilerplate/maintainability)

Ce dépôt fournit les éléments de base pour les projets du fil rouge.

Il comprend :
- un backend en NodeJS et Express
- un frontend en React
- des tests automatiques grâce à Travis

## Mode d'emploi

1. `git clone https://github.com/EBM2018/fil-rouge-boilerplate.git`
2. Créer un dépôt pour votre projet à l'adresse https://github.com/organizations/EBM2018/repositories/new
3. Récupérer l'URL du projet, accessible depuis le bouton "Clone or download"
4. `git remote add upstream https://github.com/EBM2018/fil-rouge-boilerplate.git`
5. `git remote set-url origin <adresse de votre dépôt récupérée à l'étape 3>` (exemple : `git remote set-url origin https://github.com/EBM2018/mon-super-projet.git`)
6. Aller sur https://travis-ci.com/, se connecter avec son compte Github, et dans l'organisation EBM2018, activer Travis pour votre projet Github.
7. Générer un token Github pour l'APIDoc : Aller ici : https://github.com/settings/tokens, cliquer sur "Generate new token" et cocher la case "public_repo". Choisissez un nom pour le token et cliquez sur "Generate token". Copiez en le token qui s'affiche.
8. Retourner sur https://travis-ci.com/, dans la liste à gauche, le projet devrait apparaître. Cliquer dessus pour l'ouvrir et dans le menu "More Options" à droite, aller sur Settings. Dans la page qui s'affiche, dans la section "Environment Variables", ajouter une nouvelle ligne avec comme nom `GITHUB_TOKEN` et comme valeur le token précédemment généré, en laissant le booléen à Off.

N'hésitez pas à demander de l'aide ! Bonne chance :)
