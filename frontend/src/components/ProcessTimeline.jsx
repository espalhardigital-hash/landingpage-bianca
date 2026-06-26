import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Download, MailOpen, Compass } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Registro Express",
      desc: "Un solo email. Fricción cero. Sin contraseñas ni formularios eternos.",
      icon: UserPlus,
      color: "lavender"
    },
    {
      num: "02",
      title: "Descarga Inmediata",
      desc: "Obtienes el eBook en PDF al instante para aplicar técnicas de calma.",
      icon: Download,
      color: "mint"
    },
    {
      num: "03",
      title: "Desafío de 7 Días",
      desc: "Un micro-ejercicio diario de 5 minutos enviado directo a tu email.",
      icon: MailOpen,
      color: "lavender"
    },
    {
      num: "04",
      title: "Mente en Calma",
      desc: "Herramientas prácticas reales para tomar el control de tu día a día.",
      icon: Compass,
      color: "mint"
    }
  ];

  // Variantes para animar la línea de tiempo en base a scroll
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="process" 
      aria-labelledby="process-title"
      className="py-18 md:py-22 lg:py-26 px-6 md:px-12 bg-dark-950 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-glow-lavender text-xs font-semibold tracking-widest uppercase bg-glow-lavender/10 px-3 py-1 rounded-full border border-glow-lavender/20 w-fit mx-auto">
            ¿Cómo funciona el método?
          </span>
          <h2 id="process-title" className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
            El camino hacia el control mental
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Diseñado para integrarse en tu rutina diaria sin exigir horas de esfuerzo. Pasos directos, valor inmediato.
          </p>
        </div>

        {/* Línea de tiempo */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto"
        >
          {/* Línea conectora horizontal (solo desktop) */}
          <div className="absolute top-[39px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-glow-lavender/20 via-glow-mint/30 to-glow-lavender/20 hidden md:block z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const glowDotClass = step.color === 'mint' ? 'bg-glow-mint shadow-[0_0_15px_rgba(125,249,196,0.6)]' : 'bg-glow-lavender shadow-[0_0_15px_rgba(200,182,255,0.6)]';
            const textGlowClass = step.color === 'mint' ? 'text-glow-mint' : 'text-glow-lavender';
            
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="flex flex-col items-center md:items-start text-center md:text-left relative z-10 px-4 group"
              >
                {/* Cabecera del paso: Número + Icono */}
                <div className="flex flex-col items-center md:items-start gap-4 mb-4">
                  {/* Punto y número del paso */}
                  <div className="flex items-center gap-3">
                    <div className={`w-3.5 h-3.5 rounded-full ${glowDotClass} group-hover:scale-125 transition-transform duration-300`} />
                    <span className="font-display font-extrabold text-sm text-text-muted">PASO {step.num}</span>
                  </div>
                  
                  {/* Icono animado */}
                  <div className={`w-14 h-14 rounded-xl glass border border-white/5 flex items-center justify-center ${textGlowClass} group-hover:bg-dark-700/80 transition-all duration-300`}>
                    <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Texto descriptivo */}
                <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-glow-lavender transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs md:max-w-none">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
