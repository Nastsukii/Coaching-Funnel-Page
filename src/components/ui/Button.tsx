import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = "",
  type = 'button',
  disabled = false
}) => {
  const baseStyle = "px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all transform hover:scale-105 duration-200 flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)]",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500/10"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
