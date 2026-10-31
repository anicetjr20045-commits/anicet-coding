import React from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, Smartphone, Check } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 border-b border-white/[0.08] overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[800px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full mt-10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase border border-white/[0.1] bg-white/[0.04] text-neutral-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Studio Privé d'Ingénierie IA • Web & Mobile Android
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
          Transformez chaque idée en application de production sans friction.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          L'environnement de développement autonome combinant génération atomique de code,
          bac à sable Vite sans écran blanc et compilation Android APK en un clic.
        </p>

        {/* CTA Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#studio"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 tracking-wide"
          >
            Lancer un Nouveau Projet
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.1] transition-colors flex items-center justify-center gap-2 tracking-wide"
          >
            Explorer l'Architecture
          </a>
        </div>

        {/* Feature Pills */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>HMR Gate Anti-Crash</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inférence fal.ai / Claude / Gemini</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inspecteur Click-to-Edit</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Export Web Vercel + APK Android</span>
          </div>
        </div>
      </div>
    </section>
  );
}
