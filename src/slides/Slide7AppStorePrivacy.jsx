import React, { useState } from 'react';
import { 
  RefreshCw, 
  Activity, 
  GitBranch, 
  Sparkles, 
  SlidersHorizontal, 
  CheckCircle2, 
  Check, 
  Sliders, 
  Send,
  Zap,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../components/SoundEffects';

export default function Slide7AppStorePrivacy() {
  const [phasedDay, setPhasedDay] = useState(3);
  const [ciStatus, setCiStatus] = useState('idle'); // 'idle' | 'testing' | 'building' | 'released'

  const phasedRollout = [
    { day: 'Tag 1', percent: '1%', desc: 'Stille Verteilung an frühe Tester' },
    { day: 'Tag 2', percent: '2%', desc: 'Crash-Monitoring & Metriken prüfen' },
    { day: 'Tag 3', percent: '5%', desc: 'Erweiterte Nutzerbasis' },
    { day: 'Tag 4', percent: '10%', desc: 'Stabilität bei hoher Last validieren' },
    { day: 'Tag 5', percent: '20%', desc: 'Großflächiger Rollout' },
    { day: 'Tag 6', percent: '50%', desc: 'Hälfte aller Kunden aktualisiert' },
    { day: 'Tag 7', percent: '100%', desc: 'Vollständiger weltweiter Release' },
  ];

  const currentPhase = phasedRollout[phasedDay];

  const triggerCiCd = () => {
    soundManager.playSwitch();
    setCiStatus('testing');

    setTimeout(() => {
      setCiStatus('building');
      soundManager.playClick();
    }, 800);

    setTimeout(() => {
      setCiStatus('released');
      soundManager.playSuccess();
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1800);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden py-2 select-none">
      
      {/* Slide Header */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#0071e3] mb-1">
          Folie 07 / 07 • Lifecycle & Betrieb
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
          Wartung, Updates & <span className="text-[#0071e3]">kontinuierlicher Betrieb.</span>
        </h1>
        <p className="text-sm md:text-base text-[#86868b] mt-0.5">
          Wie Fehler behoben, Updates risikofrei verteilt und neue Features integriert werden.
        </p>
      </div>

      {/* Main Grid: Maintenance Pillars + CI/CD & Phased Release Cockpit */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: 3 Maintenance Strata (6 Cols) */}
        <div className="lg:col-span-6 morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868b] flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-[#0071e3]" /> Der 3-Säulen Wartungs-Zyklus
              </span>
              <span className="text-xs font-mono font-bold text-[#0071e3] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                Continuous Operations
              </span>
            </div>

            <div className="space-y-3">
              
              {/* Pillar 1 */}
              <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1d1d1f]">1. Fehlererkennung & Realtime-Monitoring</div>
                  <p className="text-[11px] text-[#515154] leading-snug mt-0.5">
                    Apple MetricKit & Crashlytics erfassen Abstürze, Hang-Rates und UI-Blockaden in Echtzeit mit vollständigen Stack-Traces.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1d1d1f]">2. Stufenweise Updates (Phased Rollout)</div>
                  <p className="text-[11px] text-[#515154] leading-snug mt-0.5">
                    Neue Versionen werden schrittweise über 7 Tage ausgerollt. Bei Fehlern kann der Rollout mit einem Klick pausiert werden.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1d1d1f]">3. Feature-Updates & Jährliche iOS Upgrades</div>
                  <p className="text-[11px] text-[#515154] leading-snug mt-0.5">
                    Vorab-Validierung via TestFlight (bis 10.000 Tester). Frühzeitige Kompatibilität mit neuen iOS-Versionen (WWDC Betas).
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-3 border-t border-black/5 text-xs text-[#515154] flex items-center justify-between">
            <span>SLA & Support-Level</span>
            <span className="text-[#0071e3] font-bold font-mono">Zero Downtime Releases</span>
          </div>
        </div>

        {/* Right Side: Interactive Phased Rollout & CI/CD Simulator (6 Cols) */}
        <div className="lg:col-span-6 morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868b] flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-[#0071e3]" /> Phased Release Simulator (Apple Standard)
              </span>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                {currentPhase.day}: {currentPhase.percent} der Nutzer
              </span>
            </div>

            {/* Phased Rollout Slider */}
            <div className="p-3.5 rounded-2xl bg-white/70 border border-white shadow-xs space-y-2 mb-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1d1d1f]">Stufenweiser Rollout im App Store:</span>
                <span className="font-mono text-[#0071e3] font-bold">{currentPhase.percent}</span>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                value={phasedDay}
                onChange={(e) => {
                  setPhasedDay(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#0071e3] cursor-pointer h-2 bg-neutral-200 rounded-lg"
              />
              <div className="text-[11px] text-[#515154] flex items-center justify-between">
                <span>{currentPhase.desc}</span>
                <span className="font-bold text-[#1d1d1f]">{currentPhase.day}</span>
              </div>
            </div>

            {/* Automated Hotfix & CI/CD Pipeline Simulator */}
            <div className="p-3.5 rounded-2xl bg-white/70 border border-white shadow-xs space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1d1d1f]">Automatisierte CI/CD Pipeline (Xcode Cloud)</span>
                <span className="text-[10px] font-mono text-[#86868b]">Fastlane & Git</span>
              </div>

              {/* Steps Visual */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono font-bold">
                <div className={`p-2 rounded-xl border ${
                  ciStatus === 'testing' ? 'bg-blue-100 border-[#0071e3] text-[#0071e3]' : 'bg-neutral-50 border-neutral-200 text-[#86868b]'
                }`}>
                  1. Unit & UI Tests
                </div>
                <div className={`p-2 rounded-xl border ${
                  ciStatus === 'building' ? 'bg-blue-100 border-[#0071e3] text-[#0071e3]' : 'bg-neutral-50 border-neutral-200 text-[#86868b]'
                }`}>
                  2. Cloud Kompilierung
                </div>
                <div className={`p-2 rounded-xl border ${
                  ciStatus === 'released' ? 'bg-emerald-100 border-emerald-400 text-emerald-800' : 'bg-neutral-50 border-neutral-200 text-[#86868b]'
                }`}>
                  3. TestFlight / Store
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={triggerCiCd}
                disabled={ciStatus === 'testing' || ciStatus === 'building'}
                className="w-full py-2.5 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>
                  {ciStatus === 'idle' && 'Hotfix & Update-Pipeline auslösen'}
                  {ciStatus === 'testing' && 'Automatisierte Tests laufen...'}
                  {ciStatus === 'building' && 'Xcode Cloud kompiliert .IPA...'}
                  {ciStatus === 'released' && '✓ Update erfolgreich deployed! Nochmals testen'}
                </span>
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-black/5 text-xs text-[#86868b] flex items-center justify-between">
            <span>Kritische Hotfixes: Express Review</span>
            <span className="text-[#0071e3] font-bold font-mono">Freigabe in wenigen Stunden</span>
          </div>
        </div>

      </div>

      {/* Bottom Keynote Takeaway */}
      <div className="morpheus-card-sm py-2.5 px-4 flex items-center justify-between text-xs text-[#515154]">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0" />
          <span><strong className="text-[#1d1d1f]">Wartungsphilosophie:</strong> Durch stufenweise Rollouts (Phased Release) und Xcode Cloud Automatisierung erreichen Bugfixes und Features Kunden sicher und ohne Ausfallzeiten.</span>
        </span>
        <span className="text-[#0071e3] font-bold hidden sm:block">Automatisierter CI/CD Betrieb</span>
      </div>

    </div>
  );
}
