# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for RISE, an AI-powered wardrobe assistant mobile app. The project is built with modern web technologies and follows a dark theme with purple-to-pink gradients.

## Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **TypeScript**: Configured with strict mode
- **Build Tool**: Turbopack (for development)

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts
  - `page.tsx` - Homepage (currently default Next.js starter)
  - `globals.css` - Global styles
- `public/` - Static assets
- TypeScript configuration uses `@/*` path mapping to `./src/*`

## Architecture Notes

### Current State
The project is a fresh Next.js installation with:
- Default starter page content
- Geist font family configured
- Tailwind CSS v4 setup
- ESLint configuration

### Planned Implementation
The `claude.md` file contains comprehensive specifications for implementing:
- Glass-morphism navigation header
- Hero section with gradient backgrounds and animations
- Features section with cards
- How-it-works section with step indicators
- Statistics section
- Download section with app store buttons
- Footer with company links

### Missing Dependencies
The specifications call for additional packages not yet installed:
- `framer-motion` for animations
- `lucide-react` for icons
- `@radix-ui/react-slot` for shadcn/ui components
- `class-variance-authority`, `clsx`, `tailwind-merge` for utility functions

## Design System

**Colors**: 
- Background: #FBF4E1 (ivory)
- Primary Text: #3A3E38 (charcoal)
- Accent: #9A917A (stone)
- Success/Secondary: #CEC5AB (sand)
- Surface: #F5EFE1 (lighter ivory for cards)
- Error: #E44646 (red)

**Theme**: Light, warm ivory background with earthy tones
**Typography**: Playfair Display for headings, Inter for body text
**Style**: Clean, elegant with warm earth tones and subtle shadows

## Development Notes

- Uses Turbopack for faster development builds
- Path aliases configured (`@/` maps to `src/`)
- Strict TypeScript configuration
- ESLint with Next.js specific rules