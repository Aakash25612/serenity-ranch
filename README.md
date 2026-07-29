# Serenity Ranch

Landing site for **Serenity Ranch First Responder Recovery**.

Static HTML/CSS/JS — ready for [Vercel](https://vercel.com) with zero build step.

## Pages

- [Home](index.html)
- [Welcome](welcome.html)
- [Program Highlights](program.html)
- [The Experience](experience.html)
- [Whole-Person Recovery](recovery.html)
- [Why Serenity Ranch](why.html)

## Preview locally

```bash
python3 -m http.server 5173
```

Visit http://localhost:5173

## Deploy on Vercel

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Framework Preset: **Other** (static files)
3. Leave Build Command empty and Output Directory blank (root)
4. Deploy

Or with the CLI:

```bash
npx vercel
npx vercel --prod
```

`vercel.json` enables clean URLs (`/welcome` → `welcome.html`).

## Contact

24/7 Admissions Line: **(888) 296-5772**
