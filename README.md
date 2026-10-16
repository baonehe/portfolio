# Portfolio

My personal developer portfolio, in English and Vietnamese, on one scrolling
page. It opens on a pixel-art scene: a miner with a diamond pickaxe. Click a
part of the picture (head, pickaxe, body, legs, sign, ore block), or use the
menu, to jump to that section.

Built with [Astro](https://astro.build). All pixel art is original.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run dev -- --host   # also reachable from other machines on the LAN
npm run build      # static site in dist/
npm run preview    # serve the build
```

## Edit the content

All the text on the site, in both languages, lives in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Text in `[square brackets]` is
placeholder content; set `draft: false` there once it is all replaced.

## Project layout

```
src/data/portfolio.ts   site text (EN + VI)
src/components/         page sections and the scene view
src/scene/              scene manifests, renderer, animations, navigation
src/assets/scene/       pixel art (PNG)
docs/scene-assets.md    how to change the scene and its art
```
