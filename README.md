# Vancouver Academy of Dance — Website

Homepage for Vancouver Academy of Dance, built from the design handoff mockups.

It's a plain static site with no build step and nothing to install:

| File | What it does |
|---|---|
| `index.html` | All the page content (text, links, images). Most edits happen here. |
| `styles.css` | Colours, fonts, sizes and layout. Mobile layout is at the bottom (under 1024px wide). |
| `script.js` | EN / 中文 toggle, mobile menu, and the fade-in-on-scroll effect. |
| `assets/` | Photos. |

## See it on your computer

Double-click `index.html` to open it in your browser.

## Put it online (free, with GitHub Pages)

1. On GitHub, open the repo, then go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to *Deploy from a branch*.
3. Pick the branch (e.g. `main`) and the `/ (root)` folder, then click **Save**.
4. After a minute or two the site will be live at the address GitHub shows you.

## Common edits

- **Change text:** find it in `index.html` and edit it.
- **Change events:** look for the `<!-- ===== Events` section in `index.html`.
- **Change a colour everywhere:** edit the values at the top of `styles.css` (e.g. `--red: #D3173A;`).
- **Chinese translations for the toggle:** in `script.js`, in the `TRANSLATIONS` list.

## Still placeholder (from the design handoff)

- Anabel Ho quote (needs approved wording)
- Events (dates and names)
- Yearbook photo, and where the "View the yearbook" button goes
- Affiliation logos (Royal Academy of Dance, ISTD, Acrobatic Arts, plus 2 more)
- Weekend closing time
- Real VAD logo (the "VAD" wordmark is typed text right now)
- High-resolution photo of Anabel Ho
- Most buttons and links (Register, class tiles and so on) point to `#` until those pages exist
