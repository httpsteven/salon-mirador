# Website Build Prompt — Salón Mirador

Use the prompt below (everything inside the horizontal rules) as the instruction set for a website-building agent or developer. Background research that informed it follows afterward for reference.

---

## PROMPT TO GIVE THE BUILDING AGENT

You are building a high-quality, modern marketing website for **Salón Mirador**, an event venue in Cuauhtémoc, Chihuahua, Mexico. The site's job is to convert visitors (mostly engaged couples, quinceañera families, and corporate/event planners) into booking inquiries via WhatsApp or a contact form.

### 1. Business Profile

- **Name:** Salón Mirador
- **Category:** Event venue / salón de eventos (weddings, quinceañeras, corporate events, community/social gatherings)
- **Location:** Villa Encinos, Cd. Cuauhtémoc, 31613 Cuauhtémoc, Chihuahua, México (rural setting, "Campo 10")
- **Coordinates:** 28.7243, -106.929 (use for the embedded Google Map)
- **Phone / WhatsApp:** 625 102 48 75
- **Instagram:** https://www.instagram.com/salon_mirador/ (@salon_mirador)
- **Google Maps listing:** https://share.google/4JBRMb9VgPNhVouaV
- **Price range:** Rental from $18,000 to $40,000 MXN depending on package/date
- **Capacity:** 20–300 guests (up to 300 in the garden, up to 100 in the indoor hall)
- **Spaces available:** Indoor hall (salón), garden, terrace, large secure parking lot, kitchen available for use by outside caterers
- **Policies to reflect on the site (e.g., in an FAQ section):**
  - Only one event hosted per day (exclusive use)
  - Events must end by 11:00 PM
  - Outside catering is welcome — the venue does not require exclusivity with any caterer, photographer, or band
  - No in-house catering or lodging for guests
  - Wheelchair accessible
  - Payment accepted via cash or bank transfer
  - No fixed/mandatory rental deposit structure — packages are discussed directly

### 2. Brand Story & Positioning

Salón Mirador sits at the foot of the hills that hold the "Mirador Menonita" (a well-known local lookout point over Cuauhtémoc's farmland and Mennonite countryside). Lean into this: the venue's core differentiator is its panoramic countryside view combined with a modern, architecturally striking building (clean lines, wood and stone accents, large windows) set against green lawns and open sky. The tagline spirit from their Instagram is roughly "an event hall for any occasion — make your event a unique moment," emphasizing natural beauty and unforgettable views.

Brand tone: warm, elegant, natural, a little upscale but still approachable and family-friendly — not stiff corporate luxury. Write all on-site copy in **Spanish (Mexican, warm and inviting)**, with clear, benefit-driven language aimed at couples and families planning a milestone event.

### 3. Available Image Assets

All images live in the `pictures/` folder alongside this prompt. Use them as follows:

| File | Description | Suggested use |
|---|---|---|
| `front-logo.webp` | Close-up of the illuminated "SALÓN MIRADOR" sign at dusk with landscaping | Hero background or logo/brand moment |
| `facade.webp` | Wide daytime shot of the modern building facade with guests arriving | Hero image or "About the Venue" section |
| `outside-front.webp` | Golden-hour shot of the entrance with the Mennonite lookout cabins visible on the hill behind | Hero image — strong option, ties directly to the "mirador" story |
| `venue-inside.webp` | Fully styled indoor reception with draped ceiling, string lights, and long banquet tables | Gallery / "The Space" section — shows event-ready styling |
| `aerial-view.webp` | Drone shot showing the full building footprint and grounds during an event | Gallery — good for showing scale/capacity |
| `amenities.webp` | The wooden lookout cabin/tower on the rocky hilltop above the venue | Gallery or "Surroundings" section — reinforces the view/nature story |
| `view.webp` | Panoramic countryside view taken from the hilltop lookout | Gallery or full-width scenic break between sections |

Do not stretch or distort these images. Use responsive, optimized (WebP-first) image handling with appropriate lazy loading.

### 4. Site Structure

Build a single-page or lightly multi-page site (client's preference can default to one elegant scrolling page with anchor navigation) with these sections/pages:

1. **Hero** — full-bleed image (facade or outside-front), venue name, one-line value proposition, primary CTA button ("Solicita información" / "Cotiza tu evento") linking to WhatsApp (`https://wa.me/526251024875`) and a secondary CTA to scroll to the gallery or contact form.
2. **Sobre el Salón (About)** — short story about the venue: the view, the architecture, the setting near the Mennonite lookout, what makes it special.
3. **El Espacio (The Space / Amenities)** — list capacity, spaces (salón, jardín, terraza, estacionamiento, cocina para catering), accessibility, and event policies (one event/day, hasta las 23:00, catering libre, etc.) as short icon+text feature blocks.
4. **Galería** — responsive photo grid/lightbox using all provided images plus room to add more later.
5. **Eventos (What we host)** — bodas, XV años, eventos corporativos, eventos sociales/familiares — brief description of each.
6. **Preguntas Frecuentes (FAQ)** — turn the policy details above into a clean accordion (price range, capacity, catering rules, hora límite, forma de pago, accesibilidad).
7. **Ubicación y Contacto** — embedded Google Map (use the coordinates/listing above), address, phone/WhatsApp click-to-chat button, Instagram link/icon, and a simple contact form (name, event date, event type, guest count, message) that submits via mailto or a form backend placeholder.
8. **Footer** — logo, quick links, social icon, phone, address, copyright.

### 5. Design Direction

- Match the venue's real architecture: modern, minimal, warm-neutral palette (sand, charcoal, warm wood brown, soft white) with green from the landscape as an accent.
- Typography: an elegant serif or refined display font for headings (evoking wedding/event elegance) paired with a clean sans-serif for body text.
- Generous whitespace, large full-bleed photography, subtle scroll animations are welcome but should not slow the site down.
- Fully responsive/mobile-first — most inquiries will come from phones via Instagram/WhatsApp.
- Sticky/accessible WhatsApp contact button on mobile.

### 6. Technical Requirements

- Fast-loading, accessible (semantic HTML, alt text in Spanish describing each photo), SEO-optimized for local search: title/meta description targeting "salón de eventos Cuauhtémoc Chihuahua," "salón para bodas Cuauhtémoc," structured data (LocalBusiness / EventVenue schema) with the address, phone, and geo-coordinates above.
- Working links: WhatsApp click-to-chat, Instagram profile, embedded Google Map.
- Contact form with basic client-side validation.
- Clean, deployable static output (plain HTML/CSS/JS or a lightweight framework) — no unnecessary dependencies.

### 7. Deliverable

A polished, ready-to-deploy website (or well-structured code project) fulfilling all sections above, using the real photos provided, real contact details, and Spanish copy that reflects the brand story of a modern event venue with a spectacular countryside view next to the Mennonite lookout point in Cuauhtémoc, Chihuahua.

---

## Research Notes (for your reference, not part of the agent prompt)

- Source: Instagram @salon_mirador (1,033 followers, 120 posts as of research) — bio positions it as an "event hall for any occasion," emphasizing unique moments and nature views. Located at "Campo 10, Cd. Cuauhtémoc." (Direct fetch of instagram.com and the Google Maps share link both returned JS-rendered shells with no extractable data — this info came from indexed search snippets instead.)
- Source: [bodas.com.mx listing](https://www.bodas.com.mx/salones-para-bodas/salon-mirador--e419518) — pricing ($18,000–$40,000 MXN), capacity (20–300), amenities, and full FAQ policy list used above.
- Source: search snippet referencing [sintactico.com.mx/salonmirador](https://www.sintactico.com.mx/salonmirador/) — confirms the venue sits at the foot of the hills housing the "Mirador Menonita" lookout, a known local landmark, and that furniture (tables/chairs) is included.
- Google Maps coordinates (28.7243, -106.929) and address ("Villa Encinos, 31613 Ciudad Cuauhtémoc, Chih") pulled from the bodas.com.mx map embed data, since the Google Maps share link itself couldn't be crawled directly.
- Chrome browser automation was unavailable during this session (extension not connected), so Instagram and the Google Maps listing could not be visually inspected directly — the prompt above notes this so the building agent (or you) can double-check the phone number, follower count, and any recent posts directly in Instagram before launch.
