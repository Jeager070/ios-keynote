import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Fingerprint, 
  FileCheck, 
  Server, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Database 
} from 'lucide-react';
import { soundManager } from '../components/SoundEffects';

export default function Slide6HIGAccessibility() {
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [isEncrypted, setIsEncrypted] = useState(true);

  const pillars = [
    {
      title: 'Belege & Rechnungen (GoBD)',
      desc: 'AES-256 Verschlüsselung + SHA-256 Hash-Signaturen gegen nachträgliche Manipulation. Revisionssichere PDF-Archivierung.',
      icon: FileCheck,
      badge: 'GoBD & DSGVO'
    },
    {
      title: 'Buchhaltungsdaten (SwiftData)',
      desc: 'Lokale Datenbank vollständig verschlüsselt (SQLCipher / Data Protection Complete). Kein Klartext-Zugriff bei Geräteverlust.',
      icon: Database,
      badge: 'AES-256 At-Rest'
    },
    {
      title: 'Benutzerkonten & Biometrie',
      desc: 'Apple Secure Enclave mit Face ID / Touch ID. Biometrische Schlüssel verlassen niemals den physischen Sicherheits-Chip.',
      icon: Fingerprint,
      badge: 'Secure Enclave'
    },
    {
      title: 'Netzwerk & Session-Tokens',
      desc: 'Apple Keychain für JWT-Tokens. TLS 1.3 Verschlüsselung mit Certificate Pinning schützt vor Man-in-the-Middle-Angriffen.',
      icon: Key,
      badge: 'Zero-Knowledge'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden py-2 select-none">
      
      {/* Slide Header */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#0071e3] mb-1">
          Folie 06 / 07 • Sicherheit & Compliance
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
          Sicherheit: <span className="text-[#0071e3]">Buchhaltung, Belege & Konten.</span>
        </h1>
        <p className="text-sm md:text-base text-[#86868b] mt-0.5">
          Wie sensible Finanzdaten, Belege und Benutzerkonten nach Banken- und GoBD-Standard geschützt werden.
        </p>
      </div>

      {/* Main Grid: Security Architecture in Morpheus Glass 3D */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: 4 Security Pillars Grid (7 Cols) */}
        <div className="lg:col-span-7 morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868b] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0071e3]" /> 4-Ebenen Sicherheits-Architektur
              </span>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                End-to-End Verschlüsselt
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {pillars.map(p => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="p-3.5 rounded-2xl bg-white/70 border border-white shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071e3] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0071e3] border border-blue-100 font-mono">
                          {p.badge}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#1d1d1f] mb-1">{p.title}</div>
                      <p className="text-[11px] text-[#515154] leading-snug">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-black/5 text-xs text-[#515154] flex items-center justify-between">
            <span>Konformität: GoBD, DSGVO & Apple App Store Guidelines</span>
            <span className="text-[#0071e3] font-bold font-mono">Hardware Security</span>
          </div>
        </div>

        {/* Right Side: Interactive Live Vault & Enclave Simulator (5 Cols) */}
        <div className="lg:col-span-5 morpheus-glass-3d p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868b] flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#0071e3]" /> Beleg- & Konten-Tresor
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Aktiv
              </span>
            </div>

            {/* Simulated Secure Financial Receipt Card */}
            <div className="p-4 rounded-2xl bg-white/80 border border-white shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-neutral-100">
                <span className="font-bold text-[#1d1d1f]">Eingangsrechnung RE-2026-88</span>
                <span className="text-[#0071e3] font-mono font-bold">2.450,00 €</span>
              </div>

              {/* Data Rows */}
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#86868b]">Kreditor:</span>
                  <span className="text-[#1d1d1f]">Apple Cloud Infrastructure</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#86868b]">Integrität:</span>
                  <span className="text-emerald-700 font-bold">SHA-256 Signiert ✓</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#86868b]">Status im RAM:</span>
                  <span className={isEncrypted ? 'text-[#0071e3] font-bold' : 'text-neutral-500'}>
                    {isEncrypted ? '🔒 AES-256 Verschlüsselt' : '🔓 Klartext (Nur im Cache)'}
                  </span>
                </div>
              </div>

              {/* Biometric Status Pill */}
              <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[#0071e3] font-semibold">
                  <Fingerprint className="w-4 h-4" /> Face ID Auth
                </span>
                <span className="font-bold text-[#1d1d1f]">Erforderlich</span>
              </div>
            </div>

            {/* Interactive Buttons */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsEncrypted(!isEncrypted);
                  soundManager.playSwitch();
                }}
                className="p-2 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-200 text-[#1d1d1f] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                {isEncrypted ? <EyeOff className="w-3.5 h-3.5 text-[#0071e3]" /> : <Eye className="w-3.5 h-3.5 text-neutral-400" />}
                <span>{isEncrypted ? 'Verschlüsselt' : 'Entschlüsselt'}</span>
              </button>

              <button
                onClick={() => {
                  setFaceIdEnabled(!faceIdEnabled);
                  soundManager.playClick();
                }}
                className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#0071e3] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Fingerprint className="w-3.5 h-3.5" />
                <span>{faceIdEnabled ? 'Face ID: An' : 'Face ID: Aus'}</span>
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-black/5 text-xs text-[#86868b] flex items-center justify-between">
            <span>Apple Secure Enclave Architektur</span>
            <span className="text-emerald-700 font-bold font-mono">Zero-Knowledge Vault</span>
          </div>
        </div>

      </div>

      {/* Bottom Keynote Punchline */}
      <div className="morpheus-card-sm py-2.5 px-4 flex items-center justify-between text-xs text-[#515154]">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0" />
          <span><strong className="text-[#1d1d1f]">Sicherheitsversprechen:</strong> Buchhaltungsdaten und Belege sind durch Hardware-Enklaven und AES-256 selbst bei Geräteverlust oder Jailbreak unknackbar geschützt.</span>
        </span>
        <span className="text-[#0071e3] font-bold hidden sm:block">Banken-Sicherheitslevel</span>
      </div>

    </div>
  );
}
