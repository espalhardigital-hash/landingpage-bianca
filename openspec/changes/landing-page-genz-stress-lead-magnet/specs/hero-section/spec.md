## ADDED Requirements

### Requirement: Hero section layout split
The system SHALL render a hero section with two-column layout on desktop (left: form, right: psychologist photo + breathing animation) and stacked on mobile (form top, photo bottom).

#### Scenario: Desktop shows two-column layout
- **WHEN** viewport width >= 768px
- **THEN** hero renders left column (form, 50vw) and right column (photo + animation, 50vw)

#### Scenario: Mobile stacks form above photo
- **WHEN** viewport width < 768px
- **THEN** hero renders form first, then photo + animation below with 100vw width each

### Requirement: Three-word impact headline
The system SHALL display a headline with exactly three words in massive sans-serif typography, each word on its own line, animated on scroll entrance.

#### Scenario: Headline renders three words
- **WHEN** hero section mounts
- **THEN** DOM contains `<h1>` with three child spans: "RESPIRA.", "ENTIENDE.", "CONTROLA."

#### Scenario: Headline animates on scroll into view
- **WHEN** hero section crosses 50% viewport threshold
- **THEN** each word animates opacity 0→1 and translateY 30px→0 with 200ms stagger

### Requirement: Empathetic sub-headline with dual offer
The system SHALL display a sub-headline explaining the dual lead magnet (7-day challenge + instant eBook) in one clear sentence.

#### Scenario: Sub-headline mentions both lead magnets
- **WHEN** hero renders
- **THEN** sub-headline text contains "7 días" AND "eBook" AND "inmediato" (or synonyms)

### Requirement: Ultra-clean email capture form
The system SHALL render a single-field email form with label "Tu email de siempre", placeholder "tú@ejemplo.com", and a CTA button with action verb + subtle glow effect.

#### Scenario: Form has single email input
- **WHEN** hero form renders
- **THEN** form contains exactly one `<input type="email">` with `name="email"` and `required`

#### Scenario: CTA button has glow effect
- **WHEN** hero form renders
- **THEN** submit button has CSS `box-shadow` with lavender/mint glow and `transition: box-shadow 0.3s ease`

#### Scenario: Form submits to lead capture API
- **WHEN** user submits valid email
- **THEN** POST request sent to `/api/leads` with JSON `{ "email": "...", "source": "hero" }`

#### Scenario: Honeypot hidden field prevents bots
- **WHEN** hero form renders
- **THEN** form contains a hidden `<input type="text" name="website" tabindex="-1" autocomplete="off">` with `display: none` or `position: absolute; left: -9999px`
- **AND** if `website` field has any value on submit, request is silently discarded (no error shown)

### Requirement: Psychologist cutout photo with breathing animation
The system SHALL display a professional cutout photo (transparent background) of the psychologist with a subtle animated breathing element behind it (concentric rings or wave expanding/contracting).

#### Scenario: Photo has transparent background
- **WHEN** hero photo loads
- **THEN** image is PNG/WebP with alpha channel, no background color

#### Scenario: Breathing animation runs infinitely
- **WHEN** hero section is visible
- **THEN** SVG/CSS animation behind photo loops scale 0.95→1.05→0.95 over 6s ease-in-out

#### Scenario: Animation uses glow colors
- **WHEN** breathing animation renders
- **THEN** animated element uses lavender (#C8B6FF) and mint (#7DF9C4) glow filters