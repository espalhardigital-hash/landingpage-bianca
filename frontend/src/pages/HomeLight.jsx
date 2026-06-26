import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, CheckCircle2, AlertCircle, Download, 
  ChevronDown, Heart, Sparkles, Shield, User, 
  Check, ArrowRight, Star
} from 'lucide-react';
import EmailForm from '../components/EmailForm';

export default function HomeLight() {
  const [imgFailed, setImgFailed] = useState(false);

  // Variantes para entradas de scroll fluidas (ease-out-expo)
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const handleScrollToCta = () => {
    const ctaSection = document.getElementById('cta-final-light');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-body antialiased selection:bg-brand-coral/10 selection:text-brand-coral overflow-x-hidden">
      
      {/* 1. Header Fijo Premium (Glassmorphic Sutil) */}
      <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-xl border-b border-slate-200/50 z-50 transition-all duration-300">
        <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="font-serif italic font-semibold text-2xl tracking-wide text-brand-teal">
              Bianca Fabri
            </span>
            <div className="w-[1px] h-4 bg-slate-300" />
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold font-display">
              mente en calma
            </span>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleScrollToCta}
            className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(15,23,42,0.15)] hover:shadow-[0_4px_20px_rgba(15,23,42,0.25)] hover:scale-[1.02]"
          >
            Comenzar Gratis
          </motion.button>
        </div>
      </header>

      {/* 2. Hero Section (Inspirada en el estilo limpio y espacioso de Apple) */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-36 px-6 overflow-hidden">
        {/* Luces sutiles y elegantes en el fondo */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-coral/3 blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Columna Izquierda (Titulares de gran formato y Formulario) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-4"
            >
              <motion.span 
                variants={fadeInUp}
                className="text-brand-coral text-xs md:text-sm font-bold tracking-widest uppercase bg-brand-coral/10 px-4 py-1.5 rounded-full w-fit block"
              >
                Método Clínico + Empatía Práctica
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#0f172a]"
              >
                Respira profundo. <br />
                <span className="font-serif italic text-brand-teal font-medium block mt-2 text-6xl sm:text-7xl lg:text-8xl">
                  Encuentra el rumbo.
                </span>
              </motion.h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[#334155] text-lg sm:text-xl max-w-xl leading-relaxed font-light"
            >
              El ritmo del mundo moderno no tiene por qué abrumarte. Descarga tu <strong className="font-semibold text-brand-teal">eBook práctico gratuito</strong> contra ataques de pánico y comienza el <strong className="font-semibold text-brand-teal">desafío de 7 días</strong> con micro-ejercicios prácticos de 5 minutos directamente en tu correo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-2"
            >
              <EmailForm source="hero_light" theme="light" />
            </motion.div>
          </div>

          {/* Columna Derecha (Foto de Bianca con sombras premium difusas y curvas fluidas) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group p-3 bg-white rounded-[32px] border border-slate-200/60 shadow-[0_30px_70px_rgba(8,65,92,0.12)] hover:shadow-[0_40px_80px_rgba(8,65,92,0.18)] transition-all duration-500 hover:scale-[1.01]">
              <div className="w-[280px] h-[340px] sm:w-[330px] sm:h-[400px] overflow-hidden rounded-[24px]">
                {/* Fallback de Avatar si la foto falla */}
                {imgFailed ? (
                  <div className="w-full h-full relative flex items-center justify-center bg-brand-light-bg select-none">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 drop-shadow-md">
                      <defs>
                        <linearGradient id="lightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#08415c" />
                          <stop offset="100%" stopColor="#c84b31" />
                        </linearGradient>
                        <clipPath id="circleClipAvatar">
                          <circle cx="100" cy="100" r="85" />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#circleClipAvatar)">
                        <rect x="0" y="0" width="200" height="200" fill="#edf4f7" />
                        <path d="M50 160 C50 135, 70 125, 100 125 C130 125, 150 135, 150 160 L160 200 L40 200 Z" fill="url(#lightGrad)" opacity="0.8" />
                        <ellipse cx="100" cy="85" rx="22" ry="26" fill="#052a3d" opacity="0.9" />
                      </g>
                    </svg>
                  </div>
                ) : (
                  <img
                    src="/src/assets/bianca.jpg"
                    alt="Bianca Fabri - Psicóloga"
                    onError={() => setImgFailed(true)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              {/* Etiqueta Flotante Premium con micro-glare */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-slate-200/50 p-4 rounded-2xl shadow-lg flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">Bianca Fabri</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">Psicóloga Clínica</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Disponible en línea" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Sección de Empatía (Diseño Bento Grid interactivo) */}
      <section className="relative py-24 bg-white border-t border-slate-200/60 z-10">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a]">
              ¿Te has identificado con <br />
              <span className="font-serif italic text-brand-teal font-medium">alguno de estos retos</span>?
            </h2>
            <p className="text-slate-500 font-light mt-4">La ansiedad juvenil se manifiesta de formas muy reales en el día a día moderno.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Vergüenza Social",
                desc: "Temor constante a ser juzgado, a actuar de manera inadecuada o a sentirte expuesto en situaciones sociales y digitales."
              },
              {
                title: "Tendencia al Aislamiento",
                desc: "Dificultad para conectar de forma genuina, cancelando planes y buscando refugio en la soledad digital recurrentemente."
              },
              {
                title: "Alerta Permanente",
                desc: "Sentir que tu mente y tu cuerpo nunca logran relajarse por completo, viviendo con tensión muscular y sobrepensamiento."
              },
              {
                title: "Dificultad para decir 'No'",
                desc: "Decir que sí a todo por miedo a desagradar, sobrecargándote de compromisos que terminan ahogándote por completo."
              },
              {
                title: "Desconexión Personal",
                desc: "Sentir que actúas en 'piloto automático' para encajar, perdiendo el contacto con tus gustos, valores y deseos reales."
              },
              {
                title: "Prisionero del Pasado",
                desc: "Dar vueltas repetidamente en tu cabeza a errores, críticas o traumas de hace años, sin poder soltar las experiencias dolorosas."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-brand-teal-light border border-brand-teal/5 p-6 rounded-[24px] shadow-[0_15px_40px_rgba(8,65,92,0.02)] hover:shadow-[0_20px_50px_rgba(8,65,92,0.06)] hover:-translate-y-2.5 transition-all duration-500 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 text-brand-teal">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif italic text-xl font-medium text-slate-800">{item.title}</h3>
                  <p className="text-slate-600/90 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Sección de Contraste con Corte Oblicuo (Estilo Apple AirPods 4) */}
      <section 
        className="relative py-32 bg-[#052a3d] text-white overflow-hidden z-20"
        style={{ clipPath: 'polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)' }}
      >
        {/* Glow suave para iluminar el interior */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-brand-coral/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center py-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Recupera la <span className="font-serif italic text-brand-coral font-medium">agencia sobre tu vida</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
              La terapia no se trata de cambiar quién eres, sino de derribar los muros de la ansiedad para permitirte conectar con tu versión más libre y auténtica.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left"
          >
            {[
              {
                icon: <Heart className="w-6 h-6 text-brand-coral" />,
                title: "Vínculo Seguro",
                desc: "Establecemos una relación terapéutica libre de juicios y etiquetas, un espacio real para que te expreses sin máscaras."
              },
              {
                icon: <Sparkles className="w-6 h-6 text-brand-coral" />,
                title: "Estrategias de Regulación",
                desc: "Micro-ejercicios concretos de respiración y descarga somática para desactivar la alarma del pánico en minutos."
              },
              {
                icon: <Shield className="w-6 h-6 text-brand-coral" />,
                title: "Enfoque de Integración",
                desc: "Procesamos los desencadenantes emocionales y de trauma de raíz, permitiéndote tomar las riendas de tu día a día."
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-8 rounded-[24px] flex flex-col space-y-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-serif italic text-xl font-medium text-white">{card.title}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16"
          >
            <button 
              onClick={handleScrollToCta}
              className="bg-brand-coral hover:bg-brand-coral-hover text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-[0_4px_25px_rgba(200,75,49,0.35)] hover:shadow-[0_4px_30px_rgba(200,75,49,0.5)] inline-flex items-center gap-3 text-sm tracking-wide"
            >
              Comenzar Desafío Ahora
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 5. Biografía / Autoridad (Estilo Editorial Espacioso) */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto max-w-4xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-brand-teal-light shadow-[0_20px_50px_rgba(8,65,92,0.06)] group">
              {imgFailed ? (
                <div className="w-full h-full bg-brand-teal-light flex items-center justify-center">
                  <User className="w-24 h-24 text-brand-teal" />
                </div>
              ) : (
                <img
                  src="/src/assets/bianca.jpg"
                  alt="Bianca Fabri Psicóloga"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6 text-left"
          >
            <span className="text-brand-coral text-xs font-bold uppercase tracking-widest bg-brand-coral/10 px-3 py-1 rounded-full">
              Tu Guía en este Proceso
            </span>
            <h2 className="text-3.5xl sm:text-4xl font-normal leading-tight text-[#0f172a]">
              Hola, soy la <span className="font-serif italic text-brand-teal font-medium">Psic. Bianca Fabri</span>
            </h2>
            <p className="text-slate-600 font-light leading-relaxed text-base">
              Como psicóloga clínica especialista en ansiedad y manejo del estrés juvenil, comprendo perfectamente que los discursos médicos tradicionales y fríos muchas veces alejan en lugar de ayudar.
            </p>
            <p className="text-slate-600 font-light leading-relaxed text-base">
              Mi objetivo es ofrecerte un puente práctico y empático: herramientas concretas de regulación que puedes aplicar en **5 minutos al día** sin interrumpir tu rutina diaria, construidas sobre bases de terapia cognitivo-conductual.
            </p>
            <div className="pt-2 flex items-center gap-3 text-sm text-brand-teal font-bold font-display">
              <CheckCircle2 className="w-5 h-5 text-brand-coral flex-shrink-0" />
              <span>Psicóloga Colegiada con Enfoque en Ansiedad Juvenil</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. Testimonios */}
      <section className="py-20 bg-brand-teal-light/30 border-t border-b border-slate-200/50 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-normal text-[#0f172a] mb-12"
          >
            Lo que dicen <span className="font-serif italic text-brand-teal">quienes ya lo probaron</span>:
          </motion.h2>

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
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white p-8 rounded-[24px] border border-slate-200/50 shadow-[0_10px_30px_rgba(8,65,92,0.01)] hover:shadow-[0_15px_40px_rgba(8,65,92,0.04)] transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonio.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-coral text-brand-coral" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    "{testimonio.text}"
                  </p>
                </div>
                <h4 className="text-xs font-bold text-brand-teal mt-6 tracking-wider uppercase font-display">
                  — {testimonio.author}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final de Registro (Diseño Tarjeta Central Premium estilo Apple) */}
      <section id="cta-final-light" className="relative py-28 md:py-36 bg-[#f8fafc] overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-brand-teal/3 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#052a3d] text-white rounded-[40px] px-8 py-16 md:p-20 text-center flex flex-col items-center space-y-6 shadow-[0_30px_80px_rgba(8,65,92,0.25)] border border-white/5 relative overflow-hidden"
          >
            {/* Elemento de iluminación decorativo interno */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-coral/10 rounded-full blur-[80px] pointer-events-none" />

            <span className="text-brand-coral text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full z-10">
              Acceso 100% Gratuito
            </span>
            <h2 className="text-3.5xl sm:text-5xl font-bold tracking-tight text-white leading-tight z-10 max-w-xl">
              Inicia tu camino hacia <br />
              <span className="font-serif italic text-brand-coral font-medium text-4.5xl sm:text-6xl block mt-2">una mente en calma.</span>
            </h2>
            <p className="text-slate-300 font-light leading-relaxed max-w-md z-10 text-sm sm:text-base">
              Introduce tu correo electrónico para descargar la guía de técnicas de shock de inmediato e iniciar el desafío práctico mañana mismo en tu buzón.
            </p>

            <div className="w-full flex justify-center pt-4 z-10">
              <EmailForm source="cta_light" theme="light" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-16 bg-white border-t border-slate-200/60 text-slate-500 text-xs sm:text-sm relative z-10">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif italic font-bold text-xl text-brand-teal">Bianca Fabri</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400 font-light">&copy; {new Date().getFullYear()} Mente en Calma.</span>
          </div>

          <div className="flex gap-6 font-semibold text-slate-700">
            <a href="/privacidad?theme=light" className="hover:text-brand-coral transition-colors duration-300">Privacidad</a>
            <a href="/terminos?theme=light" className="hover:text-brand-coral transition-colors duration-300">Términos de Uso</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
