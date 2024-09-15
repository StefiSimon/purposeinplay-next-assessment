import { Box } from '../Box';

export const Separator = () => {
  return (
    <Box direction="row" className="relative items-center justify-between">
      <span className="w-full relative left-0 right-0 h-px bg-borderSubdued"></span>
      <span className="mx-4 text-textDefault font-normal text-sm">OR</span>
      <span className="w-full relative left-0 right-0 h-px bg-borderSubdued"></span>
    </Box>
  );
};
