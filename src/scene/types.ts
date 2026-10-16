// Data shapes for the overview scene. Art lives in src/assets/scene as PNG;
// these manifests describe how to cut, place and animate it. See
// docs/scene-assets.md for the conventions.

import type { ImageMetadata } from 'astro';

/** A rectangle. Units depend on context and are named at each use. */
export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** A grid of equally sized frames, read left to right, top to bottom. */
export interface SpriteSheet {
  image: ImageMetadata;
  /** Frame size in sheet pixels. */
  frameWidth: number;
  frameHeight: number;
  columns: number;
  rows: number;
}

export interface Animation {
  /** Frame indices into the sheet, played in order. */
  frames: number[];
  /** Milliseconds per frame: one value for all, or one per frame. */
  duration: number | number[];
  loop: boolean;
}

export interface Character {
  id: string;
  sheet: SpriteSheet;
  /** Size of one frame in scene units; decouples art resolution from layout. */
  size: { w: number; h: number };
  /** Named animations. `idle` is required and is the resting state. */
  animations: { idle: Animation } & Record<string, Animation>;
  /** Clickable regions of the idle pose, in the same units as `size`. */
  hotspots: Record<string, Rect>;
}

/** A burst of square pixel particles. Speeds and gravity are in scene units per second. */
export interface ParticleBurst {
  count: number;
  colors: string[];
  /** Edge length of one particle, in scene units. */
  size: number;
  speed: [min: number, max: number];
  /** Launch directions in degrees, 0 = right, -90 = up. */
  angle: [min: number, max: number];
  gravity: number;
  lifeMs: number;
}

/** Makes an object minable: it cracks per hit, then breaks and drops an item. */
export interface Breakable {
  /** Crack overlay: frame 0 is intact, then one frame per crack stage. Same size as the object. */
  cracks: SpriteSheet;
  /** Item that pops out when the block breaks; size in scene units. */
  drop: { image: ImageMetadata; size: { w: number; h: number } };
  particles: { hit: ParticleBurst; break: ParticleBurst };
}

/** A single still image placed in the scene, such as a block or a prop. */
export interface SceneObject {
  id: string;
  image: ImageMetadata;
  /** Size in scene units. */
  size: { w: number; h: number };
  breakable?: Breakable;
}

/**
 * A night sky behind the scene. Star positions are generated at build time
 * from `seed`, so every load shows the same sky. Units are scene units.
 */
export interface Sky {
  /** Plain pixel stars that fade in and out. */
  stars: {
    count: number;
    seed: number;
    colors: string[];
    /** Edge lengths to pick from. */
    sizes: number[];
    /** Twinkle period range (ms). */
    twinkleMs: [min: number, max: number];
  };
  /** Bigger stars that flicker through a sheet (dim → small star → full cross). */
  sparkles: {
    count: number;
    seed: number;
    sheet: SpriteSheet;
    /** Size of one frame in scene units. */
    size: number;
    twinkleMs: [min: number, max: number];
  };
  moon: { image: ImageMetadata; x: number; y: number; size: { w: number; h: number } };
}

export interface Environment {
  id: string;
  /** Repeating floor texture; runs past both edges of the frame. */
  floor: { image: ImageMetadata; tile: number; y: number };
  sky?: Sky;
}

/** What a navigation target points at in the scene. */
export type TargetRef = { character: string; hotspot: string } | { object: string };

export interface NavTarget<Section extends string = string> {
  section: Section;
  on: TargetRef;
  /** Which side of the hotspot its text label sits on (wide screens). */
  label: 'left' | 'right';
  /** Nudge for the label's anchor, in scene units, from the hotspot's side midpoint. */
  labelOffset?: { x: number; y: number };
}

export interface CameraConfig {
  /** Padding around a target's hotspot when the camera frames it, as a fraction of its size. */
  pad: number;
  /** Zoom-in duration (ms). */
  zoomMs: number;
  /** Animation the character plays before the camera moves. */
  selectAnimation: string;
}

/**
 * The idle loop: a character keeps mining a breakable object. It pauses while
 * a visitor points at or focuses a target, when the tab is hidden, and never
 * runs under reduced motion.
 */
export interface Ambient {
  character: string;
  object: string;
  /** Character animation for one swing. */
  animation: string;
  /** Sheet frame on which the swing lands. */
  impactFrame: number;
  /** Rest between swings (ms). */
  restMs: number;
  /** Time from the break until the block is back (ms). */
  respawnMs: number;
}

export interface Scene<Section extends string = string> {
  id: string;
  /** Scene size in scene units. */
  size: { w: number; h: number };
  environment: Environment;
  /** Placements are in scene units, top-left corner. */
  characters: { character: Character; x: number; y: number }[];
  objects: { object: SceneObject; x: number; y: number }[];
  targets: NavTarget<Section>[];
  camera: CameraConfig;
  ambient?: Ambient;
}
