import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="calculator-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;