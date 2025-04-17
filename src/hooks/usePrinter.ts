import { useCallback } from 'react';
import { createCommands, PrinterCommands } from '../commands';
import { Alignment, FontSize } from '../constants';

export interface PrinterOptions {
  onPrint?: (command: string) => void;
}

export function usePrinter(options: PrinterOptions = {}) {
  const commands = createCommands();

  const print = useCallback((text: string) => {
    const command = commands.appendText(text);
    options.onPrint?.(command);
    return command;
  }, [options.onPrint]);

  const lineFeed = useCallback((lines?: number) => {
    const command = commands.lineFeed(lines);
    options.onPrint?.(command);
    return command;
  }, [options.onPrint]);

  const cutPaper = useCallback((fullCut?: boolean) => {
    const command = commands.cutPaper(fullCut);
    options.onPrint?.(command);
    return command;
  }, [options.onPrint]);

  const setAlignment = useCallback((alignment: Alignment) => {
    const command = commands.setAlignment(alignment);
    options.onPrint?.(command);
    return command;
  }, [options.onPrint]);

  return {
    print,
    lineFeed,
    cutPaper,
    setAlignment,
    commands,
  };
}