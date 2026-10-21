# Padel Matchs : mettre l'application en ligne

Padel Matchs compose les matchs d'un entraînement de padel et imprime la feuille de match en PDF.
Une fois mise en ligne, elle s'ouvre depuis une simple adresse web, s'installe sur un téléphone ou un
ordinateur comme une vraie application, et fonctionne ensuite sans connexion internet.

Ce guide explique deux façons gratuites de la publier. Aucune connaissance en informatique n'est
nécessaire : il suffit de glisser-déposer des fichiers dans un site web.

- **Netlify Drop** : le plus rapide (5 minutes).
- **GitHub Pages** : un peu plus long la première fois, gratuit et durable.

Une seule des deux suffit.


## Le contenu du dossier

Tous ces fichiers doivent être publiés ensemble, en gardant les sous-dossiers :

| Fichier ou dossier       | À quoi il sert                                                  |
| ------------------------ | --------------------------------------------------------------- |
| `index.html`             | l'application elle-même                                         |
| `manifest.webmanifest`   | le nom, les couleurs et l'icône de l'application installée     |
| `sw.js`                  | permet à l'application de fonctionner sans connexion           |
| `icons/`                 | les icônes (terrain de padel bleu et balle jaune)              |
| `vendor/`                | le module qui fabrique le PDF                                   |
| `README.md`              | ce guide (il peut être publié aussi, cela ne gêne pas)          |

Ne renommez pas ces fichiers : ils se référencent les uns les autres par leur nom.


## Option 1 : Netlify Drop

### Première mise en ligne

1. Créez un compte gratuit sur <https://app.netlify.com/signup> (avec une adresse e-mail, ou un
   compte Google ou GitHub). Sans compte, le site est supprimé au bout d'environ une heure.
2. Une fois connecté, ouvrez <https://app.netlify.com/drop>.
3. Ouvrez l'explorateur de fichiers de votre ordinateur, à l'endroit où se trouve le dossier `padel`.
4. Faites glisser **le dossier `padel` entier** sur la zone de dépôt de la page Netlify
   (le cadre en pointillés qui commence par « Drag and drop »).
5. Attendez quelques secondes : Netlify affiche une adresse du type
   `https://nom-au-hasard-123456.netlify.app`. Cliquez dessus : l'application s'ouvre.

### Donner un nom plus simple à l'adresse

1. Dans Netlify, ouvrez votre projet puis les réglages (« Project configuration », parfois appelé
   « Site configuration »).
2. Cliquez sur « Change project name » (ou « Change site name ») et tapez par exemple
   `padel-matchs-monclub`.
3. L'adresse devient `https://padel-matchs-monclub.netlify.app`. C'est cette adresse que vous
   partagez avec les autres entraîneurs ou les joueurs.

### Mettre à jour plus tard

1. Ouvrez votre projet dans Netlify, onglet « Deploys ».
2. Faites glisser à nouveau le dossier `padel` sur la zone de dépôt en bas de la page.
3. Lisez aussi la section « Après une modification de l'application » plus bas.


## Option 2 : GitHub Pages

### Première mise en ligne

1. Créez un compte gratuit sur <https://github.com/signup>. Le nom d'utilisateur choisi apparaîtra
   dans l'adresse du site.
2. Une fois connecté, cliquez sur le bouton **+** en haut à droite, puis « New repository ».
3. Remplissez :
   - « Repository name » : par exemple `padel-matchs` (ce nom apparaîtra aussi dans l'adresse) ;
   - laissez **Public** coché (GitHub Pages est gratuit pour les dépôts publics ; l'application ne
     contient aucune donnée de joueurs, celles-ci restent dans chaque navigateur) ;
   - cochez « Add a README file » pour que le dépôt ne soit pas vide.

   Cliquez sur « Create repository ».
4. Dans le dépôt, cliquez sur « Add file » puis « Upload files ».
5. Ouvrez le dossier `padel` sur votre ordinateur, sélectionnez **tout son contenu** (fichiers
   et sous-dossiers `icons` et `vendor`, raccourci Ctrl + A) et faites-le glisser sur la page GitHub.
   Il faut déposer le *contenu* du dossier et non le dossier lui-même : `index.html` doit se trouver
   tout en haut du dépôt. Le README créé par GitHub est remplacé par celui du dossier : c'est normal.
6. En bas de la page, cliquez sur « Commit changes ».
7. Allez dans l'onglet « Settings » du dépôt, puis dans le menu de gauche sur « Pages ».
8. Sous « Build and deployment » :
   - « Source » : choisissez « Deploy from a branch » ;
   - « Branch » : choisissez `main` et le dossier `/ (root)`, puis cliquez sur « Save ».
9. Attendez une à dix minutes et rechargez la page « Pages » : l'adresse du site s'affiche en haut,
   du type `https://votre-nom.github.io/padel-matchs/`. Cliquez dessus : l'application s'ouvre.

### Mettre à jour plus tard

1. Dans le dépôt, « Add file » puis « Upload files ».
2. Déposez les fichiers modifiés (ou à nouveau tout le contenu du dossier) : les fichiers du même
   nom sont remplacés.
3. Cliquez sur « Commit changes ». Le site est à jour après quelques minutes.
4. Lisez aussi la section suivante.


## Après une modification de l'application

Pour fonctionner sans connexion, l'application garde une copie de ses fichiers sur chaque appareil.
Pour que les appareils récupèrent la nouvelle version, il faut changer un numéro avant de publier :

1. Ouvrez `sw.js` avec le Bloc-notes (clic droit, « Ouvrir avec », « Bloc-notes »).
2. Tout en haut, repérez la ligne `const VERSION = 1;` et augmentez le chiffre : `const VERSION = 2;`
   (puis 3 la fois suivante, etc.).
3. Enregistrez, puis publiez comme expliqué plus haut.

Sur chaque appareil, la nouvelle version s'affiche à la deuxième ouverture de l'application (ou
après avoir rechargé la page une fois).


## Installer l'application

L'application s'installe depuis son adresse web, après l'avoir ouverte une première fois avec une
connexion internet.

- **Android (Chrome)** : menu **⋮** en haut à droite, puis « Installer l'application » (ou
  « Ajouter à l'écran d'accueil »).
- **iPhone ou iPad (Safari)** : bouton Partager (le carré avec une flèche), puis
  « Sur l'écran d'accueil ».
- **Ordinateur (Chrome ou Edge)** : cliquez sur l'icône d'installation à droite de la barre
  d'adresse (un petit écran avec une flèche), puis « Installer ».

L'icône du terrain de padel apparaît alors avec les autres applications. Une fois installée,
l'application s'ouvre et imprime le PDF même sans connexion.


## Bon à savoir

- **Les joueurs et les matchs restent sur l'appareil.** Ils sont enregistrés dans le navigateur
  de chaque appareil et ne sont envoyés nulle part. Un autre entraîneur qui ouvre la même adresse
  part d'une liste vide. Effacer les données du navigateur efface aussi la liste des joueurs.
- **Sur iPhone**, l'application installée sur l'écran d'accueil a sa propre mémoire : elle ne voit
  pas les joueurs saisis auparavant dans Safari.
- **Sans connexion**, les polices de caractères de l'application sont remplacées par celles de
  l'appareil. Tout le reste fonctionne normalement.
- **En double-cliquant sur `index.html`** sur votre ordinateur, l'application s'ouvre aussi et le
  PDF fonctionne, mais l'installation et le fonctionnement sans connexion ne sont disponibles que
  depuis l'adresse web publiée.


## Notes techniques

- Pour tester en local comme sur un vrai site : dans le dossier `padel`, lancer
  `python -m http.server 8000` puis ouvrir <http://localhost:8000>.
- jsPDF 2.5.1 est inclus dans `vendor/` (copie de
  `https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`, empreinte SRI
  `sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA==`).
- `sw.js` sert d'abord le cache `padel-matchs-v<VERSION>` (tous les fichiers listés dans `ASSETS`),
  puis le réseau ; les polices Google passent toujours par le réseau. Tout nouveau fichier dont
  la page a besoin doit être ajouté à `ASSETS`.
- Les icônes PNG sont des exports de `icons/icon.svg` (192 et 512 px) et de
  `icons/icon-maskable.svg` (512 px pour Android, 180 px pour `apple-touch-icon.png`).
- La copie publiée sur claude.ai garde jsPDF depuis cdnjs et n'utilise ni le manifest ni le
  service worker.
