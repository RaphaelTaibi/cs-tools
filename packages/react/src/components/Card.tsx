import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  header,
  footer,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  
  const variantClasses = {
    default: 'cs-bg-primary border cs-border',
    elevated: 'cs-card-elevated',
    outlined: 'cs-card-outlined',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const contentClasses = paddingClasses[padding];

  return (
    <div className={classes} {...props}>
      {header && (
        <div className="border-b cs-border px-6 py-4">
          {header}
        </div>
      )}
      
      <div className={contentClasses}>
        {children}
      </div>
      
      {footer && (
        <div className="border-t cs-border px-6 py-4">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;