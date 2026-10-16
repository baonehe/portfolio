import type { SectionId } from '../../i18n/content';
import { miner } from '../characters/miner';
import { deepslate } from '../environments/deepslate';
import { diamondOre } from '../objects/diamond-ore';
import { sign } from '../objects/sign';
import type { Scene } from '../types';

export const overview: Scene<SectionId> = {
  id: 'overview',
  size: { w: 64, h: 52 },
  environment: deepslate,
  // everything stands on the floor at y = 44
  characters: [{ character: miner, x: 11, y: 0 }],
  objects: [
    { object: sign, x: 13, y: 34 },
    { object: diamondOre, x: 43, y: 36 },
  ],
  targets: [
    { section: 'about', on: { character: 'miner', hotspot: 'head' }, label: 'left' },
    { section: 'skills', on: { character: 'miner', hotspot: 'body' }, label: 'left' },
    { section: 'projects', on: { character: 'miner', hotspot: 'tool' }, label: 'right', labelOffset: { x: -3, y: 1 } },
    { section: 'experience', on: { character: 'miner', hotspot: 'legs' }, label: 'right' },
    { section: 'contact', on: { object: 'sign' }, label: 'left' },
    { section: 'education', on: { object: 'diamond-ore' }, label: 'right' },
  ],
  camera: { pad: 0.45, zoomMs: 560, selectAnimation: 'select' },
  ambient: {
    character: 'miner',
    object: 'diamond-ore',
    animation: 'mine',
    impactFrame: 3,
    restMs: 700,
    respawnMs: 2600,
  },
};
