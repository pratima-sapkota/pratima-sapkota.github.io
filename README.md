# Pratima Sapkota - Portfolio

A terminal-themed portfolio website built with Next.js, featuring Matrix rain effects, CRT scanlines, and a hacker aesthetic.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Font:** JetBrains Mono

## Features

- Terminal/hacker-inspired UI design
- Matrix rain background effect
- CRT scanline overlay
- Fully responsive (mobile-first design)
- Static site generation for fast loading
- Smooth page transitions and animations
- Accessibility support (respects `prefers-reduced-motion`)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Neofetch-style introduction |
| `/experience` | Career timeline with git log styling |
| `/projects` | Project directory listing |
| `/skills` | Skills visualization with progress bars |
| `/community` | Community contributions, CTF participations & volunteering |
| `/ventures` | Entrepreneurial journey and startups |
| `/contact` | Contact information |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pratima-sapkota/pratima-sapkota.github.io.git

# Navigate to the project directory
cd pratima-sapkota.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── community/         # Community, CTF & volunteering page
│   ├── ventures/          # Ventures page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Header, Footer
│   └── effects/           # MatrixRain, Scanlines, GlitchText, TypingEffect
└── data/                  # Static data files
    ├── skills.ts
    ├── projects.ts
    ├── experience.ts
    ├── ctf.ts
    └── volunteering.ts
```

## Deployment

This site is configured for static export and can be deployed to GitHub Pages:

```bash
# Build for static export
npm run build

# The output will be in the 'out' directory
```

The site is automatically deployed via GitHub Actions on push to the `main` branch.
