import { CharSize } from '../constants';

export function getCharWidth(c: number): number {
  if ((c >= 0x00020 && c <= 0x0036f) || (c >= 0x0ff61 && c <= 0x0ff9f)) {
    return 12;
  }
  
  if (c === 0x02010 || (c >= 0x02013 && c <= 0x02016) || 
      (c >= 0x02018 && c <= 0x02019) || (c >= 0x0201c && c <= 0x0201d) || 
      (c >= 0x02025 && c <= 0x02026) || (c >= 0x02030 && c <= 0x02033) || 
      c === 0x02035 || c === 0x0203b) {
    return 24;
  }

  if ((c >= 0x01100 && c <= 0x011ff) || (c >= 0x02460 && c <= 0x024ff) || 
      (c >= 0x025a0 && c <= 0x027bf) || (c >= 0x02e80 && c <= 0x02fdf) || 
      (c >= 0x03000 && c <= 0x0318f) || (c >= 0x031a0 && c <= 0x031ef) || 
      (c >= 0x03200 && c <= 0x09fff) || (c >= 0x0ac00 && c <= 0x0d7ff) || 
      (c >= 0x0f900 && c <= 0x0faff) || (c >= 0x0fe30 && c <= 0x0fe4f) || 
      (c >= 0x1f000 && c <= 0x1f9ff)) {
    return 24;
  }

  if ((c >= 0x0ff01 && c <= 0x0ff5e) || (c >= 0x0ffe0 && c <= 0x0ffe5)) {
    return 24;
  }

  return 0;
}

export function calculateTextWidth(text: string, charSize: CharSize = 1): number {
  return [...text].reduce((acc, char) => {
    return acc + getCharWidth(char.charCodeAt(0)) * charSize;
  }, 0);
}