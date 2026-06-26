import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacidad() {
  // Desplazar arriba al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-text-primary pt-28">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 pb-20 space-y-8">
        
        {/* Navegación de retorno */}
        <Link to="/" className="flex items-center gap-2 text-glow-lavender hover:text-glow-lavender/80 text-sm font-semibold w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a la página de inicio
        </Link>

        {/* Título de la página */}
        <div className="space-y-4 border-b border-white/10 pb-6">
          <div className="p-3 rounded-lg bg-glow-lavender/10 border border-glow-lavender/20 text-glow-lavender w-fit">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary">
            Política de Privacidad
          </h1>
          <p className="text-xs text-text-muted">Última actualización: Junio de 2026</p>
        </div>

        {/* Contenido Legal */}
        <div className="space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed">
          <p>
            En <strong>Mente en Calma</strong>, liderado por Bianca R., nos tomamos muy en serio la privacidad y seguridad de tu información personal. Esta política explica cómo recopilamos, utilizamos y protegemos tus datos cuando interactúas con nuestra landing page y te suscribes a nuestro lead magnet.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">1. Información que Recopilamos</h2>
          <p>
            Únicamente recopilamos tu dirección de correo electrónico (`email`) cuando te registras de forma voluntaria a través de nuestros formularios de suscripción. También registramos de forma automática la sección o fuente desde la cual te registraste (por ejemplo, "hero" o "cta-final") y la marca de tiempo de tu registro.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">2. Finalidad del Tratamiento</h2>
          <p>
            Utilizamos tu dirección de correo electrónico para las siguientes finalidades exclusivas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enviarte el enlace de descarga del eBook de técnicas de shock.</li>
            <li>Enviarte la secuencia de 7 días del desafío práctico (un correo diario).</li>
            <li>Gestionar tu estado de confirmación o desuscripción de la base de datos de envíos.</li>
          </ul>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">3. Base Legal para el Tratamiento</h2>
          <p>
            La base legal para el tratamiento de tus datos es tu consentimiento explícito al introducir tu email en el formulario y confirmar tu suscripción mediante el enlace de correo (double opt-in implícito).
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">4. Conservación de los Datos</h2>
          <p>
            Conservaremos tus datos mientras dure la secuencia del desafío de 7 días o hasta que decidas darte de baja. En el momento en que haces clic en "desuscribirse" en el pie de página de cualquier correo, tu registro es marcado como desuscrito y no recibirás ninguna comunicación futura.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">5. Compartir con Terceros</h2>
          <p>
            No vendemos, alquilamos ni compartimos tus datos con terceros para fines comerciales. Tu correo es transmitido de forma segura a nuestro proveedor de infraestructura de correo (Resend) exclusivamente para el despacho de los emails del desafío.
          </p>

          <h2 className="font-display font-bold text-xl text-text-primary mt-8">6. Tus Derechos</h2>
          <p>
            Tienes derecho a acceder, rectificar, limitar o solicitar la eliminación total de tus datos personales. Puedes ejercer estos derechos haciendo clic directamente en el enlace de desuscripción incluido en cada correo o contactándonos directamente a través de los canales provistos.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
