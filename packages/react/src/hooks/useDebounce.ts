import { useState, useEffect } from 'react';
import { debounce } from '@cs-tools/core';

/**
 * React hook to debounce a value change using the core debounce function.
 * @param value - Value to debounce
 * @param delay - Delay in ms
 * @returns Debounced value
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;