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
  O: 'var(--px-clay)',
  Y: 'var(--px-gold)',
  y: 'var(--px-gold-deep)',
  C: 'currentColor',
};

/** A filled rectangle on the sprite grid: x, y, width, height, palette key. */
type Op = [number, number, number, number, string];

export type Sprite = { w: number; h: number; rows?: string[]; ops?: Op[] };

// Project illustrations share one 40 × 28 grid so their pixel density matches.

// MainDeck: a feed card with a privacy lock, linked to the people around it.
export const feed: Sprite = {
  w: 40,
  h: 28,
  rows: [
    '........................................',
    '.........................KKK............',
    '.............KKKKKKKKKKKKKK.K...........',
    '..KKKKKKK....KWWWWWWWWWWKWK.K...........',
    '..KKWWWKK....KWBBBWKKKWKKKKKKK..........',
    '..KKWWWKK....KWBBBWWWWWKBBBBBK..........',
    '..KKKKKKKllllKWBBBWgggWKBBKBBK..........',
    '..KWWWWWK....KWWWWWWWWWKBBKBBK..........',
    '..KWWWWWK....KWGGGGGGGGKKKKKKK.KKKKKKK..',
    '..KKKKKKK....KWGGGGGGGGWWWK....KKWWWKK..',
    '.....l.......KWWWWWWWWWWWWK....KKWWWKK..',
    '.....l.......KWLLWLLWWWWWWKllllKKKKKKK..',
    '.....l.......KWLLLLLWWWWWWK....KWWWWWK..',
    '.....l.......KWWLLLWWWWWWWK....KWWWWWK..',
    '.....l.......KWWWLWWWWWWWWK....KKKKKKK..',
    '.....l.......KWWWWWWWWWWWWK.......l.....',
    '..KKKKKKK....KggggggggggggK.......l.....',
    '..KKWWWKK....KWWWWWWWWWWWWK....KKKKKKK..',
    '..KKWWWKK....KWBBBWKKKWWWWK....KKWWWKK..',
    '..KKKKKKKllllKWBBBWWWWWWWWK....KKWWWKK..',
    '..KWWWWWK....KWBBBWgggWWWWKllllKKKKKKK..',
    '..KWWWWWK....KWWWWWWWWWWWWK....KWWWWWK..',
    '..KKKKKKK....KWGGGGGGGGGGWK....KWWWWWK..',
    '.............KWGGGGGGGGWWWK....KKKKKKK..',
    '.............KKKKKKKKKKKKKK.............',
    '....llllllllllllllllllllllllllllllll....',
    '........................................',
    '........................................',
  ],
};

// Modat: packets on the wire, a malicious one stopped at the shield, results out.
export const shield: Sprite = {
  w: 40,
  h: 28,
  rows: [
    '........................................',
    '........................................',
    '........................................',
    '........................................',
    '....KK........KKKKKKKKKKKK..............',
    '....KK........KWWWWWWWWWWK..............',
    '..............KWWWWWWWWWWK.....KKKKKKKK.',
    '..............KWWWWWWWWWWK.....KWWWWWWK.',
    '..............KWWWWWWWWWWK.....KWWWWWWK.',
    '..............KWWWWWWWWbbK.....KWWWWWWK.',
    '..............KWWWWWWWbbWK.....KWWWbWWK.',
    '..............KWWWWWWbbWWK.....KWWWbWWK.',
    '..WWW.WWW.KWK.KWbbWWbbWWWK.WWW.KWWWbWlK.',
    '..WWW.WWW.WKW.KWWbbbbWWWWK.WWW.KWbWbWlK.',
    '.bWWWbWWWbKWKbKWWWbbWWWWWKbWWWbKWbWbWlK.',
    '..............KWWWWWWWWWWK.....KWbWbWlK.',
    '...............KWWWWWWWWK......KWbWbWlK.',
    '...............KWWWWWWWWK......KWWWWWWK.',
    '................KWWWWWWK.......KKKKKKKK.',
    '.................KWWWWK.................',
    '........WW........KWWK..................',
    '........WW.........KK...................',
    '...................................K....',
    '........................................',
    '........................................',
    '.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.',
    '........................................',
    '........................................',
  ],
};

// baoOS: Claude characters at work, passing a ticket and a plan down the line;
// the third carries the merge request off.
export const agents: Sprite = {
  w: 40,
  h: 28,
  rows: [
    '........................................',
    '........................................',
    '........................................',
    '....WWWWWW.......WWWWWW..............W..',
    '....WKKKKW...B...WBWWWW....B............',
    '....WGGGWW.GGBGG.WWWGGW.GGGBGG..........',
    '....WGGGGW...B...WBWWWW....B.G..........',
    '....WWWWWW.......WWWWWW......G.....BB...',
    '.............................G.....BB...',
    '.W...........................G..........',
    '.............................G..........',
    '.............................G..........',
    '...OOOOOOO......OOOOOOO......G..........',
    '...OKOOOKO......OKOOOKO.......WWWWWW....',
    '...OKOOOKO......OKOOOKO.......WBWWWW....',
    '..OgggggggO....OgggggggO......WWKKKW....',
    '...ggggggg......ggggggg.......WGGGGW....',
    '...gggWggg......gggWggg.......WWWWWW....',
    '...ggggggg......ggggggg.......OOOOOOO...',
    '...ggggggg......ggggggg.......OKOOOKO...',
    '..WWWWWWWWW....WWWWWWWWW......OKOOOKO...',
    '.KKKKKKKKKKKKKKKKKKKKKKKKK...OOOOOOOOO..',
    '..K.....................K.....OOOOOOO...',
    '..K.....................K.....OOOOOOO...',
    '..K.....................K.....O.O.O.O...',
    '.GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.',
    '........................................',
    '........................................',
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
    'KKKKKKKKKKKKKK',
  ],
};

// Sits beside the mug on the same table (same 14-wide grid, table row last).
export const duck: Sprite = {
  w: 14,
  h: 14,
  rows: [
    '....Y.Y.Y.....',
    '....YYYYY.....',
    '....yyLyy.....',
    '....BBBBB.....',
    '...BBBBBBB....',
    '...BBKBBBB....',
    '.YYBBBBBBB....',
    'YYYyBBBBBB....',
    '....BBBBBB..BB',
    '..BBBBBBBBBBBB',
    '..BBBbbbbBBBBb',
    '..bBBBbbBBBBb.',
    '...bbBBBBBbb..',
    'KKKKKKKKKKKKKK',
  ],
};

// Arrows render at twice their grid (7 × 7 at 14px, 5 × 5 at 10px), so every
// pixel stays a crisp 2 × 2 square.
export const arrowDown: Sprite = {
  w: 7,
  h: 7,
  rows: ['...C...', '...C...', '...C...', 'C..C..C', '.C.C.C.', '..CCC..', '...C...'],
};

export const arrowRight: Sprite = {
  w: 7,
  h: 7,
  rows: ['...C...', '....C..', '.....C.', 'CCCCCCC', '.....C.', '....C..', '...C...'],
};

export const arrowLeft: Sprite = {
  w: 7,
  h: 7,
  rows: ['...C...', '..C....', '.C.....', 'CCCCCCC', '.C.....', '..C....', '...C...'],
};

// Outbound profile links. One 12 × 12 grid each, in currentColor, so they
// scale by whole pixels and follow the link's hover color.
export const social: Record<'github' | 'linkedin' | 'email', Sprite> = {
  github: {
    w: 12,
    h: 12,
    rows: [
      '...CCCCCC...',
      '.CCCCCCCCCC.',
      '.C.CCCCCC.C.',
      'CC..CCCC..CC',
      'CC........CC',
      'CC........CC',
      'CC........CC',
      'CCC......CCC',
      'CC.C....CCCC',
      '.C......CCC.',
      '.CCC....CCC.',
      '...C....C...',
    ],
  },
  linkedin: {
    w: 12,
    h: 12,
    rows: [
      '.CCCCCCCCCC.',
      'CCCCCCCCCCCC',
      'CC..CCCCCCCC',
      'CC..CCCCCCCC',
      'CCCCCCCCCCCC',
      'CC..C....CCC',
      'CC..C..C..CC',
      'CC..C..C..CC',
      'CC..C..C..CC',
      'CC..C..C..CC',
      'CCCCCCCCCCCC',
      '.CCCCCCCCCC.',
    ],
  },
  email: {
    w: 12,
    h: 12,
    rows: [
      '............',
      '............',
      'CCCCCCCCCCCC',
      'C.CCCCCCCC.C',
      'CC.CCCCCC.CC',
      'CCC.CCCC.CCC',
      'CCCC.CC.CCCC',
      'CCCCC..CCCCC',
      'CCCCCCCCCCCC',
      'CCCCCCCCCCCC',
      '............',
      '............',
    ],
  },
};

export const arrowOut: Sprite = {
  w: 5,
  h: 5,
  rows: ['.CCCC', '...CC', '..C.C', '.C...', 'C....'],
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

export const art = { social: feed, security: shield, agents };

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
