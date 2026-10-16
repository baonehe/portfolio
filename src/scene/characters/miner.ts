import image from '../../assets/scene/characters/miner/miner.sheet.png';
import type { Character } from '../types';

// Side view, facing right. Frames: 0 ready · 1 wind-up · 2 swing · 3 impact.
// Hotspots are in `size` units, so a higher-resolution sheet needs no changes here.
export const miner: Character = {
  id: 'miner',
  sheet: { image, frameWidth: 36, frameHeight: 44, columns: 4, rows: 1 },
  size: { w: 36, h: 44 },
  animations: {
    idle: { frames: [0], duration: 1000, loop: true },
    // the slow swing of the idle loop
    mine: { frames: [1, 2, 3, 0], duration: [380, 90, 280, 220], loop: false },
    // the quick swing when a visitor picks a section
    select: { frames: [1, 2, 3, 0], duration: [90, 60, 160, 60], loop: false },
  },
  hotspots: {
    head: { x: 12, y: 12, w: 8, h: 8 },
    body: { x: 14, y: 20, w: 4, h: 12 },
    legs: { x: 14, y: 32, w: 5, h: 12 },
    // where the pickaxe rests and swings
    tool: { x: 20, y: 8, w: 13, h: 21 },
  },
};
