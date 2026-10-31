'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Comment le système HMR Gate empêche-t-il les écrans blancs ?',
      a: 'Lorsqu\'un LLM génère du code, Vite déclenche normalement des recharges à chaud dès les premières lignes modifiées, ce qui provoque une erreur de syntaxe car le composant JSX n\'est pas encore fermé. Le plugin HMR Gate intercepte les messages WebSocket de Vite et les met en mémoire tampon. Dès que l\'agent termine l\'écriture complète et valide le fichier, les messages sont libérés en bloc. Votre application ne crashe jamais.',
    },
    {
      q: 'Comment brancher ma clé d\'API fal.ai ?',
      a: 'Dans la console du studio, vous pouvez renseigner votre clé FAL_KEY directement dans la configuration d\'environnement ou via le sélecteur d\'API. Le moteur se connecte aux modèles d\'inférence ultra-rapides de fal.ai tout en supportant également Claude 3.5 Sonnet ou Gemini Flash.',
    },
    {
      q: 'Comment fonctionne l\'installation de l\'application Android APK ?',
      a: 'Le workflow GitHub Actions compile automatiquement un package .apk universel via Capacitor et Gradle lors de chaque mise en release. Le client reçoit un lien direct de téléchargement, valide l\'installation sur son téléphone Android et retrouve l\'application sur son écran d\'accueil avec son icône dédiée.',
    },
    {
      q: 'Comment l\'auto-guérison (Self-Healing) résout-elle les bugs ?',
      a: 'Le Dev Server Bridge écoute les erreurs runtime (window.onerror et rejets de promesses). Dès qu\'une anomalie survient, la pile d\'appels exacte est transmise à l\'agent IA qui applique un patch correctif en arrière-plan sans nécessiter d\'intervention manuelle.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#050608]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide uppercase border border-white/[0.1] bg-white/[0.04] text-neutral-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Questions Fréquentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            Détails Techniques & Fonctionnement
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0C0E14] border border-white/[0.08] hover:border-white/[0.14] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-medium text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-400 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
