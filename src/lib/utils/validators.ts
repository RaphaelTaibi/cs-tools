// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number validation (Format FR, US, UK, DE, INTERNATIONAL)
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

// Password strength validation
export interface PasswordStrength {
  score: number; // 0-4
  feedback: string[];
  isStrong: boolean;
}

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
    isStrong: score >= 4,
  };
};

// URL validation
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Credit card validation (Luhn algorithm)
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

// IBAN validation (basic)
export const isValidIBAN = (iban: string): boolean => {
  const cleanIban = iban.replace(/\s/g, '').toUpperCase();
  
  if (cleanIban.length < 15 || cleanIban.length > 34) return false;
  
  const rearranged = cleanIban.slice(4) + cleanIban.slice(0, 4);
  const numericString = rearranged.replace(/[A-Z]/g, (char) => 
    (char.charCodeAt(0) - 55).toString()
  );
  
  return mod97(numericString) === 1;
};

// Helper for IBAN validation
function mod97(string: string): number {
  let remainder = string;
  while (remainder.length > 2) {
    const block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }
  return parseInt(remainder, 10) % 97;
}

// French postal code validation
export const isValidPostalCode = (postalCode: string): boolean => {
  const frenchPostalCodeRegex = /^[0-9]{5}$/;
  return frenchPostalCodeRegex.test(postalCode);
};

// Required field validation
export const isRequired = (value: unknown): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
};

// Minimum length validation
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

// Maximum length validation
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};