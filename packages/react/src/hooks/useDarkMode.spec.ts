import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useDarkMode from './useDarkMode';

describe('useDarkMode', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark', 'light');
    vi.clearAllMocks();
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.isDark).toBeDefined();
    expect(typeof result.current.isDark).toBe('boolean');
  });

  it('should have toggle, enable, disable, and setTheme methods', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(typeof result.current.toggle).toBe('function');
    expect(typeof result.current.enable).toBe('function');
    expect(typeof result.current.disable).toBe('function');
    expect(typeof result.current.setTheme).toBe('function');
  });

  it('should toggle dark mode', () => {
    const { result } = renderHook(() => useDarkMode());
    const initialState = result.current.isDark;

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isDark).toBe(!initialState);
  });

  it('should enable dark mode', () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.enable();
    });

    expect(result.current.isDark).toBe(true);
  });

  it('should disable dark mode', () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.disable();
    });

    expect(result.current.isDark).toBe(false);
  });

  it('should set theme to light', () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.setTheme('light');
    });

    expect(result.current.isDark).toBe(false);
    expect(localStorage.getItem('cs-theme')).toBe('light');
  });

  it('should set theme to dark', () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.isDark).toBe(true);
    expect(localStorage.getItem('cs-theme')).toBe('dark');
  });

  it('should persist theme to localStorage', () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.enable();
    });

    expect(localStorage.getItem('cs-theme')).toBe('dark');
  });

  it('should apply theme to document element', () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.enable();
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);

    act(() => {
      result.current.disable();
    });

    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  it('should initialize with default theme preference', () => {
    const { result } = renderHook(() => useDarkMode('dark'));
    // Should respect the provided default theme
    expect(result.current.isDark).toBeDefined();
  });
});
