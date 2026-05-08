# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio website for André Monteiro (alias: Mastardy), deployed via GitHub Pages. There is no build step, package manager, or server — all files are served directly.

To preview locally, open `index.html` in a browser or use any static file server:
```
npx serve .
# or
python -m http.server
```

## Architecture

The site has two page types that share `css/MyStyle.css` and Bootstrap from `css/`:

- **`index.html`** — single-page portfolio with sections: Intro, About, Skills, Professional Portfolio, University Portfolio, Personal Portfolio, Contact, Footer.
- **`projects/*.html`** — individual project detail pages (one per project). Each uses a consistent layout: navbar → specs table → media (video/iframe) → About section → Role section → optional download/link button → footer.

### JavaScript

Three custom scripts in `js/`:
- **`ScrollReveal.js`** — uses `IntersectionObserver` to trigger `.reveal` → `.reveal.visible` transitions on scroll. Any element needing scroll-in animation gets class `reveal`.
- **`MainPageSwitch.js`** — hides/shows the hero section (`#header`) and sticky navbar (`#headerSticky`) based on scroll position. Controls `fadeIn`/`fadeOut`/`fadeInUp`/`fadeOutDown` CSS animation classes. Only runs on screens ≥ 1280px wide.
- **`BackgroundSlider.js`** — exists in `js/` but is not currently loaded in any HTML page.

### CSS

- **`css/MyStyle.css`** — all custom styles. Sections are clearly commented (`NAVIGATION`, `HERO / INTRO`, `SKILLS`, `PROJECT CARDS`, etc.).
- **`css/bootstrap*.css`** — vendored Bootstrap 5. Do not edit these.
- The accent/brand color throughout is `#60C689`.
- Animation class names used by `MainPageSwitch.js` are noted with a comment in `MyStyle.css` — **do not rename** `fadeOut`, `fadeIn`, `fadeOutDown`, `fadeInUp`, `fadeInUpFast`.
- Desktop hero video (`.intro`) is hidden below 1280px; a static fallback image (`.mobile-intro`) is shown instead.

### Assets

- `assets/` holds images, videos, and the CV PDF. Project thumbnail images are a mix of local files and external `img.itch.zone` URLs.
- Roboto font variants are self-hosted in `css/font/` and declared via `@font-face` in `MyStyle.css`.

## Adding a New Project

1. Create `projects/<slug>.html` — copy an existing project page as a template (e.g., `projects/lussa.html` for professional, `projects/caelum.html` for university-style).
2. Add a project card in `index.html` inside the appropriate portfolio section (`Professional`, `University`, or `Personal`).
3. Place any new assets in `assets/`.
