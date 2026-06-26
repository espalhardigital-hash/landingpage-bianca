import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const isLight = typeof window !== 'undefined' && 
    (window.location.hostname.includes('landingclara') || window.location.search.includes('theme=light'));
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-6 md:px-12 transition-all duration-300 border-t ${
      isLight ? 'bg-white border-brand-teal/5 text-brand-teal-dark/60' : 'bg-dark-950 border-white/5 text-text-muted'
    }`}>
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="flex items-center gap-2">
          {isLight ? (
            <span className="font-serif italic font-bold text-lg text-brand-teal">
              Bianca
            </span>
          ) : (
            <>
              <div className="w-6 h-6 rounded bg-glow-lavender/10 flex items-center justify-center border border-glow-lavender/20">
                <Sparkles className="w-3.5 h-3.5 text-glow-lavender" />
              </div>
              <span className="font-display font-bold text-base text-text-primary">
                Mente en Calma
              </span>
            </>
          )}
        </div>

        {/* Derechos de Autor */}
        <div className={`text-xs text-center md:text-left order-3 md:order-2 ${
          isLight ? 'text-brand-teal-dark/60' : 'text-text-muted'
        }`}>
          &copy; {currentYear} {isLight ? 'Mente en Calma' : 'Mente en Calma'}. Todos los derechos reservados.
        </div>

        {/* Enlaces Legales */}
        <div className={`flex gap-6 text-xs order-2 md:order-3 font-semibold ${
          isLight ? 'text-brand-teal-dark/80' : 'text-text-muted'
        }`}>
          <Link 
            to={isLight ? "/privacidad?theme=light" : "/privacidad"} 
            className={`transition-colors duration-300 ${isLight ? 'hover:text-brand-coral' : 'hover:text-glow-lavender'}`}
          >
            Política de Privacidad
          </Link>
          <Link 
            to={isLight ? "/terminos?theme=light" : "/terminos"} 
            className={`transition-colors duration-300 ${isLight ? 'hover:text-brand-coral' : 'hover:text-glow-mint'}`}
          >
            Términos y Condiciones
          </Link>
        </div>

      </div>
    </footer>
  );
}
