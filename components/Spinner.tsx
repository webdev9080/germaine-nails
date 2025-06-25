import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'lg';
  variant?: string; // Exemple : 'primary', 'secondary', 'danger', etc.
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'lg', variant = 'primary', text }) => {
  const spinnerClass = `spinner-border text-${variant} ${size === 'sm' ? 'spinner-border-sm' : ''}`;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-3">
      <div className={spinnerClass} role="status" />
      {text && <div className="mt-2">{text}</div>}
    </div>
  );
};

export default Spinner;