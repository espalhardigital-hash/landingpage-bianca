## ADDED Requirements

### Requirement: Single-page semantic structure
The system SHALL render a single-page landing page with seven distinct sections in fixed vertical order, each occupying full viewport width and semantically marked with `<section>` and `aria-labelledby`.

#### Scenario: Page loads with correct section order
- **WHEN** user navigates to the landing page URL
- **THEN** the DOM contains sections in this exact order: hero, empathy, process, bio, social-proof, cta-final, footer

#### Scenario: Mobile viewport stacks sections vertically
- **WHEN** viewport width is less than 768px
- **THEN** each section stacks vertically with no horizontal scrolling

### Requirement: Section navigation via anchor links
The system SHALL provide a fixed minimal navigation (logo + CTA) that links to section anchors without page reload.

#### Scenario: Click nav CTA scrolls to hero form
- **WHEN** user clicks the fixed header CTA button
- **THEN** browser smoothly scrolls to `#hero` section form

### Requirement: Footer with legal links
The system SHALL render a footer containing privacy policy link, terms link, and copyright notice.

#### Scenario: Footer links navigate to legal pages
- **WHEN** user clicks "Política de privacidad" in footer
- **THEN** React Router navigates to `/privacidad` route (internal SPA view, no full page reload)
- **AND** clicking "Términos y condiciones" navigates to `/terminos` route