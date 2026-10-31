# Spécification Éditoriale & Narrative — Anicet Coding

## 1. Identité & Positionnement
- **Nom du Produit** : Anicet Coding
- **Baseline** : Le Studio de Développement IA Autonome Haute Fidélité
- **Proposition de Valeur Unique** : Concevez, prévisualisez en direct et exportez des applications web et mobiles complètes sans crash, propulsé par vos modèles IA préférés.

---

## 2. Hero Section
- **Badge / Surtitre** : Studio Privé d'Ingénierie IA • Web & Mobile Android
- **H1 (Accroche Principale)** : Transformez chaque idée en application de production sans friction.
- **Sous-titre** : L'environnement de développement autonome qui combine génération de code par IA, bac à sable sans écran blanc et compilation Android APK en un clic.
- **CTA Principal** : Lancer un Nouveau Projet
- **CTA Secondaire** : Explorer l'Architecture
- **Preuve & Confiance** : Zéro écran blanc grâce au HMR Gate • Support multi-modèles (fal.ai, Claude, Gemini) • Auto-guérison des erreurs en temps réel.

---

## 3. Le Diagnostic de la Friction (Framework PAS)
- **Problème** : Les générateurs de code actuels s'arrêtent dès la première erreur de syntaxe, imposent des écrans blancs pendant le streaming et vous enferment dans des abonnements rigides sans accès au runtime réel.
- **Agitation** : Passer des heures à recopier manuellement des erreurs de console, devoir reloader sans cesse la page et être incapable de générer un vrai livrable mobile pour vos clients d'Afrique de l'Ouest ou d'ailleurs détruit votre productivité.
- **Solution (Anicet Coding)** : Une architecture à triple verrou : mise en mémoire tampon des rechargements (HMR Gate), remontée instantanée des erreurs vers le LLM (Self-Healing) et packaging automatique en application Android APK téléchargeable.

---

## 4. Grille Bento des 4 Piliers Fonctionnels

### Bloc 1 (Vedette) : Runtime HMR Gate & Prévisualisation Instantanée
- **Titre** : Zéro Crash pendant la Génération
- **Description** : Les flux de code générés par l'IA sont isolés. Le serveur de développement ne rafraîchit la prévisualisation que lorsque les composants sont syntaxiquement validés.
- **Métrique clé** : 100% de stabilité visuelle en streaming.

### Bloc 2 : Inspecteur Visuel « Click-to-Edit »
- **Titre** : Cliquez sur un pixel, modifiez le code
- **Description** : Pointez n'importe quel bouton, carte ou texte dans l'iframe. L'inspecteur extrait le fichier et la ligne exacte pour guider le prompt sans ambiguïté.
- **Métrique clé** : Ciblage au composant près (`data-source`).

### Bloc 3 : Cerveau Multi-Modèles & fal.ai
- **Titre** : Liberté Totale de vos Clés API
- **Description** : Connectez vos modèles de choix via votre clé fal.ai, Claude 3.5 Sonnet, Gemini Flash ou modèles open-source sans surcoût plateforme.
- **Métrique clé** : Latence réduite et exécution de code atomique.

### Bloc 4 : Export Double Cible (Web Vercel + APK Android)
- **Titre** : Du Prompt au Smartphone en 1 Clic
- **Description** : Déployez votre site sur Vercel avec nom de domaine instantané et téléchargez directement le package APK Android compilé pour vos clients.
- **Métrique clé** : Prêt pour le web mondial et les mobiles locaux.

---

## 5. Le Workflow en 3 Temps

1. **Étape 01 — Intention ou Clic** : Décrivez votre fonctionnalité en langage naturel ou cliquez sur un élément visuel à transformer.
2. **Étape 02 — Génération Atomique & Auto-Réparation** : L'agent écrit les composants, résout automatiquement les erreurs d'exécution et met à jour le bac à sable.
3. **Étape 03 — Livraison & Déploiement** : Exportez sur GitHub, déployez sur le web en HTTPS et téléchargez l'APK Android sur votre téléphone.

---

## 6. FAQ Stratégique (Traitement des Objections Techniques)
- **Comment fonctionne le système anti-crash ?** Le plugin HMR Gate intercepte les messages WebSocket de Vite et suspend les recharges tant que les fichiers ne sont pas fermés et syntaxiquement cohérents.
- **Quels modèles IA puis-je utiliser ?** Vous pouvez brancher votre clé fal.ai pour appeler les modèles d'inférence ultra-rapides, ou utiliser Claude, Gemini et GPT-4o selon vos besoins.
- **Comment installer l'APK sur Android ?** Un lien de téléchargement direct (.apk) est généré. Le client clique, accepte l'installation et l'application s'installe directement sur son écran d'accueil avec son icône.

---

## 7. CTA Final
- **Titre** : Prêt à bâtir votre prochaine application ?
- **Action** : Ouvrir la Console Studio
