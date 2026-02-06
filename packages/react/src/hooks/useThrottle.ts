import { useCallback } from 'react';
import { throttle } from '@cs-tools/core';

/**
 * React hook to throttle a callback using the core throttle function.
 * @param callback - Function to throttle
 * @param limit - Minimum time between calls in ms
 * @returns Throttled callback
 */
function useThrottle<T extends (...args: any[]) => void>(callback: T, limit: number): (...args: Parameters<T>) => void {
  const throttled = useCallback(throttle(callback, limit), [callback, limit]);
  
  return throttled;
}

export default useThrottle;