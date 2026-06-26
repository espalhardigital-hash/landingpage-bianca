import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-white/5 py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-glow-lavender/10 flex items-center justify-center border border-glow-lavender/20">
            <Sparkles className="w-3.5 h-3.5 text-glow-lavender" />
          </div>
          <span className="font-display font-bold text-base text-text-primary">
            Mente en Calma
          </span>
        </div>

        {/* Derechos de Autor */}
        <div className="text-xs text-text-muted text-center md:text-left order-3 md:order-2">
          &copy; {currentYear} Mente en Calma. Todos los derechos reservados.
        </div>

        {/* Enlaces Legales */}
        <div className="flex gap-6 text-xs text-text-muted hover:text-text-secondary order-2 md:order-3">
          <Link 
            to="/privacidad" 
            className="hover:text-glow-lavender transition-colors duration-300"
          >
            Política de Privacidad
          </Link>
          <Link 
            to="/terminos" 
            className="hover:text-glow-mint transition-colors duration-300"
          >
            Términos y Condiciones
          </Link>
        </div>

      </div>
    </footer>
  );
}
