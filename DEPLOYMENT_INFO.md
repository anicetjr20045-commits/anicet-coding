# Fiche de Livraison & Déploiement — Anicet Coding

**Date de livraison** : 31 Octobre 2026  
**Statut du Projet** : En Production (Live) & Versionné  
**Responsable** : Release & Deployment Ops (Protocole Atelier)

---

## 1. Accès & Liens de Production

* **URL Web en Production (Vercel)** : [https://anicet-coding.vercel.app](https://anicet-coding.vercel.app)
* **URL de Déploiement Direct** : [https://anicet-coding-aq2dgywf7-velaris6.vercel.app](https://anicet-coding-aq2dgywf7-velaris6.vercel.app)
* **Dépôt GitHub Officiel** : [https://github.com/anicetjr20045-commits/anicet-coding](https://github.com/anicetjr20045-commits/anicet-coding)

---

## 2. Packaging Mobile Android (APK Téléchargeable)

Le projet intègre nativement **Capacitor 6.2** et le workflow de compilation Gradle :
* **ID Application Android** : `com.atelier.anicetcoding`
* **Configuration Mobile** : `capacitor.config.ts` (Schéma HTTPS, Splashscreen sombre `#050608`)
* **Dossier d'export statique** : `out/` (compatible WebView Android)
* **Génération de l'APK en local** :
  ```bash
  # 1. Générer l'export statique
  BUILD_TARGET=mobile npm run build
  
  # 2. Synchroniser Capacitor
  npx cap sync android
  
  # 3. Compiler le package APK
  cd android && ./gradlew assembleDebug
  ```
* **Emplacement de l'APK généré** :
  `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 3. Architecture Technique Validée

* **Framework** : Next.js 15.5 App Router (React 19, TypeScript strict)
* **Design & Tokens** : Dark Luxury & Tech Précision (`#050608`, bordures discrètes `rgba(255,255,255,0.08)`)
* **Icônes & Visuels** : `lucide-react` exclusivement (Zéro émoji)
* **Moteur Anti-Crash** : Simulation interactive HMR Gate (tampon WebSocket)
* **Inspection Visuelle** : Mode Click-to-Edit avec capture de balises JSX
* **Auto-Guérison** : Dev Server Bridge avec capture des erreurs runtime et auto-patch

---

## 4. Instructions pour Domaine Personnalisé

Pour relier un nom de domaine personnalisé (ex: `studio.anicetcoding.com` ou `anicetcoding.com`) :
1. Dans Vercel : aller dans **Settings > Domains**.
2. Ajouter le nom de domaine.
3. Configurer l'enregistrement DNS :
   * Type `A` : `76.76.21.21`
   * Type `CNAME` (pour sous-domaine) : `cname.vercel-dns.com`
