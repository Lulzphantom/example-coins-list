import { ButtonHTMLAttributes } from 'react';

// type Props = {}

const CircularButton = ({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="w-10 p-3 bg-neutral-200 rounded-full active:scale-[0.9] opacity-80 hover:opacity-100 hover:bg-neutral-300 transition-all"
      {...rest}
    >
      {children}
    </button>
  )
}

export default CircularButton