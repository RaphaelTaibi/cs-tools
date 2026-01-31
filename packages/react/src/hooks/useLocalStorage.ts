import { useState, useEffect } from 'react';

/**
 * Interface for the useLocalStorage hook return value
 * @template T - The type of the stored value
 * @property value - The current value from localStorage
 * @property setValue - Function to update the value and persist it
 * @property removeValue - Function to remove the value from localStorage
 */
export interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T | ((prevValue: T) => T)) => void;
  removeValue: () => void;
}

/**
 * React hook to persist a value in localStorage and keep it in sync with state.
 * @template T - The type of the stored value
 * @param key - The localStorage key
 * @param initialValue - The initial value if nothing is stored
 * @returns An object with the value, setValue, and removeValue helpers
 * @example
 * const { value, setValue, removeValue } = useLocalStorage('myKey', 'default');
 */
function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((prevValue: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.warn(`Error parsing localStorage key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return { value: storedValue, setValue, removeValue };
}

export default useLocalStorage;