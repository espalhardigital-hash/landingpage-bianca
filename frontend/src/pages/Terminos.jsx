import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terminos() {
  const isLight = typeof window !== 'undefined' && 
    (window.location.hostname.includes('landingclara') || window.location.search.includes('theme=light'));

  // Desplazar arriba al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-28 transition-colors duration-300 ${
      isLight ? 'bg-brand-light-bg text-brand-teal-dark' : 'bg-dark-950 text-text-primary'
    }`}>
      <Header />
      <main className="container mx-auto max-w-3xl px-6 pb-20 space-y-8">
        
        {/* Navegación de retorno */}
        <Link 
          to={isLight ? "/?theme=light" : "/"} 
          className={`flex items-center gap-2 text-sm font-semibold w-fit transition-colors ${
            isLight ? 'text-brand-coral hover:text-brand-coral-hover' : 'text-glow-mint hover:text-glow-mint/80'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la página de inicio
        </Link>

        {/* Título de la página */}
        <div className={`space-y-4 pb-6 border-b ${isLight ? 'border-brand-teal/10' : 'border-white/10'}`}>
          <div className={`p-3 rounded-lg w-fit ${
            isLight ? 'bg-brand-coral/10 border border-brand-coral/20 text-brand-coral' : 'bg-glow-mint/10 border border-glow-mint/20 text-glow-mint'
          }`}>
            <FileText className="w-6 h-6" />
          </div>
          <h1 className={`text-3xl sm:text-4xl ${
            isLight ? 'font-serif italic text-brand-teal-dark font-medium' : 'font-display font-extrabold text-text-primary'
          }`}>
            Términos y Condiciones
          </h1>
          <p className={`text-xs ${isLight ? 'text-brand-teal-dark/60' : 'text-text-muted'}`}>
            Última actualización: Junio de 2026
          </p>
        </div>

        {/* Contenido Legal */}
        <div className={`space-y-6 text-sm sm:text-base leading-relaxed ${
          isLight ? 'text-brand-teal-dark/80 font-light' : 'text-text-secondary'
        }`}>
          <p>
            Te damos la bienvenida a <strong>Mente en Calma</strong>. Al acceder a esta landing page, suscribirte al lead magnet o utilizar cualquiera de las herramientas y contenidos aquí provistos, aceptas estar sujeto a los siguientes términos y condiciones de uso.
          </p>

          <h2 className={`text-xl mt-8 ${
            isLight ? 'font-serif italic text-brand-teal font-medium' : 'font-display font-bold text-text-primary'
          }`}>1. Descargo de Responsabilidad Médica</h2>
          <div className={`border-l-2 p-4 rounded-r-lg my-4 ${
            isLight ? 'bg-brand-teal-light border-brand-teal' : 'bg-glow-lavender/5 border-glow-lavender'
          }`}>
            <p className={`text-sm font-semibold ${isLight ? 'text-brand-teal-dark' : 'text-text-primary'}`}>¡Aviso muy importante!</p>
            <p className={`text-sm mt-1 ${isLight ? 'text-brand-teal-dark/80' : 'text-text-secondary'}`}>
              El contenido del eBook, la secuencia de emails de 7 días y los recursos compartidos en Mente en Calma tienen un carácter meramente informativo y educativo. <strong>No constituyen bajo ninguna circunstancia asesoramiento psicológico profesional, diagnóstico ni tratamiento clínico individualizado.</strong>
            </p>
          </div>
          <p>
            Si estás experimentando una crisis aguda de ansiedad, pánico, ideación suicida o cualquier otra condición de salud mental severa, por favor acude inmediatamente a un centro de urgencias médicas o ponte en contacto con los profesionales correspondientes en tu país.
          </p>

          <h2 className={`text-xl mt-8 ${
            isLight ? 'font-serif italic text-brand-teal font-medium' : 'font-display font-bold text-text-primary'
          }`}>2. Propiedad Intelectual</h2>
          <p>
            Todos los materiales proporcionados (incluido el eBook en PDF "Guía definitiva contra la ansiedad", textos de correos, ilustraciones y código de la landing page) son propiedad exclusiva de Mente en Calma y Bianca R. Se otorga una licencia personal, no exclusiva e intransferible para tu lectura y uso individual. Queda terminantemente prohibida la redistribución, venta o retransmisión de estos materiales sin el consentimiento expreso y por escrito de la titular.
          </p>

          <h2 className={`text-xl mt-8 ${
            isLight ? 'font-serif italic text-brand-teal font-medium' : 'font-display font-bold text-text-primary'
          }`}>3. Uso del Servicio</h2>
          <p>
            Te comprometes a utilizar el sitio web y el formulario de captura con fines lícitos. Está prohibido el registro de correos electrónicos de terceros sin su consentimiento, el uso de robots o scripts para saturar el servicio, o cualquier acción que interfiera con la disponibilidad y correcto funcionamiento del servidor (FastAPI, PostgreSQL o MinIO).
          </p>

          <h2 className={`text-xl mt-8 ${
            isLight ? 'font-serif italic text-brand-teal font-medium' : 'font-display font-bold text-text-primary'
          }`}>4. Limitación de Responsabilidad</h2>
          <p>
            No garantizamos que el sitio web o el envío de correos esté libre de interrupciones o fallos técnicos temporales. Tampoco asumimos responsabilidad por la velocidad de descarga desde la red de almacenamiento MinIO o por retrasos que puedan experimentar los proveedores de correo electrónico locales del destinatario.
          </p>

          <h2 className={`text-xl mt-8 ${
            isLight ? 'font-serif italic text-brand-teal font-medium' : 'font-display font-bold text-text-primary'
          }`}>5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos de servicio o el contenido del desafío en cualquier momento para adaptarlo a nuevas regulaciones o metodologías clínicas, publicando los términos actualizados directamente en esta página.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
