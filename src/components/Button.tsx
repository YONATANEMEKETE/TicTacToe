import React from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
  child: string;
  className: string;
  to?: string;
  reset?: () => void;
}

const Button = ({ child, className, to, reset }: ButtonProps) => {
  const Link = () => {
    return (
      <NavLink
        to="/about"
        className={`${className || ''}  text-lg px-8 py-2 rounded-md`}
      >
        {child}
      </NavLink>
    );
  };

  const Btn = () => {
    return (
      <button
        onClick={reset}
        className={`${className || ''}  text-lg px-8 py-2 rounded-md`}
      >
        {child}
      </button>
    );
  };

  if (to) {
    return <Link />;
  } else {
    return <Btn />;
  }
};

export default Button;
