import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Moon, EyeOff, ClipboardList } from 'lucide-react';

// Componente individual de Tarjeta con efecto Tilt 3D
function TiltCard({ title, body, index, icon: Icon, glowColor }) {
  const cardRef = useRef(null);
  
  // Motion values para el rastreo del ratón
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transformar coordenadas de mouse a rotación 3D (máximo ±6 grados)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Obtener la posición del mouse relativa a la tarjeta de -0.5 a 0.5
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Retornar suavemente al centro
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowClass = glowColor === 'mint' ? 'hover:shadow-[0_0_30px_rgba(125,249,196,0.15)]' : 'hover:shadow-[0_0_30px_rgba(200,182,255,0.15)]';
  const iconColor = glowColor === 'mint' ? 'text-glow-mint' : 'text-glow-lavender';
  const borderHoverClass = glowColor === 'mint' ? 'hover:border-glow-mint/30' : 'hover:border-glow-lavender/30';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`glass flex flex-col p-8 rounded-2xl w-full md:w-[360px] min-h-[300px] cursor-grab active:cursor-grabbing border border-white/5 transition-colors duration-500 relative overflow-hidden group ${glowClass} ${borderHoverClass}`}
    >
      {/* Glow ambiental interno en hover */}
      <div 
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full filter blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${
          glowColor === 'mint' ? 'bg-glow-mint/30' : 'bg-glow-lavender/30'
        }`} 
      />

      {/* Icono */}
      <div className="mb-6 flex items-center justify-between" style={{ transform: 'translateZ(30px)' }}>
        <div className={`p-3 rounded-lg bg-white/5 border border-white/5 ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-[10px] text-text-muted font-display tracking-widest">
          ESTRÉS_0{index + 1}
        </span>
      </div>

      {/* Título */}
      <h3 
        style={{ transform: 'translateZ(40px)' }}
        className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3"
      >
        {title}
      </h3>

      {/* Cuerpo */}
      <p 
        style={{ transform: 'translateZ(20px)' }}
        className="text-text-secondary text-sm sm:text-base leading-relaxed flex-grow"
      >
        {body}
      </p>
    </motion.div>
  );
}

export default function EmpathyCards() {
  const cards = [
    {
      title: "El bucle de las 3 AM",
      body: "Tu mente repite la conversación de hace 3 días. Mañana hay examen. No paras de simular escenarios que nunca pasan.",
      icon: Moon,
      glowColor: "lavender"
    },
    {
      title: "Parálisis por comparación",
      body: "Abres Instagram. Todos avanzan. Tú sigues en la misma. El síndrome del impostor susurra: 'no eres suficiente'. Cierras la app. El nudo en el estómago se queda.",
      icon: EyeOff,
      glowColor: "mint"
    },
    {
      title: "Perfeccionismo que paraliza",
      body: "Tienes la idea. Los recursos. El tiempo. Pero no empiezas porque 'todavía no está listo'. La lista de tareas crece. La culpa también.",
      icon: ClipboardList,
      glowColor: "lavender"
    }
  ];

  return (
    <section 
      id="empathy" 
      aria-labelledby="empathy-title"
      className="py-18 md:py-22 lg:py-26 px-6 md:px-12 bg-dark-900 border-y border-white/5 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-glow-lavender/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Encabezado de sección */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-glow-mint text-xs font-semibold tracking-widest uppercase bg-glow-mint/10 px-3 py-1 rounded-full border border-glow-mint/20 w-fit mx-auto">
            ¿Te suena familiar?
          </span>
          <h2 id="empathy-title" className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
            Sentir que tu cabeza va más rápido que tu vida.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            La ansiedad juvenil no es pereza ni inmadurez. Es un ritmo moderno abrumador. Identifica dónde te encuentras hoy.
          </p>
        </div>

        {/* Fila Horizontal en Desktop, Stack Vertical en Mobile */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <TiltCard 
              key={idx} 
              index={idx}
              title={card.title} 
              body={card.body} 
              icon={card.icon} 
              glowColor={card.glowColor} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
