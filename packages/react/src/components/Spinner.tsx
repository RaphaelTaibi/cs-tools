import React from 'react';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'red' | 'green' | 'purple' | 'gray' | 'yellow' | 'indigo' | 'pink';
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
    medium: 'w-8 h-8 border-4',
    large: 'w-12 h-12 border-4',
  };

  const baseStyles = 'animate-spin rounded-full border-t-transparent';
  
  // Utilisons des classes CSS définies explicitement pour éviter les problèmes de purge
  const colorStyles = {
    blue: 'border-blue-600',
    red: 'border-red-600',
    green: 'border-green-600',
    purple: 'border-purple-600',
    gray: 'border-gray-600',
    yellow: 'border-yellow-600',
    indigo: 'border-indigo-600',
    pink: 'border-pink-600',
  };

  const colorClass = colorStyles[color as keyof typeof colorStyles] || colorStyles.blue;

  const combinedClassName =
    `${baseStyles} ${sizeStyles[size]} ${colorClass} ${className}`.trim();

  return (
    <div className="flex items-center justify-center">
      <div className={combinedClassName} role="status" aria-label="Loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;