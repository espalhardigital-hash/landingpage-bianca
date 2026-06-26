## ADDED Requirements

### Requirement: Typographic giant CTA closure
The system SHALL render a final CTA section with massive headline text (3-4 words max) centered, acting as emotional closer before final form.

#### Scenario: CTA headline is large and centered
- **WHEN** cta-final section renders
- **THEN** `<h2>` has `text-5xl md:text-7xl font-extrabold text-center tracking-tight` and contains 3-4 words (e.g., "Tu calma empieza hoy.")

#### Scenario: CTA headline uses gradient or glow
- **WHEN** cta-final section renders
- **THEN** headline has `bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent` OR `text-white glow-lavender`

### Requirement: Replicated single-field email form
The system SHALL render an identical email capture form to hero (same field, same button, same API endpoint) but with context-aware microcopy.

#### Scenario: Form mirrors hero form structure
- **WHEN** cta-final form renders
- **THEN** form contains single `<input type="email" name="email" required>` and submit button with glow

#### Scenario: Button microcopy differs from hero
- **WHEN** cta-final form renders
- **THEN** button text is "Quiero mi calma" (or similar action verb + benefit) NOT identical to hero button

#### Scenario: Form submits with source="cta-final"
- **WHEN** user submits cta-final form
- **THEN** POST to `/api/leads` includes `{ "email": "...", "source": "cta-final" }`

### Requirement: Minimal spacing, maximum focus
The system SHALL use generous vertical padding (6rem+), no distractions, dark background with subtle radial gradient glow center.

#### Scenario: Section has focused visual hierarchy
- **WHEN** cta-final renders
- **THEN** section has `py-24 md:py-32`, `bg-radial-gradient` from center mint glow to dark edges, only headline + form + tiny trust line ("Sin spam. Baja cuando quieras.")