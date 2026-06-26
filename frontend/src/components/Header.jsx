import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  const scrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
      // Darle focus al input si es posible
      const emailInput = heroSection.querySelector('input[type="email"]');
      if (emailInput) {
        setTimeout(() => emailInput.focus(), 800);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-glow-lavender/10 flex items-center justify-center border border-glow-lavender/20 shadow-[0_0_10px_rgba(200,182,255,0.1)] group-hover:border-glow-lavender/40 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-glow-lavender animate-pulse" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-glow-lavender to-glow-mint bg-clip-text text-transparent">
          Mente en Calma
        </span>
      </a>

      {/* Action CTA */}
      <a
        href="#hero"
        onClick={scrollToHero}
        className="text-xs md:text-sm font-semibold text-text-primary px-4 py-2 rounded-full border border-white/10 hover:border-glow-mint/40 hover:bg-glow-mint/5 hover:text-glow-mint transition-all duration-300"
      >
        Empezar gratis
      </a>
    </header>
  );
}
