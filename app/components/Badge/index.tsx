import { ReactNode } from 'react';
import { Box } from '../Box';
import classNames from 'classnames';

export function Badge({
  children,
  variant,
  className,
}: {
  children: ReactNode;
  variant: 'transparent' | 'lightest' | 'lighter' | 'light';
  className?: string;
}) {
  return (
    <Box
      direction="row"
      className={classNames('py-1 px-2 rounded-full items-center', {
        'bg-backgroundOverlay': variant === 'transparent',
        'bg-backgroundLighter': variant === 'lighter',
        'bg-backgroundLightest': variant === 'lightest',
        'bg-backgroundLight': variant === 'light',
        // @ts-ignore
        [className]: !!className,
      })}
    >
      {children}
    </Box>
  );
}
