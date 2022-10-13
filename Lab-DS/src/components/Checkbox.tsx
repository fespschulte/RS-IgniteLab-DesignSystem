import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface CheckboxProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Checkbox({ children, asChild }: CheckboxProps) {
  const Comp = asChild ? Slot : 'checkbox';
  
  return (
    <div className={clsx(
      'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', 
      )}
    >
      {children}
    </div>
  )
}