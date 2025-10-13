import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: boolean;
  border?: boolean;
}

/**
 * A reusable Card component for content containers
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
  shadow = true,
  border = true,
}) => {
  const baseStyles = 'bg-white rounded-lg';

  const paddingStyles = {
    none: '',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8',
  };

  const shadowStyle = shadow ? 'shadow-md' : '';
  const borderStyle = border ? 'border border-gray-200' : '';

  const combinedClassName =
    `${baseStyles} ${paddingStyles[padding]} ${shadowStyle} ${borderStyle} ${className}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};
