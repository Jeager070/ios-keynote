import React, { useState } from 'react';
import { 
  Smartphone, 
  EyeOff, 
  Activity, 
  Zap,
  SlidersHorizontal
} from 'lucide-react';
import xcodeIcon from '../assets/xcode-icon.png';
import xcodeMacbook from '../assets/xcode-macbook.png';
import { soundManager } from '../components/SoundEffects';

export default function Slide3XcodeRam() {
  const [realPhoneActive, setRealPhoneActive] = useState(false);
  const [olderSimActive, setOlderSimActive] = useState(false);
  const [previewsPaused, setPreviewsPaused] = useState(false);
  const [instrumentsActive, setInstrumentsActive] = useState(false);

  const simLoad = realPhoneActive ? 0.4 : (olderSimActive ? 2.2 : 5.8);
  const prevLoad = previewsPaused ? 0.5 : 3.8;
  const instLoad = instrumentsActive ? 1.5 : 0;
  const baseLoad = 3.8;

  const totalRam = +(baseLoad + simLoad + prevLoad + instLoad).toFixed(1);
  const ramPercent = Math.min(100, Math.round((totalRam / 16) * 100));

  const isCritical = totalRam > 13.0;
  const isOptimal = totalRam < 7.5;

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden py-2 select-none">
      
      {/* Slide Header */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#0071e3] mb-1">
          Folie 03 / 07 • Performance & Optimierung
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] flex items-center gap-3">
          <img src={xcodeIcon} alt="Xcode" className="w-8 h-8 md:w-10 md:h-10 rounded-xl shadow-xs inline-block" />
          <span>Xcode & <span className="text-[#0071e3]">RAM-Management.</span></span>
        </h1>
        <p className="text-sm md:text-base text-[#86868b] mt-0.5">
          Xcode ist hungrig nach Arbeitsspeicher: 4 Praxis-Hebel in reinem Apple Blue Design.
        </p>
      </div>

      {/* Main Grid: Real MacBook Pro Image + 4 Antidotes in Morpheus Glass 3D */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left: MacBook Pro with Xcode Canvas Image (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="morpheus-glass-3d p-3 w-full max-w-[480px]">
            <img 
              src={xcodeMacbook} 
              alt="MacBook mit Xcode 16" 
              className="w-full h-auto object-contain max-h-[250px] rounded-xl" 
            />
          </div>
          <div className="text-xs text-[#86868b] font-medium mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
            <span>Xcode 16 IDE: Emuliert komplettes Darwin-OS im Mac-RAM</span>
          </div>
        </div>

        {/* Right: RAM Gauge & 4 Strategy Cards (6 Cols) */}
        <div className="lg:col-span-6 space-y-3">
          
          {/* Visual RAM Pressure Gauge in Apple Blue */}
          <div className="morpheus-glass-3d p-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-[#1d1d1f] flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#0071e3]" />
                RAM-Auslastung (16 GB Unified Memory):
              </span>
              <span className={`font-mono font-bold ${isCritical ? 'text-blue-900' : isOptimal ? 'text-blue-600' : 'text-blue-700'}`}>
                {totalRam} GB / 16 GB ({ramPercent}%) {isCritical && '⚠️ Hohe Speicherauslastung'}
              </span>
            </div>

            {/* Blue Multi-segment Bar */}
            <div className="h-3.5 w-full bg-blue-100/60 rounded-full overflow-hidden p-0.5 flex border border-blue-200">
              <div className="h-full bg-blue-600 rounded-l-full transition-all duration-500" style={{ width: `${(baseLoad / 16) * 100}%` }} />
              <div className={`h-full transition-all duration-500 ${realPhoneActive ? 'bg-sky-400' : 'bg-blue-800'}`} style={{ width: `${(simLoad / 16) * 100}%` }} />
              <div className={`h-full transition-all duration-500 ${previewsPaused ? 'bg-neutral-300' : 'bg-blue-500'}`} style={{ width: `${(prevLoad / 16) * 100}%` }} />
              {instLoad > 0 && (
                <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${(instLoad / 16) * 100}%` }} />
              )}
            </div>
          </div>

          {/* 4 Interactive Strategy Cards in Morpheus Glass */}
          <div className="grid grid-cols-2 gap-2.5">
            
            {/* Strategy 1: Real iPhone */}
            <div
              onClick={() => {
                setRealPhoneActive(!realPhoneActive);
                soundManager.playSwitch();
              }}
              className={`morpheus-card-sm p-3.5 cursor-pointer transition-all ${
                realPhoneActive ? 'border-2 border-[#0071e3] bg-blue-50/70 shadow-sm' : 'hover:border-[#0071e3]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Smartphone className="w-4 h-4 text-[#0071e3]" />
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  realPhoneActive ? 'bg-blue-600 text-white' : 'bg-neutral-100 text-[#86868b]'
                }`}>
                  {realPhoneActive ? '-5.5 GB' : 'Aus'}
                </span>
              </div>
              <div className="text-xs font-bold text-[#1d1d1f]">1. Echtes iPhone</div>
              <p className="text-[11px] text-[#515154] leading-snug mt-0.5">Kein Simulator-Kernel im Mac-RAM</p>
            </div>

            {/* Strategy 2: Older Simulator */}
            <div
              onClick={() => {
                if (!realPhoneActive) {
                  setOlderSimActive(!olderSimActive);
                  soundManager.playSwitch();
                }
              }}
              className={`morpheus-card-sm p-3.5 transition-all ${
                realPhoneActive ? 'opacity-30 cursor-not-allowed' : (olderSimActive ? 'border-2 border-[#0071e3] bg-blue-50/70 shadow-sm cursor-pointer' : 'hover:border-[#0071e3]/40 cursor-pointer')
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Zap className="w-4 h-4 text-sky-600" />
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  olderSimActive ? 'bg-sky-600 text-white' : 'bg-neutral-100 text-[#86868b]'
                }`}>
                  {olderSimActive ? 'SE Modell' : 'Pro Max'}
                </span>
              </div>
              <div className="text-xs font-bold text-[#1d1d1f]">2. Gezielte Alt-Sim</div>
              <p className="text-[11px] text-[#515154] leading-snug mt-0.5">Spart 120Hz ProMotion Render-Puffer</p>
            </div>

            {/* Strategy 3: Pause Preview */}
            <div
              onClick={() => {
                setPreviewsPaused(!previewsPaused);
                soundManager.playSwitch();
              }}
              className={`morpheus-card-sm p-3.5 cursor-pointer transition-all ${
                previewsPaused ? 'border-2 border-[#0071e3] bg-blue-50/70 shadow-sm' : 'hover:border-[#0071e3]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <EyeOff className="w-4 h-4 text-blue-700" />
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  previewsPaused ? 'bg-blue-700 text-white' : 'bg-neutral-100 text-[#86868b]'
                }`}>
                  {previewsPaused ? 'Pausiert' : 'Live'}
                </span>
              </div>
              <div className="text-xs font-bold text-[#1d1d1f]">3. Preview pausieren</div>
              <p className="text-[11px] text-[#515154] leading-snug mt-0.5">Keine Dauer-Hintergrundkompilierung</p>
            </div>

            {/* Strategy 4: Instruments */}
            <div
              onClick={() => {
                setInstrumentsActive(!instrumentsActive);
                soundManager.playSwitch();
              }}
              className={`morpheus-card-sm p-3.5 cursor-pointer transition-all ${
                instrumentsActive ? 'border-2 border-[#0071e3] bg-blue-50/70 shadow-sm' : 'hover:border-[#0071e3]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Activity className="w-4 h-4 text-cyan-700" />
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  instrumentsActive ? 'bg-cyan-700 text-white' : 'bg-neutral-100 text-[#86868b]'
                }`}>
                  {instrumentsActive ? 'Aktiv' : 'Aus'}
                </span>
              </div>
              <div className="text-xs font-bold text-[#1d1d1f]">4. Instruments Profiler</div>
              <p className="text-[11px] text-[#515154] leading-snug mt-0.5">Memory Leaks & Retain Cycles finden</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Keynote Takeaway */}
      <div className="morpheus-card-sm py-2.5 px-4 flex items-center justify-between text-xs text-[#515154]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
          <span><strong>Praxis-Tipp:</strong> iPhone anstöpseln & SwiftUI Canvas pausieren entlastet selbst 8 GB & 16 GB Macs massiv.</span>
        </span>
        <span className="text-[#0071e3] font-bold hidden sm:block">Xcode → Instruments</span>
      </div>

    </div>
  );
}
