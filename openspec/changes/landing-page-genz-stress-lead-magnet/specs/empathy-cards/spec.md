## ADDED Requirements

### Requirement: Three interactive 3D tilt cards
The system SHALL render three cards in a horizontal scrollable row (desktop) or vertical stack (mobile), each showing a common Gen Z stress/overthinking situation.

#### Scenario: Desktop shows horizontal scroll row
- **WHEN** viewport width >= 768px
- **THEN** three cards display side-by-side with horizontal scroll if needed, gap 24px

#### Scenario: Mobile stacks cards vertically
- **WHEN** viewport width < 768px
- **THEN** three cards stack vertically with gap 16px, no horizontal scroll

### Requirement: Card 1 - "Mental loop at 3 AM"
The system SHALL display first card describing nocturnal overthinking scenario.

#### Scenario: Card 1 content matches specification
- **WHEN** empathy section renders
- **THEN** first card contains headline "El bucle de las 3 AM" and body "Tu mente repite la conversación de hace 3 días. Mañana hay examen. No paras de simular escenarios que nunca pasan."

### Requirement: Card 2 - "Comparison paralysis"
The system SHALL display second card describing social media comparison anxiety.

#### Scenario: Card 2 content matches specification
- **WHEN** empathy section renders
- **THEN** second card contains headline "Parálisis por comparación" and body "Abres Instagram. Todos avanzan. Tú sigues en la misma. El síndrome del impostor susurra: 'no eres suficiente'. Cierras la app. El nudo en el estómago se queda."

### Requirement: Card 3 - "Perfectionism freeze"
The system SHALL display third card describing perfectionism-induced procrastination.

#### Scenario: Card 3 content matches specification
- **WHEN** empathy section renders
- **THEN** third card contains headline "Perfeccionismo que paraliza" and body "Tienes la idea. Los recursos. El tiempo. Pero no empiezas porque 'todavía no está listo'. La lista de tareas crece. La culpa también."

### Requirement: Interactive 3D tilt on hover/scroll
The system SHALL apply a subtle 3D tilt effect to each card responding to mouse movement (desktop) or scroll progress (mobile).

#### Scenario: Desktop tilt follows cursor
- **WHEN** user hovers a card and moves mouse
- **THEN** card rotates on X/Y axes up to ±6° following cursor position, using `transform: perspective(1000px) rotateX(...) rotateY(...)`

#### Scenario: Mobile tilt follows scroll
- **WHEN** user scrolls past a card on mobile
- **THEN** card rotates subtly (±3°) based on scroll progress via Framer Motion `useScroll`

#### Scenario: Tilt resets on leave
- **WHEN** user moves cursor off card (desktop) or scrolls away (mobile)
- **THEN** card smoothly returns to `rotateX(0) rotateY(0)` over 400ms ease-out

### Requirement: Glassmorphism card styling
The system SHALL style cards with Premium Dark glassmorphism: semi-transparent dark background, backdrop blur, subtle border, lavender/mint glow on hover.

#### Scenario: Cards use glass utility
- **WHEN** empathy cards render
- **THEN** each card has classes `glass glow-lavender` (hover) with `transition: all 0.3s ease`