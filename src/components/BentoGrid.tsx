import React from 'react';
import { Layers, Crosshair, Sparkles, Smartphone, Check, ArrowRight } from 'lucide-react';

export function BentoGrid() {
  return (
    <section id="features" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide uppercase border border-white/[0.1] bg-white/[0.04] text-neutral-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Ingénierie & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            Les 4 Piliers Inviolables du Moteur Anicet Coding
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Conçu pour éliminer définitivement les écrans blancs, les déconnexions et les formats propriétaires fermés.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: HMR Gate (Feature Lead, 7 cols) */}
          <div className="md:col-span-7 bg-[#0C0E14] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-7 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Pilier 01 • Stabilité</span>
              <h3 className="text-xl font-semibold text-white mt-1">
                Le HMR Gate : Zéro Écran Blanc pendant le Streaming
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Interception des flux WebSocket de Vite. Lorsque l'IA génère ou refactorise du code sur plusieurs fichiers,
                les requêtes de rechargement sont mises en mémoire tampon et ne sont injectées dans le navigateur qu'une fois
                le lot de fichiers validé syntaxiquement.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Tampon de mise en file d'attente</span>
              <span className="text-white font-medium">100% zéro crash</span>
            </div>
          </div>

          {/* Card 2: Click-to-Edit Inspector (5 cols) */}
          <div className="md:col-span-5 bg-[#0C0E14] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-7 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center mb-6">
                <Crosshair className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Pilier 02 • Précision</span>
              <h3 className="text-xl font-semibold text-white mt-1">
                Inspecteur « Click-to-Edit »
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Transformation Babel/AST injectant l'attribut <code className="text-xs text-neutral-300 bg-white/[0.06] px-1 py-0.5 rounded">data-source</code> sur chaque balise JSX. Un clic sur l'écran remonte directement le composant et la ligne exacte au LLM.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Résolution AST</span>
              <span className="text-white font-medium">Ciblage au composant</span>
            </div>
          </div>

          {/* Card 3: Multi-Model fal.ai Integration (5 cols) */}
          <div className="md:col-span-5 bg-[#0C0E14] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-7 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Pilier 03 • Souplesse</span>
              <h3 className="text-xl font-semibold text-white mt-1">
                Inférence fal.ai & Multi-Fournisseurs
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Branchez directement votre clé fal.ai pour bénéficier des modèles open-source les plus véloces,
                ou basculez sur Claude 3.5 Sonnet et Gemini Flash sans modifier une ligne de votre infrastructure.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Latence d'inférence</span>
              <span className="text-white font-medium">~140 ms</span>
            </div>
          </div>

          {/* Card 4: Double Export Web + APK Android (7 cols) */}
          <div className="md:col-span-7 bg-[#0C0E14] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-7 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center mb-6">
                <Smartphone className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400">Pilier 04 • Déploiement</span>
              <h3 className="text-xl font-semibold text-white mt-1">
                Double Cible : Web Vercel & Application Android APK
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Chaque application générée est immédiatement déployable en HTTPS sur Vercel avec nom de domaine dédié,
                et compilable via Capacitor en un package Android natif (.apk) téléchargeable directement sur smartphone.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Canal de distribution</span>
              <span className="text-white font-medium">Web mondial & APK local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
