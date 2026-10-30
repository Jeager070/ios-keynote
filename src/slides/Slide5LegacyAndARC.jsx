import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Calendar, 
  Code2, 
  Palette, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { soundManager } from '../components/SoundEffects';

export default function Slide5LegacyAndARC() {
  const [scopeMode, setScopeMode] = useState('mvp'); // 'mvp' | 'enterprise'

  const roles = [
    {
      title: 'iOS Lead Engineer',
      skills: 'Swift 6, SwiftUI, SwiftData, Instruments Memory Profiling',
      icon: Code2,
      badge: 'Core iOS'
    },
    {
      title: 'Apple UI/UX Designer',
      skills: 'Human Interface Guidelines (HIG), SF Symbols, Prototyping',
      icon: Palette,
      badge: 'Design & a11y'
    },
    {
      title: 'Backend & Cloud Architekt',
      skills: 'Sichere REST/GraphQL APIs, Verschlüsselung, Datenbanken',
      icon: Server,
      badge: 'API & Cloud'
    },
    {
      title: 'QA & Security Specialist',
      skills: 'XCTest, TestFlight Beta, Penetration- & DSGVO-Audits',
      icon: ShieldCheck,
      badge: 'Qualität & DSGVO'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden py-2 select-none">
      
      {/* Slide Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#0071e3] mb-1">
            Folie 05 / 07 • Aufwand & Ressourcen
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
            Entwicklungsaufwand & <span className="text-[#0071e3]">Team-Setup.</span>
          </h1>
          <p className="text-sm md:text-base text-[#86868b] mt-0.5">
            Dauer, Projektphasen und benötigte Fachkompetenzen für eine marktreife iOS-Anwendung.
          </p>
        </div>

        {/* Scope Toggle in Morpheus Glass */}
        <div className="morpheus-card-sm p-1 flex items-center gap-1 shadow-xs">
          <button
            onClick={() => {
              setScopeMode('mvp');
              soundManager.playSwitch();
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              scopeMode === 'mvp' 
                ? 'bg-[#0071e3] text-white shadow-xs' 
                : 'text-[#515154] hover:text-black'
            }`}
          >
            MVP (3–5 Monate)
          </button>
          <button
            onClick={() => {
              setScopeMode('enterprise');
              soundManager.playSwitch();
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              scopeMode === 'enterprise' 
                ? 'bg-[#0071e3] text-white shadow-xs' 
                : 'text-[#515154] hover:text-black'
            }`}
          >
            Full Enterprise (6–9 Monate)
          </button>
        </div>
      </div>

      {/* Main Grid: Timeline + Team Roles in Morpheus Glass 3D */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: Timeline & Milestones (6 Cols) */}
        <div className="lg:col-span-6 morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868b] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0071e3]" /> Projektphasen & Dauer
              </span>
              <span className="text-xs font-mono font-bold text-[#0071e3] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                {scopeMode === 'mvp' ? 'Gesamtdauer: ~16–20 Wochen' : 'Gesamtdauer: ~26–36 Wochen'}
              </span>
            </div>

            {/* 3 Step Timeline */}
            <div className="space-y-3">
              
              <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0071e3] font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1d1d1f]">Konzeption, Architektur & HIG Prototyping</span>
                    <span className="text-[11px] font-mono font-bold text-[#0071e3]">
                      {scopeMode === 'mvp' ? '3–4 Wochen' : '5–6 Wochen'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#515154] mt-0.5">
                    User Journeys, Datenmodell (SwiftData), Figma-Design im Apple HIG Standard & API-Spezifikation.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0071e3] font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1d1d1f]">Native SwiftUI & Backend-Entwicklung</span>
                    <span className="text-[11px] font-mono font-bold text-[#0071e3]">
                      {scopeMode === 'mvp' ? '8–12 Wochen' : '14–20 Wochen'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#515154] mt-0.5">
                    Core App-Logik, Cloud-Synchronisation, lokale Verschlüsselung & nahtlose Offline-Fähigkeit.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0071e3] font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1d1d1f]">Testing, Security-Audit & App Store Einreichung</span>
                    <span className="text-[11px] font-mono font-bold text-[#0071e3]">
                      {scopeMode === 'mvp' ? '3–4 Wochen' : '5–6 Wochen'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#515154] mt-0.5">
                    TestFlight Beta-Phase, Pen-Testing, Performance-Profiling (Instruments) & Apple Human Review.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-3 border-t border-black/5 text-xs text-[#515154] flex items-center justify-between">
            <span>Iterativer Release-Ansatz (Agile Sprints)</span>
            <span className="text-[#0071e3] font-bold font-mono">TestFlight ab Sprint 3</span>
          </div>
        </div>

        {/* Right Side: Key Team Competencies (6 Cols) */}
        <div className="lg:col-span-6 morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868b] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#0071e3]" /> Das 4-Köpfe-Kernteam
              </span>
              <span className="text-xs font-mono font-bold text-[#515154]">
                Schlüsselrollen
              </span>
            </div>

            {/* 4 Role Cards in Clean Grid */}
            <div className="grid grid-cols-2 gap-3">
              {roles.map(r => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="p-3 rounded-2xl bg-white/70 border border-white shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0071e3] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0071e3] border border-blue-100 font-mono">
                          {r.badge}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#1d1d1f]">{r.title}</div>
                      <p className="text-[10px] text-[#515154] mt-1 leading-snug">{r.skills}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-black/5 text-xs text-[#515154] flex items-center justify-between">
            <span>Zusammenarbeit: Swift 6 Concurrency & Git</span>
            <span className="font-bold text-[#0071e3]">Apple Developer Ecosystem Ready</span>
          </div>
        </div>

      </div>

      {/* Bottom Keynote Takeaway */}
      <div className="morpheus-card-sm py-2.5 px-4 flex items-center justify-between text-xs text-[#515154]">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0" />
          <span><strong className="text-[#1d1d1f]">Erfolgsfaktor:</strong> Durch SwiftUI und moderne Apple-Frameworks spart ein 4-köpfiges Team bis zu 40% Entwicklungszeit gegenüber Legacy-Stacks.</span>
        </span>
        <span className="text-[#0071e3] font-bold hidden sm:block">Timeline: 4–6 Monate MVP</span>
      </div>

    </div>
  );
}
