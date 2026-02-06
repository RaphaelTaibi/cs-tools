import { renderHook, act } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import useThrottle from './useThrottle';

vi.useFakeTimers();

describe('useThrottle', () => {
  it('should throttle callback execution', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 200));

    act(() => {
      result.current();
      result.current();
      result.current();
    });

    expect(callback).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(200);
    act(() => {
      result.current();
    });
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
