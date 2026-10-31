import React from 'react';
import { Terminal, Github, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-[#050608] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0C0E14] border border-white/[0.1] flex items-center justify-center">
            <Terminal className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>
          <span className="font-semibold text-sm tracking-wider uppercase text-white">Anicet Coding</span>
          <span className="text-xs text-neutral-500">• Studio d'Ingénierie IA Privé</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-neutral-400">
          <a
            href="https://github.com/anicetjr20045-commits/anicet-coding"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Dépôt GitHub</span>
          </a>
          <a
            href="https://wa.me/22656240533?text=Bonjour%20Anicet%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20Anicet%20Coding"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Assistance WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="text-xs text-neutral-500 font-mono">
          © {new Date().getFullYear()} Anicet Coding. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
