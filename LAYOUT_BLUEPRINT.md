# Architecture UI & Layout Blueprint — Anicet Coding

## 1. Structure de l'Application

L'application **Anicet Coding** propose une architecture double intégrée :
1. **Une Landing Page & Vitrine d'Ingénierie** : Présentant la proposition de valeur, l'architecture technique, le comparatif avec les solutions existantes et le lien direct vers le studio.
2. **La Console Studio Interactive (Live Playground)** :
   - Un environnement de travail en écran scindé (*Split Screen*) :
     - **Colonne Gauche (Chat & Contrôles IA)** : Sélecteur de modèle (fal.ai, Claude, Gemini), prompt input, console de logs en streaming, liste des fichiers modifiés avec diff visualizer.
     - **Colonne Droite (Interactive Live Preview & Code)** : Iframe avec simulation responsive (Desktop, Tablette, Mobile), bouton « Inspecteur Click-to-Edit », et onglet d'inspection du code source généré.
     - **Hub d'Export & Déploiement** : Actions en un clic vers déploiement Vercel et téléchargement de l'APK Android.

---

## 2. Découpage des Sections

### Section 1 : Header / TopBar
- Logo sobre : `ANICET CODING` avec badge typographique monospace `OS 1.0`
- Navigation : Présentation • Architecture • Démo Interactive • Export Mobile
- Bouton action : « Ouvrir le Studio »

### Section 2 : Hero Section
- Badge : `STUDIO D'INGÉNIERIE IA PRIVÉ`
- Titre H1 : Grand titre en Inter à graisse 600, espacement resserré (`tracking-tight`)
- Sous-titre à contraste élevé
- Double CTA : Bouton noir/blanc pill + Bouton secondaire avec bordure fine
- Barre de statut live : Indicateurs « Sandbox Node/Vite : Actif », « HMR Gate : En ligne », « Cerveau fal.ai : Prêt »

### Section 3 : Interactive Studio Simulator (Le Cœur du Produit)
- Démonstrateur interactif en direct où l'utilisateur peut tester l'envoi d'un prompt, voir la détection de clic sur l'inspecteur, observer la file d'attente du HMR Gate et voir l'interface se régénérer sans crash.

### Section 4 : Bento Grid Architecturale (4 Blocs Asymétriques)
- Carte 1 (Grand format, 2 colonnes) : Diagramme du HMR Gate WebSocket
- Carte 2 (1 colonne) : Inspecteur Click-to-Edit avec capture de balise JSX
- Carte 3 (1 colonne) : Moteur multi-modèles (fal.ai API integration)
- Carte 4 (2 colonnes) : Double export Vercel + Package Android APK

### Section 5 : FAQ Technique
- Accordéons sobres à bordures discrètes

### Section 6 : Footer & Export
- Coordonnées techniques, versioning git, lien GitHub repository.
