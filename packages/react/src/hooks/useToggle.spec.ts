import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useToggle from './useToggle';

describe('useToggle', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
  });

  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
  });

  it('should toggle value', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current.value).toBe(false);
    
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(true);
    
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(false);
  });

  it('should set to true', () => {
    const { result } = renderHook(() => useToggle(false));
    
    act(() => {
      result.current.setTrue();
    });
    expect(result.current.value).toBe(true);
    
    act(() => {
      result.current.setTrue();
    });
    expect(result.current.value).toBe(true);
  });

  it('should set to false', () => {
    const { result } = renderHook(() => useToggle(true));
    
    act(() => {
      result.current.setFalse();
    });
    expect(result.current.value).toBe(false);
    
    act(() => {
      result.current.setFalse();
    });
    expect(result.current.value).toBe(false);
  });

  it('should set value explicitly', () => {
    const { result } = renderHook(() => useToggle(false));
    
    act(() => {
      result.current.setValue(true);
    });
    expect(result.current.value).toBe(true);
    
    act(() => {
      result.current.setValue(false);
    });
    expect(result.current.value).toBe(false);
  });

  it('should have toggle, setTrue, and setFalse as stable references', () => {
    const { result, rerender } = renderHook(() => useToggle());
    const toggle = result.current.toggle;
    const setTrue = result.current.setTrue;
    const setFalse = result.current.setFalse;
    
    rerender();
    
    expect(result.current.toggle).toBe(toggle);
    expect(result.current.setTrue).toBe(setTrue);
    expect(result.current.setFalse).toBe(setFalse);
  });
});
