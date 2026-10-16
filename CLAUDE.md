# CLAUDE.md — Portfolio

A bilingual (EN/VI) personal portfolio for a backend engineer. Style:
**Modern Pixel Editorial**, an editorial web layout with original pixel art as the
accent. It is one continuous page: a hero with a pixel scene that doubles as
navigation, then every section in reading order under a fixed menu. See
`docs/one-page-scroll-proposal.md` for the reasoning.

It is a portfolio, not a game: no gameplay, movement, maps, quests or scores.

## Commands

```bash
npm run dev              # http://localhost:4321
npm run dev -- --host    # also reachable on the LAN (share with colleagues)
npm run build            # static output in dist/
npm run preview
```

Stack: Astro 7, static output, plain CSS (no UI framework), fonts from
Fontsource. No test runner or type checker is installed; `npm run build` is the
check, plus a look in the browser.

Repo: `github.com/baonehe/portfolio` (public), pushed through the
`github-personal` SSH alias. Deploy target is still undecided; keep the build
host-agnostic.

## Where things live

| Path | What |
|---|---|
| `src/data/portfolio.ts` | **All site text**, EN and VI, plus name/email/links and the `draft` flag |
| `src/i18n/content.ts` | Languages, section order, URLs, content types (no text) |
| `src/pages/` | `/` and `/vi/` (the page); `/[section]/` and `/vi/[section]/` only redirect old links to `/#section` |
| `src/components/` | `Home` (page shell), `SiteNav` (fixed menu), `Hero` (scene), one component per section, `Moved` (redirect page) |
| `src/scene/` | Scene manifests (characters, objects, environment, overview) and the renderer/animator/navigator modules |
| `src/assets/scene/` | Scene art as PNG |
| `src/sprites/` | Small UI pixel art (icons, project illustrations) drawn on grids, rendered as SVG |
| `src/styles/global.css` | Design tokens, fonts, base styles |
| `docs/scene-assets.md` | How to change the scene and its art |

## Content rules

- Every visible string goes in `src/data/portfolio.ts`, never in a component.
  Add it to both `en` and `vi`, and write the Vietnamese out in full rather than
  deriving it from the English.
- Only real content. Text in `[square brackets]` is a placeholder and renders
  highlighted; never present placeholder or invented projects, metrics,
  employers or skills as fact. Turn `site.draft` off only once nothing is left
  in brackets.
- Project art is illustration, never passed off as a product screenshot.

## The page

- Section order (`sectionOrder` in `src/i18n/content.ts`): About, Projects,
  Experience, Skills, Education, Contact. Projects comes early on purpose.
- Each section is `<section id="<id>">` with English ids in both languages
  (`/#projects`, `/vi/#projects`), so any section can be linked directly.
- The fixed menu lists all six sections in page order and marks the one being
  read (inverted, plus `aria-current`). From 1024px it is one row; narrower
  screens use a "Contents" disclosure (Escape closes it), and without
  JavaScript a scrollable row. The language switch keeps the current section.
- Menu, CTA and scene clicks add a history entry (Back returns); scrolling by
  hand does not. After a jump, focus moves to the section heading.
- Old `/<section>/` URLs are static meta-refresh pages to `/#<section>`, so the
  build stays host-agnostic.
- Outbound links (GitHub, LinkedIn, CV, project links) render only once their
  `href` is real, not `'#'`.

## The scene

- Parts → sections: head → About, pickaxe → Projects, body → Skills,
  legs → Experience, wooden sign → Contact, ore block → Education.
- Every part has a visible text label (beside the part on wide screens, a list
  of links on narrow ones). Nothing depends on finding hotspots.
- Picking a part: the miner swings and the page starts scrolling to the
  section after about 200ms. No zoom. Under reduced motion it jumps straight
  there.
- Perpetual animation is limited to the hero: the idle mining loop (ore
  cracks, breaks, drops a diamond, regrows) and the twinkling sky. Both pause
  while a part is hovered or focused, when the tab is hidden and while the
  scene is scrolled out of view, and never run under `prefers-reduced-motion`.
- Change the scene through its manifests and PNGs, not the modules; see
  `docs/scene-assets.md`. All art is original: no Mojang/Minecraft assets,
  skins or logos.

## Design system

- Dark only. Tokens live in `src/styles/global.css`: obsidian `#101418`
  background, deepslate `#1B252C` surfaces, diamond-cyan `#42E8DC` as the one
  accent, diamond-teal `#187F91` secondary, text `#F0F5F5` / `#A7B4BA`. Pixel
  art may add skin tones, wood brown and the moon's white.
- Type: Bricolage Grotesque for display, Be Vietnam Pro for body (it covers
  Vietnamese well), Silkscreen pixel font only for short labels. Never use the
  pixel font for paragraphs.
- Spacing on the 4px scale (`--s-1` … `--s-10`); gutters from `--gutter`.
- Pixel art stays crisp (`image-rendering: pixelated`, whole-pixel scaling) and
  in one consistent style. It accents the layout; it does not replace it, and
  it should never crowd out the text (e.g. project copy gets more width than
  its illustration).
- No fake OS or game UI, no emoji as illustration, no trendy effects without a
  reason. When unsure, pick the simpler option.

## Quality bar

Check in the browser before calling UI work done:

- No horizontal overflow or clipped controls at 320, 390, 768 and 1440px wide,
  in both languages (Vietnamese labels run longer).
- Touch targets at least 44px; visible focus states; sensible keyboard order.
- Reduced motion: no smooth scroll, no swing, no loops, content still reachable.
- Short screens and enlarged text still scroll to everything.
- Links, the menu (and its narrow-screen Contents panel), the language switch,
  Back/Forward and the old `/<section>/` URLs all work.
