# Badal Umrah

A redesigned, conversion-focused front-end for Badal Umrah, an international service that lets customers worldwide book an Umrah (or Hajj) performed on someone's behalf in Makkah.

**Live:** https://badalumrah.org

## About the project

Badal Umrah is Anas Alnaasan's own international service platform. Customers from many countries book a proxy Umrah (Umrah Badal), which a trusted person performs in Makkah on behalf of someone who cannot go themselves, for example because of illness, old age or death. The platform has real paying clients from many countries. SEO work is ongoing to rank the site internationally, and an Android app (APK) is in progress.

This repository holds the **redesigned front-end**: a single-page marketing site that explains the service, presents the packages clearly, builds trust through Islamic rulings and documentation, and sends visitors to the booking flow.

**Anas's role:** brand, UI/UX design, front-end development, SEO and marketing.

## Features

- **Sticky, translucent navbar** with anchor navigation (Home, About, Services, Packages, FAQ, Contact), a "Book Now" call to action and a responsive mobile menu.
- **Full-screen hero** with a muted, looping YouTube video background, gradient overlay, staggered fade-up animations, primary/secondary CTAs and a charity banner.
- **About section** explaining the meaning of "Badal" and the concept of performing Umrah on behalf of others, with key trust statistics.
- **Service packages:** four Umrah packages (Du'a, Noor, Barakah Premium, Ongoing Umrah) in a card grid, plus a featured Hajj Al-Badal card. Each card has bilingual English/Arabic titles, a feature list, a badge and a deep link to the matching product page.
- **Package comparison:** a data-driven table on desktop that becomes stacked cards on mobile. It compares delivery time, special date, photos and videos, certificate, live broadcast and ongoing charity, with bilingual column labels.
- **How to book:** a four-step booking process with connector lines and a "Start Booking Now" CTA.
- **Islamic rulings:** scholar fatwa cards and an embedded video, which address the main trust question for the service.
- **Footer** with quick links, a WhatsApp contact button and brand info.
- **Custom design system:** a warm gold, sand and brown palette defined as HSL CSS variables, Playfair Display, Inter and Amiri (Arabic) typography, and custom gradient and shadow utilities.
- Client-side routing with a 404 page, plus `robots.txt` allowing major crawlers.

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5** (SWC React plugin)
- **Tailwind CSS 3** with `tailwindcss-animate` and `@tailwindcss/typography`
- **shadcn/ui** (Radix UI primitives) and **lucide-react** icons
- **React Router 6**, **TanStack Query 5**
- **Vitest** + Testing Library (jsdom), **Playwright** config
- ESLint 9 with `typescript-eslint`

## Project structure

```
badal-umrah/
├── public/                 # robots.txt (favicon not included, see Assets)
├── src/
│   ├── assets/             # logo, icon and package images (not included, see Assets)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── CompareTable.tsx
│   │   ├── HowToBook.tsx
│   │   ├── IslamicRulings.tsx
│   │   ├── Footer.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── hooks/              # use-mobile, use-toast
│   ├── lib/                # utils (cn helper)
│   ├── pages/              # Index, NotFound
│   ├── test/               # Vitest setup and example test
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # design tokens and custom utilities
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Getting started

```bash
npm install
cp .env.example .env   # no variables are required for this front-end
npm run dev            # http://localhost:8080
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm test`.

### Assets

The binary brand and image files are not committed to this repository. To run the project locally, add these files with the same names:

- `src/assets/badal-logo.png`
- `src/assets/badal-icon.png`
- `src/assets/service-dua.jpg`
- `src/assets/service-noor.webp`
- `src/assets/service-barakah.webp`
- `src/assets/service-ongoing.jpg`
- `src/assets/service-hajj.jpg`
- `public/favicon.ico` (optional)

## Built with AI-assisted development

This project was built by Anas Alnaasan with Lovable and Claude as AI coding assistants. Anas did the design direction, prompting, code review, content and deployment, and used AI to speed up implementation while keeping control of the product, brand and user experience.

## Author

**Anas Alnaasan** · MIZA Group · https://mizagroup.se · https://github.com/anasnassan92-cmyk

---

Source shared for portfolio purposes. © Badal Umrah. All brand assets belong to their owner.
