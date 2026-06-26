## ADDED Requirements

### Requirement: Premium Dark color palette
The system SHALL define and use a cohesive dark color system with two glow accent colors.

#### Scenario: Palette tokens defined in Tailwind config
- **WHEN** design system loads
- **THEN** `tailwind.config.js` extends colors with:
  - `dark: { 950: '#030508', 900: '#05080f', 800: '#0a0f1a', 700: '#0d1426', 600: '#141e3a', 500: '#1e2d4a' }`
  - `glow: { lavender: '#C8B6FF', 'lavender-dim': 'rgba(200,182,255,0.15)', mint: '#7DF9C4', 'mint-dim': 'rgba(125,249,196,0.15)' }`
  - `text: { primary: '#F8FAFC', secondary: '#94A3B8', muted: '#64748B' }`

### Requirement: Typography system
The system SHALL use Space Grotesk for display (headlines) and Inter for body/ui, both as variable fonts.

#### Scenario: Font families configured
- **WHEN** Tailwind config loads
- **THEN** `fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['Inter', 'sans-serif'] }`
- **AND** `@import` in global CSS loads variable font files from `/fonts/` or CDN

#### Scenario: Display headlines use Space Grotesk bold/extrabold
- **WHEN** any `<h1>`, `<h2>`, hero headline renders
- **THEN** computed font-family is 'Space Grotesk', font-weight 700 or 800

#### Scenario: Body text uses Inter regular/medium
- **WHEN** paragraphs, buttons, forms render
- **THEN** computed font-family is 'Inter', font-weight 400 or 500

### Requirement: Glassmorphism utility system
The system SHALL provide reusable glassmorphism utilities for cards, modals, nav.

#### Scenario: Glass utilities defined
- **WHEN** Tailwind config loads
- **THEN** utilities exist:
  - `.glass`: `bg-dark-800/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]`
  - `.glass-strong`: `bg-dark-800/80 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)]`
  - `.glass-hover`: `hover:bg-dark-700/70 hover:border-lavender/30 transition-all duration-300`

### Requirement: Glow effect utilities
The system SHALL provide glow utilities for interactive elements and accents.

#### Scenario: Glow utilities defined
- **WHEN** Tailwind config loads
- **THEN** utilities exist:
  - `.glow-lavender`: `shadow-[0_0_20px_rgba(200,182,255,0.3),_0_0_40px_rgba(200,182,255,0.15)]`
  - `.glow-mint`: `shadow-[0_0_20px_rgba(125,249,196,0.3),_0_0_40px_rgba(125,249,196,0.15)]`
  - `.glow-subtle`: `shadow-[0_0_10px_rgba(200,182,255,0.1)]`

### Requirement: Spacing and layout scale
The system SHALL use a consistent spacing scale optimized for mobile-first breathing room.

#### Scenario: Spacing scale defined
- **WHEN** Tailwind config loads
- **THEN** `spacing` extends with: `18: '4.5rem', 22: '5.5rem', 26: '6.5rem', 30: '7.5rem', 34: '8.5rem'`
- **AND** section vertical padding uses `py-18 md:py-22 lg:py-26`

### Requirement: Animation and motion tokens
The system SHALL define standardized motion tokens for consistent feel.

#### Scenario: Animation tokens defined
- **WHEN** Tailwind/CSS loads
- **THEN** transitions: `duration-fast: '150ms', duration-base: '300ms', duration-slow: '500ms', duration-very-slow: '800ms'`
- **AND** easings: `ease-out-expo: 'cubic-bezier(0.16, 1, 0.3, 1)', ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'`
- **AND** `prefers-reduced-motion` media query disables all transforms/animations

### Requirement: Responsive breakpoints
The system SHALL use mobile-first breakpoints aligned with design specs.

#### Scenario: Breakpoints configured
- **WHEN** Tailwind config loads
- **THEN** `screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' }`
- **AND** all components use `md:` for desktop splits, `lg:` for wide layouts