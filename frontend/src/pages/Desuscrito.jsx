import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Desuscrito() {
  const isLight = typeof window !== 'undefined' && 
    (window.location.hostname.includes('landingclara') || window.location.search.includes('theme=light'));

  return (
    <div className={`min-h-screen flex flex-col justify-between pt-28 ${
      isLight ? 'bg-brand-light-bg text-brand-teal-dark' : 'bg-dark-950 text-text-primary'
    }`}>
      <Header />
      <main className="container mx-auto max-w-md px-6 py-12 flex flex-col items-center justify-center text-center my-auto space-y-6">
        
        {/* Círculo animado */}
        <div className="relative flex items-center justify-center">
          <div className={`absolute w-24 h-24 rounded-full border animate-pulse pointer-events-none ${
            isLight ? 'bg-brand-teal/5 border-brand-teal/20' : 'bg-glow-lavender/10 border-glow-lavender/30'
          }`} />
          <ShieldAlert className={`w-16 h-16 z-10 ${
            isLight ? 'text-brand-coral' : 'text-glow-lavender drop-shadow-[0_0_15px_rgba(200,182,255,0.4)]'
          }`} />
        </div>

        <div className="space-y-3">
          <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border w-fit mx-auto ${
            isLight 
              ? 'text-brand-coral bg-brand-coral/10 border-brand-coral/20' 
              : 'text-glow-lavender bg-glow-lavender/10 border-glow-lavender/20'
          }`}>
            Secuencia Detenida
          </span>
          <h1 className={`font-display font-extrabold text-3xl ${
            isLight ? 'text-brand-teal-dark' : 'text-text-primary'
          }`}>
            Te has desuscrito
          </h1>
          <p className={`text-sm leading-relaxed max-w-sm ${
            isLight ? 'text-brand-teal-dark/70' : 'text-text-secondary'
          }`}>
            Lamentamos verte partir. Tu dirección de correo ha sido dada de baja de la secuencia de correos de Mente en Calma. No recibirás más mensajes del desafío.
          </p>
        </div>

        <Link
          to={isLight ? "/?theme=light" : "/"}
          className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
            isLight 
              ? 'bg-brand-coral hover:bg-brand-coral-hover text-white shadow-[0_4px_14px_rgba(200,75,49,0.3)]' 
              : 'bg-dark-800 hover:bg-dark-700 text-text-primary border border-white/10'
          }`}
        >
          Volver a la Landing Page
          <ArrowRight className="w-4 h-4" />
        </Link>

      </main>
      <Footer />
    </div>
  );
}
