import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helper,
  leftIcon,
  rightIcon,
  variant = 'default',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const baseClasses = 'w-full px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 cs-text-primary';

  const variantClasses = {
    default: 'cs-input-bg border cs-border rounded-md focus:ring-blue-500 focus:border-blue-500',
    filled: 'cs-bg-tertiary border border-transparent rounded-md focus:cs-bg-primary focus:ring-blue-500 focus:border-blue-500',
    outline: 'cs-input-bg border-2 cs-border-strong rounded-md focus:ring-blue-500 focus:border-blue-500',
  };

  const errorClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : '';

  const inputClasses = `${baseClasses} ${variantClasses[variant]} ${errorClasses} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium cs-text-primary mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="cs-text-muted">{leftIcon}</span>
          </div>
        )}

        <input
          id={inputId}
          className={inputClasses}
          {...props}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className="cs-text-muted">{rightIcon}</span>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}

      {helper && !error && (
        <p className="mt-1 text-sm cs-text-secondary">
          {helper}
        </p>
      )}
    </div>
  );
};

export default Input;