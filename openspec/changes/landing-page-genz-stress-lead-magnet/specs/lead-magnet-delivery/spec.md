## ADDED Requirements

### Requirement: Lead capture API endpoint
The system SHALL expose a POST `/api/leads` endpoint accepting email + source, storing in PostgreSQL, returning signed eBook URL, and triggering email sequence.

#### Scenario: Valid email creates lead record
- **WHEN** POST `/api/leads` with `{ "email": "user@test.com", "source": "hero" }`
- **THEN** response 201 with `{ "success": true, "ebookUrl": "https://minio/...signed...", "message": "Revisa tu bandeja" }`
- **AND** PostgreSQL `leads` table inserts row with email, source, created_at, confirmed=false

#### Scenario: Duplicate email returns existing lead
- **WHEN** POST with email already in database
- **THEN** response 200 with same eBook URL, no duplicate insert, no duplicate email trigger

#### Scenario: Invalid email returns 422
- **WHEN** POST with invalid email format
- **THEN** response 422 with validation error detail

#### Scenario: Rate limit prevents abuse
- **WHEN** >10 requests/minute from same IP
- **THEN** response 429 with `Retry-After` header

#### Scenario: Honeypot field rejects bots silently
- **WHEN** POST `/api/leads` with `website` field containing any non-empty value
- **THEN** response 200 with fake success (no database insert, no email trigger) to avoid bot awareness

### Requirement: Immediate eBook delivery via MinIO signed URL
The system SHALL generate a time-limited (15 min) presigned GET URL for the eBook PDF stored in MinIO.

#### Scenario: eBook URL is signed and time-limited
- **WHEN** lead created
- **THEN** `ebookUrl` is MinIO presigned URL with `Expires=900` (15 min), `Response-Content-Disposition: attachment; filename="guia-ansiedad.pdf"`

#### Scenario: eBook file exists in MinIO bucket
- **WHEN** system starts
- **THEN** bucket `lead-magnets` contains object `guia-ansiedad.pdf` (uploaded via admin/script)

### Requirement: 7-day email sequence trigger
The system SHALL enqueue a 7-day email sequence (Day 0 welcome + eBook link, Days 1-7 micro-exercises) via Resend API.

#### Scenario: Day 0 email sent immediately
- **WHEN** lead created
- **THEN** Resend API called with template `welcome-ebook`, to=lead.email, data={ ebookUrl, firstName: null }

#### Scenario: Days 1-7 scheduled
- **WHEN** lead created
- **THEN** 7 background jobs scheduled (or cron) for Days 1-7 at 09:00 user timezone (default UTC), each sending template `challenge-day-{n}`

#### Scenario: Email templates use Jinja2 HTML
- **WHEN** emails send
- **THEN** templates are `.html` files in `/backend/templates/emails/` using Jinja2 templating, rendered to HTML at send time via FastAPI

### Requirement: Double opt-in soft confirmation
The system SHALL include one-click confirmation link in Day 0 email; clicking marks lead.confirmed=true.

#### Scenario: Confirmation link works
- **WHEN** user clicks `https://domain/api/leads/confirm?token=...`
- **THEN** lead.confirmed=true, response 200 with thank-you page redirect

### Requirement: Unsubscribe footer in every email
The system SHALL include unsubscribe link in all sequence emails; clicking stops future emails.

#### Scenario: Unsubscribe works
- **WHEN** user clicks unsubscribe link
- **THEN** lead.unsubscribed=true, no further sequence emails sent

### Requirement: Analytics events
The system SHALL emit structured events for: `lead_captured`, `ebook_downloaded`, `email_opened`, `email_clicked`.

#### Scenario: Events emitted on key actions
- **WHEN** lead captured → `lead_captured` event with { email, source, timestamp }
- **WHEN** eBook URL accessed → `ebook_downloaded` event
- **WHEN** Resend webhook `email.opened` → `email_opened` event
- **WHEN** Resend webhook `email.clicked` → `email_clicked` event