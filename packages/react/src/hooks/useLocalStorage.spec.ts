import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should initialize with initial value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(result.current.value).toBe('initial');
  });

  it('should read from localStorage if key exists', () => {
    localStorage.setItem('test-key', JSON.stringify('stored-value'));
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(result.current.value).toBe('stored-value');
  });

  it('should set value in state and localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current.setValue('updated');
    });

    expect(result.current.value).toBe('updated');
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('updated'));
  });

  it('should support function update', () => {
    const { result } = renderHook(() => useLocalStorage('counter', 0));

    act(() => {
      result.current.setValue(prev => prev + 1);
    });

    expect(result.current.value).toBe(1);
    expect(localStorage.getItem('counter')).toBe('1');
  });

  it('should store and retrieve objects', () => {
    const initialObj = { name: 'John', age: 30 };
    const { result } = renderHook(() => useLocalStorage('user', initialObj));

    expect(result.current.value).toEqual(initialObj);

    const newObj = { name: 'Jane', age: 25 };
    act(() => {
      result.current.setValue(newObj);
    });

    expect(result.current.value).toEqual(newObj);
    expect(JSON.parse(localStorage.getItem('user') || '{}')).toEqual(newObj);
  });

  it('should store and retrieve arrays', () => {
    const initialArray = [1, 2, 3];
    const { result } = renderHook(() => useLocalStorage('numbers', initialArray));

    expect(result.current.value).toEqual(initialArray);

    act(() => {
      result.current.setValue([4, 5, 6]);
    });

    expect(result.current.value).toEqual([4, 5, 6]);
  });

  it('should remove value and reset to initial', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current.setValue('updated');
    });

    expect(localStorage.getItem('test-key')).toBeTruthy();

    act(() => {
      result.current.removeValue();
    });

    expect(result.current.value).toBe('initial');
    expect(localStorage.getItem('test-key')).toBeNull();
  });

  it('should have setValue and removeValue methods', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(typeof result.current.setValue).toBe('function');
    expect(typeof result.current.removeValue).toBe('function');
  });

  it('should handle different key values independently', () => {
    const { result: result1 } = renderHook(() => useLocalStorage('key1', 'value1'));
    const { result: result2 } = renderHook(() => useLocalStorage('key2', 'value2'));

    expect(result1.current.value).toBe('value1');
    expect(result2.current.value).toBe('value2');

    act(() => {
      result1.current.setValue('updated1');
    });

    expect(result1.current.value).toBe('updated1');
    expect(result2.current.value).toBe('value2');
  });

  it('should handle boolean values', () => {
    const { result } = renderHook(() => useLocalStorage('bool-key', false));

    act(() => {
      result.current.setValue(true);
    });

    expect(result.current.value).toBe(true);
    expect(localStorage.getItem('bool-key')).toBe('true');
  });

  it('should handle null values', () => {
    const { result } = renderHook(() => useLocalStorage('null-key', null as string | null));

    act(() => {
      result.current.setValue('not-null');
    });

    expect(result.current.value).toBe('not-null');

    act(() => {
      result.current.setValue(null);
    });

    expect(result.current.value).toBe(null);
  });
});
