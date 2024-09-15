import { Box } from '../Box';
import { Typography } from '../Typography';
import _ from 'lodash';
import cs from 'classnames';

const WizardElement = ({
  label,
  index,
  isActive,
}: {
  label: string;
  index: number;
  isActive: boolean;
}) => {
  return (
    <Box direction="col" className="gap-2 items-center">
      <div
        className={cs(
          'flex flex-row w-10 h-10 border  rounded-lg items-center justify-center bg-surfaceDefault',
          {
            'border-basePrimary': isActive,
            'border-borderSubdued': !isActive,
          }
        )}
      >
        <Typography.h4>{index + 1}</Typography.h4>
      </div>
      <Typography.h4>{_.capitalize(label)}</Typography.h4>
    </Box>
  );
};

export const Wizard = ({
  steps,
  activeStep,
}: {
  steps: Record<string, Record<string, string>>;
  activeStep: number;
}) => {
  return (
    <Box
      direction="row"
      className="items-center justify-between max-w-475 w-full px-8 pb-8"
    >
      {Object?.keys(steps)?.map((key, index) => (
        <>
          <WizardElement
            index={index}
            label={steps?.[key]?.label}
            isActive={index <= activeStep}
          />
          {index < Object?.keys(steps)?.length - 1 ? (
            <div
              className={cs('flex-1 border-t w-full h-px relative bottom-3', {
                'border-basePrimary': index < activeStep,
                'border-borderSubdued': index >= activeStep,
              })}
            ></div>
          ) : null}
        </>
      ))}
    </Box>
  );
};
