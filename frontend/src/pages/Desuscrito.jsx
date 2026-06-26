import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Desuscrito() {
  return (
    <div className="min-h-screen bg-dark-950 text-text-primary flex flex-col justify-between pt-28">
      <Header />
      <main className="container mx-auto max-w-md px-6 py-12 flex flex-col items-center justify-center text-center my-auto space-y-6">
        
        {/* Círculo animado */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full bg-glow-lavender/10 border border-glow-lavender/30 animate-pulse pointer-events-none" />
          <ShieldAlert className="w-16 h-16 text-glow-lavender drop-shadow-[0_0_15px_rgba(200,182,255,0.4)] z-10" />
        </div>

        <div className="space-y-3">
          <span className="text-glow-lavender text-xs font-semibold tracking-widest uppercase bg-glow-lavender/10 px-3 py-1 rounded-full border border-glow-lavender/20 w-fit mx-auto">
            Secuencia Detenida
          </span>
          <h1 className="font-display font-extrabold text-3xl text-text-primary">
            Te has desuscrito
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            Lamentamos verte partir. Tu dirección de correo ha sido dada de baja de la secuencia de correos de Mente en Calma. No recibirás más mensajes del desafío.
          </p>
        </div>

        <Link
          to="/"
          className="w-full flex items-center justify-center gap-2 bg-dark-800 hover:bg-dark-700 text-text-primary font-bold py-3 px-6 rounded-lg border border-white/10 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Volver a la Landing Page
          <ArrowRight className="w-4 h-4" />
        </Link>

      </main>
      <Footer />
    </div>
  );
}
