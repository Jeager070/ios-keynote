import React from 'react';
import { X, ChevronRight, Sparkles } from 'lucide-react';
import { soundManager } from './SoundEffects';

export default function SlideOverviewModal({ 
  isOpen, 
  onClose, 
  currentSlide, 
  onSelectSlide 
}) {
  if (!isOpen) return null;

  const slidesData = [
    {
      number: 1,
      title: 'Das Apple Ökosystem',
      desc: 'iOS, iPadOS, watchOS, macOS, tvOS • 99 €/Jahr • 170k Docs • 90% in 24h Review',
      tag: 'Ökosystem',
    },
    {
      number: 2,
      title: 'Hardware & Mac-Alternativen',
      desc: 'Nativer Mac Standard • Cloud-Macs (MacInCloud) • Cross-Platform (Flutter / React Native)',
      tag: 'Hardware',
    },
    {
      number: 3,
      title: 'Xcode & RAM-Optimierung',
      desc: 'Simulator-RAM vs. Echtes iPhone • Altgeräte-Test • Instruments Profiler • Previews pausieren',
      tag: 'Performance',
    },
    {
      number: 4,
      title: 'SwiftUI vs. UIKit',
      desc: 'Deklarativ (Was) vs. Imperativ (Wie) • State Management • Codevergleich • UIHostingController',
      tag: 'UI-Code',
    },
    {
      number: 5,
      title: 'Entwicklungsaufwand & Team',
      desc: 'Dauer (MVP in 3–5 Monaten) • Phasen & Meilensteine • Benötigte Fachkompetenzen & Kernteam',
      tag: 'Aufwand',
    },
    {
      number: 6,
      title: 'Sicherheit & Datenschutz',
      desc: 'Schutz von Buchhaltungsdaten, Belegen & Konten • Secure Enclave, Face ID, AES-256 & GoBD',
      tag: 'Sicherheit',
    },
    {
      number: 7,
      title: 'Wartung, Updates & Betrieb',
      desc: 'Fehlerbehebung & Crashlytics • Stufenweise Rollouts (1% bis 100%) • CI/CD & Xcode Cloud',
      tag: 'Wartung',
    }
  ];

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      <div 
        onClick={e => e.stopPropagation()} 
        className="morpheus-glass-3d p-6 md:p-8 max-w-4xl w-full max-h-[90vh] flex flex-col justify-between shadow-2xl space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-black/5">
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0071e3]" />
              Folien-Navigator (7 Kapitel)
            </h2>
            <p className="text-xs text-[#86868b] font-medium">
              Klicke auf eine Folie, um direkt dorthin zu springen
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white/80 hover:bg-white text-[#1d1d1f] transition-colors cursor-pointer border border-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 overflow-y-auto p-1">
          {slidesData.map(s => {
            const isCurrent = currentSlide === s.number;
            return (
              <div
                key={s.number}
                onClick={() => {
                  soundManager.playClick();
                  onSelectSlide(s.number);
                  onClose();
                }}
                className={`p-4 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col justify-between h-36 ${
                  isCurrent 
                    ? 'bg-blue-50/90 border-2 border-[#0071e3] shadow-md -translate-y-0.5' 
                    : 'morpheus-card-sm hover:border-[#0071e3]/40 hover:bg-white/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#0071e3]">
                      0{s.number}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0071e3] border border-blue-100 font-mono">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-[#1d1d1f] leading-tight">
                    {s.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#86868b] pt-2 border-t border-black/5">
                  <span className="truncate pr-1">{s.desc}</span>
                  <ChevronRight className="w-4 h-4 text-[#0071e3] shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#86868b]">
          <span>Tastenkürzel: Pfeiltasten oder Ziffern 1–7 auf der Tastatur</span>
          <span className="text-[#0071e3] font-bold font-mono">macOS 27 Keynote Edition</span>
        </div>
      </div>
    </div>
  );
}
