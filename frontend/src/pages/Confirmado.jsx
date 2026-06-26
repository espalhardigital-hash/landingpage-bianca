import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Confirmado() {
  return (
    <div className="min-h-screen bg-dark-950 text-text-primary flex flex-col justify-between pt-28">
      <Header />
      <main className="container mx-auto max-w-md px-6 py-12 flex flex-col items-center justify-center text-center my-auto space-y-6">
        
        {/* Círculo animado */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full bg-glow-mint/10 border border-glow-mint/30 animate-pulse pointer-events-none" />
          <CheckCircle2 className="w-16 h-16 text-glow-mint drop-shadow-[0_0_15px_rgba(125,249,196,0.5)] z-10" />
        </div>

        <div className="space-y-3">
          <span className="text-glow-mint text-xs font-semibold tracking-widest uppercase bg-glow-mint/10 px-3 py-1 rounded-full border border-glow-mint/20 w-fit mx-auto">
            Suscripción Activada
          </span>
          <h1 className="font-display font-extrabold text-3xl text-text-primary">
            ¡Desafío Confirmado!
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            Tu email ha sido validado correctamente. A partir de mañana a primera hora recibirás tu primer micro-ejercicio diario de 5 minutos en tu bandeja.
          </p>
        </div>

        <div className="glass p-5 rounded-xl border border-white/5 w-full flex items-center gap-3 text-left">
          <div className="p-2 rounded bg-glow-lavender/10 text-glow-lavender">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-primary font-display uppercase tracking-widest">Consejo de Bianca</h4>
            <p className="text-xs text-text-muted mt-0.5">Agrega onboarding@resend.dev a tus contactos para evitar que el desafío caiga en spam.</p>
          </div>
        </div>

        <Link
          to="/"
          className="w-full flex items-center justify-center gap-2 bg-glow-lavender hover:bg-glow-lavender/90 text-dark-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(200,182,255,0.2)]"
        >
          Volver a la Landing Page
          <ArrowRight className="w-4 h-4" />
        </Link>

      </main>
      <Footer />
    </div>
  );
}
