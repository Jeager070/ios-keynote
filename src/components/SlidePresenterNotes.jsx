import React from 'react';
import { BookOpen, X } from 'lucide-react';

export default function SlidePresenterNotes({ currentSlide, onClose }) {
  const notes = {
    1: {
      title: 'Folie 1: Apple Ecosystem & Developer Program',
      talkingPoints: [
        'Erläutere die Multi-Plattform-Strategie: Ein einziges Swift/SwiftUI-Wissen deckt iOS, iPadOS, watchOS, macOS und tvOS ab.',
        'Kosten & Lizenzen: Betone den Unterschied zwischen der kostenlosen Apple-ID (nur 7 Tage lokales Testen) und den 99 €/Jahr (weltweiter App Store Vertrieb, In-App-Käufe, TestFlight mit bis zu 10.000 Nutzern).',
        'Zahlen & Fakten: 170.000+ offizielle Dokumente und Code-Beispiele; über 90% aller Einreichungen werden in unter 24 Stunden geprüft.'
      ],
      references: '[1, 2] Apple Developer Documentation & App Store Guidelines'
    },
    2: {
      title: 'Folie 2: Hardware-Architektur & Mac-Alternativen',
      talkingPoints: [
        'Mac-Zwang: Xcode läuft nativ ausschließlich unter macOS. Ein Mac mini oder MacBook mit Apple Silicon (M-Chip) ist der Goldstandard.',
        'Cloud-Macs: Zeige auf, dass Dienste wie MacInCloud oder Xcode Cloud einen browserbasierten Einstieg ohne Hardwarekauf ermöglichen.',
        'Cross-Platform Realität: Flutter, React Native und .NET MAUI erlauben das Schreiben von Code unter Windows. Für den finalen Clang-Build und das Code-Signing mit Apple-Zertifikaten (.ipa) ist macOS jedoch unverzichtbar.'
      ],
      references: '[1, 2, 3, 4, 5, 6] Apple Hardware Specs & Cross-Platform Build Pipelines'
    },
    3: {
      title: 'Folie 3: Xcode & RAM-Power-Management',
      talkingPoints: [
        'Problemursache: Der Simulator emuliert einen kompletten Darwin-Kernel im Arbeitsspeicher des Macs.',
        'Strategie 1: Echtes iPhone per USB anschließen – spart bis zu 6 GB Mac-RAM!',
        'Strategie 2: Gezielt ältere Geräte wie iPhone SE wählen, um ProMotion 120Hz Render-Overhead zu vermeiden.',
        'Strategie 3: SwiftUI Live-Previews pausieren und nur bei Bedarf rendern.',
        'Strategie 4: Das mitgelieferte Instruments Profiling-Tool nutzen, um Retain Cycles und Memory Leaks vor dem Release aufzuspüren.'
      ],
      references: '[1, 2] Xcode Memory Profiling & Instruments User Guide'
    },
    4: {
      title: 'Folie 4: SwiftUI vs. UIKit (Deklarativ vs. Imperativ)',
      talkingPoints: [
        'Deklarativ (SwiftUI): "Was soll sein" – UI = f(State). Das System reagiert automatisch auf Änderungen an @State.',
        'Imperativ (UIKit): "Wie wird es gebaut" – Manuelles Erstellen von Views, AutoLayout-Constraints und Target-Action Handlern.',
        'Empfehlung: Für alle neuen Projekte 100% SwiftUI verwenden (-70% weniger Code).',
        'Hybrid-Möglichkeit: Betone, dass man sich nicht für immer entscheiden muss – UIHostingController bindet SwiftUI überall in UIKit ein.'
      ],
      references: '[1, 2] Swift Evolution & SwiftUI Framework Architecture'
    },
    5: {
      title: 'Folie 5: Aufwand & Team-Planung (Timeline & Rollen)',
      talkingPoints: [
        'Dauer & Meilensteine: Ein MVP benötigt ca. 3–5 Monate, eine vollwertige Enterprise-Lösung inklusive Backend, GoBD und Schnittstellen 6–9 Monate.',
        'Team-Zusammensetzung: 4 Kernrollen sind essenziell – iOS Lead Engineer (SwiftUI & SwiftData), Apple UI/UX Designer (HIG & SF Symbols), Backend & Cloud Architekt (APIs & Verschlüsselung) sowie QA & Security Specialist (XCTest & DSGVO).',
        'Zeitersparnis: Durch native SwiftUI-Entwicklung spart das Team bis zu 40% Entwicklungsaufwand im Vergleich zu UIKit.'
      ],
      references: 'iOS Project Estimation Guide & Apple Engineering Best Practices'
    },
    6: {
      title: 'Folie 6: Sicherheit – Schutz von Buchhaltung, Belegen & Konten',
      talkingPoints: [
        'Belege & Rechnungen: Revisionssichere GoBD-konforme Archivierung mit AES-256 Verschlüsselung und SHA-256 Hash-Signaturen.',
        'Buchhaltungsdaten: Lokale SwiftData/CoreData Speicherung mit Data Protection Complete (AES-256 at-rest) – geschützt auch bei Geräteverlust.',
        'Benutzerkonten & Biometrie: Apple Secure Enclave trennt Face ID / Touch ID hardwareseitig vom OS – biometrische Schlüssel bleiben unantastbar auf dem Chip.',
        'Netzwerk & Session-Tokens: Sichere Ablage im iOS Keychain, TLS 1.3 Transport und Certificate Pinning gegen Man-in-the-Middle Angriffe.'
      ],
      references: 'Apple Platform Security Whitepaper & BSI/GoBD Compliance Leitfaden'
    },
    7: {
      title: 'Folie 7: Wartung, Updates & Kontinuierlicher Betrieb',
      talkingPoints: [
        'Fehlererkennung & Monitoring: Apple MetricKit und Crashlytics erfassen Crashes, Hang-Rates und Energieverbrauch in Echtzeit.',
        'Phased Rollout (7 Tage): Risikofreies Veröffentlichen im App Store von 1% bis 100% – Rollout kann bei Anomalien sofort pausiert werden.',
        'CI/CD Pipeline: Xcode Cloud testet jeden Commit mit XCTest und stellt automatisch TestFlight-Builds für interne und externe Tester bereit.',
        'Schnelle Hotfixes: Bei kritischen Fehlern ermöglicht Apple Expedited Review eine Notfall-Prüfung innerhalb weniger Stunden.'
      ],
      references: 'App Store Connect Phased Release Documentation & Xcode Cloud CI/CD'
    }
  };

  const note = notes[currentSlide] || notes[1];

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white/95 backdrop-blur-2xl border-l border-neutral-200 p-6 z-50 flex flex-col justify-between shadow-2xl animate-slideLeft">
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-blue-600 font-black text-sm">
            <BookOpen className="w-4 h-4" />
            <span>Referenten-Notizen & Keynote-Leitfaden</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#1d1d1f] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h3 className="text-base font-black text-[#1d1d1f] mb-3">
          {note.title}
        </h3>

        <div className="space-y-3">
          <span className="text-[11px] uppercase font-bold text-[#86868b] tracking-wider">
            Kernbotschaften für den Vortrag:
          </span>
          {note.talkingPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1d1d1f] leading-relaxed bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200 shadow-2xs">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-black">
                {idx + 1}
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-200">
        <div className="text-[11px] text-[#86868b] flex items-center justify-between">
          <span>Quellen & Zitate:</span>
          <span className="text-blue-600 font-mono text-[10px] font-bold">{note.references}</span>
        </div>
      </div>
    </div>
  );
}
