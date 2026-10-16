# Scene assets

The hero at the top of the page is one pixel-art scene. Its art is PNG files; its layout,
animation and navigation come from typed manifests. This page explains how the
pieces fit and how to add or replace them.

## Where things live

```
src/assets/scene/                       PNG art (the only files an artist touches)
  characters/<id>/<id>.sheet.png        character sprite sheet
  environments/<id>/<id>.<layer>.png    environment layers (deepslate.floor.png, .moon.png, .sparkle.png)
  objects/<id>/<id>.png                 single-image objects
  objects/<id>/<id>.cracks.png          crack stages for a breakable object
  objects/<id>/<id>.drop.png            item a breakable object drops

src/scene/                              manifests and logic
  types.ts                              interfaces for everything below
  characters/<id>.ts                    sheet grid, size, animations, hotspots
  environments/<id>.ts                  floor texture and its tile size / height
  objects/<id>.ts                       object image and size
  scenes/<id>.ts                        placements, section targets, select animation
  index.ts                              picks the active scene, derives geometry
  validate.ts                           build-time checks (see below)
  animator.ts                           plays sheet animations in the browser
  particles.ts                          pixel particle bursts (Web Animations, no frame loop)
  mining.ts                             the idle mining loop
  navigator.ts                          clicks → swing → scroll to section; menu state

src/components/scene/
  SceneView.astro                       renders a scene (floor, objects, characters, hotspots)
  Sprite.astro                          renders one character from its sheet
```

Each part does one job and talks to the others through data only: the
renderer never decides timing, the animator never knows which character it is
playing, and the navigator only reads data attributes written by the renderer.

## Units

- **Sheet pixels**: pixels in a PNG. Used only for `frameWidth` / `frameHeight`.
- **Scene units**: the layout grid. The overview scene is 64 × 52 units and
  renders at whatever size the screen allows (`--u` px per unit). Placements,
  object sizes, character `size`, hotspots, label offsets and the floor height
  are all in scene units.

Keeping these apart is what lets you swap a 24 × 36 px sheet for a 48 × 72 px
one without touching anything but the sheet's frame size.

## Naming

- Lowercase kebab-case ids: `miner`, `diamond-ore`, `deepslate`.
- A file's name starts with its id, then its role: `miner.sheet.png`,
  `deepslate.floor.png`, `diamond-ore.png`.
- One folder per asset id under its kind (`characters/`, `environments/`, `objects/`).

## Sprite sheets

- PNG with transparency, no padding or spacing between frames.
- All frames the same size, laid out in a grid read left to right, top to bottom.
  Frame index = `row × columns + column`, starting at 0.
- Image size must be exactly `frameWidth × columns` by `frameHeight × rows`.
- Draw every frame on the same baseline: the character's feet sit on the same
  pixel row in every frame, and the frame keeps room for the widest and highest
  pose (the miner's 36 × 44 px frame fits the pickaxe raised overhead and
  swung down in front).
- Hard pixel edges only; the page renders with `image-rendering: pixelated`, so
  any whole-number upscale stays crisp.

The miner sheet today: 144 × 44 px, 4 × 1 frames of 36 × 44 px, side view
facing right.

| Frame | Pose |
|---|---|
| 0 | ready (idle) |
| 1 | wind-up, pickaxe overhead |
| 2 | swing |
| 3 | impact, pickaxe head low in front |

The block the miner hits sits 32 px right of the frame's left edge, on the same
floor row, so the impact frame's pickaxe head lands on its upper-left corner.

## Character manifest

```ts
export const miner: Character = {
  id: 'miner',
  sheet: { image, frameWidth: 36, frameHeight: 44, columns: 4, rows: 1 },
  size: { w: 36, h: 44 },            // scene units one frame covers
  animations: {
    idle:   { frames: [0], duration: 1000, loop: true },          // required
    mine:   { frames: [1, 2, 3, 0], duration: [380, 90, 280, 220], loop: false },
    select: { frames: [1, 2, 3, 0], duration: [70, 50, 120, 40], loop: false },
  },
  hotspots: {                         // idle pose, in `size` units
    head: { x: 12, y: 12, w: 8, h: 8 },
    // …
  },
};
```

- `idle` is required: it is the resting frame and what one-shot animations return to.
- `duration` is one number for every frame, or one number per frame.
- One-shot animations (`loop: false`) can be played on select; the scene names
  which one in `selectAnimation`. The page starts scrolling about 200ms in, so
  keep it short.
- Under reduced motion the animator shows the idle frame and skips playback.
- Hotspots describe the idle pose. Keep the head, body and legs in place across
  frames; the `tool` hotspot covers where the pickaxe rests and swings.

## Night sky

An environment can carry a `sky`: plain stars, sparkles and a moon.

```ts
sky: {
  stars:    { count: 260, seed: 7, colors: [...], sizes: [0.4, 0.4, 0.6, 0.8], twinkleMs: [1800, 5200] },
  sparkles: { count: 22, seed: 21, sheet: { image: sparkle, frameWidth: 5, frameHeight: 5, columns: 3, rows: 1 },
              size: 2.5, twinkleMs: [2400, 6400] },
  moon:     { image: moon, x: 55, y: 4, size: { w: 10, h: 14 } },
}
```

- **Stars** are squares placed at build time from `seed` across three scene
  widths above the floor, so every load shows the same sky and wide screens
  never see an edge. Picking a size from `sizes` more often is a matter of
  listing it more than once. Change `seed` for a different arrangement.
- **Sparkle sheet**: frames left to right from faintest to brightest
  (`deepslate.sparkle.png`: dim dot → small star → full cross). Each sparkle
  steps forward and back through them.
- **Moon**: any PNG; include a halo in the image itself if you want one (the
  current one is a white crescent with a 2 px translucent cyan halo following its
  outline).
- Twinkling is CSS only, runs only on the interactive render, pauses with the
  idle loop, and stops under reduced motion. Keep the moon clear of the
  header and of hotspot labels; nudge it with `x` / `y`. On narrow screens,
  where the scene is cropped, the moon is pulled in from the viewport's right
  edge rather than cut off.

## Breakable objects

An object becomes minable with a `breakable` block:

```ts
breakable: {
  cracks: { image: cracks, frameWidth: 8, frameHeight: 8, columns: 6, rows: 1 },
  drop: { image: drop, size: { w: 4, h: 4 } },
  particles: {
    hit:   { count: 4,  colors: stone, size: 0.75, speed: [8, 16],  angle: [-160, -100], gravity: 60, lifeMs: 420 },
    break: { count: 18, colors: [...stone, ...diamond], size: 1, speed: [10, 24], angle: [-170, -10], gravity: 70, lifeMs: 800 },
  },
}
```

- **Crack sheet**: same frame size as the object image, transparent except for
  the crack pixels. Frame 0 is intact (empty); each later frame is one crack
  stage. With *n* frames the block breaks on hit *n − 1*. To make blocks
  tougher, add stages; nothing else changes.
- **Drop**: a small transparent PNG that pops out and bounces when the block
  breaks; `size` is in scene units.
- **Particles**: squares in the given colors. `speed` and `gravity` are scene
  units per second (they scale with the screen), `angle` is the launch range in
  degrees (0 = right, −90 = straight up). `hit` fires on every landed swing,
  `break` once when the block breaks.

## Idle mining loop

```ts
ambient: {
  character: 'miner',
  object: 'diamond-ore',
  animation: 'mine',   // one swing
  impactFrame: 3,      // sheet frame on which the swing lands
  restMs: 700,         // between swings
  respawnMs: 2600,     // from the break until the block is back
},
```

The loop plays `animation`, and when the sheet shows `impactFrame` it advances
the crack stage (or breaks the block), shakes it and bursts particles. Timing
comes only from the animation's durations and these two rests, so a new sheet
keeps the same rhythm as long as its manifest does.

The loop pauses while a visitor points at or focuses a hotspot, while the tab
is hidden, while the scene is scrolled out of view, and while a select swing
plays; it never starts under reduced motion. While paused the scene carries
`is-still`, which also pauses the sky. Remove `ambient` to turn it off.

## Scene manifest

```ts
export const overview: Scene<SectionId> = {
  id: 'overview',
  size: { w: 64, h: 48 },
  environment: deepslate,
  characters: [{ character: miner, x: 11, y: 0 }],
  objects: [
    { object: sign, x: 13, y: 34 },
    { object: diamondOre, x: 43, y: 36 },
  ],
  targets: [
    { section: 'about', on: { character: 'miner', hotspot: 'head' }, label: 'left' },
    { section: 'contact', on: { object: 'sign' }, label: 'left' },
    { section: 'education', on: { object: 'diamond-ore' }, label: 'right' },
    // one per section
  ],
  selectAnimation: 'select',
  ambient: { /* see "Idle mining loop" */ },
};
```

- `targets` map sections to things in the scene. A target is a character
  hotspot or a whole object.
- `label` puts the visible text label left or right of the hotspot on wide
  screens; `labelOffset` nudges it (scene units) when it would cover the art.

## Build-time checks

`validate.ts` runs when the site builds and stops it with a message when:

- a sheet's pixel size does not match its frame size × grid,
- the frame's aspect does not match the character's `size`,
- an animation is empty, points past the last frame, or has a duration that is
  missing or not positive,
- a hotspot falls outside the character,
- a section has no target or more than one, or a target points at a missing
  character, hotspot or object,
- no character has the scene's select animation,
- the sky's sparkle sheet does not match its grid, or a star set has no colors
  or sizes, a negative count or an inverted twinkle range,
- a breakable object's crack sheet does not match its size or grid, or a
  particle burst has an empty or inverted range,
- the idle loop points at a missing character, animation or object, uses an
  object that is not breakable, or names an impact frame its animation never shows.

For example, swapping in a 2× sheet without updating its frame size fails with:

```
[scene] character "miner": sheet is 288×88px but 4×1 frames of 36×44px need 144×44px
```

## Recipes

**Replace the miner's art, same poses.** Overwrite `miner.sheet.png`. If its
resolution changed, update `frameWidth` / `frameHeight` (and `columns` /
`rows` if the grid changed). Nothing else changes: hotspots, placement and
timing are in scene units and milliseconds.

**Add an animation state.** Add frames to the sheet, update `columns` / `rows`,
then add an entry to `animations`. To play it on select, set
`selectAnimation` to its name.

**Use a different character.** Add `src/assets/scene/characters/<id>/<id>.sheet.png`
and `src/scene/characters/<id>.ts` with the same hotspot names the scene's
targets use (or update the targets), then place it in `scenes/overview.ts`.

**Add an object.** Add `src/assets/scene/objects/<id>/<id>.png` and
`src/scene/objects/<id>.ts`, then place it in the scene's `objects`. Point a
target at it with `on: { object: '<id>' }` if it should open a section.

**Change the floor.** Replace the environment's floor PNG; keep `tile` equal to
its size in scene units, and `y` at the row the characters stand on.

**Add a section.** Add it to `sectionOrder` in `src/i18n/content.ts` and its
text in `src/data/portfolio.ts`, add a body component in `Home.astro`, then give it
a target in the scene. The build fails until every section has exactly one target.
