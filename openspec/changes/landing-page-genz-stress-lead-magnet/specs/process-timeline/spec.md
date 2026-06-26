## ADDED Requirements

### Requirement: Horizontal interactive timeline with 4 steps
The system SHALL render a horizontal timeline on desktop (vertical on mobile) showing 4 sequential steps of the user journey after signup.

#### Scenario: Desktop shows horizontal timeline
- **WHEN** viewport width >= 768px
- **THEN** 4 steps display left-to-right with connecting line, equal spacing

#### Scenario: Mobile stacks steps vertically
- **WHEN** viewport width < 768px
- **THEN** 4 steps stack top-to-bottom with vertical connecting line on left

### Requirement: Step 1 - Registro (Dejas tu correo)
The system SHALL display first step with icon, title "Registro", and description "Dejas tu correo. Segundos. Sin fricción."

#### Scenario: Step 1 content renders correctly
- **WHEN** process section renders
- **THEN** first step contains title "Registro" and body "Dejas tu correo. Segundos. Sin fricción."

### Requirement: Step 2 - Descarga inmediata (Recibes el eBook)
The system SHALL display second step with icon, title "Descarga inmediata", and description "Recibes el eBook al instante. Herramientas prácticas desde el minuto uno."

#### Scenario: Step 2 content renders correctly
- **WHEN** process section renders
- **THEN** second step contains title "Descarga inmediata" and body "Recibes el eBook al instante. Herramientas prácticas desde el minuto uno."

### Requirement: Step 3 - 7 días de acción (Micro-ejercicios en tu bandeja)
The system SHALL display third step with icon, title "7 días de acción", and description "Micro-ejercicios diarios en tu bandeja. 3 minutos. Cambio real."

#### Scenario: Step 3 content renders correctly
- **WHEN** process section renders
- **THEN** third step contains title "7 días de acción" and body "Micro-ejercicios diarios en tu bandeja. 3 minutos. Cambio real."

### Requirement: Step 4 - Mente en calma (Herramientas para siempre)
The system SHALL display fourth step with icon, title "Mente en calma", and description "Herramientas para siempre. Autonomía emocional. Tú mandas."

#### Scenario: Step 4 content renders correctly
- **WHEN** process section renders
- **THEN** fourth step contains title "Mente en calma" and body "Herramientas para siempre. Autonomía emocional. Tú mandas."

### Requirement: Scroll-triggered step reveal animation
The system SHALL animate each step into view as user scrolls: opacity 0→1, translateY 30px→0, with connecting line drawing progressively.

#### Scenario: Steps reveal on scroll
- **WHEN** process section enters viewport
- **THEN** each step animates in sequence with 150ms stagger using Framer Motion `useScroll` progress

#### Scenario: Connecting line draws progressively
- **WHEN** user scrolls through process section
- **THEN** SVG line between steps draws stroke-dashoffset 100%→0% matching scroll progress

#### Scenario: Active step highlights on scroll
- **WHEN** a step crosses 50% viewport center
- **THEN** that step gets `glow-mint` class, others dim to 60% opacity

### Requirement: Interactive hover/tap on steps
The system SHALL allow hover (desktop) or tap (mobile) on a step to expand its description with smooth animation.

#### Scenario: Desktop hover expands description
- **WHEN** user hovers a step
- **THEN** step card expands height, shows full description, icon scales 1.1x

#### Scenario: Mobile tap toggles expansion
- **WHEN** user taps a step on mobile
- **THEN** step toggles expanded/collapsed state with smooth height animation