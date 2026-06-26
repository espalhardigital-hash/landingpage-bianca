import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EmpathyCards from '../components/EmpathyCards';
import ProcessTimeline from '../components/ProcessTimeline';
import Bio from '../components/Bio';
import Testimonios from '../components/Testimonios';
import CtaFinal from '../components/CtaFinal';
import Footer from '../components/Footer';

export default function HomeDark() {
  return (
    <div className="relative min-h-screen bg-dark-950 text-text-primary">
      {/* Header Fijo */}
      <Header />
      
      {/* Estructura semántica de 7 secciones */}
      <main>
        {/* Sección 1: Hero */}
        <Hero />
        
        {/* Sección 2: Empatía (Tarjetas 3D) */}
        <EmpathyCards />
        
        {/* Sección 3: Proceso (Línea de tiempo) */}
        <ProcessTimeline />
        
        {/* Sección 4: Bio (Autoridad) */}
        <Bio />
        
        {/* Sección 5: Testimonios (Prueba social) */}
        <Testimonios />
        
        {/* Sección 6: CTA Final (Captura replicada) */}
        <CtaFinal />
      </main>

      {/* Sección 7: Footer (Enlaces legales) */}
      <Footer />
    </div>
  );
}
