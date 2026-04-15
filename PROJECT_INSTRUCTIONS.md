# Spotlight Weddings - Build Instructions

## Project Goal
Build a static website for a wedding photographer using React and TypeScript, with a premium glass-style visual language and strong focus on photos/videos.

## Finalized Tech Direction
- Frontend: React + TypeScript
- Build mode: static pre-render (React-based static output)
- Hosting: Cloudflare Pages
- Media storage/CDN: Cloudflare R2

## Site Structure (Final)
- Home
- Portfolio
- Films
- Contact (with email integration)
- About section will be inside the Home page (not a separate route)

## Brand Tokens (Provided)
- Background: `#8D9677`
- Primary: `#48553A`
- Accent: `#BDBCB0`
- Text: `#FFFFFF`
- Font: `Black Mango`

## Styling Rule (Important)
All style decisions must be centralized so updates are fast.

Planned structure:
- `src/styles/tokens.css`: all design tokens (color, typography, spacing, radius, blur, shadow)
- `src/styles/theme.css`: reusable glass classes/components using tokens only
- No hardcoded colors inside page/component files

## Home Page Design Reference (Final Direction)
The Home page should closely match the provided reference image ("exact design almost").

Visual direction to replicate:
- Centered editorial framed layout
- Hero image with overlaid text
- Collage-style photo block under hero
- Serif luxury typography and airy spacing
- Mid-page dark section with featured cards
- Magazine-like composition and layered panels
- Clean, premium wedding aesthetic with subtle glass feel

Reference asset noted by user:
- `c:/Users/Subhasis Das/Downloads/IMG-20260411-WA0015.jpg`

## Content / Assets Status
Provided:
- Brand colors
- Font name
- Home page visual reference

Pending from user (to plug in during build):
- Logo file(s)
- Black Mango font files (`.woff2` preferred)
- Final text copy (hero/about/contact)
- Portfolio categories and media assets
- Film source links/assets
- Contact recipient email and email provider setup details

## Contact + Email Integration
Requirement:
- Contact page includes form submission with email integration.

Planned implementation target:
- Static frontend on Cloudflare Pages
- Serverless function/API route for sending email (provider to confirm during implementation)

## Build Principles
- Mobile + desktop responsive from first implementation
- Performance-first media handling
- Reusable components and clean folder structure
- Keep all visual tokens in one place for quick theme changes

## Next Implementation Step
Scaffold the React + TypeScript project and implement the Home page first to match the reference composition as closely as possible, while applying the approved color and token system.
