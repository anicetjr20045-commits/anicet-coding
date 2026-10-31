'use client';

import React, { useState } from 'react';
import { Terminal, Code2, Smartphone, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050608]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#0C0E14] border border-white/[0.12] flex items-center justify-center">
            <Terminal className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-wider uppercase text-white">Anicet Coding</span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-neutral-400">
              v1.0
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
          <a href="#studio" className="hover:text-white transition-colors">Studio Interactif</a>
          <a href="#features" className="hover:text-white transition-colors">Architecture & Piliers</a>
          <a href="#method" className="hover:text-white transition-colors">Méthodologie</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#studio"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors tracking-wide"
          >
            Lancer le Studio
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0C0E14] px-4 py-4 space-y-3">
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white"
          >
            Studio Interactif
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white"
          >
            Architecture & Piliers
          </a>
          <a
            href="#method"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white"
          >
            Méthodologie
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white"
          >
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#studio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block px-4 py-2 rounded-full text-xs font-medium bg-white text-black"
            >
              Lancer le Studio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
