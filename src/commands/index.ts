import { Alignment, FontSize } from '../constants';
import { numToHexStr, unicodeToUtf8 } from '../utils/encoding';

export interface PrinterCommands {
  appendText(text: string): string;
  lineFeed(lines?: number): string;
  cutPaper(fullCut?: boolean): string;
  setAlignment(alignment: Alignment): string;
  setFontSize(size: FontSize, options?: FontOptions): string;
  setBold(enabled: boolean): string;
  setNormal(): string;
}

export interface FontOptions {
  bold?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

export const createCommands = (): PrinterCommands => ({
  appendText(text: string): string {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      result += unicodeToUtf8(text.charCodeAt(i));
    }
    return result;
  },

  lineFeed(lines: number = 1): string {
    return "0a".repeat(lines);
  },

  cutPaper(fullCut: boolean = true): string {
    return "1d56" + (fullCut ? "30" : "31");
  },

  setAlignment(alignment: Alignment): string {
    return "1b61" + numToHexStr(alignment, 1);
  },

  setFontSize(size: FontSize, options: FontOptions = {}): string {
    const { bold = false, underline = false, strikethrough = false } = options;
    let commands: string[] = [];

    // Set print modes
    let printMode = 0;
    if (bold) printMode |= 8;
    if (underline) printMode |= 80;
    if (strikethrough) printMode |= 0x40;
    commands.push("1b21" + numToHexStr(printMode, 1));

    // Set character size
    let sizeValue = 0;
    switch (size) {
      case 'h1': sizeValue = 0x77; break;
      case 'h2': sizeValue = 0x66; break;
      case 'h3': sizeValue = 0x55; break;
      case 'h4': sizeValue = 0x44; break;
      case 'h5': sizeValue = 0x33; break;
      case 'h6': sizeValue = 0x22; break;
      case 'h7': sizeValue = 0x11; break;
      case 'h8': sizeValue = 0x01; break;
      default: sizeValue = 0x00;
    }
    commands.push("1d21" + numToHexStr(sizeValue, 1));

    return commands.join('');
  },

  setBold(enabled: boolean): string {
    return "1b21" + numToHexStr(enabled ? 8 : 0, 1);
  },

  setNormal(): string {
    return "1b21" + numToHexStr(0, 1);
  },
});