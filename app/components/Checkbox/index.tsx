import { ReactNode } from 'react';
import { Typography } from '../Typography';
import { Box } from '../Box';

export function Checkbox({
  label,
  onClick,
  checked,
}: {
  label: ReactNode;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <Box direction="row" className="w-full justify-between items-center gap-2">
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onClick={onClick}
        className="h-4 w-4 text-basePrimary border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor="checkbox">{label}</label>
    </Box>
  );
}
