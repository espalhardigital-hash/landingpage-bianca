import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Confirmado() {
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
            isLight ? 'bg-brand-teal/5 border-brand-teal/20' : 'bg-glow-mint/10 border-glow-mint/30'
          }`} />
          <CheckCircle2 className={`w-16 h-16 z-10 ${
            isLight ? 'text-brand-teal' : 'text-glow-mint drop-shadow-[0_0_15px_rgba(125,249,196,0.5)]'
          }`} />
        </div>

        <div className="space-y-3">
          <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border w-fit mx-auto ${
            isLight 
              ? 'text-brand-coral bg-brand-coral/10 border-brand-coral/20' 
              : 'text-glow-mint bg-glow-mint/10 border-glow-mint/20'
          }`}>
            Suscripción Activada
          </span>
          <h1 className={`font-display font-extrabold text-3xl ${
            isLight ? 'text-brand-teal-dark' : 'text-text-primary'
          }`}>
            ¡Desafío Confirmado!
          </h1>
          <p className={`text-sm leading-relaxed max-w-sm ${
            isLight ? 'text-brand-teal-dark/70' : 'text-text-secondary'
          }`}>
            Tu email ha sido validado correctamente. A partir de mañana a primera hora recibirás tu primer micro-ejercicio diario de 5 minutos en tu bandeja.
          </p>
        </div>

        <div className={`p-5 rounded-xl border w-full flex items-center gap-3 text-left ${
          isLight ? 'bg-white border-brand-teal/10 shadow-sm' : 'glass border-white/5'
        }`}>
          <div className={`p-2 rounded ${
            isLight ? 'bg-brand-coral/10 text-brand-coral' : 'bg-glow-lavender/10 text-glow-lavender'
          }`}>
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-xs font-bold font-display uppercase tracking-widest ${
              isLight ? 'text-brand-teal-dark' : 'text-text-primary'
            }`}>Consejo de Bianca</h4>
            <p className={`text-xs mt-0.5 ${
              isLight ? 'text-brand-teal-dark/60' : 'text-text-muted'
            }`}>Agrega onboarding@resend.dev a tus contactos para evitar que el desafío caiga en spam.</p>
          </div>
        </div>

        <Link
          to={isLight ? "/?theme=light" : "/"}
          className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
            isLight 
              ? 'bg-brand-coral hover:bg-brand-coral-hover text-white shadow-[0_4px_14px_rgba(200,75,49,0.3)]' 
              : 'bg-glow-lavender hover:bg-glow-lavender/90 text-dark-950 shadow-[0_0_20px_rgba(200,182,255,0.2)]'
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
