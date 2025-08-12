# Remotto.ai - B2C Platform

## Project Overview

Remotto.ai is a B2C platform focused on job seekers in Latin America, providing AI-powered CV analysis and job matching services. The platform is inspired by AIApply.co but localized for the Mexican/LATAM market.

### Architecture Overview

- **Frontend B2C**: Single JavaScript repository deployed on Vercel
- **Microservices**: Existing Python services on Railway for heavy processing
- **Database**: Supabase for user data, authentication, and file storage
- **Integration**: Vercel API routes act as proxy to Railway microservices

The platform consists of 4 main funnels to engage users at different stages of their job search journey.

## Core Value Proposition

- **Smart Job Matching**: AI-powered matching between CVs and job opportunities
- **CV Roasting**: Honest, entertaining feedback about resumes to drive engagement
- **Professional CV Review**: Constructive feedback for improvement
- **CV Builder**: Create professional CVs from scratch

## 4 Funnel Structure

### 1. CV Roast Funnel 🔥

**Purpose**: Viral engagement & user acquisition
**User Flow**:

1. Landing page with provocative CTA: "¿Tu CV apesta? Descúbrelo aquí"
2. Upload CV (PDF/DOCX)
3. AI generates humorous but insightful roast
4. Share results on social media
5. Upsell to professional review

**Key Features**:

- Entertaining, shareable feedback
- Social media integration
- Viral coefficient tracking
- Convert to serious users

### 2. CV Review Funnel ✅

**Purpose**: Professional improvement & trust building
**User Flow**:

1. Landing page: "Mejora tu CV con feedback profesional"
2. Upload CV
3. AI analyzes against industry standards
4. Detailed report with actionable improvements
5. Upsell to CV builder or job matching

**Key Features**:

- ATS compatibility check
- Industry-specific recommendations
- Skill gap analysis
- Score visualization

### 3. Job Matching Funnel 💼

**Purpose**: Core monetization & value delivery
**User Flow**:

1. Landing page: "Encuentra trabajos perfectos para ti"
2. Upload CV or create profile
3. AI matches with relevant jobs
4. Daily/weekly job alerts
5. Application tracking

**Key Features**:

- Smart matching algorithm
- Remote/hybrid/onsite filters
- Salary range matching
- Application status tracking

### 4. CV Builder Funnel 📝

**Purpose**: User retention & complete solution
**User Flow**:

1. Landing page: "Crea un CV profesional en minutos"
2. Choose template
3. Guided form with AI suggestions
4. Download in multiple formats
5. Upsell to job matching

**Key Features**:

- Professional templates
- AI-powered content suggestions
- ATS-optimized formatting
- Multiple export formats (PDF, DOCX)

## Technical Stack

### Single Repository Architecture (Vercel)

- **Framework**: Next.js 15 with App Router
- **Language**: JavaScript (no TypeScript)
- **Deployment**: Vercel (frontend + API routes)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Supabase Auth
- **State Management**: Zustand
- **Forms**: React Hook Form

### Infrastructure

- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage (CVs)
- **Microservices**: Railway (CV analysis, roasting, matching)

### Microservices en Railway (Existing)

- **CV Analysis Service**: Procesa y analiza CVs
- **Roasting Service**: Genera roasts humorísticos
- **Matching Service**: Match entre CVs y trabajos
- **Review Service**: Análisis profesional de CVs

### Third-party Services

- **AI**: OpenAI GPT-4 (via Railway microservices)
- **Email**: Resend for notifications
- **Analytics**: Posthog
- **Monitoring**: Vercel Analytics
- **CDN**: Vercel Edge Network

## Database Schema (Supabase)

### Core Tables

```sql
-- Users (managed by Supabase Auth)
-- profiles (extended user info)
-- resumes (uploaded CV files & metadata)
-- resume_analyses (roasts & reviews from Railway)
-- jobs (cached job listings)
-- job_matches (matches from Railway service)
-- applications (user application tracking)
-- cv_templates (builder templates)
-- cv_documents (generated CVs)
```

### Integration Pattern

```javascript
// Example: CV Roast Flow
1. User uploads CV -> Vercel API -> Supabase Storage
2. Vercel API calls Railway roasting service
3. Railway returns roast -> Store in Supabase
4. Return roast to user with sharing options
```

## API Structure

### Vercel API Routes (Next.js)

```javascript
// Public API Routes
POST /api/cv/upload       - Upload CV to Supabase Storage
POST /api/cv/roast        - Proxy to Railway roasting service
POST /api/cv/review       - Proxy to Railway review service
GET  /api/jobs/match      - Proxy to Railway matching service
POST /api/cv/build        - Generate CV locally

// Protected API Routes
GET  /api/user/profile    - Get from Supabase
GET  /api/user/resumes    - Query Supabase
GET  /api/user/matches    - Query Supabase
POST /api/user/preferences - Update in Supabase
```

### Railway Microservices Endpoints

```javascript
// CV Analysis Service
POST https://cv-analysis.railway.app/analyze
POST https://cv-analysis.railway.app/extract-text

// Roasting Service
POST https://roasting.railway.app/generate-roast
GET  https://roasting.railway.app/templates

// Review Service
POST https://review.railway.app/professional-review
POST https://review.railway.app/ats-check

// Matching Service
POST https://matching.railway.app/find-jobs
POST https://matching.railway.app/score-match
```

## Development Workflow

### Project Structure

```
remotto/
├── app/                    # Next.js App Router
│   ├── (landing)/         # Landing pages for 4 funnels
│   │   ├── roast/         # CV Roast funnel
│   │   ├── review/        # CV Review funnel
│   │   ├── jobs/          # Job Matching funnel
│   │   └── builder/       # CV Builder funnel
│   ├── (dashboard)/       # User dashboard
│   ├── api/               # API routes
│   │   ├── cv/           # CV operations
│   │   ├── user/         # User operations
│   │   └── jobs/         # Job operations
│   └── layout.js
├── components/            # Reusable components
├── lib/                   # Utilities
│   ├── supabase.js       # Supabase client
│   ├── railway.js        # Railway services integration
│   └── utils.js
├── public/               # Static assets
└── package.json
```

### Local Setup

```bash
# Clone and setup
git clone https://github.com/imtonys/remotto-b2c.git
cd remotto
npm install

# Environment variables
cp .env.example .env.local
# Add your Supabase and Railway URLs

# Run development server
npm run dev
```

### Testing Commands

```bash
# Run tests
npm run test
npm run test:e2e

# Linting
npm run lint

# Build for production
npm run build
```

### Deployment

```bash
# Auto-deploy to Vercel on push to main
git push origin main

# Manual deploy
vercel --prod

# Database migrations (Supabase)
supabase migration new <name>
supabase db push
```

## Key Metrics to Track

### Acquisition

- Landing page conversion rates per funnel
- CV upload completion rate
- Social sharing rate (roast funnel)
- Organic vs paid traffic

### Activation

- First CV analysis completion
- Profile completion rate
- First job match view
- Email verification rate

### Retention

- Weekly active users
- CV updates frequency
- Job application rate
- Feature usage distribution

### Revenue

- Conversion to paid (future)
- Average revenue per user
- Lifetime value
- Churn rate

### Referral

- Viral coefficient (roast shares)
- Referral program participation
- User-generated content

## Security Considerations

### Data Privacy

- GDPR/CCPA compliance
- PII encryption at rest
- Secure file uploads
- Data retention policies

### Authentication

- JWT tokens with refresh
- OAuth providers (Google, LinkedIn)
- Rate limiting per user
- Session management

### File Security

- Virus scanning on upload
- File type validation
- Size limits (10MB)
- Secure storage with access control

## Monetization Strategy (Inspired by AIApply)

### Pricing Tiers

#### 1. GRATIS (FREE)

- 3 CV roasts por mes
- Review básico de CV
- Ver 10 trabajos al día
- 1 plantilla de CV

#### 2. PRO ($199 MXN/mes ~ $9.99 USD)

- Roasts y reviews ilimitados
- Matches de trabajo ilimitados
- Todas las plantillas de CV
- Generador de cartas de presentación
- Tracking de aplicaciones
- Soporte prioritario

#### 3. PREMIUM ($399 MXN/mes ~ $19.99 USD)

- Todo lo de PRO
- Auto-aplicación a trabajos (hasta 50/mes)
- Preparación para entrevistas con AI
- Hosting de CV
- Optimización de LinkedIn
- Tips de negociación salarial

### Revenue Streams

1. **Subscripciones**: Planes mensuales/anuales
2. **Compras únicas**: Roasts individuales, plantillas premium
3. **B2B**: Universidades, bootcamps, centros de carrera
4. **Comisiones afiliados**: Partnerships con job boards
5. **Trabajos patrocinados**: Empresas pagan por visibilidad

## Scaling Strategy

### Phase 1: MVP (0-1K users)

- Single backend instance
- Basic caching
- Manual monitoring
- $565/month budget

### Phase 2: Growth (1K-10K users)

- Load balancing
- Redis caching layer
- Queue system for heavy tasks
- $2,000/month budget

### Phase 3: Scale (10K+ users)

- Microservices architecture
- Dedicated ML pipeline
- Multi-region deployment
- Custom infrastructure

## Competitive Advantages

### vs Traditional Job Boards

- AI-powered matching vs keyword search
- Proactive recommendations vs passive browsing
- CV improvement loop vs static uploads

### vs AIApply.co

- **Localized for LATAM**: Spanish-first, local job market knowledge
- **Viral Roasting Feature**: Unique engagement driver not offered by AIApply
- **Lower Price Point**: $9.99 MXN vs their higher USD pricing
- **Cultural Fit**: Mexican humor and communication style
- **Regional Partnerships**: Local job boards and companies

### Unique Features

- CV Roasting for engagement
- Industry-specific Mexican market knowledge
- Remote-first job focus
- Bilingual support (Spanish/English)

## Success Criteria

### Launch (Month 1)

- [ ] 100 active users
- [ ] 500 CVs analyzed
- [ ] 1,000 job matches
- [ ] 50% weekly retention

### Growth (Month 3)

- [ ] 1,000 active users
- [ ] 5,000 CVs analyzed
- [ ] 10,000 job matches
- [ ] 40% monthly retention

### Scale (Month 6)

- [ ] 10,000 active users
- [ ] 50,000 CVs analyzed
- [ ] 100,000 job matches
- [ ] 35% monthly retention

## Contact & Resources

### Documentation

- Technical: `/docs/technical`
- API: `/docs/api`
- Design: `/docs/design`

### Team

- Product: @product-team
- Engineering: @dev-team
- Design: @design-team

### Support

- User issues: support@remotto.ai
- Technical: dev@remotto.ai
- Business: hello@remotto.ai

---

Last updated: 2025-08-12
Version: 1.0.0
