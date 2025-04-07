import clsx from 'clsx';
import { ComponentProps, useMemo } from 'react';

export interface IButtonProps extends ComponentProps<'button'> {
  typeButton?: 'outlined' | 'filled';
  color?: 'primary' | 'warn' | 'secondary';
}

export const Button = ({ typeButton = 'filled', color = 'primary', className, children, ...props }: IButtonProps) => {
  const baseClasses = useMemo(() => "h-full px-3 py-1.5 cursor-pointer rounded transition-colors disabled:cursor-default border-2 disabled:text-ui-button-text/40 font-semibold text-ui-button-text", []);

  const colorClasses = useMemo(() => clsx({
    // primary button
    "bg-ui-button hover:bg-ui-button/80 active:bg-ui-button/60 disabled:bg-ui-button/40 border-ui-stroke/40 hover:border-ui-stroke/30 active:border-ui-stroke/20 disabled:border-ui-stroke/20":
      color === 'primary' && typeButton === 'filled',
    "border-ui-button/40 hover:border-ui-button/30 active:border-ui-button/20 disabled:border-ui-button/20 text-ui-button-text/80 hover:text-ui-button-text/70 active:text-ui-button-text/60":
      color === 'primary' && typeButton === 'outlined',

    // warn button
    "bg-red-500 hover:bg-red-400 active:bg-red-600 disabled:bg-red-300 border-red-700 hover:border-red-600 active:border-red-500 disabled:border-red-400":
      color === 'warn' && typeButton === 'filled',
    "border-red-500 hover:border-red-400 active:border-red-300 disabled:border-red-200 text-red-900 hover:text-red-800 active:text-red-700":
      color === 'warn' && typeButton === 'outlined',

    // secondary button
    "bg-ui-secondary hover:bg-ui-secondary/80 active:bg-ui-secondary/60 disabled:bg-ui-secondary/40 border-ui-secondary/40 hover:border-ui-secondary/30 active:border-ui-secondary/20 disabled:border-ui-secondary/20":
      color === 'secondary' && typeButton === 'filled',
    "border-ui-secondary/40 hover:border-ui-secondary/30 active:border-ui-secondary/20 disabled:border-ui-secondary/20 text-ui-secondary/80 hover:text-ui-secondary/70 active:text-ui-secondary/60":
      color === 'secondary' && typeButton === 'outlined',
  }), [typeButton, color]);

  return (
    <button className={clsx(baseClasses, colorClasses, className)} {...props}>
      {children}
    </button>
  );
};
