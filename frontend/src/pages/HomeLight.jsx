import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, CheckCircle2, AlertCircle, Download, 
  ChevronDown, Heart, Sparkles, Shield, User, 
  Check, ArrowRight, MessageSquare, Star
} from 'lucide-react';
import EmailForm from '../components/EmailForm';

export default function HomeLight() {
  const [imgFailed, setImgFailed] = useState(false);

  // Animaciones Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const handleScrollToCta = () => {
    const ctaSection = document.getElementById('cta-final-light');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light-bg text-brand-teal-dark font-body antialiased selection:bg-brand-coral/10 selection:text-brand-coral">
      
      {/* 1. Header Minimalista */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-brand-teal/5 z-50 transition-all duration-300">
        <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif italic font-bold text-2xl tracking-wide text-brand-teal">
              Bianca
            </span>
            <div className="w-[1px] h-4 bg-brand-teal/20" />
            <span className="text-[10px] uppercase tracking-widest text-brand-teal/70 font-semibold font-display">
              mente en calma
            </span>
          </div>
          
          <button 
            onClick={handleScrollToCta}
            className="bg-brand-coral hover:bg-brand-coral-hover text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-[0_4px_10px_rgba(200,75,49,0.2)]"
          >
            Iniciar Desafío Gratis
          </button>
        </div>
      </header>

      {/* 2. Hero Section (Visual Clara y Elegante) */}
      <section className="relative pt-32 pb-20 md:pb-28 px-6 overflow-hidden">
        {/* Luces de fondo suaves */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-teal/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-coral/5 blur-[90px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Columna Izquierda (Texto y Captura) */}
          <div className="md:col-span-7 flex flex-col space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-brand-coral text-xs md:text-sm font-bold tracking-widest uppercase bg-brand-coral/10 px-3 py-1 rounded-full w-fit">
                Método Clínico + Empatía Práctica
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-brand-teal-dark font-normal">
                Encuentra el <br />
                <span className="font-serif italic text-brand-teal font-medium text-5xl sm:text-6xl lg:text-7xl block my-1">
                  equilibrio
                </span>
                entre la mente y la calma.
              </h1>
            </div>

            <p className="text-brand-teal-dark/80 text-base sm:text-lg max-w-xl leading-relaxed font-light">
              Tu ritmo diario no tiene por qué abrumarte. Recibe tu <strong className="font-medium text-brand-teal">eBook gratuito inmediato</strong> para frenar los ataques de pánico y únete a nuestro <strong className="font-medium text-brand-teal">desafío de 7 días</strong> con micro-ejercicios prácticos de 5 minutos.
            </p>

            <div className="pt-2">
              <EmailForm source="hero_light" theme="light" />
            </div>
          </div>

          {/* Columna Derecha (Foto Bianca en Marco Clara) */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] rounded-2xl bg-white border border-brand-teal/10 shadow-[0_15px_40px_-15px_rgba(8,65,92,0.15)] overflow-hidden group transition-all duration-500 hover:border-brand-teal/20 p-2">
              
              {/* Fallback de Avatar si la foto falla */}
              {imgFailed ? (
                <div className="w-full h-full relative flex items-center justify-center bg-brand-light-bg rounded-xl select-none">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 drop-shadow-md">
                    <defs>
                      <linearGradient id="avatarLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#08415c" />
                        <stop offset="100%" stopColor="#c84b31" />
                      </linearGradient>
                      <clipPath id="circleClipLight">
                        <circle cx="100" cy="100" r="85" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#circleClipLight)">
                      <rect x="0" y="0" width="200" height="200" fill="#edf4f7" />
                      <path d="M50 160 C50 135, 70 125, 100 125 C130 125, 150 135, 150 160 L160 200 L40 200 Z" fill="url(#avatarLightGrad)" opacity="0.8" />
                      <ellipse cx="100" cy="85" rx="22" ry="26" fill="#052a3d" opacity="0.9" />
                      <circle cx="100" cy="85" r="22" fill="#edf4f7" opacity="0.2" />
                    </g>
                  </svg>
                </div>
              ) : (
                <img
                  src="/src/assets/bianca.jpg"
                  alt="Bianca - Psicóloga Especialista en Ansiedad Juvenil"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}

              {/* Etiqueta Flotante de Firma */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-brand-teal/10 px-4 py-2 rounded-xl flex flex-col items-center shadow-md">
                <span className="text-brand-teal-dark text-xs font-bold font-display">Bianca Macedo</span>
                <span className="text-[10px] text-brand-teal-dark/60 font-medium">Psicóloga Clínica</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Sección de Empatía (Tarjetas Claras estilo Psicología) */}
      <section className="py-16 bg-white border-t border-brand-teal/5">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-normal text-brand-teal-dark mb-12">
            Te has identificado con <span className="font-serif italic text-brand-coral">algunas de estas situaciones</span>:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "Sentir vergüenza o inadecuación ante situaciones de estrés social.",
              "Dificultad para conectar con otros y una tendencia al aislamiento.",
              "Vivir en un estado de alerta constante, sin poder relajar la mente.",
              "Tener mucha dificultad para decir \"no\" y poner límites sanos.",
              "Sentir que has perdido la conexión con tu propia autenticidad.",
              "Vivir sobrepensando errores o traumas del pasado de forma recurrente."
            ].map((situacion, index) => (
              <div 
                key={index}
                className="bg-brand-teal-light border-l-4 border-brand-teal p-5 rounded-r-xl shadow-[0_4px_15px_rgba(8,65,92,0.02)] flex items-start space-x-3 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(8,65,92,0.06)]"
              >
                <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-teal" />
                </div>
                <p className="text-brand-teal-dark/90 text-sm sm:text-base font-medium font-body leading-relaxed">
                  {situacion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Descubre el Poder de la Terapia (Sección Contraste Azul Petróleo) */}
      <section className="relative py-20 bg-brand-teal-dark text-white overflow-hidden">
        {/* Chevron Decorativo de división */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="w-10 h-5 bg-white clip-chevron-down flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-brand-teal-dark" />
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-normal mb-4">
            Descubre el <span className="font-serif italic text-brand-coral">poder de la calma</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-16 text-sm sm:text-base font-light leading-relaxed">
            En este viaje no estás sola/o. Aquí encuentras un espacio seguro, práctico y estructurado para reconciliarte con tu mente y aprender a gestionar la ansiedad de forma sana.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <Heart className="w-6 h-6 text-brand-coral" />,
                title: "Encuentra Seguridad",
                desc: "Establece un espacio interno de protección y herramientas de estabilización inmediata en ataques de pánico."
              },
              {
                icon: <Sparkles className="w-6 h-6 text-brand-coral" />,
                title: "Acoge tus Emociones",
                desc: "Comprende qué te está diciendo la ansiedad en lugar de luchar contra ella o intentar apagarla."
              },
              {
                icon: <Shield className="w-6 h-6 text-brand-coral" />,
                title: "Recupera tu Autonomía",
                desc: "Implementa hábitos y límites diarios sencillos para retomar el control de tus decisiones."
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col space-y-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-serif italic text-xl text-white font-medium">{card.title}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button 
              onClick={handleScrollToCta}
              className="bg-brand-coral hover:bg-brand-coral-hover text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-[0_4px_20px_rgba(200,75,49,0.3)] inline-flex items-center gap-2"
            >
              Comenzar Desafío Ahora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Biografía / Autoridad */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-brand-teal-light shadow-lg">
              {imgFailed ? (
                <div className="w-full h-full bg-brand-teal-light flex items-center justify-center">
                  <User className="w-20 h-20 text-brand-teal" />
                </div>
              ) : (
                <img
                  src="/src/assets/bianca.jpg"
                  alt="Bianca Macedo Psicóloga"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          <div className="md:col-span-7 space-y-5 text-left">
            <span className="text-brand-coral text-xs font-bold uppercase tracking-wider">Tu Guía en este Proceso</span>
            <h2 className="text-3xl font-normal leading-tight">
              Hola, soy <span className="font-serif italic text-brand-teal">Bianca Macedo</span>
            </h2>
            <p className="text-brand-teal-dark/80 font-light leading-relaxed text-sm sm:text-base">
              Como psicóloga clínica especialista en ansiedad juvenil, entiendo que la vida digital moderna, la presión académica y social pueden abrumarnos rápidamente.
            </p>
            <p className="text-brand-teal-dark/80 font-light leading-relaxed text-sm sm:text-base">
              Mi enfoque no se basa en teorías complejas, sino en **acciones de 5 minutos** adaptadas al ritmo de tu día a día, respaldadas por terapia cognitivo-conductual y diseñadas con empatía real.
            </p>
            <div className="pt-2 flex items-center gap-3 text-sm text-brand-teal font-semibold">
              <CheckCircle2 className="w-5 h-5 text-brand-coral" />
              <span>Psicóloga Colegiada y Especialista en Trauma</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Testimonios */}
      <section className="py-16 bg-brand-teal-light/50 border-t border-b border-brand-teal/5">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-normal mb-12">
            Lo que dicen <span className="font-serif italic text-brand-teal">quienes ya lo probaron</span>:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "El eBook me dio herramientas concretas que pude aplicar en medio de un ataque de estrés antes de un examen. La guía de respiración realmente funciona.",
                author: "Sofía D., 22 años",
                stars: 5
              },
              {
                text: "Los desafíos diarios de 5 minutos por correo son súper amigables. No requiere horas de lectura y los ejercicios te ayudan a pisar tierra de inmediato.",
                author: "Mateo G., 19 años",
                stars: 5
              },
              {
                text: "Me encantó el tono directo y sin rodeos. Se siente muy empático y alejado de la jerga clínica fría. Altamente recomendado.",
                author: "Valeria R., 24 años",
                stars: 5
              }
            ].map((testimonio, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-brand-teal/5 shadow-[0_4px_15px_rgba(8,65,92,0.01)] flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonio.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-coral text-brand-coral" />
                    ))}
                  </div>
                  <p className="text-brand-teal-dark/80 text-sm font-light leading-relaxed">
                    "{testimonio.text}"
                  </p>
                </div>
                <h4 className="text-xs font-bold text-brand-teal mt-6 tracking-wide">
                  — {testimonio.author}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final de Registro (Azul Petróleo) */}
      <section id="cta-final-light" className="py-20 bg-brand-teal-dark text-white relative">
        <div className="container mx-auto max-w-3xl px-6 text-center flex flex-col items-center space-y-6">
          <span className="text-brand-coral text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            Acceso 100% Gratuito
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
            Descarga tu guía y empieza tu <span className="font-serif italic text-brand-coral">desafío de 7 días</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed max-w-lg">
            Introduce tu correo para descargar el eBook de forma inmediata e iniciar mañana mismo con los micro-ejercicios prácticos en tu bandeja de entrada.
          </p>

          <div className="w-full flex justify-center pt-4">
            <EmailForm source="cta_light" theme="light" />
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-12 bg-white border-t border-brand-teal/5 text-brand-teal-dark/60 text-xs sm:text-sm">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif italic font-bold text-lg text-brand-teal">Bianca</span>
            <span>&copy; {new Date().getFullYear()} Mente en Calma. Todos los derechos reservados.</span>
          </div>

          <div className="flex gap-4 font-semibold text-brand-teal-dark/80">
            <a href="/privacidad" className="hover:text-brand-coral transition-colors">Privacidad</a>
            <a href="/terminos" className="hover:text-brand-coral transition-colors">Términos de Uso</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
