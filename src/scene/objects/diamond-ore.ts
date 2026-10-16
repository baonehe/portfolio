import cracks from '../../assets/scene/objects/diamond-ore/diamond-ore.cracks.png';
import drop from '../../assets/scene/objects/diamond-ore/diamond-ore.drop.png';
import image from '../../assets/scene/objects/diamond-ore/diamond-ore.png';
import type { SceneObject } from '../types';

const stone = ['#42545C', '#29363D', '#1B252C'];
const diamond = ['#42E8DC', '#187F91'];

export const diamondOre: SceneObject = {
  id: 'diamond-ore',
  image,
  size: { w: 8, h: 8 },
  breakable: {
    // frame 0 intact, 1–5 crack stages: five hits break the block
    cracks: { image: cracks, frameWidth: 8, frameHeight: 8, columns: 6, rows: 1 },
    drop: { image: drop, size: { w: 4, h: 4 } },
    particles: {
      hit: { count: 4, colors: stone, size: 0.75, speed: [8, 16], angle: [-160, -100], gravity: 60, lifeMs: 420 },
      break: {
        count: 18,
        colors: [...stone, ...diamond],
        size: 1,
        speed: [10, 24],
        angle: [-170, -10],
        gravity: 70,
        lifeMs: 800,
      },
    },
  },
};
