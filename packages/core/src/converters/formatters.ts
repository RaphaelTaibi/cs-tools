/**
 * Formats a date as a localized string.
 * @param date - The date to format (Date object or ISO string)
 * @param locale - The locale string (default: 'fr-FR')
 * @param options - Intl.DateTimeFormat options
 * @returns The formatted date string
 */
export const formatDate = (
  date: Date | string,
  locale: string = 'fr-FR',
  options?: Intl.DateTimeFormatOptions
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat(locale, options || defaultOptions).format(dateObj);
};

/**
 * Formats a number as a currency string.
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'EUR')
 * @param locale - The locale string (default: 'fr-FR')
 * @returns The formatted currency string
 */
export const formatCurrency = (
  amount: number, 
  currency: string = 'EUR', 
  locale: string = 'fr-FR'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Formats a number as a localized string.
 * @param number - The number to format
 * @param options - Intl.NumberFormat options
 * @returns The formatted number string
 */
export const formatNumber = (
  number: number, 
  options?: Intl.NumberFormatOptions
): string => {
  return new Intl.NumberFormat('fr-FR', options).format(number);
};

/**
 * Formats a number as a percentage string.
 * @param value - The value to format (0-1)
 * @param decimals - Number of decimal places (default: 2)
 * @returns The formatted percentage string
 */
export const formatPercentage = (value: number, decimals: number = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

/**
 * Formats a file size in bytes as a human-readable string.
 * @param bytes - The file size in bytes
 * @returns The formatted file size string
 */
export const formatFileSize = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Math.round(bytes / Math.pow(1024, i) * 100) / 100} ${sizes[i]}`;
};

/**
 * Capitalizes the first letter of a string.
 * @param str - The input string
 * @returns The string with the first letter capitalized
 */
export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Capitalizes the first letter of each word in a string.
 * @param str - The input string
 * @returns The string with each word capitalized
 */
export const capitalizeWords = (str: string): string => {
  return str.replace(/\w\S*/g, capitalizeFirst);
};

/**
 * Converts a string to a URL-friendly slug.
 * @param str - The input string
 * @returns The slugified string
 */
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Truncates a string to a specified length and adds a suffix if needed.
 * @param str - The input string
 * @param length - Maximum length of the result
 * @param suffix - Suffix to append if truncated (default: '...')
 * @returns The truncated string
 */
export const truncate = (str: string, length: number, suffix: string = '...'): string => {
  if (str.length <= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
};