import image from '../../assets/scene/environments/deepslate/deepslate.floor.png';
import moon from '../../assets/scene/environments/deepslate/deepslate.moon.png';
import sparkle from '../../assets/scene/environments/deepslate/deepslate.sparkle.png';
import type { Environment } from '../types';

export const deepslate: Environment = {
  id: 'deepslate',
  floor: { image, tile: 8, y: 44 },
  sky: {
    stars: {
      count: 260,
      seed: 7,
      colors: ['#F0F5F5', '#A7B4BA', '#42E8DC', '#187F91'],
      sizes: [0.4, 0.4, 0.6, 0.8],
      twinkleMs: [1800, 5200],
    },
    sparkles: {
      count: 22,
      seed: 21,
      sheet: { image: sparkle, frameWidth: 5, frameHeight: 5, columns: 3, rows: 1 },
      size: 2.5,
      twinkleMs: [2400, 6400],
    },
    // a white crescent, with a 2-unit cyan halo following its outline
    moon: { image: moon, x: 55, y: 4, size: { w: 10, h: 14 } },
  },
};
