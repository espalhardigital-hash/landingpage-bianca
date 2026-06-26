import React from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

export default function CtaFinal() {
  return (
    <section 
      id="cta-final" 
      aria-labelledby="cta-title"
      className="relative py-26 md:py-30 lg:py-34 px-6 md:px-12 bg-dark-900 border-t border-white/5 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Glow central gigante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-glow-lavender/5 blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 space-y-8 flex flex-col items-center">
        
        <div className="space-y-4">
          <span className="text-glow-mint text-xs font-semibold tracking-widest uppercase bg-glow-mint/10 px-3 py-1 rounded-full border border-glow-mint/20 w-fit mx-auto">
            Último Paso
          </span>
          
          {/* Cierre tipográfico gigante */}
          <h2 id="cta-title" className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-none max-w-2xl mx-auto uppercase">
            Toma las riendas de tu <span className="text-glow-lavender">tranquilidad</span> hoy.
          </h2>
        </div>

        <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          No dejes para mañana la calma que puedes sentir hoy. Introduce tu email, descarga tu eBook gratis y activa tu desafío diario.
        </p>

        {/* Formulario Replicado */}
        <div className="w-full max-w-md pt-4">
          <EmailForm source="cta-final" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 text-xs text-text-muted">
          <span>🔒 Tus datos están seguros</span>
          <span className="hidden sm:inline">•</span>
          <span>⚡ Entrega y acceso instantáneo</span>
          <span className="hidden sm:inline">•</span>
          <span>❌ Desuscripción simple</span>
        </div>

      </div>
    </section>
  );
}
