import classNames from 'classnames';
import { ReactNode } from 'react';

export const Box = ({
  children,
  direction,
  className,
}: {
  children: ReactNode;
  direction: 'row' | 'col';
  className?: string;
}) => {
  return (
    <div
      className={classNames('flex', {
        'flex-row': direction === 'row',
        'flex-col': direction === 'col',
        // @ts-ignore
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
};
