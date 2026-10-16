// Small UI and content pixel art (icons, project illustrations), authored on
// grids and rendered as crisp SVG in theme colors. The overview scene's art is
// PNG under src/assets/scene; see src/scene and docs/scene-assets.md.

export const palette: Record<string, string> = {
  K: 'var(--px-dark)',
  G: 'var(--px-mid)',
  g: 'var(--px-soft)',
  W: 'var(--px-light)',
  B: 'var(--accent)',
  b: 'var(--accent-deep)',
  L: 'var(--pop)',
  l: 'var(--pop-deep)',
  C: 'currentColor',
};

/** A filled rectangle on the sprite grid: x, y, width, height, palette key. */
type Op = [number, number, number, number, string];

export type Sprite = { w: number; h: number; rows?: string[]; ops?: Op[] };

// Project illustrations share one 40 × 28 grid so their pixel density matches.

export const rack: Sprite = {
  w: 40,
  h: 28,
  ops: [
    [4, 25, 32, 1, 'b'],
    [12, 3, 16, 22, 'K'],
    ...[4, 10, 16].flatMap((y): Op[] => [
      [13, y, 14, 5, 'W'],
      [15, y + 2, 6, 1, 'G'],
      [22, y + 2, 1, 1, 'g'],
      [24, y + 2, 1, 1, 'L'],
    ]),
    [13, 22, 14, 2, 'G'],
    [13, 25, 2, 1, 'K'],
    [25, 25, 2, 1, 'K'],
    [28, 6, 4, 1, 'W'],
    [31, 6, 1, 13, 'W'],
    [28, 18, 3, 1, 'W'],
    [30, 11, 4, 4, 'L'],
    [31, 12, 2, 2, 'l'],
    [5, 7, 2, 2, 'L'],
    [7, 13, 2, 2, 'W'],
    [4, 18, 2, 2, 'W'],
    [35, 4, 1, 1, 'W'],
    [36, 21, 1, 1, 'W'],
  ],
};

export const database: Sprite = {
  w: 40,
  h: 28,
  ops: [
    [4, 25, 32, 1, 'l'],
    // cylinder
    [13, 3, 12, 1, 'K'],
    [11, 4, 16, 1, 'K'],
    [10, 5, 18, 18, 'K'],
    [11, 23, 16, 1, 'K'],
    [13, 24, 12, 1, 'K'],
    [12, 5, 14, 1, 'G'],
    [13, 6, 12, 1, 'G'],
    // disc rings
    [10, 11, 1, 1, 'W'], [11, 12, 16, 1, 'W'], [27, 11, 1, 1, 'W'],
    [10, 17, 1, 1, 'W'], [11, 18, 16, 1, 'W'], [27, 17, 1, 1, 'W'],
    [13, 9, 2, 1, 'L'], [13, 15, 2, 1, 'L'], [13, 21, 2, 1, 'L'],
    // table
    [30, 6, 7, 9, 'K'],
    [31, 7, 5, 7, 'W'],
    [31, 9, 5, 1, 'K'], [31, 11, 5, 1, 'K'], [33, 7, 1, 7, 'K'],
    [31, 7, 2, 2, 'B'],
    // link
    [28, 10, 2, 1, 'K'],
    [4, 6, 3, 3, 'K'],
    [5, 7, 1, 1, 'W'],
    [6, 16, 2, 2, 'B'],
  ],
};

export const pipeline: Sprite = {
  w: 40,
  h: 28,
  ops: [
    // belt
    [3, 18, 34, 2, 'G'],
    [3, 20, 34, 1, 'g'],
    ...[5, 13, 21, 29].map((x): Op => [x, 21, 2, 2, 'W']),
    [5, 23, 28, 1, 'G'],
    // packets
    [6, 12, 6, 6, 'L'], [7, 13, 4, 1, 'l'], [8, 15, 2, 2, 'K'],
    [15, 12, 6, 6, 'W'], [16, 14, 4, 1, 'G'], [16, 16, 3, 1, 'G'],
    [24, 12, 6, 6, 'B'], [25, 13, 4, 4, 'b'],
    // worker node
    [32, 5, 6, 13, 'W'],
    [33, 7, 4, 1, 'K'], [33, 9, 4, 1, 'K'],
    [34, 12, 2, 2, 'L'],
    // flow arrow
    [8, 6, 16, 1, 'G'], [22, 5, 1, 3, 'G'], [23, 6, 1, 1, 'G'],
    [3, 4, 2, 2, 'L'],
  ],
};

export const mug: Sprite = {
  w: 14,
  h: 12,
  rows: [
    '...G..G.......',
    '..G..G........',
    '...G..G.......',
    '..............',
    '.KKKKKKKKK....',
    '.KBBBBBBBKKK..',
    '.KBBBBBBBK.K..',
    '.KBLBBBBBK.K..',
    '.KBBBBBBBKKK..',
    '.KbBBBBBbK....',
    '..KKKKKKK.....',
    'KKKKKKKKKKKK..',
  ],
};

export const arrowDown: Sprite = {
  w: 7,
  h: 7,
  rows: ['...C...', '...C...', '...C...', 'C..C..C', '.C.C.C.', '..CCC..', '...C...'],
};

export const arrowOut: Sprite = {
  w: 7,
  h: 7,
  rows: ['..CCCCC', '....CCC', '...C.CC', '..C...C', '.C.....', 'C......', '.......'],
};

export const icons: Record<string, Sprite> = {
  api: {
    w: 13,
    h: 9,
    rows: [
      '........C....',
      '...C....CC...',
      '..C....C..C..',
      '.C.....C...C.',
      'C.....C.....C',
      '.C....C....C.',
      '..C..C....C..',
      '...C.C...C...',
      '....C........',
    ],
  },
  db: {
    w: 11,
    h: 9,
    rows: [
      '..CCCCCCC..',
      'CC.......CC',
      'C.CCCCCCC.C',
      'C.........C',
      'CCC.....CCC',
      'C..CCCCC..C',
      'C.........C',
      'CC.......CC',
      '..CCCCCCC..',
    ],
  },
  test: {
    w: 9,
    h: 9,
    rows: [
      'CCCCCCCCC',
      'C.......C',
      'C......CC',
      'C.....C.C',
      'CC...C..C',
      'C.C.C...C',
      'C..C....C',
      'C.......C',
      'CCCCCCCCC',
    ],
  },
  perf: {
    w: 9,
    h: 9,
    rows: [
      '.....CCC.',
      '....CCC..',
      '...CCC...',
      '..CCCCCC.',
      '.CCCCCC..',
      '....CCC..',
      '...CCC...',
      '..CC.....',
      '.C.......',
    ],
  },
  infra: {
    w: 11,
    h: 9,
    rows: [
      'CCCCCCCCCCC',
      'C.L.......C',
      'CCCCCCCCCCC',
      '...........',
      'CCCCCCCCCCC',
      'C.L.......C',
      'CCCCCCCCCCC',
      '...........',
      '.CCC...CCC.',
    ],
  },
};

export const art = { rack, database, pipeline };

/** Flattens a sprite into merged horizontal runs, ready for SVG <rect>s. */
export function toRects(sprite: Sprite): Op[] {
  if (sprite.ops) return sprite.ops;
  const rects: Op[] = [];
  sprite.rows!.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let end = x + 1;
      while (end < row.length && row[end] === c) end++;
      if (c !== '.') rects.push([x, y, end - x, 1, c]);
      x = end;
    }
  });
  return rects;
}
