'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  Smartphone,
  Laptop,
  Tablet,
  CheckCircle2,
  AlertTriangle,
  Code2,
  ExternalLink,
  Download,
  Crosshair,
  FileCode,
  Layers,
  ArrowRight
} from 'lucide-react';

interface LogMessage {
  id: string;
  time: string;
  type: 'info' | 'stream' | 'hmr' | 'success' | 'error';
  text: string;
}

export function StudioPlayground() {
  const [model, setModel] = useState<'fal-ai' | 'claude' | 'gemini' | 'deepseek'>('fal-ai');
  const [prompt, setPrompt] = useState('Ajouter un composant de paiement Wave & Orange Money avec modal de confirmation');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hmrStatus, setHmrStatus] = useState<'idle' | 'buffering' | 'flushed'>('idle');
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [inspectorActive, setInspectorActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isSelfHealing, setIsSelfHealing] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const [logs, setLogs] = useState<LogMessage[]>([
    { id: '1', time: '02:40:12', type: 'info', text: 'Serveur de dev Vite actif sur port 8080 (Nitro Cloudflare Preset)' },
    { id: '2', time: '02:40:12', type: 'info', text: 'Plugin hmr-gate & component-tagger charges avec succes' },
    { id: '3', time: '02:40:13', type: 'success', text: 'Connexion fal.ai API etablie (Inference latency ~140ms)' }
  ]);

  const addLog = (type: LogMessage['type'], text: string) => {
    const time = new Date().toLocaleTimeString('fr-FR', { hour12: false });
    setLogs((prev) => [...prev.slice(-8), { id: Math.random().toString(), time, type, text }]);
  };

  const handleRunPrompt = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setHmrStatus('buffering');
    addLog('info', `Requete soumise a l'agent [${model.toUpperCase()}]`);
    addLog('hmr', 'HMR Gate arme : flux WebSocket mis en memoire tampon (zero ecran blanc)');

    setTimeout(() => {
      addLog('stream', 'Ecriture atomique : src/components/PaymentModal.tsx (+48 lignes)');
    }, 800);

    setTimeout(() => {
      addLog('stream', 'Verification syntaxique AST et imports TypeScript : PASS (0 warning)');
    }, 1600);

    setTimeout(() => {
      setHmrStatus('flushed');
      addLog('hmr', 'HMR Gate : libération de la file d\'attente. Rechargement a chaud effectue');
      addLog('success', 'Composant Wave & Orange Money integre et fonctionnel');
      setIsGenerating(false);
    }, 2400);
  };

  const handleInspectClick = (componentTag: string) => {
    if (!inspectorActive) return;
    setSelectedElement(componentTag);
    setPrompt(`Modifier le composant ciblé (${componentTag}) pour adapter son design`);
    addLog('info', `Inspecteur : Balise ciblee detectee -> ${componentTag}`);
  };

  const handleTriggerError = () => {
    setHasError(true);
    addLog('error', 'Erreur runtime simulee : TypeError: Cannot read properties of undefined (reading "amount") in PaymentModal.tsx:32');

    setTimeout(() => {
      setIsSelfHealing(true);
      addLog('info', 'Dev Server Bridge : capture de la pile d\'erreur et transmission au LLM...');
    }, 1000);

    setTimeout(() => {
      addLog('stream', 'Auto-Guérison : Patch applique avec garde optionnelle `amount?.toFixed(2)`');
      setHasError(false);
      setIsSelfHealing(false);
      addLog('success', 'Auto-Guérison terminee : Composant restaure sans rechargement de page');
    }, 2800);
  };

  return (
    <section id="studio" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide uppercase border border-white/[0.1] bg-white/[0.04] text-neutral-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Console Studio & Bac a Sable
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              L'Environnement de Développement en Direct
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Testez le fonctionnement réel du HMR Gate, de l'inspecteur Click-to-Edit et de la boucle d'auto-correction.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleTriggerError}
              disabled={hasError || isSelfHealing}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors flex items-center gap-1.5"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Tester Self-Healing
            </button>
            <a
              href="https://github.com/anicetjr20045-commits/anicet-coding/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.1] bg-white/[0.05] text-neutral-200 hover:bg-white/[0.1] transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Télécharger APK
            </a>
          </div>
        </div>

        {/* Main Split Window */}
        <div className="border border-white/[0.1] rounded-2xl bg-[#0C0E14] overflow-hidden shadow-2xl">
          {/* Top Window Bar */}
          <div className="px-4 py-3 border-b border-white/[0.08] bg-[#08090C] flex flex-wrap items-center justify-between gap-4 text-xs">
            {/* Window controls & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-mono text-neutral-400 text-[11px]">anicet-coding // workspace-01</span>
            </div>

            {/* Model Selector & Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-[#131620] px-2.5 py-1 rounded-md border border-white/[0.08]">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-neutral-400">Moteur :</span>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value as any)}
                  className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
                >
                  <option value="fal-ai" className="bg-[#0C0E14]">fal.ai (Inférence Ultra-Rapide)</option>
                  <option value="claude" className="bg-[#0C0E14]">Claude 3.5 Sonnet</option>
                  <option value="gemini" className="bg-[#0C0E14]">Gemini 2.0 Flash</option>
                  <option value="deepseek" className="bg-[#0C0E14]">DeepSeek V3</option>
                </select>
              </div>

              {/* HMR Gate State Indicator */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border border-white/[0.08] bg-[#131620]">
                <span className="text-neutral-400">HMR Gate :</span>
                {hmrStatus === 'buffering' ? (
                  <span className="text-amber-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Buffering
                  </span>
                ) : hmrStatus === 'flushed' ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Flushed
                  </span>
                ) : (
                  <span className="text-neutral-400">En veille</span>
                )}
              </div>
            </div>

            {/* Right Controls (View switcher) */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#131620] p-0.5 rounded-lg border border-white/[0.08]">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded ${deviceView === 'desktop' ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white'}`}
                  title="Desktop (1440px)"
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded ${deviceView === 'tablet' ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white'}`}
                  title="Tablette (768px)"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded ${deviceView === 'mobile' ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white'}`}
                  title="Mobile (375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Inspector Button */}
              <button
                onClick={() => setInspectorActive(!inspectorActive)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors flex items-center gap-1.5 ${
                  inspectorActive
                    ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                    : 'bg-[#131620] border-white/[0.08] text-neutral-400 hover:text-white'
                }`}
              >
                <Crosshair className="w-3 h-3" />
                {inspectorActive ? 'Inspecteur Actif' : 'Inspecter'}
              </button>
            </div>
          </div>

          {/* Window Body: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Left Column: Prompt & Console (5 cols) */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/[0.08] p-4 sm:p-5 flex flex-col justify-between bg-[#0A0C12]">
              <div className="space-y-4">
                {/* Prompt Card */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2 flex items-center justify-between">
                    <span>Instruction pour l'Agent IA</span>
                    {selectedElement && (
                      <span className="text-[10px] text-blue-400 font-mono truncate max-w-[200px]">
                        Cible : {selectedElement}
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={3}
                      className="w-full bg-[#06070A] border border-white/[0.1] rounded-xl p-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 resize-none font-mono"
                      placeholder="Décrivez votre modification ou votre composant..."
                    />
                    <button
                      onClick={handleRunPrompt}
                      disabled={isGenerating}
                      className="absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors flex items-center gap-1 disabled:opacity-50"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      {isGenerating ? 'Génération...' : 'Exécuter'}
                    </button>
                  </div>
                </div>

                {/* Quick Presets */}
                <div>
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-2 font-mono">
                    Suggestions Rapides
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setPrompt('Ajouter un bouton flottant WhatsApp avec redirection pré-remplie')}
                      className="px-2.5 py-1 rounded-md text-[11px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-neutral-300"
                    >
                      Bouton WhatsApp Flottant
                    </button>
                    <button
                      onClick={() => setPrompt('Structurer une grille Bento 3 cartes avec métriques chiffrées')}
                      className="px-2.5 py-1 rounded-md text-[11px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-neutral-300"
                    >
                      Grille Bento 3 Cartes
                    </button>
                    <button
                      onClick={() => setPrompt('Intégrer les tarifs locaux (FCFA / Wave / Orange Money)')}
                      className="px-2.5 py-1 rounded-md text-[11px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-neutral-300"
                    >
                      Tarification FCFA / Wave
                    </button>
                  </div>
                </div>

                {/* Live Console Output */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <Terminal className="w-3 h-3" />
                      Journal d'Événements & WebSocket
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">port: 8080</span>
                  </div>
                  <div className="bg-[#050608] border border-white/[0.08] rounded-xl p-3 font-mono text-[11px] space-y-1.5 max-h-[180px] overflow-y-auto">
                    {logs.map((log) => (
                      <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-neutral-500 shrink-0 text-[10px]">{log.time}</span>
                        <span
                          className={`
                            ${log.type === 'error' ? 'text-red-400' : ''}
                            ${log.type === 'success' ? 'text-emerald-400' : ''}
                            ${log.type === 'hmr' ? 'text-amber-300' : ''}
                            ${log.type === 'stream' ? 'text-blue-300' : ''}
                            ${log.type === 'info' ? 'text-neutral-400' : ''}
                          `}
                        >
                          {log.text}
                        </span>
                      </div>
                    ))}
                    {isGenerating && (
                      <div className="flex items-center gap-2 text-neutral-400 text-[10px] animate-pulse">
                        <span>Streaming en cours...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Sandbox Health */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Dev Server Bridge Connecte
                </span>
                <span className="font-mono text-neutral-500">Node v26.8 • Vite 6.0</span>
              </div>
            </div>

            {/* Right Column: Live Interactive Preview (7 cols) */}
            <div className="lg:col-span-7 bg-[#050608] flex flex-col justify-between relative overflow-hidden">
              {/* Preview Nav Tabs */}
              <div className="px-4 py-2 border-b border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`font-medium pb-1 border-b-2 transition-colors ${
                      activeTab === 'preview'
                        ? 'border-white text-white'
                        : 'border-transparent text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    Prévisualisation Directe
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`font-medium pb-1 border-b-2 transition-colors ${
                      activeTab === 'code'
                        ? 'border-white text-white'
                        : 'border-transparent text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    Code Source Généré
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
                  <span>URL: http://localhost:8080</span>
                </div>
              </div>

              {/* Preview Body Simulator */}
              <div className="p-6 flex-1 flex items-center justify-center bg-[#07090D] overflow-hidden">
                {activeTab === 'preview' ? (
                  <div
                    className={`w-full transition-all duration-300 mx-auto ${
                      deviceView === 'mobile'
                        ? 'max-w-[340px] border-x border-y border-white/[0.12] rounded-3xl p-4 shadow-xl bg-[#0C0E14]'
                        : deviceView === 'tablet'
                        ? 'max-w-[620px] border border-white/[0.1] rounded-2xl p-6 bg-[#0C0E14]'
                        : 'w-full max-w-full'
                    }`}
                  >
                    {/* Simulated App Inside Iframe */}
                    <div className="space-y-4">
                      {/* Top App Bar inside preview */}
                      <div
                        onClick={() => handleInspectClick('src/components/Header.tsx:14')}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          inspectorActive
                            ? 'border-dashed border-blue-400 bg-blue-500/5 hover:bg-blue-500/10'
                            : 'border-white/[0.06] bg-[#0E1017]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white tracking-wide">Client Demo Store</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Panier : 2 articles</span>
                        </div>
                      </div>

                      {/* Error state presentation */}
                      {hasError ? (
                        <div className="p-4 rounded-xl border border-red-500/30 bg-red-950/20 text-red-300 text-xs space-y-2 animate-pulse">
                          <div className="font-semibold flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            Erreur d'Exécution Runtime Détectée
                          </div>
                          <p className="font-mono text-[11px] text-red-400">
                            TypeError: Cannot read properties of undefined in PaymentModal.tsx:32
                          </p>
                          <div className="text-[10px] text-neutral-400 pt-1">
                            {isSelfHealing ? 'Auto-Guérison active : envoi du patch correctif...' : 'En attente du Dev Server Bridge...'}
                          </div>
                        </div>
                      ) : (
                        /* Simulated Payment Card */
                        <div
                          onClick={() => handleInspectClick('src/components/PaymentModal.tsx:28')}
                          className={`p-5 rounded-xl border transition-all cursor-pointer ${
                            inspectorActive
                              ? 'border-dashed border-blue-400 bg-blue-500/5 hover:bg-blue-500/10'
                              : 'border-white/[0.08] bg-[#0E1017]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-neutral-200">Total à Régler</span>
                            <span className="text-sm font-semibold font-mono text-white">15 000 FCFA</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <button className="py-2 px-3 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 font-medium text-center">
                              Wave Money
                            </button>
                            <button className="py-2 px-3 rounded-lg bg-orange-600/20 border border-orange-500/40 text-orange-300 font-medium text-center">
                              Orange Money
                            </button>
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
                            <span>Validation instantanée</span>
                            <span className="text-emerald-400 font-medium">Sécurisé SSL</span>
                          </div>
                        </div>
                      )}

                      {/* Secondary element */}
                      <div
                        onClick={() => handleInspectClick('src/components/Footer.tsx:8')}
                        className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                          inspectorActive
                            ? 'border-dashed border-blue-400 bg-blue-500/5 hover:bg-blue-500/10'
                            : 'border-white/[0.04] bg-[#0A0C10]'
                        }`}
                      >
                        <span className="text-[11px] text-neutral-500">
                          Support client direct WhatsApp : +226 56 24 05 33
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Code View Tab */
                  <div className="w-full h-full bg-[#050608] p-4 rounded-xl border border-white/[0.08] font-mono text-xs text-neutral-300 overflow-x-auto">
                    <div className="text-[11px] text-neutral-500 mb-2">// src/components/PaymentModal.tsx</div>
                    <pre className="text-neutral-400 leading-relaxed">
{`export function PaymentModal({ amount }: { amount: number }) {
  // data-source="src/components/PaymentModal.tsx:2"
  return (
    <div className="p-5 rounded-xl bg-[#0E1017] border border-white/[0.08]">
      <div className="flex justify-between items-center mb-3">
        <span className="text-neutral-300">Total a Regler</span>
        <span className="text-white font-semibold font-mono">
          {amount?.toLocaleString('fr-FR')} FCFA
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 px-3 rounded bg-blue-600/20 text-blue-300">
          Wave Money
        </button>
        <button className="py-2 px-3 rounded bg-orange-600/20 text-orange-300">
          Orange Money
        </button>
      </div>
    </div>
  );
}`}
                    </pre>
                  </div>
                )}
              </div>

              {/* Bottom Preview Status */}
              <div className="px-4 py-2.5 border-t border-white/[0.06] bg-[#08090C] flex flex-wrap items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px]">Rendu : 60 FPS</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400 text-[11px]">Click-to-Edit : {inspectorActive ? 'Actif' : 'Désactivé'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-neutral-500">Cible Android : Capacitor 6.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
