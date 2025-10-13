import React from 'react';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

/**
 * A reusable Spinner component for loading states
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = 'blue',
  className = '',
}) => {
  const sizeStyles = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4',
  };

  const baseStyles = 'animate-spin rounded-full border-t-transparent';
  const colorStyle = `border-${color}-600`;

  const combinedClassName =
    `${baseStyles} ${sizeStyles[size]} ${colorStyle} ${className}`.trim();

  return (
    <div className="flex items-center justify-center">
      <div className={combinedClassName} role="status" aria-label="Loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
