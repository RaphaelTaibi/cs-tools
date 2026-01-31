import '@testing-library/jest-dom/vitest';
// Debug: vérifier si le setup est exécuté dans CI
console.info('vitest.setup.ts loaded');

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {}, // deprecated
		removeListener: () => {}, // deprecated
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => true,
	}),
});
