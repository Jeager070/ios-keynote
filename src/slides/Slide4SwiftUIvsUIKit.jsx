import React, { useState } from 'react';
import { 
  Heart, 
  Code2, 
  Smartphone 
} from 'lucide-react';
import { soundManager } from '../components/SoundEffects';

export default function Slide4SwiftUIvsUIKit() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(482);
  const [currentMode, setCurrentMode] = useState('swiftui');

  const handleLike = () => {
    soundManager.playClick();
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(c => c - 1);
    } else {
      setIsLiked(true);
      setLikeCount(c => c + 1);
      soundManager.playSuccess();
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden py-2 select-none">
      
      {/* Slide Header */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#0071e3] mb-1">
          Folie 04 / 07 • UI-Paradigmenwechsel
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
          SwiftUI vs. UIKit: <span className="text-[#0071e3]">Deklarativ statt Imperativ.</span>
        </h1>
        <p className="text-sm md:text-base text-[#86868b] mt-0.5">
          "Was soll sein" (SwiftUI) versus "Wie wird es Schritt für Schritt gebaut" (UIKit).
        </p>
      </div>

      {/* Main Grid: Code + White Titanium iPhone Mockup in Morpheus Glass 3D */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left: Code Comparison (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          
          {/* Framework Toggle Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCurrentMode('swiftui');
                soundManager.playSwitch();
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentMode === 'swiftui' 
                  ? 'bg-[#0071e3] text-white shadow-xs' 
                  : 'bg-white/80 border border-neutral-200 text-[#515154] hover:text-black'
              }`}
            >
              SwiftUI (Modern • Deklarativ)
            </button>
            <button
              onClick={() => {
                setCurrentMode('uikit');
                soundManager.playSwitch();
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentMode === 'uikit' 
                  ? 'bg-neutral-800 text-white shadow-xs' 
                  : 'bg-white/80 border border-neutral-200 text-[#515154] hover:text-black'
              }`}
            >
              UIKit (Klassisch • Imperativ)
            </button>
          </div>

          {/* Clean Morpheus Glass 3D Code Box */}
          <div className="morpheus-glass-3d p-5">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5 text-xs">
              <span className="font-bold text-[#1d1d1f] flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#0071e3]" />
                {currentMode === 'swiftui' ? 'SwiftUI Single Source of Truth' : 'UIKit Manuelle Verdrahtung'}
              </span>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                currentMode === 'swiftui' ? 'bg-blue-100 text-[#0071e3]' : 'bg-neutral-100 text-[#515154]'
              }`}>
                {currentMode === 'swiftui' ? '-70% Codezeilen' : 'Seit iOS 2'}
              </span>
            </div>

            {currentMode === 'swiftui' ? (
              <div className="font-mono text-xs leading-relaxed text-[#1d1d1f] space-y-1 bg-white/70 p-3.5 rounded-xl border border-white">
                <div className="text-[#0071e3] font-bold">// 1. Ein einziger State</div>
                <div><span className="text-blue-700 font-bold">@State</span> <span className="text-blue-600 font-bold">private var</span> isLiked = <span className="text-[#0071e3] font-bold">{isLiked ? 'true' : 'false'}</span></div>
                <div className="pt-1 text-[#0071e3] font-bold">// 2. Deklarativer View Tree</div>
                <div><span className="text-blue-600 font-bold">var</span> body: <span className="text-blue-700 font-bold">some</span> View {'{'}</div>
                <div className="pl-4"><span className="text-blue-800 font-bold">Button</span>(action: {'{'} isLiked.toggle() {'}'}) {'{'}</div>
                <div className="pl-8"><span className="text-blue-800 font-bold">Label</span>(<span className="text-blue-900 font-semibold">"\(count)"</span>, systemImage: isLiked ? <span className="text-blue-600 font-bold">"heart.fill"</span> : <span className="text-neutral-400">"heart"</span>)</div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            ) : (
              <div className="font-mono text-xs leading-relaxed text-[#1d1d1f] space-y-1 bg-white/70 p-3.5 rounded-xl border border-white">
                <div className="text-[#0071e3] font-bold">// Manuelle Instanziierung & Target-Action</div>
                <div><span className="text-blue-600 font-bold">let</span> button = <span className="text-blue-800 font-bold">UIButton</span>(type: .system)</div>
                <div>view.addSubview(button)</div>
                <div>button.addTarget(<span className="text-blue-600 font-bold">self</span>, action: <span className="text-blue-700 font-bold">#selector</span>(tap), for: .touchUpInside)</div>
                <div className="text-neutral-400">// Manuelles Repaint per Hand:</div>
                <div><span className="text-blue-600 font-bold">@objc func</span> tap() {'{'}</div>
                <div className="pl-4">isLiked.toggle()</div>
                <div className="pl-4">button.setImage(isLiked ? filled : outline, for: .normal)</div>
                <div>{'}'}</div>
              </div>
            )}

            <div className="mt-3 pt-2 border-t border-black/5 text-xs text-[#86868b] flex items-center justify-between">
              <span>{currentMode === 'swiftui' ? 'Automatisches 120Hz Re-Rendering' : 'Manuelle AutoLayout Constraints'}</span>
              <span className="font-mono text-[11px] text-[#0071e3] font-bold">UIHostingController Hybrid</span>
            </div>
          </div>

        </div>

        {/* Right: iPhone Mockup in Morpheus Glass 3D (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-[260px] h-[320px] bg-white/80 backdrop-blur-xl rounded-[40px] p-4 border-4 border-white shadow-xl flex flex-col justify-between">
            {/* Dynamic Island */}
            <div className="w-20 h-4 bg-black rounded-full mx-auto flex items-center justify-center" />

            {/* Interactive Screen Content */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0071e3]">
                {currentMode.toUpperCase()} CANVAS
              </span>

              {/* Heart Button in Apple Blue Theme */}
              <button
                onClick={handleLike}
                className={`p-4 rounded-full transition-all duration-300 transform active:scale-90 cursor-pointer shadow-sm ${
                  isLiked 
                    ? 'bg-blue-50 text-[#0071e3] scale-110 border border-blue-200 shadow-md' 
                    : 'bg-white text-neutral-400 hover:text-black border border-neutral-200'
                }`}
              >
                <Heart className={`w-8 h-8 transition-transform ${isLiked ? 'fill-[#0071e3] scale-110' : ''}`} />
              </button>

              <div className="text-center">
                <div className="text-xl font-bold font-mono text-[#1d1d1f]">
                  {likeCount} Likes
                </div>
                <div className="text-[10px] text-[#86868b]">
                  {isLiked ? 'isLiked = true' : 'isLiked = false'}
                </div>
              </div>
            </div>

            {/* Home Bar */}
            <div className="w-24 h-1 bg-neutral-300 rounded-full mx-auto" />
          </div>
          <div className="text-xs text-[#86868b] mt-2 font-medium">Klicke das Herz zur State-Simulation</div>
        </div>

      </div>

      {/* Bottom Keynote Takeaway */}
      <div className="morpheus-card-sm py-2.5 px-4 flex items-center justify-between text-xs text-[#515154]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
          <span><strong>Empfehlung für Einsteiger:</strong> Starte heute zu 100% mit SwiftUI. UIKit und SwiftUI lassen sich jederzeit im selben Projekt mischen.</span>
        </span>
        <span className="text-[#0071e3] font-bold hidden sm:block">SwiftUI 6 • iOS 18</span>
      </div>

    </div>
  );
}
