# CLAUDE.md — Portfolio

A bilingual (EN/VI) personal portfolio for a backend engineer. Style:
**Modern Pixel Editorial**, an editorial web layout with original pixel art as the
accent. The overview page is a pixel scene that doubles as the navigation.

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
| `src/pages/` | `/`, `/[section]/`, and the same under `/vi/` |
| `src/components/` | Overview, section page shell, one component per section |
| `src/scene/` | Scene manifests (characters, objects, environment, overview) and the renderer/animator/camera/navigator modules |
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

## The scene

- Parts → sections: head → About, pickaxe → Projects, body → Skills,
  legs → Experience, wooden sign → Contact, ore block → Education.
- Every part has a visible text label (beside the part on wide screens, a list
  of links on narrow ones). Nothing depends on finding hotspots.
- Picking a part on the overview: the miner swings, the camera zooms onto the
  part, and the section page opens on that frame with its content rising over
  it. Keep that whole sequence short (about a second). Back or "Overview"
  zooms out.
- On a section page the content should reach the top of the screen quickly:
  the page title and the start of the first item belong on the first screen.
  The backdrop is a cue for where you are, not a hero.
- Moving between sections from a section page is direct (a compact section
  menu with the current one marked), with no zoom.
- Perpetual animation is limited to the overview: the idle mining loop (ore
  cracks, breaks, drops a diamond, regrows) and the twinkling sky. Both pause
  while a part is hovered or focused and when the tab is hidden, stop once a
  section opens, and never run under `prefers-reduced-motion`.
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
- Reduced motion: no zoom, no loops, content still reachable.
- Short screens and enlarged text still scroll to everything.
- Links, the language switch and Back all work.
