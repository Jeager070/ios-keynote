import React, { useState, useEffect } from 'react';
import appleLogo from './assets/apple-logo.png';
import xcodeIcon from './assets/xcode-icon.png';
import BackgroundOrbs from './components/BackgroundOrbs';
import SlidePresenterNotes from './components/SlidePresenterNotes';
import SlideOverviewModal from './components/SlideOverviewModal';
import { soundManager } from './components/SoundEffects';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Grid, 
  BookOpen, 
  Clock
} from 'lucide-react';

// Slides
import Slide1Ecosystem from './slides/Slide1Ecosystem';
import Slide2Hardware from './slides/Slide2Hardware';
import Slide3XcodeRam from './slides/Slide3XcodeRam';
import Slide4SwiftUIvsUIKit from './slides/Slide4SwiftUIvsUIKit';
import Slide5LegacyAndARC from './slides/Slide5LegacyAndARC';
import Slide6HIGAccessibility from './slides/Slide6HIGAccessibility';
import Slide7AppStorePrivacy from './slides/Slide7AppStorePrivacy';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 7;
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const goToNext = () => {
    if (currentSlide < totalSlides) {
      soundManager.playClick();
      setCurrentSlide(s => s + 1);
    }
  };

  const goToPrev = () => {
    if (currentSlide > 1) {
      soundManager.playClick();
      setCurrentSlide(s => s - 1);
    }
  };

  const goToSlide = (num) => {
    if (num >= 1 && num <= totalSlides) {
      soundManager.playClick();
      setCurrentSlide(num);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key.toLowerCase() === 'p') {
        setShowNotes(n => !n);
      } else if (e.key.toLowerCase() === 'o') {
        setShowOverview(o => !o);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (['1', '2', '3', '4', '5', '6', '7'].includes(e.key)) {
        goToSlide(Number(e.key));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-screen h-screen bg-[#f0f2f6] flex flex-col justify-between overflow-hidden select-none">
      
      {/* Background Ambient Orbs shining through Morpheus Glass */}
      <BackgroundOrbs currentSlide={currentSlide} />

      {/* Authentic macOS 27 Window Header Bar */}
      <header className="relative z-30 h-11 bg-white/70 backdrop-blur-2xl border-b border-white/80 px-4 flex items-center justify-between shrink-0 shadow-xs">
        
        {/* Left: macOS Traffic Lights + Real High-Res Apple Logo + Presentation Title */}
        <div className="flex items-center gap-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2 mr-1">
            <button 
              onClick={() => goToSlide(1)}
              title="Zurück zu Folie 1"
              className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:opacity-80 transition-opacity cursor-pointer shadow-xs" 
            />
            <button 
              onClick={() => setShowOverview(true)}
              title="Folienübersicht (Taste O)"
              className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24] hover:opacity-80 transition-opacity cursor-pointer shadow-xs" 
            />
            <button 
              onClick={toggleFullscreen}
              title="Vollbild (Taste F)"
              className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:opacity-80 transition-opacity cursor-pointer shadow-xs" 
            />
          </div>

          <div className="w-[1px] h-4 bg-black/10 mx-0.5" />

          {/* Real High-Res Apple Logo Image */}
          <img 
            src={appleLogo} 
            alt="Apple" 
            className="h-4 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity cursor-pointer" 
            onClick={() => setShowOverview(true)}
            title="Apple Developer"
          />

          <span className="text-xs font-bold text-[#1d1d1f] tracking-tight">
            iOS Entwicklung
          </span>
        </div>

        {/* Right: Official 3D Xcode App Logo */}
        <div 
          onClick={goToNext}
          title="Nächste Folie (→ / Leertaste)"
          className="flex items-center gap-2 px-2.5 py-1 rounded-lg hover:bg-black/5 transition-all cursor-pointer active:scale-95"
        >
          <span className="text-xs font-bold text-[#1d1d1f] tracking-tight">
            Xcode
          </span>
          <img 
            src={xcodeIcon} 
            alt="Xcode" 
            className="w-5 h-5 rounded-md shadow-xs border border-black/10 inline-block object-contain" 
          />
        </div>
      </header>

      {/* Main Slide Stage (100% Height, NO SCROLL) */}
      <main className="relative z-10 flex-1 w-full h-[calc(100vh-44px)] overflow-hidden p-6 md:p-8 lg:p-10 flex flex-col justify-between">
        {/* Subtle Edge Hover Navigators for Mouse Navigation */}
        {currentSlide > 1 && (
          <button
            onClick={goToPrev}
            title="Vorherige Folie (←)"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 shadow-md flex items-center justify-center text-[#1d1d1f] opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {currentSlide < totalSlides && (
          <button
            onClick={goToNext}
            title="Nächste Folie (→)"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 shadow-md flex items-center justify-center text-[#1d1d1f] opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
        <div key={currentSlide} className="w-full h-full overflow-hidden flex flex-col justify-between">
          {currentSlide === 1 && <Slide1Ecosystem />}
          {currentSlide === 2 && <Slide2Hardware />}
          {currentSlide === 3 && <Slide3XcodeRam />}
          {currentSlide === 4 && <Slide4SwiftUIvsUIKit />}
          {currentSlide === 5 && <Slide5LegacyAndARC />}
          {currentSlide === 6 && <Slide6HIGAccessibility />}
          {currentSlide === 7 && <Slide7AppStorePrivacy />}
        </div>
      </main>

      {/* Speaker Notes Modal */}
      {showNotes && (
        <SlidePresenterNotes
          currentSlide={currentSlide}
          onClose={() => setShowNotes(false)}
        />
      )}

      {/* Slide Overview Grid Modal */}
      <SlideOverviewModal
        isOpen={showOverview}
        onClose={() => setShowOverview(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />
    </div>
  );
}
