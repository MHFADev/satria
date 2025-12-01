# Cipet - Creative Freelancer Landing Page

## Project Overview
A Neubrutalism-style landing page for "Cipet" (Creative Freelancer) with dual language support (Bahasa Indonesia/English) and Discord webhook integration for order submissions.

## Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React
- **Backend:** Express.js with API routes for Discord webhook proxy
- **Form Handling:** React Hook Form + Zod validation
- **Styling:** Neubrutalism design system with custom colors and shadows

## Key Features
1. **Dual Language System (ID/EN)**
   - React Context API for language switching
   - Translation dictionary in `client/src/lib/translations.ts`

2. **Order Form with Service Logic**
   - Graphic Design: Flyer, Poster, Social Media, UI/UX
   - Academic Help: Essay/Paper, PPT, Resume (writing/presentation only)
   - Conditional helper text based on service selection

3. **Discord Webhook Integration**
   - Server-side API route at `/api/order`
   - Rich embed messages with order details
   - Environment variable for secure webhook URL

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── OrderForm.tsx
│   │   │   └── Footer.tsx
│   │   ├── contexts/         # React contexts
│   │   │   └── LanguageContext.tsx
│   │   ├── lib/              # Utilities
│   │   │   └── translations.ts
│   │   ├── pages/            # Page components
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   ├── routes.ts             # API routes (Discord webhook)
│   └── index.ts
├── shared/
│   └── schema.ts             # Zod schemas and TypeScript types
└── .env.local.example        # Environment variable template
```

## Design System (Neubrutalism)
- **Colors:** Yellow (#FFDE00), Pink (#FF52A3), Cyan (#00F0FF), Black (#000000)
- **Borders:** 3px solid black on all components
- **Shadows:** Hard offset shadows (no blur) - e.g., `6px 6px 0 #000`
- **Typography:** Clash Display (headers), Space Grotesk (body)
- **Border Radius:** None (sharp corners)

## Environment Variables
For Vercel deployment, set:
- `DISCORD_WEBHOOK_URL` - Your Discord webhook URL

## Development
```bash
npm run dev   # Start development server on port 5000
```

## API Endpoints
- `POST /api/order` - Submit order form (proxies to Discord webhook)
  - Request body: `{ name, contact, serviceCategory, subService, topic, deadline, budget }`
  - Response: `{ success: boolean, message: string }`

## Deployment Notes
- Designed for Vercel deployment
- Uses standard Next.js-compatible API route pattern
- Environment variables should be configured in Vercel dashboard
