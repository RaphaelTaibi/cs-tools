# cs-tools

> Toolkit TypeScript modulaire pour le web, avec utilitaires framework-agnostic et kit React (composants + hooks).

[![CI](https://github.com/RaphaelTaibi/cs-tools/actions/workflows/ci.yml/badge.svg)](https://github.com/RaphaelTaibi/cs-tools/actions/workflows/ci.yml)
[![NPM @cs-tools/core](https://img.shields.io/npm/v/@cs-tools/core?label=@cs-tools/core)](https://www.npmjs.com/package/@cs-tools/core)
[![NPM @cs-tools/react](https://img.shields.io/npm/v/@cs-tools/react?label=@cs-tools/react)](https://www.npmjs.com/package/@cs-tools/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Points forts

- 🧰 Utilitaires TypeScript réutilisables (validators, formatters, helpers)
- 🎨 Composants React: Button, Input, Card, Spinner
- 🪝 Hooks React: dark mode, debounce, localStorage, window size, etc.
- 📦 Publication séparée par package (core / react)

## 📦 Installation

Utilitaires framework-agnostic :

```bash
npm install @cs-tools/core
```

Kit React (inclut `@cs-tools/core` en dépendance) :

```bash
npm install @cs-tools/react
```

## 🚀 Démarrage rapide

### Utilitaires (core)

```ts
import { capitalize, toKebabCase } from '@cs-tools/core';

capitalize('hello');
toKebabCase('HelloWorld');
```

### React (composants + hooks)

```tsx
import { Button, Card, Input, useDarkMode, useToggle } from '@cs-tools/react';
import '@cs-tools/react/styles';

function App() {
  const darkMode = useDarkMode();
  const { value: showCard, toggle } = useToggle(false);

  return (
    <div className={darkMode.isDark ? 'dark' : 'light'}>
      <Button variant="primary" onClick={darkMode.toggle} leftIcon="🌙">
        Toggle Theme
      </Button>

      <Button variant="ghost" onClick={toggle}>
        Toggle Card
      </Button>

      {showCard && (
        <Card header={<h2>Welcome!</h2>} variant="elevated">
          <Input label="Your name" placeholder="Enter your name" />
        </Card>
      )}
    </div>
  );
}
```

## 📚 Packages

- `@cs-tools/core`: utilitaires TypeScript framework-agnostic
- `@cs-tools/react`: composants + hooks React

## 🧪 Tests

```bash
pnpm run test core
pnpm run test react
pnpm run test:coverage core
pnpm run test:coverage react
```

## 🛠️ Développement

```bash
pnpm install
pnpm run lint
pnpm run build
```

Storybook (package React) :

```bash
pnpm -C packages/react storybook
pnpm -C packages/react build-storybook
```

App de démo :

```bash
pnpm -C apps/demo-react dev
pnpm -C apps/demo-react build
```

## 🤝 Contribuer

Les PRs sont les bienvenues. Merci de passer par une PR et de respecter les checks CI.

## 📄 Licence

MIT © Taibi Raphael

