
import { useState, useCallback } from 'react';


/**
 * Interface for the useToggle hook
 * @property value - Current boolean value
 * @property toggle - Toggle the value
 * @property setTrue - Set the value to true
 * @property setFalse - Set the value to false
 * @property setValue - Set the value explicitly
 */
export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
  setValue: (value: boolean) => void;
}


/**
 * React hook to manage a boolean state with handy helpers.
 * @param initialValue - Initial value (default: false)
 * @returns An object with the value and methods to manipulate it
 * @example
 * const { value, toggle, setTrue, setFalse } = useToggle();
 */
function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  /** Toggle the current value */
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  /** Set the value to true */
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  /** Set the value to false */
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue,
  };
}

export default useToggle;