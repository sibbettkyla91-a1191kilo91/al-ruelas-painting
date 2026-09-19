# Al Ruelas Painting — website template

A simple one-page website for a residential interior & exterior painting business in Albany, Oregon.

Fill in the blanks, swap photos, and publish.

## Quick edit list

Open `index.html` and search for `EDIT:` — every placeholder is marked.

| What | Where |
|---|---|
| Phone number | Search `(564)244-0106` |
| Email | Search `Allenruelas93@gmail.com` |
| Business address | Search `YOUR_ADDRESS` |
| License / CCB # | Search `YOUR_LICENSE` |
| Hours | Search `YOUR_HOURS` |
| About paragraph | Search `EDIT: ABOUT` |
| Reviews | Search `EDIT: REVIEW` |
| Service towns | Search `EDIT: Albany, OR` |
| Photos | Replace files in `/images` |

## Photos

Replace these files with real job photos (keep the same filenames, or update the `src` in `index.html`):

- `images/hero-craftsman.jpg` — homepage banner
- `images/interior-living.jpg`
- `images/interior-bedroom.jpg`
- `images/interior-kitchen.jpg`
- `images/exterior-ranch.jpg`
- `images/detail-trim.jpg`

## Contact form

Two options:

1. **Netlify Forms (easiest if hosted on Netlify)**  
   The form already has `netlify` and `name="estimate"`. After the first deploy, submissions show up in the Netlify dashboard.

2. **Your own email**  
   Change the form `action` to a service like Formspree, or hook it to your email later.

Until then the form is in template mode and will not send mail.

## Publish

- Drag the `al-ruelas-painting` folder onto [Netlify Drop](https://app.netlify.com/drop), or
- Push this folder to GitHub and connect the repo to Netlify or Vercel, or
- Use any static host.

Then point a domain like `alruelaspainting.com` at it when you are ready.
