/**
 * Validates if a string is a valid email address.
 * @param email - The email string to validate
 * @returns True if valid email, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a phone number for a given country format.
 * @param phone - The phone number string
 * @param country - Country code ('FR', 'US', 'UK', 'DE', 'INTERNATIONAL')
 * @returns True if valid phone number, false otherwise
 */
export const isValidPhoneNumber = (
  phone: string,
  country: 'FR' | 'US' | 'UK' | 'DE' | 'INTERNATIONAL' = 'INTERNATIONAL' 
): boolean => {
  const cleanPhone =  phone.replace(/\s+/g, '');
  const patterns = {
    FR: /^(?:(?:\+33|0)[1-9])(?:[0-9]{8})$/,
    US: /^(?:\+1)?[2-9]\d{2}[2-9]\d{2}\d{4}$/,
    UK: /^(?:\+44)?[1-9]\d{8,9}$/,
    DE: /^(?:\+49)?[1-9]\d{6,11}$/,
    INTERNATIONAL: /^\+[1-9]\d{6,14}$/
  };
  return patterns[country].test(cleanPhone);
};

/**
 * Interface representing password strength validation result.
 * @property score - Score from 0 (weak) to 4 (strong)
 * @property feedback - Feedback messages for missing requirements
 * @property isStrong - True if password is strong
 */
export interface PasswordStrength {
  score: number;
  feedback: string[];
  isStrong: boolean;
}

/**
 * Validates the strength of a password.
 * @param password - The password string to validate
 * @returns PasswordStrength object
 */
export const validatePasswordStrength = (password: string): PasswordStrength => {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) {
    score++;
  } else {
    feedback.push('At least 8 characters required');
  }

  if (/[a-z]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one lowercase letter required');
  }

  if (/[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one uppercase letter required');
  }

  if (/[0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one number required');
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one special character required');
  }

  return {
    score,
    feedback,
    isStrong: score >= 5,
  };
};

/**
 * Validates if a string is a valid URL.
 * @param url - The URL string to validate
 * @returns True if valid URL, false otherwise
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validates a credit card number using the Luhn algorithm.
 * @param cardNumber - The credit card number string
 * @returns True if valid credit card, false otherwise
 */
export const isValidCreditCard = (cardNumber: string): boolean => {
  const num = cardNumber.replace(/\D/g, '');
  if (num.length < 13 || num.length > 19) return false;
  let sum = 0;
  let isEven = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
};

/**
 * Validates an IBAN (International Bank Account Number).
 * @param iban - The IBAN string to validate
 * @returns True if valid IBAN, false otherwise
 */
export const isValidIBAN = (iban: string): boolean => {
  const cleanIban = iban.replace(/\s/g, '').toUpperCase();
  if (cleanIban.length < 15 || cleanIban.length > 34) return false;
  const rearranged = cleanIban.slice(4) + cleanIban.slice(0, 4);
  const numericString = rearranged.replace(/[A-Z]/g, (char) => 
    (char.charCodeAt(0) - 55).toString()
  );
  return mod97(numericString) === 1;
};

/**
 * Helper function for IBAN validation (modulo 97 calculation).
 * @param string - Numeric string to check
 * @returns The modulo 97 result
 */
function mod97(string: string): number {
  let remainder = string;
  while (remainder.length > 2) {
    const block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }
  return parseInt(remainder, 10) % 97;
}

/**
 * Validates a French postal code (5 digits).
 * @param postalCode - The postal code string
 * @returns True if valid French postal code, false otherwise
 */
export const isValidPostalCode = (postalCode: string): boolean => {
  const frenchPostalCodeRegex = /^[0-9]{5}$/;
  return frenchPostalCodeRegex.test(postalCode);
};

/**
 * Checks if a value is required (not null, undefined, or empty).
 * @param value - The value to check
 * @returns True if value is present, false otherwise
 */
export const isRequired = (value: unknown): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
};

/**
 * Checks if a string has at least a minimum length.
 * @param value - The string to check
 * @param minLength - The minimum length
 * @returns True if string is at least minLength
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Checks if a string does not exceed a maximum length.
 * @param value - The string to check
 * @param maxLength - The maximum length
 * @returns True if string is at most maxLength
 */
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};