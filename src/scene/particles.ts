// Square pixel particles: each one is a small element flown along a ballistic
// arc with the Web Animations API, then removed. No frame loop of our own.

import type { ParticleBurst } from './types';

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Bursts particles from `origin` (scene units) inside `layer`, a positioned
 * element covering the scene. `unit` is the scene's current px per unit.
 */
export function burst(layer: HTMLElement, origin: { x: number; y: number }, b: ParticleBurst, unit: number) {
  const steps = 8;
  const t = b.lifeMs / 1000;
  for (let i = 0; i < b.count; i++) {
    const p = document.createElement('span');
    const size = b.size * unit;
    const angle = (rand(b.angle[0], b.angle[1]) * Math.PI) / 180;
    const speed = rand(b.speed[0], b.speed[1]);
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    Object.assign(p.style, {
      position: 'absolute',
      left: `${origin.x * unit - size / 2}px`,
      top: `${origin.y * unit - size / 2}px`,
      width: `${size}px`,
      height: `${size}px`,
      background: b.colors[i % b.colors.length],
      pointerEvents: 'none',
    });
    layer.append(p);
    // whole-pixel positions keep the motion stepped, like the sprites
    const frames = Array.from({ length: steps + 1 }, (_, k) => {
      const s = (k / steps) * t;
      const x = Math.round((vx * s) * unit);
      const y = Math.round((vy * s + 0.5 * b.gravity * s * s) * unit);
      return { transform: `translate(${x}px, ${y}px)`, opacity: k > steps * 0.6 ? 1 - (k - steps * 0.6) / (steps * 0.4) : 1 };
    });
    p.animate(frames, { duration: b.lifeMs, easing: 'linear' }).finished.then(() => p.remove());
  }
}
