import { describe, it, expect, vi } from 'vitest';
import {
  unique,
  groupBy,
  chunk,
  shuffle,
  omit,
  pick,
  deepClone,
  sleep,
  debounce,
  throttle,
  generateId,
  isString,
  isNumber,
  isArray,
  isObject,
  isEmpty,
} from './helpers';

describe('helpers', () => {
  describe('Array helpers', () => {
    describe('unique', () => {
      it('should remove duplicates from array', () => {
        expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      });

      it('should handle strings', () => {
        expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
      });

      it('should handle empty array', () => {
        expect(unique([])).toEqual([]);
      });
    });

    describe('groupBy', () => {
      it('should group objects by key function', () => {
        const items = [
          { name: 'Alice', age: 30 },
          { name: 'Bob', age: 25 },
          { name: 'Charlie', age: 30 },
        ];
        const result = groupBy(items, item => item.age);
        expect(result[30]).toHaveLength(2);
        expect(result[25]).toHaveLength(1);
      });

      it('should handle empty array', () => {
        expect(groupBy([], () => 'key')).toEqual({});
      });
    });

    describe('chunk', () => {
      it('should split array into chunks', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      });

      it('should handle exact division', () => {
        expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
      });

      it('should handle single chunk', () => {
        expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
      });
    });

    describe('shuffle', () => {
      it('should return array with same elements', () => {
        const original = [1, 2, 3, 4, 5];
        const shuffled = shuffle(original);
        expect(shuffled.sort()).toEqual(original.sort());
      });

      it('should not modify original array', () => {
        const original = [1, 2, 3];
        const copy = [...original];
        shuffle(original);
        expect(original).toEqual(copy);
      });
    });
  });

  describe('Object helpers', () => {
    describe('omit', () => {
      it('should remove specified keys', () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
      });

      it('should handle multiple keys', () => {
        const obj = { a: 1, b: 2, c: 3, d: 4 };
        expect(omit(obj, ['b', 'd'])).toEqual({ a: 1, c: 3 });
      });

      it('should not modify original object', () => {
        const obj = { a: 1, b: 2 };
        const copy = { ...obj };
        omit(obj, ['b']);
        expect(obj).toEqual(copy);
      });
    });

    describe('pick', () => {
      it('should extract specified keys', () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
      });

      it('should handle non-existent keys', () => {
        const obj = { a: 1, b: 2 };
        expect(pick(obj, ['a', 'c' as any])).toEqual({ a: 1 });
      });

      it('should not modify original object', () => {
        const obj = { a: 1, b: 2 };
        const copy = { ...obj };
        pick(obj, ['a']);
        expect(obj).toEqual(copy);
      });
    });

    describe('deepClone', () => {
      it('should clone primitive values', () => {
        expect(deepClone(5)).toBe(5);
        expect(deepClone('hello')).toBe('hello');
        expect(deepClone(true)).toBe(true);
      });

      it('should clone arrays', () => {
        const arr = [1, 2, 3];
        const cloned = deepClone(arr);
        expect(cloned).toEqual(arr);
        expect(cloned).not.toBe(arr);
      });

      it('should clone objects', () => {
        const obj = { a: 1, b: 2 };
        const cloned = deepClone(obj);
        expect(cloned).toEqual(obj);
        expect(cloned).not.toBe(obj);
      });

      it('should deep clone nested structures', () => {
        const obj = { a: { b: { c: 1 } } };
        const cloned = deepClone(obj);
        expect(cloned).toEqual(obj);
        expect(cloned.a).not.toBe(obj.a);
      });

      it('should clone dates', () => {
        const date = new Date('2024-01-15');
        const cloned = deepClone(date);
        expect(cloned).toEqual(date);
        expect(cloned).not.toBe(date);
      });

      it('should handle null', () => {
        expect(deepClone(null)).toBe(null);
      });
    });
  });

  describe('Utility functions', () => {
    describe('sleep', () => {
      it('should return promise that resolves after delay', async () => {
        const start = Date.now();
        await sleep(50);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(45);
      });
    });

    describe('debounce', () => {
      it('should delay function execution', async () => {
        const func = vi.fn();
        const debounced = debounce(func, 50);
        debounced();
        debounced();
        debounced();
        expect(func).not.toHaveBeenCalled();
        await sleep(60);
        expect(func).toHaveBeenCalledTimes(1);
      });

      it('should pass arguments', async () => {
        const func = vi.fn();
        const debounced = debounce(func, 50);
        debounced(1, 2, 3);
        await sleep(60);
        expect(func).toHaveBeenCalledWith(1, 2, 3);
      });
    });

    describe('throttle', () => {
      it('should limit function calls', async () => {
        const func = vi.fn();
        const throttled = throttle(func, 50);
        throttled();
        throttled();
        throttled();
        expect(func).toHaveBeenCalledTimes(1);
        await sleep(60);
        throttled();
        expect(func).toHaveBeenCalledTimes(2);
      });
    });

    describe('generateId', () => {
      it('should generate id of default length', () => {
        const id = generateId();
        expect(id).toHaveLength(8);
      });

      it('should generate id of custom length', () => {
        const id = generateId(16);
        expect(id).toHaveLength(16);
      });

      it('should generate unique ids', () => {
        const id1 = generateId();
        const id2 = generateId();
        expect(id1).not.toBe(id2);
      });
    });
  });

  describe('Type guards', () => {
    describe('isString', () => {
      it('should identify strings', () => {
        expect(isString('hello')).toBe(true);
        expect(isString(5)).toBe(false);
        expect(isString(null)).toBe(false);
      });
    });

    describe('isNumber', () => {
      it('should identify numbers', () => {
        expect(isNumber(5)).toBe(true);
        expect(isNumber('5')).toBe(false);
        expect(isNumber(NaN)).toBe(false);
      });
    });

    describe('isArray', () => {
      it('should identify arrays', () => {
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray('array')).toBe(false);
        expect(isArray({ 0: 1 })).toBe(false);
      });
    });

    describe('isObject', () => {
      it('should identify objects', () => {
        expect(isObject({ a: 1 })).toBe(true);
        expect(isObject([1, 2])).toBe(false);
        expect(isObject('string')).toBe(false);
        expect(isObject(null)).toBe(false);
      });
    });

    describe('isEmpty', () => {
      it('should identify empty values', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty({})).toBe(true);
      });

      it('should identify non-empty values', () => {
        expect(isEmpty('hello')).toBe(false);
        expect(isEmpty([1])).toBe(false);
        expect(isEmpty({ a: 1 })).toBe(false);
      });
    });
  });
});
