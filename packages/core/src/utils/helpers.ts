

/**
 * Returns a new array with only unique values.
 * @template T
 * @param array - The array to deduplicate
 * @returns A new array with unique values
 */
export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

/**
 * Groups array items by a key function.
 * @template T, K
 * @param array - The array to group
 * @param keyFn - Function to extract the group key
 * @returns An object with keys and grouped arrays
 */
export const groupBy = <T, K extends string | number>(
  array: T[], 
  keyFn: (item: T) => K
): Record<K, T[]> => {
  return array.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
};

/**
 * Splits an array into chunks of a given size.
 * @template T
 * @param array - The array to split
 * @param size - The chunk size
 * @returns An array of chunked arrays
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

/**
 * Returns a new array with the elements shuffled.
 * @template T
 * @param array - The array to shuffle
 * @returns A new shuffled array
 */
export const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Returns a new object without the specified keys.
 * @template T, K
 * @param obj - The source object
 * @param keys - Keys to omit
 * @returns A new object without the omitted keys
 */
export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T, 
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
};

/**
 * Returns a new object with only the specified keys.
 * @template T, K
 * @param obj - The source object
 * @param keys - Keys to pick
 * @returns A new object with only the picked keys
 */
export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T, 
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

/**
 * Deeply clones an object or array.
 * @template T
 * @param obj - The object or array to clone
 * @returns A deep clone of the input
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  if (typeof obj === 'object') {
    const clonedObj = {} as Record<string, unknown>;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone((obj as Record<string, unknown>)[key]);
      }
    }
    return clonedObj as T;
  }
  return obj;
};

/**
 * Returns a promise that resolves after a given delay.
 * @param ms - Milliseconds to wait
 * @returns Promise that resolves after the delay
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Returns a debounced version of a function.
 * @template T
 * @param func - The function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T, 
  delay: number
): (...args: Parameters<T>) => void => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Returns a throttled version of a function.
 * @template T
 * @param func - The function to throttle
 * @param limit - Minimum time between calls in ms
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => void>(
  func: T, 
  limit: number
): (...args: Parameters<T>) => void => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Generates a random alphanumeric string of a given length.
 * @param length - Length of the generated string (default: 8)
 * @returns Random string
 */
export const generateId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Type guard for string values.
 * @param value - Value to check
 * @returns True if value is a string
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

/**
 * Type guard for number values.
 * @param value - Value to check
 * @returns True if value is a number
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};

/**
 * Type guard for array values.
 * @param value - Value to check
 * @returns True if value is an array
 */
export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value);
};

/**
 * Type guard for plain object values.
 * @param value - Value to check
 * @returns True if value is a plain object
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

/**
 * Checks if a value is empty (null, undefined, empty string, array, or object).
 * @param value - Value to check
 * @returns True if value is empty
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};