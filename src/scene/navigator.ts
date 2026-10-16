// Section navigation in the browser: picking a target plays the character's
// select animation, zooms the camera onto the target, then opens its page.
// Coming back zooms out from the section that was left.

import { play } from './animator';
import { coverTransform } from './camera';
import type { Rect } from './types';

const KEY = 'scene:zoom-from';
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const remember = (section: string | null) => {
  try {
    if (section) sessionStorage.setItem(KEY, section);
    else sessionStorage.removeItem(KEY);
  } catch {}
};
const recall = () => {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
};

/**
 * Overview page. Expects `root` to carry data-frames (section → frame in scene
 * units), data-scene-w, data-select and data-zoom-ms, and to contain one
 * [data-camera] element (the scene) plus links marked with data-section.
 */
export function initOverview(root: HTMLElement) {
  const camera = root.querySelector<HTMLElement>('[data-camera]')!;
  const frames: Record<string, Rect> = JSON.parse(root.dataset.frames!);
  const sceneW = Number(root.dataset.sceneW);
  const select = root.dataset.select!;
  const zoomMs = Number(root.dataset.zoomMs);
  camera.style.setProperty('--zoom-ms', `${zoomMs}ms`);

  const transformFor = (section: string) => {
    const stage = camera.offsetParent!.getBoundingClientRect();
    const { x, y, s } = coverTransform(
      frames[section],
      camera.offsetWidth / sceneW,
      { left: stage.left + camera.offsetLeft, top: stage.top + camera.offsetTop },
      { w: innerWidth, h: innerHeight },
    );
    return `translate(${x}px, ${y}px) scale(${s})`;
  };

  async function enter(section: string, url: string) {
    remember(section);
    if (reduceMotion()) return location.assign(url);
    root.classList.add('is-leaving');
    // lets other scene systems (the idle loop) stand down first
    camera.dispatchEvent(new CustomEvent('scene:select'));
    const sprites = [...root.querySelectorAll<HTMLElement>('[data-sprite]')];
    await Promise.all(sprites.map((el) => play(el, select)));
    camera.classList.add('is-zooming');
    camera.style.transform = transformFor(section);
    let gone = false;
    const go = () => {
      if (gone) return;
      gone = true;
      location.assign(url);
    };
    camera.addEventListener('transitionend', go, { once: true });
    setTimeout(go, zoomMs + 200);
  }

  root.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-section]');
    const section = link?.dataset.section;
    if (!link || !section || !frames[section] || root.classList.contains('is-leaving')) return;
    event.preventDefault();
    enter(section, link.href);
  });

  function zoomOut() {
    const from = recall();
    remember(null);
    root.classList.remove('is-leaving');
    camera.classList.remove('is-zooming');
    camera.style.transform = '';
    if (!from || !frames[from] || reduceMotion()) return;
    camera.style.transform = transformFor(from);
    camera.getBoundingClientRect();
    requestAnimationFrame(() => {
      camera.classList.add('is-zooming');
      camera.style.transform = '';
      camera.addEventListener('transitionend', () => camera.classList.remove('is-zooming'), { once: true });
    });
  }

  zoomOut();
  addEventListener('pageshow', (event) => {
    if (event.persisted) zoomOut();
  });
}

/**
 * Section page. Links marked data-back="<section>" return to the overview,
 * which then zooms out from that section. `leaveMs` lets the page play its
 * exit before navigating.
 */
export function initSectionPage(leaveMs: number) {
  document.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-back]');
    if (!link) return;
    remember(link.dataset.back!);
    if (reduceMotion() || scrollY > innerHeight * 0.5) return;
    event.preventDefault();
    document.documentElement.classList.add('is-leaving');
    setTimeout(() => location.assign(link.href), leaveMs);
  });

  addEventListener('pageshow', (event) => {
    if (event.persisted) document.documentElement.classList.remove('is-leaving');
  });
}
