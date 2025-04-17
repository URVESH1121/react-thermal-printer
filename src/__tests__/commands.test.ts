import { describe, it, expect } from 'vitest';
import { createCommands } from '../commands';
import { ALIGN } from '../constants';

describe('Printer Commands', () => {
  const commands = createCommands();

  it('should append text correctly', () => {
    expect(commands.appendText('Hello')).toBe('48656c6c6f');
  });

  it('should generate line feed command', () => {
    expect(commands.lineFeed()).toBe('0a');
    expect(commands.lineFeed(2)).toBe('0a0a');
  });

  it('should generate cut paper command', () => {
    expect(commands.cutPaper(true)).toBe('1d5630');
    expect(commands.cutPaper(false)).toBe('1d5631');
  });

  it('should set alignment correctly', () => {
    expect(commands.setAlignment(ALIGN.LEFT)).toBe('1b6100');
    expect(commands.setAlignment(ALIGN.CENTER)).toBe('1b6101');
    expect(commands.setAlignment(ALIGN.RIGHT)).toBe('1b6102');
  });
});