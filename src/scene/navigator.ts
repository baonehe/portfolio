// Section navigation in the browser, for the one-page site.
//
// - Scene links (hotspots, the index under the scene, the hero's CTA): the
//   character plays its select animation briefly, then the page scrolls to
//   the section. Under reduced motion the jump is immediate.
// - The page: marks the section being read in the menu, carries it over to
//   the language switch, and moves focus to a section's heading after a jump.

import { play } from './animator';

const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
/** How long the swing plays before the page starts to scroll (ms). */
const SWING_LEAD_MS = 200;

/** Moves focus to a section's heading without scrolling (the page already does). */
function focusSection(id: string) {
  document.getElementById(id)?.querySelector<HTMLElement>('[tabindex="-1"]')?.focus({ preventScroll: true });
}

const plainClick = (event: MouseEvent) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

/**
 * Scene links. Expects `root` to carry data-select (the animation name) and
 * contain one [data-scene] element plus links marked with data-section.
 */
export function initScene(root: HTMLElement) {
  const sceneEl = root.querySelector<HTMLElement>('[data-scene]')!;
  const select = root.dataset.select!;
  let busy = false;

  root.addEventListener('click', (event) => {
    if (!plainClick(event) || reduceMotion()) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-section]');
    if (!link) return;
    event.preventDefault();
    if (busy) return;
    busy = true;
    // lets the idle loop stand down while the swing plays
    sceneEl.dispatchEvent(new CustomEvent('scene:select'));
    const sprites = [...sceneEl.querySelectorAll<HTMLElement>('[data-sprite]')];
    Promise.all(sprites.map((el) => play(el, select))).then(() =>
      sceneEl.dispatchEvent(new CustomEvent('scene:settle')),
    );
    setTimeout(() => {
      busy = false;
      location.assign(link.href);
      focusSection(link.hash.slice(1));
    }, SWING_LEAD_MS);
  });
}

/**
 * Page-level section state. Sections are [data-section-id] elements whose
 * heading carries tabindex="-1"; menu links are a[data-nav]; the language
 * switch links are a[data-lang-base] holding their page path.
 */
export function initSections() {
  const sections = [...document.querySelectorAll<HTMLElement>('[data-section-id]')];
  const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('a[data-nav]')];
  const langLinks = [...document.querySelectorAll<HTMLAnchorElement>('a[data-lang-base]')];
  let current: string | null | undefined;

  // The section being read is the last one whose top has passed a line a
  // third of the way down the screen; at the very bottom it is the last one.
  function update() {
    const line = innerHeight / 3;
    let id: string | null = null;
    for (const s of sections) if (s.getBoundingClientRect().top <= line) id = s.id;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) id = sections.at(-1)!.id;
    if (id === current) return;
    current = id;
    for (const a of navLinks) {
      if (a.dataset.nav === id) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    }
    for (const a of langLinks) a.href = `${a.dataset.langBase}${id ? `#${id}` : ''}`;
  }

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  update();

  // After a jump (menu, scene, Back/Forward), continue from the section's
  // heading so keyboard and screen-reader users land where the page did.
  // Clicking a link to the hash already in the URL fires no hashchange, so
  // links are handled too.
  addEventListener('hashchange', () => focusSection(decodeURIComponent(location.hash.slice(1))));
  document.addEventListener('click', (event) => {
    if (!plainClick(event)) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
    if (link && link.pathname === location.pathname && link.hash) setTimeout(() => focusSection(link.hash.slice(1)));
  });
}
