import { ReactNode } from 'react';
import { Logo } from '../Logo';
import { Wizard } from '../Wizard';

export const OnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white pt-10 min-h-screen">
      <Logo />
      <div className="flex flex-col items-center justify-start py-16 w-full">
        {children}
      </div>
    </div>
  );
};

export const OboardingLayoutCard = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center justify-center min-h-full max-w-475 w-full">
    <div className="bg-white p-2 md:p-4 lg:p-8 min-w-24 w-full">{children}</div>
  </div>
);

OnboardingLayout.Card = OboardingLayoutCard;
OnboardingLayout.Wizard = Wizard;
