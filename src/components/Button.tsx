import { ButtonHTMLAttributes } from 'react';

const Button = ({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className='p-2 text-white rounded-md hover:shadow-lg bg-neutral-800 hover:bg-neutral-900 active:scale-95 transition-all'
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button