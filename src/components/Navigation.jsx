import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Grid, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Clock, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { soundManager } from './SoundEffects';

export default function Navigation({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onSelectSlide,
  onToggleNotes,
  showNotes,
  isOverviewOpen,
  onToggleOverview
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const toggleSound = () => {
    soundManager.enabled = !soundManager.enabled;
    setIsMuted(!soundManager.enabled);
  };

  return (
    <>
      {/* Floating White macOS Keynote Dock at the Bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/85 backdrop-blur-2xl shadow-xl border border-white select-none">
        
        {/* Slide Overview Grid Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onToggleOverview();
          }}
          title="Folienübersicht (Taste: O)"
          className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isOverviewOpen 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-neutral-100'
          }`}
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Previous Slide Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          title="Vorherige Folie (Pfeil links)"
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            currentSlide === 1 
              ? 'text-neutral-300 cursor-not-allowed' 
              : 'text-[#1d1d1f] hover:bg-neutral-100 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter & Progress */}
        <div className="px-3 py-1 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center gap-1.5">
          <span className="font-mono text-xs font-black text-blue-600">
            {String(currentSlide).padStart(2, '0')}
          </span>
          <span className="text-neutral-400 text-xs font-mono">/</span>
          <span className="font-mono text-xs text-[#86868b] font-bold">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Next Slide Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          title="Nächste Folie (Pfeil rechts / Leertaste)"
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            currentSlide === totalSlides 
              ? 'text-neutral-300 cursor-not-allowed' 
              : 'text-[#1d1d1f] hover:bg-neutral-100 active:scale-95'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-[1px] h-5 bg-neutral-200 mx-1" />

        {/* Presentation Timer */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-neutral-50 text-[11px] font-mono text-[#515154] border border-neutral-200">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span className="font-bold">{formatTime(seconds)}</span>
          <button 
            onClick={() => setSeconds(0)} 
            title="Timer zurücksetzen"
            className="hover:text-blue-600 ml-1 cursor-pointer"
          >
            <RotateCcw className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Speaker Notes Toggle */}
        <button
          onClick={() => {
            soundManager.playClick();
            onToggleNotes();
          }}
          title="Referenten-Notizen (Taste: P)"
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            showNotes 
              ? 'bg-purple-600 text-white shadow-sm' 
              : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-neutral-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
        </button>

        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          title="Soundeffekte umschalten (Taste: M)"
          className="p-2 rounded-xl text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-neutral-100 transition-all cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-[#1d1d1f]" />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title="Vollbild umschalten (Taste: F)"
          className="p-2 rounded-xl text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-neutral-100 transition-all cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Keyboard Shortcuts Help */}
        <button
          onClick={() => setShowShortcuts(!showShortcuts)}
          title="Tastenkürzel Hilfe (Taste: ?)"
          className="p-2 rounded-xl text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-neutral-100 transition-all cursor-pointer"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {/* Top Slide Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-neutral-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>

      {/* Shortcuts Modal in Clean White Style */}
      {showShortcuts && (
        <div 
          onClick={() => setShowShortcuts(false)}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            onClick={e => e.stopPropagation()} 
            className="macos-glass p-6 rounded-3xl border border-white max-w-sm w-full space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
              <h3 className="text-sm font-black text-[#1d1d1f] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" /> Tastaturkürzel
              </h3>
              <button onClick={() => setShowShortcuts(false)} className="text-[#86868b] hover:text-black font-bold text-xs cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#1d1d1f]">
                <span>Nächste Folie</span>
                <kbd className="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-300 font-mono font-bold text-[11px]">→ / Leertaste</kbd>
              </div>
              <div className="flex items-center justify-between text-[#1d1d1f]">
                <span>Vorherige Folie</span>
                <kbd className="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-300 font-mono font-bold text-[11px]">←</kbd>
              </div>
              <div className="flex items-center justify-between text-[#1d1d1f]">
                <span>Folienübersicht</span>
                <kbd className="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-300 font-mono font-bold text-[11px]">O</kbd>
              </div>
              <div className="flex items-center justify-between text-[#1d1d1f]">
                <span>Referenten-Notizen</span>
                <kbd className="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-300 font-mono font-bold text-[11px]">P</kbd>
              </div>
              <div className="flex items-center justify-between text-[#1d1d1f]">
                <span>Vollbildmodus</span>
                <kbd className="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-300 font-mono font-bold text-[11px]">F</kbd>
              </div>
              <div className="flex items-center justify-between text-[#1d1d1f]">
                <span>Sound ein/aus</span>
                <kbd className="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-300 font-mono font-bold text-[11px]">M</kbd>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
