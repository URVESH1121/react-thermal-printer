export const numToHexStr = (n: number, bytes: number): string => {
  let str = "";
  let v: number;

  for (let i = 0; i < bytes; i++) {
    v = n & 0xff;
    if (v < 0x10) str += "0" + v.toString(16);
    else str += v.toString(16);
    n >>= 8;
  }
  return str;
};

export const unicodeToUtf8 = (unicode: number): string => {
  if (unicode < 0) return "";
  if (unicode <= 0x7f) {
    return numToHexStr(unicode & 0x7f, 1);
  }
  if (unicode <= 0x7ff) {
    const c1 = ((unicode >> 6) & 0x1f) | 0xc0;
    const c2 = (unicode & 0x3f) | 0x80;
    return numToHexStr(c1, 1) + numToHexStr(c2, 1);
  }
  if (unicode <= 0xffff) {
    const c1 = ((unicode >> 12) & 0x0f) | 0xe0;
    const c2 = ((unicode >> 6) & 0x3f) | 0x80;
    const c3 = (unicode & 0x3f) | 0x80;
    return numToHexStr(c1, 1) + numToHexStr(c2, 1) + numToHexStr(c3, 1);
  }
  if (unicode <= 0x10ffff) {
    const c1 = ((unicode >> 18) & 0x07) | 0xf0;
    const c2 = ((unicode >> 12) & 0x3f) | 0x80;
    const c3 = ((unicode >> 6) & 0x3f) | 0x80;
    const c4 = (unicode & 0x3f) | 0x80;
    return numToHexStr(c1, 1) + numToHexStr(c2, 1) + 
           numToHexStr(c3, 1) + numToHexStr(c4, 1);
  }
  return "";
};