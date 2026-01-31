import { useState, useEffect } from 'react';


/**
 * React hook that returns the current window size.
 * @returns {{ width: number | undefined; height: number | undefined }} An object containing the window's width and height.
 *
 * @example
 * const { width, height } = useWindowSize();
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;