# cs-tools-kit 🚀

> A modular toolkit for web developers, built with TypeScript. Includes reusable UI components, custom React hooks, and handy utility functions to speed up your development workflow.

[![NPM Version](https://img.shields.io/npm/v/cs-tools-kit?label=npm&color=blue)](https://www.npmjs.com/package/cs-tools-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

## ✨ Features

- 🎨 **UI Components**: Button, Input, Card, Spinner with multiple variants
- 🪝 **React Hooks**: Dark mode, localStorage, debounce, window size, and more
- 🛠️ **Utilities**: Email validation, password strength, formatters, and helpers
- 🌙 **Dark Mode**: Built-in theme switching with system preference support
- 🪟 **Glassmorphism**: Modern design effects for ghost buttons
- 📱 **Responsive**: Mobile-first design approach
- 🎯 **TypeScript**: Full type safety and IntelliSense support

## 📦 Installation

```bash
npm install cs-tools-kit
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { Button, Input, Card, useDarkMode, useToggle } from 'cs-tools-kit';

function App() {
  const darkMode = useDarkMode();
  const { value: showCard, toggle } = useToggle(false);

  return (
    <div className={darkMode.isDark ? 'dark' : 'light'}>
      <Button 
        variant="primary" 
        onClick={darkMode.toggle}
        leftIcon="🌙"
      >
        Toggle Theme
      </Button>
      
      <Button 
        variant="ghost" 
        onClick={toggle}
      >
        Toggle Card
      </Button>

      {showCard && (
        <Card 
          header={<h2>Welcome!</h2>}
          variant="elevated"
        >
          <Input 
            label="Your name"
            placeholder="Enter your name"
          />
        </Card>
      )}
    </div>
  );
}
- 🚀 **Lightweight**: Clean and maintainable codebase
- 🔧 **Modular**: Import only what you need

## Installation

```bash
npm install cs-tools
```

## Usage

### UI Components

```tsx
import { Button, Input, Card, Spinner } from 'cs-tools';

function MyComponent() {
  return (
    <Card padding="large" shadow>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        fullWidth
      />
      <Button variant="primary" size="medium">
        Submit
      </Button>
      <Spinner size="medium" color="blue" />
    </Card>
  );
}
```

#### Button

A customizable button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth`: boolean (default: false)
- All standard HTML button attributes

#### Input

An input component with label, error, and helper text support.

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `fullWidth`: boolean (default: false)
- All standard HTML input attributes

#### Card

A container component for organizing content.

**Props:**
- `padding`: 'none' | 'small' | 'medium' | 'large' (default: 'medium')
- `shadow`: boolean (default: true)
- `border`: boolean (default: true)

#### Spinner

A loading spinner component.

**Props:**
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `color`: string (default: 'blue')

### Custom Hooks

```tsx
import {
  useLocalStorage,
  useDebounce,
  useWindowSize,
  useOnlineStatus,
} from 'cs-tools';

function MyComponent() {
  // Store state in localStorage
  const [name, setName] = useLocalStorage('name', 'John');

  // Debounce a value
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Get window dimensions
  const { width, height } = useWindowSize();

  // Check online status
  const isOnline = useOnlineStatus();

  return <div>...</div>;
}
```

#### useLocalStorage

Sync state with localStorage automatically.

```tsx
const [value, setValue] = useLocalStorage<string>('key', 'defaultValue');
```

#### useDebounce

Debounce a value to limit updates.

```tsx
const debouncedValue = useDebounce(value, 500);
```

#### useWindowSize

Track window dimensions.

```tsx
const { width, height } = useWindowSize();
```

#### useOnlineStatus

Monitor online/offline status.

```tsx
const isOnline = useOnlineStatus();
```

### Utility Functions

```tsx
import {
  capitalize,
  toKebabCase,
  toCamelCase,
  truncate,
  unique,
  chunk,
  shuffle,
  groupBy,
  deepClone,
  pick,
  omit,
  isEmpty,
} from 'cs-tools';

// String utilities
capitalize('hello'); // 'Hello'
toKebabCase('HelloWorld'); // 'hello-world'
toCamelCase('hello-world'); // 'helloWorld'
truncate('Long text here', 10); // 'Long te...'

// Array utilities
unique([1, 2, 2, 3]); // [1, 2, 3]
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
shuffle([1, 2, 3, 4]); // Random order
groupBy(users, (u) => u.role); // { admin: [...], user: [...] }

// Object utilities
deepClone(obj); // Deep copy
pick(obj, ['name', 'age']); // { name: '...', age: ... }
omit(obj, ['password']); // Object without password
isEmpty({}); // true
```

## API Reference

### String Utilities

- **capitalize(str: string): string** - Capitalize first letter
- **toKebabCase(str: string): string** - Convert to kebab-case
- **toCamelCase(str: string): string** - Convert to camelCase
- **truncate(str: string, length: number, suffix?: string): string** - Truncate string

### Array Utilities

- **unique<T>(arr: T[]): T[]** - Remove duplicates
- **chunk<T>(arr: T[], size: number): T[][]** - Split into chunks
- **shuffle<T>(arr: T[]): T[]** - Randomize order
- **groupBy<T, K>(arr: T[], keyFn: (item: T) => K): Record<K, T[]>** - Group by key

### Object Utilities

- **deepClone<T>(obj: T): T** - Deep clone object
- **pick<T, K>(obj: T, keys: K[]): Pick<T, K>** - Pick properties
- **omit<T, K>(obj: T, keys: K[]): Omit<T, K>** - Omit properties
- **isEmpty(obj: object): boolean** - Check if empty

## Framework Support

### React & Next.js

Works out of the box with React and Next.js projects. Simply import and use.

### Angular

The utility functions can be used in Angular projects. For components and hooks, they are React-specific. Full Cross-Framework in working.

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

## License

MIT © Taibi Raphael

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

