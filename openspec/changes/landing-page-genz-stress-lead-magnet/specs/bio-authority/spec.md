## ADDED Requirements

### Requirement: Brief psychologist bio section
The system SHALL render a compact biography section positioning the psychologist as a relatable ally who understands Gen Z pace.

#### Scenario: Bio text is maximum 3 lines
- **WHEN** bio section renders
- **THEN** bio text contains at most 3 text lines (clamped at 3 lines with `line-clamp-3`)

#### Scenario: Bio uses second person and validates modern pace
- **WHEN** bio section renders
- **THEN** text includes "tú" (or "te") AND references "ritmo", "velocidad", "mundo rápido", or equivalent validation

#### Scenario: Bio mentions expertise without corporate speak
- **WHEN** bio section renders
- **THEN** text mentions "ansiedad juvenil" or "jóvenes" AND avoids words: "expertise", "metodología", "soluciones integrales", "paradigma"

### Requirement: Psychologist photo + name + credential
The system SHALL display a small portrait photo, full name, and one-line credential (e.g., "Psicóloga especialista en ansiedad Gen Z").

#### Scenario: Bio includes photo, name, credential
- **WHEN** bio section renders
- **THEN** DOM contains `<img>` (portrait), `<h3>` (name), `<p class="credential">` (specialty)

### Requirement: Warm, approachable visual style
The system SHALL style bio section with warm dark tones, subtle lavender accent line, generous whitespace.

#### Scenario: Bio uses warm dark styling
- **WHEN** bio section renders
- **THEN** background uses `dark-700` (#0d1426), accent border-left 3px lavender, padding 3rem vertical