import classNames from 'classnames';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'surface' | 'transparent';
type ButtonSize = 'small' | 'large';
type ButtonWidth = 'auto' | 'full';

export const Button = ({
  variant,
  children,
  size = 'small',
  width = 'auto',
  className = null,
  onClick,
}: {
  variant: ButtonVariant;
  children: ReactNode;
  size?: ButtonSize;
  width?: ButtonWidth;
  className?: string | null;
  onClick: (e: any) => void;
}) => {
  return (
    <button
      className={classNames(
        'px-4 rounded-md text-sm font-semibold flex flex-row justify-center items-center gap-1  h-10 w-auto',
        {
          'bg-basePrimary': variant === 'primary',
          'bg-baseSecondary': variant === 'secondary',
          'bg-surfaceSubdued': variant === 'surface',
          'bg-transparent': variant === 'transparent',
          'h-12': size === 'large',
          'w-full': width === 'full',
          'w-fit': width === 'auto',
          'text-base': size === 'large',
          'px-6': size === 'large',
          'text-white': variant === 'primary' || variant === 'secondary',
          'text-textDefault': variant === 'surface',
          [className ?? '']: className,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
