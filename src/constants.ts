export const MAX_COLUMNS = 6;

export const ALIGN = {
  LEFT: 0,
  CENTER: 1,
  RIGHT: 2,
} as const;

export type Alignment = typeof ALIGN[keyof typeof ALIGN];

export const CHAR_SIZE = {
  NORMAL: 1,
  DOUBLE: 2,
} as const;

export type CharSize = typeof CHAR_SIZE[keyof typeof CHAR_SIZE];

export const FONT_SIZE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  H7: 'h7',
  H8: 'h8',
  NORMAL: 'normal',
} as const;

export type FontSize = typeof FONT_SIZE[keyof typeof FONT_SIZE];