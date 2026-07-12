# Solpor de Arousa

Landing page for **Solpor de Arousa**, a rural house (casa rural) in Bamio, Vilagarcía de Arousa (Pontevedra, Galicia).

Built with [Astro](https://astro.build/). Multilingual: Spanish (default), English and Galician.

## Property

- **Address:** Rúa Pedroso, 46, 36618 Bamio, Pontevedra
- **Capacity:** up to 8 guests
- **Rental:** whole house only
- **Price:** €300 / day
- **Contact / WhatsApp:** +34 620 06 76 10
- Features: 3 bedrooms, 2 bathrooms, private pool, stone barbecue, sea views, parking.

## Languages / routes

| Locale | URL |
|--------|-----|
| Español (default) | `/` |
| English | `/en/` |
| Galego | `/gl/` |

All copy lives in `src/i18n/content.ts`.

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the build locally |

## Project structure

```
public/images/        Photos (renamed, optimized-friendly)
src/i18n/content.ts   All translations + contact data
src/layouts/          Base layout (SEO, hreflang, JSON-LD)
src/components/        Header, Hero, House, Amenities, Gallery, Nearby, Book, Footer, Page
src/pages/            index (ES), en/index, gl/index
src/styles/global.css  Design system + styles
```

## Deploy

Static output; deploy `dist/` to Netlify, Vercel or Cloudflare Pages. Point the domain `solpordearousa.com` at it.
