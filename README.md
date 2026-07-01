# Salón Mirador — Sitio web

Sitio web de marketing para **Salón Mirador**, salón de eventos en Cuauhtémoc, Chihuahua.
Página única (single-page) en español (México), optimizada para móvil, SEO local y conversión
a WhatsApp / formulario de contacto.

## Stack

- **Vite 6** como servidor de desarrollo y bundler de producción.
- HTML, CSS y JavaScript nativos (sin frameworks pesados).
- Salida estática lista para desplegar en cualquier hosting (Vercel, Netlify, Cloudflare Pages, etc.).

## Requisitos

- Node.js 18+ (probado en Node 22).

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # genera el sitio de producción en /dist
npm run preview  # sirve /dist localmente en http://localhost:4173
```

## Estructura

```
.
├── index.html            # marcado del sitio (secciones, SEO, JSON-LD)
├── styles.css            # estilos (paleta cálida, tipografía serif + sans)
├── script.js             # nav móvil, animaciones, galería lightbox, formulario, video hero
├── vite.config.js        # configuración de Vite
├── public/
│   ├── pictures/         # imágenes .webp + video del hero (hero-video.mp4, hero-poster.jpg)
│   ├── robots.txt
│   └── sitemap.xml
└── dist/                 # salida de producción (generada por `npm run build`)
```

> Los archivos en `public/` se copian tal cual a `dist/` y se sirven desde la raíz (`/pictures/...`).

## Video del hero

El hero usa `public/pictures/hero-video.mp4` (H.264, `+faststart` para streaming progresivo)
con `hero-poster.jpg` como imagen de carga. El video se reproduce en silencio y en bucle, y
se **pausa automáticamente** cuando el usuario prefiere menos movimiento (`prefers-reduced-motion`)
o cuando el hero sale de pantalla, para ahorrar batería.

Para reemplazar el video, sustituye `hero-video.mp4` y regenera el póster:

```bash
ffmpeg -y -i entrada.mov -an -vcodec libx264 -crf 25 -preset veryfast \
  -movflags +faststart -pix_fmt yuv420p public/pictures/hero-video.mp4
ffmpeg -y -ss 2 -i public/pictures/hero-video.mp4 -frames:v 1 -q:v 3 \
  public/pictures/hero-poster.jpg
```

## Despliegue en GitHub Pages

El repo incluye un workflow (`.github/workflows/deploy.yml`) que compila y publica
automáticamente en cada push a `main`.

Para activarlo una sola vez: en GitHub ve a **Settings → Pages → Build and deployment**
y en **Source** elige **GitHub Actions**. El sitio quedará en
`https://httpsteven.github.io/salon-mirador/`.

Como es un *project site* (se sirve desde `/salon-mirador/`), el workflow compila con
`VITE_BASE=/salon-mirador/` para que todas las rutas de assets sean correctas.

- **¿Dominio propio o *user site*** (servido en la raíz `/`)**?** Cambia `VITE_BASE` a `/`
  en el workflow (o quita esa variable) y agrega tu dominio en **Settings → Pages → Custom domain**.

> Nota: el video del hero pesa ~5 MB. GitHub Pages tiene un límite suave de 100 GB de ancho
> de banda al mes; suficiente para un sitio de este tipo, pero si el tráfico crece conviene
> mover el video a un CDN.

Otras opciones de hosting estático (Vercel, Netlify, Cloudflare Pages) funcionan sin
configuración de `base` porque sirven desde la raíz — solo build `npm run build`, output `dist`.

## Pendientes antes de publicar

- Confirmar teléfono/WhatsApp (`625 102 48 75`) e Instagram (`@salon_mirador`).
- Cambiar el dominio `https://salonmirador.mx/` en `index.html` (canonical, Open Graph, JSON-LD),
  `public/robots.txt` y `public/sitemap.xml` si el dominio final es otro.
- El formulario usa `mailto:contacto@salonmirador.mx`. Cámbialo por el correo real o
  conéctalo a un backend/servicio de formularios (Formspree, Netlify Forms, etc.).
