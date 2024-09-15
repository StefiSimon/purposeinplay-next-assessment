import { StringValueNode } from 'graphql';
import { Box } from '../Box';
import { Typography } from '../Typography';

export const FormInput = ({
  id,
  name,
  label,
  type,
  onChange,
  placeholder,
  checked = false,
}: {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'password' | 'checkbox';
  onChange: (value: string) => void;
  checked?: boolean;
  placeholder?: string;
}) => {
  return (
    <Box direction="col" className="gap-2 mx-auto mt-4 w-full">
      <label htmlFor="username">
        <Typography.Paragraph>{label}</Typography.Paragraph>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        checked={checked}
        className="text-textSubdued text-sm border border-borderDefault bg-surfaceDefault rounded-md px-3 h-10 outline-none focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => onChange(e?.target?.value || '')}
      />
    </Box>
  );
};
