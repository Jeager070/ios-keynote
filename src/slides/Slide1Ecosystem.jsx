import React, { useState } from 'react';
import appleLogo from '../assets/apple-logo.png';
import { 
  Smartphone, 
  Tablet, 
  Watch, 
  Laptop, 
  Tv, 
  ShieldCheck, 
  Clock, 
  FileCode2 
} from 'lucide-react';
import { soundManager } from '../components/SoundEffects';

export default function Slide1Ecosystem() {
  const [selectedDevice, setSelectedDevice] = useState(0);

  const devices = [
    {
      name: 'iPhone 16 Pro',
      os: 'iOS',
      chip: 'A18 Pro',
      highlight: 'Dynamic Island, ProMotion & SwiftUI',
      icon: Smartphone,
      gradient: 'from-blue-600 to-sky-500',
    },
    {
      name: 'iPad Pro',
      os: 'iPadOS',
      chip: 'Apple M4',
      highlight: 'Pencil Pro Gesten & Stage Manager',
      icon: Tablet,
      gradient: 'from-blue-700 to-blue-500',
    },
    {
      name: 'MacBook Pro',
      os: 'macOS',
      chip: 'M3 Max',
      highlight: 'Xcode IDE, Metal 3 & Instruments',
      icon: Laptop,
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      name: 'Apple Watch Ultra',
      os: 'watchOS',
      chip: 'S9 SiP',
      highlight: 'Smart Stack, Always-On & HealthKit',
      icon: Watch,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      name: 'Apple TV 4K',
      os: 'tvOS',
      chip: 'A15 Bionic',
      highlight: 'Siri Focus Engine & Living Room 3D',
      icon: Tv,
      gradient: 'from-indigo-600 to-blue-500',
    }
  ];

  const currentDev = devices[selectedDevice];

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden py-2 select-none">
      
      {/* Slide Header */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#0071e3] mb-1">
          Folie 01 / 07 • Das Apple Ökosystem
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
          Ein Fundament. <span className="text-[#0071e3]">5 Plattformen.</span>
        </h1>
        <p className="text-sm md:text-base text-[#86868b] mt-0.5">
          Mit einer einzigen Programmiersprache (Swift) über 2 Milliarden aktive Apple-Geräte erreichen.
        </p>
      </div>

      {/* Main Hardware Gallery (Row of 5 Morpheus Glass 3D Cards in Pure Apple Blue) */}
      <div className="my-auto space-y-4">
        
        {/* 5 Hardware Cards */}
        <div className="grid grid-cols-5 gap-3 md:gap-4">
          {devices.map((dev, idx) => {
            const Icon = dev.icon;
            const isSel = selectedDevice === idx;
            return (
              <div
                key={dev.os}
                onClick={() => {
                  setSelectedDevice(idx);
                  soundManager.playClick();
                }}
                className={`morpheus-glass-3d p-4 flex flex-col items-center justify-between cursor-pointer transition-all duration-300 ${
                  isSel 
                    ? 'border-2 border-[#0071e3] shadow-md -translate-y-1 bg-white/80' 
                    : 'hover:border-[#0071e3]/40 hover:bg-white/70'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-2 shadow-xs transition-transform ${
                  isSel ? `bg-gradient-to-br ${dev.gradient} scale-105 shadow-sm` : 'bg-neutral-200 text-neutral-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-[#1d1d1f]">{dev.os}</div>
                <div className="text-[11px] text-[#86868b] truncate max-w-full text-center">{dev.name}</div>
                <div className="mt-2 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0071e3] border border-blue-100">
                  {dev.chip}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Device Feature Pill in 3D Glass */}
        <div className="morpheus-card-sm p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-gradient-to-br ${currentDev.gradient} text-white shadow-xs`}>
              <currentDev.icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1d1d1f] mr-2">{currentDev.name}</span>
              <span className="text-xs text-[#515154]">{currentDev.highlight}</span>
            </div>
          </div>
          <div className="text-xs font-bold text-[#0071e3] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            SwiftUI & Swift 6
          </div>
        </div>

      </div>

      {/* Bottom 3 Apple Keynote Numbers in Pure Apple Blue */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="morpheus-card-sm p-4 flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-white/90 border border-neutral-200 flex items-center justify-center shrink-0 shadow-xs p-2">
            <img src={appleLogo} alt="Apple" className="h-6 w-auto object-contain" />
          </div>
          <div>
            <div className="text-[11px] uppercase font-bold text-[#86868b]">Developer Program</div>
            <div className="text-lg font-black text-[#1d1d1f]">99 € <span className="text-xs font-normal text-[#86868b]">/ Jahr</span></div>
            <div className="text-[11px] text-[#515154]">Gratis: 7 Tage Testen • 99 €: Weltweiter App Store</div>
          </div>
        </div>

        <div className="morpheus-card-sm p-4 flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-[#0071e3] text-white flex items-center justify-center shrink-0 shadow-xs">
            <FileCode2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] uppercase font-bold text-[#86868b]">Offizielle Ressourcen</div>
            <div className="text-lg font-black text-[#1d1d1f]">170.000+</div>
            <div className="text-[11px] text-[#515154]">Technische Dokumente, Sample Codes & APIs</div>
          </div>
        </div>

        <div className="morpheus-card-sm p-4 flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] uppercase font-bold text-[#86868b]">App Store Prüfung</div>
            <div className="text-lg font-black text-[#0071e3]">&gt; 90% in 24 Std.</div>
            <div className="text-[11px] text-[#515154]">Händische Qualitäts-Prüfung durch Apple</div>
          </div>
        </div>

      </div>

    </div>
  );
}
