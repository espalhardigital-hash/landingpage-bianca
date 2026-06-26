import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonios() {
  const testimonials = [
    {
      name: "Mateo G.",
      age: "21 años",
      role: "Estudiante de Ingeniería",
      quote: "El bucle mental de las 3 AM era mi rutina diaria antes de los exámenes. Las técnicas de shock del eBook y el recordatorio diario de 5 minutos me ayudaron a anclarme en el presente. Por primera vez en meses duermo de corrido.",
      rating: 5,
      color: "lavender"
    },
    {
      name: "Sofía M.",
      age: "19 años",
      role: "Creadora de Contenido",
      quote: "Abrir Instagram me generaba un nudo en el estómago por el síndrome del impostor. La forma en que Bianca explica el estrés es súper directa, habla tu idioma. El micro-ejercicio del día 4 cambió por completo mi forma de reaccionar.",
      rating: 5,
      color: "mint"
    }
  ];

  return (
    <section 
      id="social-proof" 
      aria-labelledby="testimonials-title"
      className="py-18 md:py-22 lg:py-26 px-6 md:px-12 bg-dark-950 relative overflow-hidden"
    >
      {/* Luces decorativas */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-glow-mint/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-glow-lavender text-xs font-semibold tracking-widest uppercase bg-glow-lavender/10 px-3 py-1 rounded-full border border-glow-lavender/20 w-fit mx-auto">
            Prueba Social
          </span>
          <h2 id="testimonials-title" className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary leading-tight">
            Compañeros de ruta en calma
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Historias reales de jóvenes que reescribieron su relación con el overthinking y recuperaron el control de su rutina.
          </p>
        </div>

        {/* Tarjetas de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => {
            const glowClass = t.color === 'mint' ? 'hover:shadow-[0_0_30px_rgba(125,249,196,0.1)] hover:border-glow-mint/20' : 'hover:shadow-[0_0_30px_rgba(200,182,255,0.1)] hover:border-glow-lavender/20';
            const badgeColor = t.color === 'mint' ? 'bg-glow-mint/10 text-glow-mint border-glow-mint/20' : 'bg-glow-lavender/10 text-glow-lavender border-glow-lavender/20';
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`glass p-8 rounded-2xl border border-white/5 flex flex-col justify-between relative group transition-all duration-300 ${glowClass}`}
              >
                {/* Icono de Comilla */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors duration-300" />

                <div className="space-y-4">
                  {/* Estrellas */}
                  <div className="flex gap-1 text-glow-mint">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonio */}
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Perfil */}
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base">{t.name}</h4>
                    <p className="text-xs text-text-muted mt-0.5">{t.role}</p>
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeColor}`}>
                    {t.age}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
