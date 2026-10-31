import React from 'react';
import { ArrowRight, Terminal, Cpu, CheckCircle } from 'lucide-react';

export function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Intention ou Clic Visuel',
      desc: 'Formulez votre demande en langage clair ou cliquez sur un élément dans l\'inspecteur pour désigner le composant exact à modifier.',
    },
    {
      num: '02',
      title: 'Génération Atomique & HMR Gate',
      desc: 'L\'orchestrateur génère le code, résout les dépendances, et le tampon HMR retient les recharges jusqu\'à la validation complète.',
    },
    {
      num: '03',
      title: 'Déploiement Web & Packaging APK',
      desc: 'Un clic déclenche la mise en production sur Vercel et génère le fichier .apk Android téléchargeable et prêt à l\'installation.',
    },
  ];

  return (
    <section id="method" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide uppercase border border-white/[0.1] bg-white/[0.04] text-neutral-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Méthodologie
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            Le Workflow de Développement en 3 Temps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Une boucle de création continue, du premier prompt jusqu'au smartphone du client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#0C0E14] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-7 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-white/[0.2] block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center text-xs text-neutral-500 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mr-2" />
                <span>Processus Déterministe</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
