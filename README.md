# ZUNO Frontend

A movie and TV streaming website UI built with Next.js. This is a **frontend only** project: there is no backend and no API. All content comes from static mock data in `lib/data.js`.

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | Next.js 14 (App Router) |
| UI library | React 18 |
| Language | JavaScript (ES6+) |
| Styling | Plain CSS (`app/globals.css`) with CSS variables, Grid and Flexbox |
| Routing | Next.js file-based routing with route groups `(site)` and `(auth)` |
| Data | Static mock data (`lib/data.js`), no API calls |
| Path aliases | `@/*` via `jsconfig.json` |
| Package manager | npm |

No UI framework, CSS library or state library is used. State is handled with React hooks (`useState`, `useRef`, `useEffect`).

## Requirements

- Node.js 18.17 or newer
- npm 9 or newer

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other commands:

```bash
npm run build   # production build
npm start       # run the production build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home: hero, poster rows, FAQ, plans, free-trial banner |
| `/movies` | Movies listing |
| `/tvshows` | TV shows listing |
| `/title/[slug]` | Title detail page, with episode list for series |
| `/search?q=` | Search with All / Movies / TV Shows filters |
| `/about` | About Us |
| `/contact` | Contact form (demo only, nothing is sent) |
| `/login` | Login |
| `/signup` | Sign up |
| `/verify` | Phone number verification |
| `/otp` | OTP entry |

## Project Structure

```
zuno-frontend/
├── app/
│   ├── layout.js            # Root layout
│   ├── globals.css          # All styles and design tokens
│   ├── (site)/              # Pages with navbar and footer
│   │   ├── layout.js
│   │   ├── page.js          # Home
│   │   ├── movies/
│   │   ├── tvshows/
│   │   ├── title/[slug]/
│   │   ├── search/
│   │   ├── about/
│   │   └── contact/
│   └── (auth)/              # Full-screen auth pages
│       ├── layout.js
│       ├── login/
│       ├── signup/
│       ├── verify/
│       └── otp/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Row.js               # Titled poster grid
│   ├── Poster.js            # Poster card (gradient placeholder)
│   ├── Faq.js
│   ├── Plans.js
│   ├── Cta.js
│   └── SearchView.js
├── lib/
│   └── data.js              # Mock catalog, FAQs, plans, episodes
├── jsconfig.json
├── next.config.js
└── package.json
```

## Customizing

- **Colors and spacing:** edit the CSS variables at the top of `app/globals.css` (`--red`, `--bg`, `--card`, and so on).
- **Content:** edit titles, FAQs, plans and episodes in `lib/data.js`.
- **Real poster and hero images:** put images in `public/` and replace the gradient background in `components/Poster.js` (and the hero styles in `globals.css`) with `<img>` or `next/image`.
- **New page:** add a folder with a `page.js` inside `app/(site)/` (or `app/(auth)/` for a page without the navbar).

## Notes

- Forms (login, sign up, OTP, contact) are visual only. They move between pages or show a message but do not validate against any server.
- Posters use generated gradients because the original artwork is not included.
- Colors, fonts and spacing were matched by eye from design screenshots, so small differences from the original Figma are expected.
