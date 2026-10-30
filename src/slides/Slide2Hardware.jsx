import React, { useState } from 'react';
import { 
  Laptop, 
  Cloud, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Monitor, 
  Play, 
  XCircle 
} from 'lucide-react';
import { soundManager } from '../components/SoundEffects';

export default function Slide2Hardware() {
  const [activeRoute, setActiveRoute] = useState('mac');
  const [pipelineStep, setPipelineStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const startPipeline = (route) => {
    setActiveRoute(route);
    setIsSimulating(true);
    setPipelineStep(1);
    soundManager.playSwitch();

    setTimeout(() => {
      setPipelineStep(2);
      soundManager.playClick();
    }, 700);

    setTimeout(() => {
      setPipelineStep(3);
      if (route === 'pc_only') {
        soundManager.playClick();
      } else {
        soundManager.playSuccess();
      }
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden py-2 select-none">
      
      {/* Slide Header */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
          Folie 02 / 07 • Hardware & Alternativen
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
          Die Hardware-Frage: <span className="text-[#0071e3]">Mac, Cloud oder Cross-Platform?</span>
        </h1>
        <p className="text-sm md:text-base text-[#86868b] mt-0.5">
          Xcode läuft exklusiv unter macOS – doch es gibt pragmatische Wege für Entwickler ohne Mac.
        </p>
      </div>

      {/* Main 3 Hardware Architecture Columns in 3D Morpheus Glass */}
      <div className="my-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Option 1: Nativer Mac */}
        <div className="morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-200 text-[#0071e3] flex items-center justify-center mb-3 shadow-xs">
              <Laptop className="w-6 h-6" />
            </div>
            <div className="text-[11px] font-bold uppercase text-[#0071e3] tracking-wider mb-1">100% Empfehlung</div>
            <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">Physischer Mac</h2>
            <p className="text-xs text-[#515154] leading-relaxed mb-3">
              MacBook oder Mac mini (ab 699 €) mit Apple Silicon (M-Chip). 0ms Latenz, Xcode Canvas in Echtzeit & direktes USB-iPhone-Debugging.
            </p>
          </div>
          <div className="pt-3 border-t border-black/5 text-xs text-[#0071e3] font-bold">
            Natives Xcode aus Mac App Store (Gratis)
          </div>
        </div>

        {/* Option 2: Cloud-Macs */}
        <div className="morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-cyan-700 flex items-center justify-center mb-3 shadow-xs">
              <Cloud className="w-6 h-6" />
            </div>
            <div className="text-[11px] font-bold uppercase text-cyan-700 tracking-wider mb-1">Ohne Mac Hardware</div>
            <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">Cloud-Macs</h2>
            <p className="text-xs text-[#515154] leading-relaxed mb-3">
              Dienste wie MacInCloud oder Xcode Cloud mieten echte macOS-Instanzen direkt im Browser. Zugriff per Remote-Desktop von Windows aus.
            </p>
          </div>
          <div className="pt-3 border-t border-black/5 text-xs text-[#515154] font-medium">
            Monatlich kündbar (~25–40 €/Monat)
          </div>
        </div>

        {/* Option 3: Cross-Platform */}
        <div className="morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50/80 border border-purple-200 text-purple-700 flex items-center justify-center mb-3 shadow-xs">
              <Layers className="w-6 h-6" />
            </div>
            <div className="text-[11px] font-bold uppercase text-purple-700 tracking-wider mb-1">Multiplattform</div>
            <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">Cross-Platform</h2>
            <p className="text-xs text-[#515154] leading-relaxed mb-3">
              Flutter, React Native oder .NET MAUI: Code unter Windows schreiben. Doch für die finale .IPA-Signierung wird immer einmalig macOS benötigt!
            </p>
          </div>
          <div className="pt-3 border-t border-black/5 text-xs text-red-600 font-bold">
            Finales iOS-Kompilieren verlangt macOS
          </div>
        </div>

      </div>

      {/* Interactive Pipeline Action Bar */}
      <div className="morpheus-card-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => startPipeline('mac')}
            disabled={isSimulating}
            className="px-4 py-2 rounded-xl bg-[#0071e3] text-white font-bold text-xs flex items-center gap-2 hover:bg-[#0077ed] transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Mac Build testen</span>
          </button>

          <button
            onClick={() => startPipeline('pc_only')}
            disabled={isSimulating}
            className="px-4 py-2 rounded-xl bg-white/80 hover:bg-white text-[#1d1d1f] font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-neutral-200"
          >
            <XCircle className="w-3.5 h-3.5 text-red-500" />
            <span>Reiner PC Build testen</span>
          </button>
        </div>

        <div className="text-xs font-mono font-bold">
          {pipelineStep === 0 && <span className="text-[#86868b]">Klicke einen Test-Button zum Ausführen</span>}
          {pipelineStep === 1 && <span className="text-[#0071e3]">1. Quellcode wird analysiert...</span>}
          {pipelineStep === 2 && <span className="text-cyan-700">2. macOS Toolchain & Clang kompilieren Assets...</span>}
          {pipelineStep === 3 && (
            activeRoute === 'pc_only' 
              ? <span className="text-red-600">❌ ERROR: Apple Clang & macOS SDK laufen nicht unter Windows!</span>
              : <span className="text-emerald-600">✓ BUILD SUCCEEDED: .IPA signiert für den App Store!</span>
          )}
        </div>
      </div>

    </div>
  );
}
