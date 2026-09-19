# Al's Painting

Website for **Al Ruelas Painting** — residential interior and exterior painting in Albany, Oregon.

Built with TanStack Start, React, and Tailwind CSS.

## Fill in your details

Open [`src/lib/site.ts`](src/lib/site.ts) and add:

- Phone number
- Email
- Street address / ZIP
- Hours
- License number (if you want it on the site)
- Nearby towns you serve
- Estimate form endpoint (Formspree, Getform, or similar)

Until those are filled in, the site hides empty contact fields instead of showing fake information.

Replace the photos in `public/images/` with pictures of real jobs. Keep the same file names, or update the paths in `src/lib/site.ts`.

## Local preview

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal.

```bash
npm run build
npm run preview
```

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services overview |
| `/services/interior-painting` | Interior |
| `/services/exterior-painting` | Exterior |
| `/services/prep-and-repair` | Prep & repair |
| `/services/trim-and-color` | Trim, doors & color |
| `/work` | Project gallery |
| `/about` | About |
| `/contact` | Estimate request |
| `/privacy` | Privacy |

Estimate requests POST to `/api/estimate`. If `estimateEndpoint` is set in `src/lib/site.ts`, the server forwards the request there.

## Deploy

Connect this repo to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). Build command is `npm run build`.
