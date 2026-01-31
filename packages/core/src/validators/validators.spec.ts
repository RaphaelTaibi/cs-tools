import { describe, it, expect } from 'vitest';
import {
  isValidEmail,
  isValidPhoneNumber,
  validatePasswordStrength,
  isValidUrl,
  isValidCreditCard,
  isValidIBAN,
  isValidPostalCode,
  isRequired,
  hasMinLength,
  hasMaxLength,
} from './validators';

describe('validators', () => {
  describe('isValidEmail', () => {
    it('should validate valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('test+tag@example.com')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
      expect(isValidEmail('test @example.com')).toBe(false);
    });
  });

  describe('isValidPhoneNumber', () => {
    it('should validate French phone numbers', () => {
      expect(isValidPhoneNumber('0123456789', 'FR')).toBe(true);
      expect(isValidPhoneNumber('+33123456789', 'FR')).toBe(true);
    });

    it('should validate US phone numbers', () => {
      expect(isValidPhoneNumber('2025551234', 'US')).toBe(true);
      expect(isValidPhoneNumber('+12025551234', 'US')).toBe(true);
    });

    it('should validate UK phone numbers', () => {
      expect(isValidPhoneNumber('2079460958', 'UK')).toBe(true);
      expect(isValidPhoneNumber('+442079460958', 'UK')).toBe(true);
    });

    it('should validate international format', () => {
      expect(isValidPhoneNumber('+33123456789', 'INTERNATIONAL')).toBe(true);
      expect(isValidPhoneNumber('+12025551234', 'INTERNATIONAL')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidPhoneNumber('123', 'FR')).toBe(false);
      expect(isValidPhoneNumber('invalid', 'US')).toBe(false);
    });
  });

  describe('validatePasswordStrength', () => {
    it('should score weak password', () => {
      const result = validatePasswordStrength('weak');
      expect(result.isStrong).toBe(false);
      expect(result.score).toBeLessThan(5);
      expect(result.feedback.length).toBeGreaterThan(0);
    });

    it('should score strong password', () => {
      const result = validatePasswordStrength('StrongPass123!');
      expect(result.isStrong).toBe(true);
      expect(result.score).toBe(5);
      expect(result.feedback.length).toBe(0);
    });

    it('should provide feedback for missing criteria', () => {
      const result = validatePasswordStrength('noupppercase123!');
      expect(result.feedback).toContain('At least one uppercase letter required');
    });

    it('should require at least 8 characters', () => {
      const result = validatePasswordStrength('Short1!');
      expect(result.feedback).toContain('At least 8 characters required');
    });
  });

  describe('isValidUrl', () => {
    it('should validate valid URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true);
      expect(isValidUrl('http://example.com')).toBe(true);
      expect(isValidUrl('https://example.com/path')).toBe(true);
      expect(isValidUrl('https://example.com/path?query=value')).toBe(true);
    });

    it('should reject invalid URLs', () => {
      expect(isValidUrl('not a url')).toBe(false);
    });
  });

  describe('isValidCreditCard', () => {
    it('should validate valid credit card numbers (Luhn algorithm)', () => {
      // Valid test card number
       expect(isValidCreditCard('4532015112830366')).toBe(true);
       expect(isValidCreditCard('6011111111111117')).toBe(true);
    });

    it('should reject invalid credit card numbers', () => {
      expect(isValidCreditCard('1234567890123456')).toBe(false);
    });

    it('should reject cards with wrong length', () => {
      expect(isValidCreditCard('123')).toBe(false);
      expect(isValidCreditCard('12345678901234567890')).toBe(false);
    });

    it('should work with formatted card numbers', () => {
      expect(isValidCreditCard('4532-0151-1283-0366')).toBe(true);
      expect(isValidCreditCard('4532 0151 1283 0366')).toBe(true);
    });
  });

  describe('isValidIBAN', () => {
    it('should validate valid IBANs', () => {
         // Valid IBAN examples
         expect(isValidIBAN('DE89370400440532013000')).toBe(true);
         expect(isValidIBAN('GB82WEST12345698765432')).toBe(true);
    });

    it('should reject invalid IBANs', () => {
      expect(isValidIBAN('INVALID')).toBe(false);
      expect(isValidIBAN('FR1420041010050500013M02')).toBe(false);
    });

    it('should handle IBANs with spaces', () => {
      expect(isValidIBAN('DE89 3704 0044 0532 0130 00')).toBe(true);
    });

    it('should reject IBANs with wrong length', () => {
      expect(isValidIBAN('DE89')).toBe(false);
      expect(isValidIBAN('12345')).toBe(false);
    });
  });

  describe('isValidPostalCode', () => {
    it('should validate French postal codes', () => {
      expect(isValidPostalCode('75001')).toBe(true);
      expect(isValidPostalCode('13013')).toBe(true);
      expect(isValidPostalCode('00000')).toBe(true);
    });

    it('should reject invalid postal codes', () => {
      expect(isValidPostalCode('7500')).toBe(false);
      expect(isValidPostalCode('750011')).toBe(false);
      expect(isValidPostalCode('ABCDE')).toBe(false);
    });
  });

  describe('isRequired', () => {
    it('should return true for non-empty values', () => {
      expect(isRequired('text')).toBe(true);
      expect(isRequired(123)).toBe(true);
      expect(isRequired([1, 2, 3])).toBe(true);
    });

    it('should return false for null and undefined', () => {
      expect(isRequired(null)).toBe(false);
      expect(isRequired(undefined)).toBe(false);
    });

    it('should return false for empty strings and arrays', () => {
      expect(isRequired('')).toBe(false);
      expect(isRequired('   ')).toBe(false);
      expect(isRequired([])).toBe(false);
    });
  });

  describe('hasMinLength', () => {
    it('should validate minimum length', () => {
      expect(hasMinLength('hello', 5)).toBe(true);
      expect(hasMinLength('hello', 4)).toBe(true);
    });

    it('should reject shorter strings', () => {
      expect(hasMinLength('hi', 5)).toBe(false);
    });
  });

  describe('hasMaxLength', () => {
    it('should validate maximum length', () => {
      expect(hasMaxLength('hello', 5)).toBe(true);
      expect(hasMaxLength('hello', 6)).toBe(true);
    });

    it('should reject longer strings', () => {
      expect(hasMaxLength('hello', 4)).toBe(false);
    });
  });
});
