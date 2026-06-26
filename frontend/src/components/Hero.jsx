import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  // Configuración de animación para el headline de 3 palabras
  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Ease-out-expo
      }
    })
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen pt-28 pb-18 md:pb-22 lg:pb-26 px-6 md:px-12 flex items-center justify-center overflow-hidden bg-dark-950"
    >
      {/* Glows decorativos de fondo */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-glow-lavender/5 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-glow-mint/5 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-4s' }} />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Columna Izquierda: Copias e Input */}
        <div className="flex flex-col space-y-6 md:pr-4">
          <div className="space-y-3">
            <span className="text-glow-lavender text-xs md:text-sm font-semibold tracking-widest uppercase bg-glow-lavender/10 px-3 py-1 rounded-full border border-glow-lavender/20 w-fit">
              Método Científico + Empatía
            </span>
            
            {/* Headline de exactamente 3 palabras */}
            <h1 id="hero-title" className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-text-primary flex flex-col">
              <motion.span custom={0} initial="hidden" animate="visible" variants={wordVariants}>
                RESPIRA.
              </motion.span>
              <motion.span custom={1} initial="hidden" animate="visible" variants={wordVariants} className="text-glow-lavender">
                ENTIENDE.
              </motion.span>
              <motion.span custom={2} initial="hidden" animate="visible" variants={wordVariants} className="text-glow-mint">
                CONTROLA.
              </motion.span>
            </h1>
          </div>

          {/* Sub-headline con oferta dual */}
          <p className="text-text-secondary text-base sm:text-lg max-w-lg leading-relaxed">
            Tu ritmo moderno no tiene por qué abrumarte. Recibe tu <strong className="text-glow-mint">eBook gratuito inmediato</strong> para frenar los ataques de pánico y únete a nuestro <strong className="text-glow-lavender">desafío práctico de 7 días</strong> con micro-ejercicios de 5 minutos al día.
          </p>

          {/* Formulario */}
          <div className="pt-2">
            <EmailForm source="hero" />
          </div>
        </div>

        {/* Columna Derecha: Imagen de Bianca con Máscara Glassmorphic */}
        <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[500px]">
          
          {/* Anillos concéntricos animados de respiración */}
          <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-glow-lavender/20 animate-[ping_6s_ease-in-out_infinite] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-glow-mint/10 animate-[ping_6s_ease-in-out_infinite] pointer-events-none" style={{ animationDelay: '3s' }} />
          
          {/* Círculo base de respiración (escala 0.95 -> 1.05) */}
          <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-tr from-glow-lavender/10 to-glow-mint/10 border border-white/5 shadow-inner backdrop-blur-sm pointer-events-none animate-[pulse_6s_ease-in-out_infinite] flex items-center justify-center">
            {/* Núcleo glow */}
            <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] rounded-full bg-gradient-to-br from-glow-lavender/20 to-glow-mint/20 filter blur-xl animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          {/* Contenedor de la Imagen con Máscara Glassmorphic */}
          <div className="absolute w-[230px] h-[230px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border border-white/15 p-1 bg-dark-900/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10 flex items-center justify-center group hover:border-glow-lavender/30 transition-all duration-500">
            
            {/* Si la imagen local no existe o falla, cargamos el avatar SVG elegante de fallback */}
            {imgFailed ? (
              <div className="w-full h-full p-2 relative flex items-center justify-center transform translate-y-3 pointer-events-none select-none">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_30px_rgba(200,182,255,0.25)] animate-fade-in">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C8B6FF" />
                      <stop offset="100%" stopColor="#7DF9C4" />
                    </linearGradient>
                    <clipPath id="circleClip">
                      <circle cx="100" cy="100" r="85" />
                    </clipPath>
                  </defs>
                  
                  <g clipPath="url(#circleClip)">
                    <rect x="0" y="0" width="200" height="200" fill="#0d1426" opacity="0.6" />
                    <path d="M50 160 C50 135, 70 125, 100 125 C130 125, 150 135, 150 160 L160 200 L40 200 Z" fill="url(#avatarGrad)" opacity="0.85" />
                    <path d="M92 105 L108 105 L105 128 L95 128 Z" fill="#F8FAFC" opacity="0.9" />
                    <ellipse cx="100" cy="85" rx="22" ry="26" fill="#F8FAFC" />
                    <rect x="85" y="80" width="12" height="8" rx="2" stroke="#05080f" strokeWidth="1.5" />
                    <rect x="103" y="80" width="12" height="8" rx="2" stroke="#05080f" strokeWidth="1.5" />
                    <line x1="97" y1="84" x2="103" y2="84" stroke="#05080f" strokeWidth="1.5" />
                    <path d="M96 98 Q100 101, 104 98" stroke="#05080f" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M72 85 C72 50, 128 50, 128 85 C128 92, 122 105, 120 108 C116 112, 114 100, 114 96 C114 92, 106 88, 100 88 C94 88, 86 92, 86 96 C86 100, 84 112, 80 108 C78 105, 72 92, 72 85 Z" fill="#141e3a" />
                  </g>
                  <circle cx="100" cy="52" r="3" fill="#7DF9C4" />
                  <circle cx="65" cy="75" r="2" fill="#C8B6FF" />
                  <circle cx="138" cy="82" r="2" fill="#C8B6FF" />
                </svg>
              </div>
            ) : (
              <img
                src="/src/assets/bianca.jpg"
                alt="Bianca - Psicóloga Especialista en Ansiedad Juvenil"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover rounded-full filter brightness-[1.05] contrast-[0.98] transition-transform duration-700 group-hover:scale-105"
              />
            )}
            
            {/* Etiqueta flotante con Glassmorphism */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass border-white/10 px-3 py-1.5 rounded-lg flex flex-col items-center z-20 pointer-events-none">
              <span className="text-text-primary text-xs font-bold font-display">Bianca</span>
              <span className="text-[10px] text-text-muted">Especialista en Ansiedad</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
