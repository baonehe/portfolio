// Build-time checks. A replaced asset that no longer matches its manifest
// fails the build with a message, instead of rendering a misaligned scene.

import type { Character, Environment, Scene, SceneObject, SpriteSheet } from './types';

function fail(where: string, message: string): never {
  throw new Error(`[scene] ${where}: ${message}`);
}

export function validateCharacter(c: Character) {
  const { frameWidth, frameHeight, columns, rows } = c.sheet;
  const where = `character "${c.id}"`;
  validateSheet(where, 'sheet', c.sheet);
  if (frameWidth / c.size.w !== frameHeight / c.size.h) {
    fail(where, `frame ${frameWidth}×${frameHeight}px does not keep the aspect of size ${c.size.w}×${c.size.h}`);
  }
  const count = columns * rows;
  for (const [name, anim] of Object.entries(c.animations)) {
    if (!anim.frames.length) fail(where, `animation "${name}" has no frames`);
    for (const f of anim.frames) {
      if (!Number.isInteger(f) || f < 0 || f >= count) fail(where, `animation "${name}" uses frame ${f}; sheet has 0–${count - 1}`);
    }
    const durations = Array.isArray(anim.duration) ? anim.duration : [anim.duration];
    if (Array.isArray(anim.duration) && anim.duration.length !== anim.frames.length) {
      fail(where, `animation "${name}" has ${anim.frames.length} frames but ${anim.duration.length} durations`);
    }
    if (durations.some((d) => !(d > 0))) fail(where, `animation "${name}" has a non-positive duration`);
  }
  for (const [name, r] of Object.entries(c.hotspots)) {
    if (r.x < 0 || r.y < 0 || r.x + r.w > c.size.w || r.y + r.h > c.size.h || r.w <= 0 || r.h <= 0) {
      fail(where, `hotspot "${name}" falls outside the character's ${c.size.w}×${c.size.h} size`);
    }
  }
}

function validateSheet(where: string, name: string, sheet: SpriteSheet) {
  const { image, frameWidth, frameHeight, columns, rows } = sheet;
  if (image.width !== frameWidth * columns || image.height !== frameHeight * rows) {
    fail(
      where,
      `${name} is ${image.width}×${image.height}px but ${columns}×${rows} frames of ` +
        `${frameWidth}×${frameHeight}px need ${frameWidth * columns}×${frameHeight * rows}px`,
    );
  }
}

export function validateObject(o: SceneObject) {
  const where = `object "${o.id}"`;
  if (!o.breakable) return;
  const { cracks, particles } = o.breakable;
  validateSheet(where, 'crack sheet', cracks);
  if (cracks.columns * cracks.rows < 2) fail(where, 'crack sheet needs an intact frame and at least one crack stage');
  if (cracks.frameWidth / o.size.w !== cracks.frameHeight / o.size.h) {
    fail(where, `crack frame ${cracks.frameWidth}×${cracks.frameHeight}px does not keep the object's ${o.size.w}×${o.size.h} aspect`);
  }
  for (const [name, b] of Object.entries(particles)) {
    if (b.count < 0 || b.size <= 0 || b.lifeMs <= 0 || !b.colors.length || b.speed[0] > b.speed[1] || b.angle[0] > b.angle[1]) {
      fail(where, `particle burst "${name}" has an invalid count, size, life, colors, speed or angle range`);
    }
  }
}

export function validateEnvironment(e: Environment) {
  const where = `environment "${e.id}"`;
  if (!e.sky) return;
  const { stars, sparkles } = e.sky;
  validateSheet(where, 'sparkle sheet', sparkles.sheet);
  for (const [name, set] of [['stars', stars], ['sparkles', sparkles]] as const) {
    if (set.count < 0 || set.twinkleMs[0] <= 0 || set.twinkleMs[0] > set.twinkleMs[1]) {
      fail(where, `${name} need a non-negative count and a positive, ordered twinkle range`);
    }
  }
  if (!stars.colors.length || !stars.sizes.length) fail(where, 'stars need at least one color and one size');
}

export function validateScene<S extends string>(scene: Scene<S>, sections: readonly S[]) {
  const where = `scene "${scene.id}"`;
  validateEnvironment(scene.environment);
  scene.characters.forEach(({ character }) => validateCharacter(character));
  scene.objects.forEach(({ object }) => validateObject(object));
  if (scene.ambient) {
    const a = scene.ambient;
    const c = scene.characters.find((p) => p.character.id === a.character)?.character;
    if (!c) fail(where, `ambient loop uses missing character "${a.character}"`);
    const anim = c.animations[a.animation];
    if (!anim) fail(where, `ambient loop uses missing animation "${a.character}.${a.animation}"`);
    if (!anim.frames.includes(a.impactFrame)) {
      fail(where, `ambient impact frame ${a.impactFrame} is not in "${a.animation}" (${anim.frames.join(', ')})`);
    }
    const o = scene.objects.find((p) => p.object.id === a.object)?.object;
    if (!o?.breakable) fail(where, `ambient loop needs a breakable object; "${a.object}" is missing or not breakable`);
  }
  if (!scene.characters.some(({ character }) => scene.camera.selectAnimation in character.animations)) {
    fail(where, `no character has the select animation "${scene.camera.selectAnimation}"`);
  }
  for (const section of sections) {
    const n = scene.targets.filter((t) => t.section === section).length;
    if (n !== 1) fail(where, `section "${section}" has ${n} targets; it needs exactly one`);
  }
  for (const t of scene.targets) {
    if ('object' in t.on) {
      const id = t.on.object;
      if (!scene.objects.some((o) => o.object.id === id)) fail(where, `target "${t.section}" points at missing object "${id}"`);
    } else {
      const { character, hotspot } = t.on;
      const placed = scene.characters.find((c) => c.character.id === character);
      if (!placed) fail(where, `target "${t.section}" points at missing character "${character}"`);
      if (!placed.character.hotspots[hotspot]) {
        fail(where, `target "${t.section}" points at missing hotspot "${character}.${hotspot}"`);
      }
    }
  }
}
