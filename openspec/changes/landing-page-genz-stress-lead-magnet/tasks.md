## 1. Setup e Infraestructura

- [x] 1.1 Configurar el archivo `docker-compose.yml` para orquestar PostgreSQL, MinIO, frontend y backend expuestos en puertos directos.
- [x] 1.2 Crear un script de inicialización (`init-minio.sh` o contenedor init) que al primer arranque cree el bucket `lead-magnets` en MinIO y suba el eBook PDF simulado (`guia-ansiedad.pdf`) para desarrollo local.
- [x] 1.3 Inicializar el backend FastAPI con estructura modular (endpoints, base de datos, servicios).
- [x] 1.4 Inicializar el frontend React + Vite, configurando las carpetas del proyecto y la instalación de dependencias necesarias.

## 2. Desarrollo Backend (FastAPI + PostgreSQL + MinIO)

- [x] 2.1 Crear el modelo de base de datos para la tabla `leads` (id, email, source, confirmed, unsubscribed, created_at).
- [x] 2.2 Configurar la API de leads: endpoint `POST /api/leads` con validación de correo, protección honeypot y rate-limiting por IP.
- [x] 2.3 Implementar la generación de URLs firmadas temporales (15 minutos) con MinIO para la descarga segura del eBook.
- [x] 2.4 Integrar la API de Resend para el envío automático del correo de bienvenida (Día 0) con el enlace de descarga y el token de confirmación.
- [x] 2.5 Configurar el endpoint de confirmación `GET /api/leads/confirm?token=...` y el endpoint de desuscripción para detener la secuencia.
- [x] 2.6 Desarrollar la lógica en segundo plano (background tasks) para encolar y programar el envío de la secuencia de correos (Días 1 a 7).

## 3. Desarrollo Frontend (React + CSS Glassmorphism)

- [x] 3.1 Implementar el archivo de estilos globales (`index.css`) con los tokens de diseño de la Guía de Estilos: colores Premium Dark, glows (lavanda/menta), tipografía Space Grotesk/Inter y transiciones CSS.
- [x] 3.2 Crear la estructura base de la Single Page Application (Header minimalista, Secciones y Footer).
- [x] 3.3 Construir la sección **Hero** con soporte para la foto temporal de prueba ("placeholders") y la animación de respiración sutil en CSS.
- [x] 3.4 Diseñar las **Tarjetas de Empatía** e implementar el efecto interactivo de inclinación 3D (Tilt Effect) mediante interacciones CSS/JS fluidas.
- [x] 3.5 Crear el componente de la **Línea de Tiempo Horizontal (4 pasos)** e implementar sus interacciones y animaciones de scroll.
- [x] 3.6 Implementar las secciones de **Biografía**, **Testimonios**, **CTA Final** y el **Footer** con los enlaces legales.
- [x] 3.7 Programar el formulario de captura de email como componente reutilizable (`EmailForm`) que acepte una prop `source` ("hero" / "cta-final"), con validación frontend, honeypot oculto, gestión de estados de carga/éxito y llamadas a la API de leads.

## 4. Páginas Legales e Integración

- [x] 4.1 Crear las páginas/vistas de cumplimiento legal para `/privacidad` y `/terminos`.
- [x] 4.2 Integrar el flujo completo cliente-servidor (registro en formulario -> recepción del correo en Resend -> descarga del eBook en MinIO).
- [x] 4.3 Configurar las etiquetas de Docker en compose para el ruteo de Traefik externo que se utilizará en la VPS de producción.

## 5. Verificación y Pruebas

- [x] 5.1 Realizar smoke tests en los endpoints de captura, descarga de eBook y confirmación.
- [x] 5.2 Validar la responsividad y el rendimiento de las animaciones (diseño mobile-first) en diferentes tamaños de pantalla.
- [x] 5.3 Auditar accesibilidad básica (contraste de colores en modo oscuro, atributos aria y navegación de teclado).
