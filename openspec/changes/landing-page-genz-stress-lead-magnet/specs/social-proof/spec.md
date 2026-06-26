## ADDED Requirements

### Requirement: Two realistic Gen Z testimonials
The system SHALL display two testimonial cards from fictional but realistic young people (names, ages 20-24) highlighting speed and practicality of the 7-day challenge.

#### Scenario: Testimonial 1 - Sofía, 21 años
- **WHEN** social proof section renders
- **THEN** first card shows name "Sofía, 21 años" and quote: "No esperaba que funcionara tan rápido. Día 3 y ya dormía sin dar mil vueltas. Los audios de 3 min caben en mi rutina de clases. No es teoría, son herramientas que usas ya."

#### Scenario: Testimonial 2 - Marcos, 23 años
- **WHEN** social proof section renders
- **THEN** second card shows name "Marcos, 23 años" and quote: "El eBook me salvó en una crisis de ansiedad antes de un examen. La técnica del 'ancla sensorial' la uso hasta en el metro. El reto de 7 días no es tarea, es alivio real."

### Requirement: Testimonial card design
The system SHALL style testimonials as dark cards with avatar placeholder, quote in large typography, name/age in muted text, subtle lavender top border.

#### Scenario: Cards use consistent design
- **WHEN** social proof renders
- **THEN** each card has `class="testimonial-card"` with `border-t-2 border-lavender`, avatar circle placeholder, quote text `text-lg leading-relaxed`, name `text-sm text-muted`

### Requirement: Carousel or grid layout
The system SHALL display testimonials side-by-side on desktop (2 columns), stacked on mobile.

#### Scenario: Desktop shows 2-column grid
- **WHEN** viewport >= 768px
- **THEN** testimonials render in `grid grid-cols-2 gap-6`

#### Scenario: Mobile stacks vertically
- **WHEN** viewport < 768px
- **THEN** testimonials render in `flex flex-col gap-4`