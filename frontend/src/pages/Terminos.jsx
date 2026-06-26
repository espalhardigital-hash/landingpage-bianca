import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terminos() {
  // Desplazar arriba al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-text-primary pt-28">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 pb-20 space-y-8">
        
        {/* Navegación de retorno */}
        <Link to="/" className="flex items-center gap-2 text-glow-mint hover:text-glow-mint/80 text-sm font-semibold w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a la página de inicio
        </Link>

        {/* Título de la página */}
        <div className="space-y-4 border-b border-white/10 pb-6">
          <div className="p-3 rounded-lg bg-glow-mint/10 border border-glow-mint/20 text-glow-mint w-fit">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary">
            Términos y Condiciones
          </h1>
          <p className="text-xs text-text-muted">Última actualización: Junio de 2026</p>
        </div>

        {/* Contenido Legal */}
        <div className="space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed">
          <p>
            Te damos la bienvenida a <strong>Mente en Calma</strong>. Al acceder a esta landing page, suscribirte al lead magnet o utilizar cualquiera de las herramientas y contenidos aquí provistos, aceptas estar sujeto a los siguientes términos y condiciones de uso.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">1. Descargo de Responsabilidad Médica</h2>
          <div className="bg-glow-lavender/5 border-l-2 border-glow-lavender p-4 rounded-r-lg my-4">
            <p className="text-sm text-text-primary font-semibold">¡Aviso muy importante!</p>
            <p className="text-sm text-text-secondary mt-1">
              El contenido del eBook, la secuencia de emails de 7 días y los recursos compartidos en Mente en Calma tienen un carácter meramente informativo y educativo. <strong>No constituyen bajo ninguna circunstancia asesoramiento psicológico profesional, diagnóstico ni tratamiento clínico individualizado.</strong>
            </p>
          </div>
          <p>
            Si estás experimentando una crisis aguda de ansiedad, pánico, ideación suicida o cualquier otra condición de salud mental severa, por favor acude inmediatamente a un centro de urgencias médicas o ponte en contacto con los profesionales correspondientes en tu país.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">2. Propiedad Intelectual</h2>
          <p>
            Todos los materiales proporcionados (incluido el eBook en PDF "Guía definitiva contra la ansiedad", textos de correos, ilustraciones y código de la landing page) son propiedad exclusiva de Mente en Calma y Bianca R. Se otorga una licencia personal, no exclusiva e intransferible para tu lectura y uso individual. Queda terminantemente prohibida la redistribución, venta o retransmisión de estos materiales sin el consentimiento expreso y por escrito de la titular.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">3. Uso del Servicio</h2>
          <p>
            Te comprometes a utilizar el sitio web y el formulario de captura con fines lícitos. Está prohibido el registro de correos electrónicos de terceros sin su consentimiento, el uso de robots o scripts para saturar el servicio, o cualquier acción que interfiera con la disponibilidad y correcto funcionamiento del servidor (FastAPI, PostgreSQL o MinIO).
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">4. Limitación de Responsabilidad</h2>
          <p>
            No garantizamos que el sitio web o el envío de correos esté libre de interrupciones o fallos técnicos temporales. Tampoco asumimos responsabilidad por la velocidad de descarga desde la red de almacenamiento MinIO o por retrasos que puedan experimentar los proveedores de correo electrónico locales del destinatario.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos de servicio o el contenido del desafío en cualquier momento para adaptarlo a nuevas regulaciones o metodologías clínicas, publicando los términos actualizados directamente en esta página.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
