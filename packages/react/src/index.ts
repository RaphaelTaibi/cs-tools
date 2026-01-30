/**
 * cs-tools - A modular toolkit for web developers
 *
 * This library provides reusable UI components, custom React hooks,
 * and utility functions to speed up development workflow across
 * React, Next.js, and Angular projects.
 */

// Export all components
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';
export { default as Input } from './components/Input';
export { default as Spinner } from './components/Spinner';

// Export component types
export type { ButtonProps } from './components/Button';
export type { CardProps } from './components/Card';
export type { InputProps } from './components/Input';
export type { SpinnerProps } from './components/Spinner';

// Export all hooks
export { default as useLocalStorage } from './hooks/useLocalStorage';
export { default as useDebounce } from './hooks/useDebounce';
export { default as useToggle } from './hooks/useToggle';
export { default as useDarkMode } from './hooks/useDarkMode';
export { default as useOnlineStatus } from './hooks/useOnlineStatus';
export { default as useWindowSize } from './hooks/useWindowSize';

// Export hook types
export type { UseLocalStorageReturn } from './hooks/useLocalStorage';
export type { UseToggleReturn } from './hooks/useToggle';
export type { UseDarkModeReturn } from './hooks/useDarkMode';

// Re-export all utilities from @cs-tools/core
export * from '@cs-tools/core';
