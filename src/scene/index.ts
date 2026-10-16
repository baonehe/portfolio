// The active scene and the geometry derived from it. Swap characters, objects
// or the whole scene in the manifests; nothing here needs to change.

import { sectionOrder, type SectionId } from '../i18n/content';
import { frameAround } from './camera';
import { overview } from './scenes/overview';
import type { NavTarget, Rect, Scene } from './types';
import { validateScene } from './validate';

export const scene: Scene<SectionId> = overview;
validateScene(scene, sectionOrder);

/** A target's hotspot in scene units. */
export function targetRect(t: NavTarget): Rect {
  if ('object' in t.on) {
    const id = t.on.object;
    const placed = scene.objects.find((o) => o.object.id === id)!;
    return { x: placed.x, y: placed.y, w: placed.object.size.w, h: placed.object.size.h };
  }
  const { character, hotspot } = t.on;
  const placed = scene.characters.find((c) => c.character.id === character)!;
  const r = placed.character.hotspots[hotspot];
  return { x: placed.x + r.x, y: placed.y + r.y, w: r.w, h: r.h };
}

export const target = (section: SectionId) => scene.targets.find((t) => t.section === section)!;

/** The camera frame for a section, in scene units. */
export const sectionFrame = (section: SectionId) => frameAround(targetRect(target(section)), scene.camera.pad);
