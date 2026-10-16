// The overview's idle loop: the character keeps mining a block. Each swing
// that lands advances the crack overlay; the last one breaks the block, bursts
// particles and pops out the drop, then the block grows back.
//
// It pauses while a visitor points at or focuses a target, while the tab is
// hidden, and once a section is being opened (the `scene:select` event). It
// never starts under reduced motion.

import { play, showFrame, stop } from './animator';
import { burst } from './particles';
import type { Ambient, ParticleBurst, Rect } from './types';

type Config = Ambient & {
  /** Crack stages; reaching the last one breaks the block. */
  stages: number;
  particles: { hit: ParticleBurst; break: ParticleBurst };
  /** The block, in scene units. */
  rect: Rect;
};

export function startMining(sceneEl: HTMLElement) {
  if (!sceneEl.dataset.ambient || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cfg: Config = JSON.parse(sceneEl.dataset.ambient);
  const sprite = sceneEl.querySelector<HTMLElement>(`[data-sprite="${cfg.character}"]`)!;
  const block = sceneEl.querySelector<HTMLElement>(`[data-object="${cfg.object}"]`)!;
  const cracks = block.querySelector<HTMLElement>('.object__cracks')!;
  const fx = sceneEl.querySelector<HTMLElement>('[data-fx]')!;
  const sceneW = Number(getComputedStyle(sceneEl).getPropertyValue('--sw'));

  let stage = 0;
  let timer = 0;
  let running = false;
  const holds = new Set<string>();
  const unit = () => sceneEl.offsetWidth / sceneW;
  // where the pickaxe meets the block: its upper-left area
  const impactPoint = { x: cfg.rect.x + 1, y: cfg.rect.y + 1 };
  const center = { x: cfg.rect.x + cfg.rect.w / 2, y: cfg.rect.y + cfg.rect.h / 2 };

  function land() {
    stage += 1;
    block.classList.remove('is-hit');
    void block.offsetWidth;
    block.classList.add('is-hit');
    if (stage < cfg.stages) {
      showFrame(cracks, stage);
      burst(fx, impactPoint, cfg.particles.hit, unit());
      return;
    }
    // break
    showFrame(cracks, 0);
    block.classList.add('is-broken');
    burst(fx, center, cfg.particles.break, unit());
  }

  async function swing() {
    if (!running) return;
    if (block.classList.contains('is-broken')) return;
    await play(sprite, cfg.animation, (frame) => {
      if (running && frame === cfg.impactFrame) land();
    });
    if (!running) return;
    if (stage >= cfg.stages) {
      timer = window.setTimeout(respawn, cfg.respawnMs);
    } else {
      timer = window.setTimeout(swing, cfg.restMs);
    }
  }

  function respawn() {
    stage = 0;
    block.classList.remove('is-broken');
    block.classList.add('is-respawning');
    setTimeout(() => block.classList.remove('is-respawning'), 400);
    if (running) timer = window.setTimeout(swing, cfg.restMs);
  }

  function resume() {
    if (running || holds.size) return;
    running = true;
    // a block left broken grows back first
    timer = window.setTimeout(block.classList.contains('is-broken') ? respawn : swing, cfg.restMs);
  }

  function pause() {
    running = false;
    clearTimeout(timer);
    stop(sprite);
  }

  const hold = (reason: string) => {
    holds.add(reason);
    pause();
  };
  const release = (reason: string) => {
    holds.delete(reason);
    resume();
  };

  // Pause while a target is pointed at or focused, so it reads clearly.
  sceneEl.addEventListener('pointerover', (e) => {
    if ((e.target as Element).closest('.hotspot')) hold('pointer');
  });
  sceneEl.addEventListener('pointerout', (e) => {
    const to = e.relatedTarget as Element | null;
    if ((e.target as Element).closest('.hotspot') && !to?.closest('.hotspot')) release('pointer');
  });
  sceneEl.addEventListener('focusin', (e) => {
    if ((e.target as Element).closest('.hotspot')) hold('focus');
  });
  sceneEl.addEventListener('focusout', () => release('focus'));
  document.addEventListener('visibilitychange', () => (document.hidden ? hold('hidden') : release('hidden')));
  // A section is opening: stop for good.
  sceneEl.addEventListener('scene:select', () => hold('select'));
  // Back from the bfcache: the select hold no longer applies.
  addEventListener('pageshow', (e) => {
    if (e.persisted) release('select');
  });

  resume();
}
