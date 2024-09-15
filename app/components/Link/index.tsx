import { ReactNode } from 'react';
import { Typography } from '../Typography';

export function Link({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      <Typography.h4 className="text-textPrimary">{children}</Typography.h4>
    </button>
  );
}
