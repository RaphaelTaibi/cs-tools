/**
 * Utility functions for array manipulation
 */

/**
 * Remove duplicate values from an array
 * @param arr - The array to process
 * @returns A new array with unique values
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Chunk an array into smaller arrays of a specified size
 * @param arr - The array to chunk
 * @param size - The size of each chunk
 * @returns An array of chunks
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Shuffle an array randomly
 * @param arr - The array to shuffle
 * @returns A new shuffled array
 */
export function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Group array items by a key function
 * @param arr - The array to group
 * @param keyFn - Function to extract the grouping key
 * @returns An object with grouped items
 */
export function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return arr.reduce(
    (acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    },
    {} as Record<K, T[]>
  );
}
