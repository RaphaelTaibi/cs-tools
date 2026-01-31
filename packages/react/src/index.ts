/**
 * cs-tools - A modular toolkit for web developers
 *
 * This library provides reusable UI components, custom React hooks,
 * and utility functions to speed up development workflow across
 * React, Next.js, and Angular projects.
 */

// Export all components
export { default as Button } from './components/Button.js';
export { default as Card } from './components/Card.js';
export { default as Input } from './components/Input.js';
export { default as Spinner } from './components/Spinner.js';

// Export component types
export type { ButtonProps } from './components/Button.js';
export type { CardProps } from './components/Card.js';
export type { InputProps } from './components/Input.js';
export type { SpinnerProps } from './components/Spinner.js';

// Export all hooks
export { default as useLocalStorage } from './hooks/useLocalStorage.js';
export { default as useDebounce } from './hooks/useDebounce.js';
export { default as useToggle } from './hooks/useToggle.js';
export { default as useDarkMode } from './hooks/useDarkMode.js';
export { default as useOnlineStatus } from './hooks/useOnlineStatus.js';
export { default as useWindowSize } from './hooks/useWindowSize.js';

// Export hook types
export type { UseLocalStorageReturn } from './hooks/useLocalStorage.js';
export type { UseToggleReturn } from './hooks/useToggle.js';
export type { UseDarkModeReturn } from './hooks/useDarkMode.js';


