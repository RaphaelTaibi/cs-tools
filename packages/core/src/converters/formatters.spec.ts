import { describe, it, expect } from 'vitest';
import {
  formatDate,
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatFileSize,
  capitalizeFirst,
  capitalizeWords,
  slugify,
  truncate,
} from './formatters';

describe('formatters', () => {
  describe('formatDate', () => {
    it('should format date with default locale (fr-FR)', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date);
      expect(result).toContain('15');
      expect(result).toContain('janvier');
      expect(result).toContain('2024');
    });

    it('should format date from string', () => {
      const result = formatDate('2024-01-15');
      expect(result).toContain('15');
    });

    it('should format date with custom options', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date, 'fr-FR', { year: '2-digit', month: '2-digit', day: '2-digit' });
      expect(result).toBeTruthy();
    });

    it('should format date with different locale', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date, 'en-US');
      expect(result).toContain('15');
      expect(result).toContain('2024');
    });
  });

  describe('formatCurrency', () => {
    it('should format amount as EUR currency', () => {
      const result = formatCurrency(100);
      expect(result).toContain('100');
    });

    it('should format with different currency', () => {
      const result = formatCurrency(100, 'USD');
      expect(result).toContain('100');
    });

    it('should format with different locale', () => {
      const result = formatCurrency(100, 'EUR', 'en-US');
      expect(result).toContain('100');
    });

    it('should handle decimal amounts', () => {
      const result = formatCurrency(99.99);
      expect(result).toContain('99');
    });
  });

  describe('formatNumber', () => {
    it('should format number with default options', () => {
      const result = formatNumber(1000);
      expect(result).toBeTruthy();
       expect(result).toMatch(/1.*000/);
    });

    it('should format number with custom options', () => {
      const result = formatNumber(1234.567, { maximumFractionDigits: 2 });
      expect(result).toBeTruthy();
    });
  });

  describe('formatPercentage', () => {
    it('should format percentage with default decimals', () => {
      const result = formatPercentage(0.5);
      expect(result).toBe('50.00%');
    });

    it('should format percentage with custom decimals', () => {
      const result = formatPercentage(0.333, 1);
      expect(result).toBe('33.3%');
    });

    it('should format percentage as 0', () => {
      const result = formatPercentage(0);
      expect(result).toBe('0.00%');
    });

    it('should format percentage as 100', () => {
      const result = formatPercentage(1);
      expect(result).toBe('100.00%');
    });
  });

  describe('formatFileSize', () => {
    it('should format 0 bytes', () => {
      expect(formatFileSize(0)).toBe('0 Bytes');
    });

    it('should format bytes', () => {
      expect(formatFileSize(500)).toContain('Bytes');
    });

    it('should format kilobytes', () => {
      const result = formatFileSize(1024);
      expect(result).toContain('KB');
    });

    it('should format megabytes', () => {
      const result = formatFileSize(1024 * 1024);
      expect(result).toContain('MB');
    });

    it('should format gigabytes', () => {
      const result = formatFileSize(1024 * 1024 * 1024);
      expect(result).toContain('GB');
    });

    it('should format terabytes', () => {
      const result = formatFileSize(1024 * 1024 * 1024 * 1024);
      expect(result).toContain('TB');
    });
  });

  describe('capitalizeFirst', () => {
    it('should capitalize first character', () => {
       expect(capitalizeFirst('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalizeFirst('')).toBe('');
    });

    it('should capitalize and lowercase rest', () => {
       expect(capitalizeFirst('HELLO')).toBe('Hello');
    });
  });

  describe('capitalizeWords', () => {
    it('should capitalize all words', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    it('should handle single word', () => {
      expect(capitalizeWords('hello')).toBe('Hello');
    });

    it('should handle multiple spaces', () => {
      expect(capitalizeWords('hello  world')).toBe('Hello  World');
    });
  });

  describe('slugify', () => {
    it('should convert to lowercase and replace spaces with hyphens', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should remove accents', () => {
      expect(slugify('Café')).toBe('cafe');
    });

    it('should remove special characters', () => {
      expect(slugify('Hello @World!')).toBe('hello-world');
    });

    it('should replace underscores and spaces with hyphens', () => {
      expect(slugify('hello_world test')).toBe('hello-world-test');
    });

    it('should remove leading and trailing hyphens', () => {
      expect(slugify('-hello-world-')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    it('should truncate string longer than length', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
    });

    it('should not truncate string shorter than length', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    it('should use custom suffix', () => {
         expect(truncate('Hello World', 8, '→')).toBe('Hello W→');
    });

    it('should truncate exactly at length', () => {
      const result = truncate('Hello World', 5);
      expect(result.length).toBeLessThanOrEqual(5);
    });
  });
});
