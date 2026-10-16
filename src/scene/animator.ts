// Plays sprite-sheet animations on elements rendered by Sprite.astro. Reads
// the sheet grid and animation table from the element's data attributes, so
// it knows nothing about any particular character.

import type { Animation } from './types';

type Grid = { columns: number; rows: number };

const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const timers = new WeakMap<HTMLElement, number>();
const pending = new WeakMap<HTMLElement, () => void>();

function read(el: HTMLElement) {
  const grid: Grid = JSON.parse(el.dataset.grid!);
  const animations: Record<string, Animation> = JSON.parse(el.dataset.animations!);
  return { grid, animations };
}

/** Shows one frame of the element's sheet. */
export function showFrame(el: HTMLElement, index: number) {
  const { columns, rows } = read(el).grid;
  const col = index % columns;
  const row = Math.floor(index / columns);
  const x = columns > 1 ? (col / (columns - 1)) * 100 : 0;
  const y = rows > 1 ? (row / (rows - 1)) * 100 : 0;
  el.style.backgroundPosition = `${x}% ${y}%`;
}

const frameMs = (a: Animation, i: number) => (Array.isArray(a.duration) ? a.duration[i] : a.duration);

/**
 * Plays a named animation. One-shot animations resolve when they finish and
 * leave the element on `idle`; looping ones run until another call replaces them.
 * `onFrame` is called with each sheet frame as it is shown.
 */
export function play(el: HTMLElement, name: string, onFrame?: (frame: number) => void): Promise<void> {
  const { animations } = read(el);
  const anim = animations[name] ?? animations.idle;
  clearTimeout(timers.get(el));
  // a replaced animation still settles, so nobody awaits it forever
  pending.get(el)?.();

  if (reduceMotion()) {
    showFrame(el, animations.idle.frames[0]);
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    pending.set(el, resolve);
    let i = 0;
    const step = () => {
      showFrame(el, anim.frames[i]);
      onFrame?.(anim.frames[i]);
      const wait = frameMs(anim, i);
      i += 1;
      if (i < anim.frames.length) {
        timers.set(el, window.setTimeout(step, wait));
      } else if (anim.loop && anim.frames.length > 1) {
        i = 0;
        timers.set(el, window.setTimeout(step, wait));
      } else {
        timers.set(
          el,
          window.setTimeout(() => {
            if (!anim.loop) showFrame(el, animations.idle.frames[0]);
            resolve();
          }, wait),
        );
      }
    };
    step();
  });
}

/** Stops whatever is playing and returns the element to its idle frame. */
export function stop(el: HTMLElement) {
  clearTimeout(timers.get(el));
  pending.get(el)?.();
  showFrame(el, read(el).animations.idle.frames[0]);
}
