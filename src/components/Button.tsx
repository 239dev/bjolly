import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  to,
  onClick,
  type = 'button',
}) => {
  const baseClasses =
    'px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg',
    secondary: 'bg-navy-800 text-white hover:bg-navy-900 shadow-md hover:shadow-lg',
    outline: 'border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white',
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;