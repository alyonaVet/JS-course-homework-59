import React from 'react';

interface ButtonProps extends React.PropsWithChildren{
  type: 'button' | 'submit' | 'reset';
  className: string;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({type, className, onClick, children}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{children}</button>
  );
};

export default Button;