import { ButtonHTMLAttributes } from 'react';

const Button = ({ children, disabled, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {



  return (
    <button
      disabled={disabled}
      className={`
      p-2 text-white rounded-md transition-all bg-neutral-800
      ${disabled ? 'opacity-55' : 'hover:shadow-lg hover:bg-neutral-900 active:scale-95 '} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button