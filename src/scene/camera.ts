// Camera math, shared by the server render and the browser. Pure functions
// only: no DOM, so the zoom and the section backdrop always agree.

import type { Rect } from './types';

/** The frame the camera shows for a target: its rect grown by `pad` on every side. */
export function frameAround(r: Rect, pad: number): Rect {
  const px = r.w * pad;
  const py = r.h * pad;
  return { x: r.x - px, y: r.y - py, w: r.w + px * 2, h: r.h + py * 2 };
}

/**
 * Transform (origin top-left) that makes `frame` cover the viewport, centred.
 * `unit` is the scene's current px per scene unit and `origin` the scene's
 * top-left corner on screen.
 */
export function coverTransform(
  frame: Rect,
  unit: number,
  origin: { left: number; top: number },
  viewport: { w: number; h: number },
) {
  const s = Math.max(viewport.w / (frame.w * unit), viewport.h / (frame.h * unit));
  const x = viewport.w / 2 - origin.left - s * (frame.x + frame.w / 2) * unit;
  const y = viewport.h / 2 - origin.top - s * (frame.y + frame.h / 2) * unit;
  return { x, y, s };
}
