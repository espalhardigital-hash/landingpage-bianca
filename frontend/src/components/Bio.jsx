import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';

export default function Bio() {
  const highlights = [
    {
      icon: Award,
      text: "Especialista en Ansiedad y Manejo del Estrés Juvenil."
    },
    {
      icon: HeartHandshake,
      text: "Enfoque moderno de terapia: sin discursos clínicos ni etiquetas aburridas."
    },
    {
      icon: ShieldCheck,
      text: "Validación real de tu ritmo digital y los retos de la vida hiperconectada."
    }
  ];

  return (
    <section 
      id="bio" 
      aria-labelledby="bio-title"
      className="py-18 md:py-22 lg:py-26 px-6 md:px-12 bg-dark-900 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Tarjeta Visual de Perfil (Columna Izquierda - 5 cols) */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 rounded-2xl border border-white/5 relative max-w-sm w-full group shadow-[0_0_20px_rgba(200,182,255,0.05)]"
            >
              {/* Círculo decorativo glow */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-glow-lavender/5 blur-[50px] pointer-events-none group-hover:bg-glow-lavender/10 transition-colors duration-500" />
              
              {/* Foto Perfil Vectorizada */}
              <div className="w-full aspect-square rounded-xl bg-gradient-to-tr from-glow-lavender/20 to-glow-mint/20 border border-white/10 flex items-center justify-center overflow-hidden mb-6 relative">
                {/* Ilustración de Psicóloga moderna */}
                <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 drop-shadow-[0_4px_15px_rgba(125,249,196,0.3)]">
                  <ellipse cx="50" cy="45" rx="14" ry="16" fill="#F8FAFC" />
                  <path d="M25 85 C25 70, 35 65, 50 65 C65 65, 75 70, 75 85 L80 100 L20 100 Z" fill="url(#bioGrad)" />
                  <ellipse cx="50" cy="45" rx="9" ry="9" fill="none" stroke="#05080f" strokeWidth="1.5" />
                  <path d="M35 48 C35 28, 65 28, 65 48 C65 52, 60 60, 58 62 C55 64, 50 56, 50 56 C50 56, 45 64, 42 62 C40 60, 35 52, 35 48 Z" fill="#141e3a" />
                  <defs>
                    <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C8B6FF" />
                      <stop offset="100%" stopColor="#7DF9C4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Información rápida */}
              <div className="text-center">
                <h4 className="font-display font-bold text-xl text-text-primary">Bianca R.</h4>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-semibold">Psicóloga & Terapeuta Juvenil</p>
                <div className="flex justify-center gap-1.5 mt-3">
                  <span className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-glow-lavender">@bianca.mente</span>
                  <span className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-glow-mint">Reg. 12948-CO</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Texto Persuasivo (Columna Derecha - 7 cols) */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-glow-mint text-xs font-semibold tracking-widest uppercase bg-glow-mint/10 px-3 py-1 rounded-full border border-glow-mint/20 w-fit">
                Sobre Bianca
              </span>
              <h2 id="bio-title" className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary leading-tight">
                No vengo a darte un diagnóstico clínico de hace 50 años.
              </h2>
            </div>
            
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Sé que abres TikTok para distraerte y terminas sintiendo más ansiedad. Sé lo que pesa el overthinking antes de dormir y la culpa de procrastinar. Mi meta no es decirte que "apagues tu celular", sino darte herramientas reales que encajen en tu mundo moderno.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              He diseñado este desafío reuniendo técnicas cognitivo-conductuales de shock de forma ultra-directa: sin rodeos, sin términos médicos aburridos y a tu propio ritmo.
            </p>

            {/* Viñetas destacadas */}
            <div className="space-y-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-glow-lavender/10 border border-glow-lavender/20 text-glow-lavender flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed pt-0.5">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
