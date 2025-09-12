# HKLABA Landing (Next.js + Tailwind)

## Pasos
1. `npm i`
2. Edita `app/page.tsx` (bloque ORG: URLs, email, teléfono).
3. Reemplaza imágenes de `/public/*.svg` por fotos reales (o cambia los arrays).
4. `npm run dev` y `npm run build`.
5. Sube a GitHub y conéctalo en Vercel.

## Notas
- `next.config.mjs` usa `images.unoptimized: true` (sirve imágenes locales sin config extra).
- Incluye `@types/react` y `@types/node` para evitar fallas en build TS.
