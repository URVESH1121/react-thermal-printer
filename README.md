# React Thermal Printer

A React library for thermal printer command generation with encoding support.

## Features

- TypeScript support
- Comprehensive printer commands
- Unicode to UTF-8 encoding
- Column printing support
- Font size and style controls
- React hooks for easy integration

## Installation

```bash
npm install react-thermal-printer
# or
yarn add react-thermal-printer
```

## Usage

```tsx
import { usePrinter, ALIGN } from 'react-thermal-printer';

function ReceiptPrinter() {
  const { print, lineFeed, cutPaper, setAlignment } = usePrinter({
    onPrint: (command) => {
      // Send command to your printer
      console.log('Print command:', command);
    }
  });

  const printReceipt = () => {
    setAlignment(ALIGN.CENTER);
    print('My Store');
    lineFeed(2);
    
    setAlignment(ALIGN.LEFT);
    print('Thank you for your purchase!');
    lineFeed();
    
    cutPaper();
  };

  return (
    <button onClick={printReceipt}>
      Print Receipt
    </button>
  );
}
```

## API Reference

### Hooks

#### usePrinter

```tsx
const { print, lineFeed, cutPaper, setAlignment, commands } = usePrinter(options);
```

Options:
- `onPrint?: (command: string) => void` - Callback when a print command is generated

### Constants

```tsx
ALIGN.LEFT   // 0
ALIGN.CENTER // 1
ALIGN.RIGHT  // 2

FONT_SIZE.H1 - FONT_SIZE.H8 // Various font sizes
```

### Commands

- `print(text: string)` - Print text
- `lineFeed(lines?: number)` - Add line feeds
- `cutPaper(fullCut?: boolean)` - Cut paper
- `setAlignment(alignment: Alignment)` - Set text alignment
- `setFontSize(size: FontSize, options?: FontOptions)` - Set font size and style

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT