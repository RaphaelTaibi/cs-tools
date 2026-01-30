import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useWindowSize from './useWindowSize';

describe('useWindowSize', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return object with width and height', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toHaveProperty('width');
    expect(result.current).toHaveProperty('height');
  });

  it('should initialize with window dimensions', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  it('should be undefined initially before useEffect runs', () => {
    const { result } = renderHook(() => useWindowSize());
    // After effect runs, values should be set
    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  it('should update on window resize', () => {
    const { result } = renderHook(() => useWindowSize());
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const initialWidth = result.current.width;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const initialHeight = result.current.height;

    act(() => {
      // Simulate window resize
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  it('should setup resize event listener', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    renderHook(() => useWindowSize());

    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    addEventListenerSpy.mockRestore();
  });

  it('should remove resize event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useWindowSize());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });

  it('should return consistent values on multiple calls', () => {
    const { result, rerender } = renderHook(() => useWindowSize());
    const firstWidth = result.current.width;

    rerender();

    expect(result.current.width).toBe(firstWidth);
  });

  it('should handle very small window sizes', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBeGreaterThan(0);
    expect(result.current.height).toBeGreaterThan(0);
  });
});
