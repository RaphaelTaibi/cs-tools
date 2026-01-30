# @cs-tools/core

Framework-agnostic TypeScript utilities for validators, formatters, and helpers.

## 📦 Installation

```bash
npm install @cs-tools/core
```

## 🚀 Features

### Validators
- Email validation
- Phone number validation (FR, US, UK, DE, INTERNATIONAL)
- Password strength validation
- URL validation
- Credit card validation (Luhn algorithm)
- IBAN validation
- Postal code validation
- Required, min/max length validation

### Formatters
- Date formatting (Intl.DateTimeFormat)
- Currency formatting
- Number formatting
- Percentage formatting
- File size formatting
- String capitalization
- Slugify
- Truncate

### Helpers
- Array utilities (unique, groupBy, chunk, shuffle)
- Object utilities (omit, pick, deepClone)
- Function utilities (debounce, throttle, sleep)
- Type guards (isString, isNumber, isArray, isObject, isEmpty)
- ID generation

## 📖 Usage

```typescript
import { 
  isValidEmail, 
  formatCurrency, 
  debounce 
} from '@cs-tools/core';

// Validators
console.log(isValidEmail('test@example.com')); // true

// Formatters
console.log(formatCurrency(1234.56, 'EUR', 'fr-FR')); // "1 234,56 €"

// Helpers
const debouncedFn = debounce((text) => console.log(text), 500);
```

## 🎯 Cross-Framework

Works with any JavaScript/TypeScript framework:
- ✅ React
- ✅ Angular
- ✅ Vue
- ✅ Svelte
- ✅ Vanilla JS/TS

## 📄 License

MIT © Taibi Raphael
