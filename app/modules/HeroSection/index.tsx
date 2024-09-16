import { Badge, Box, Button, LogoWhite, Typography } from '@/app/components';
import { AppRoutes } from '@/app/lib/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import heroImg from './heroImg.png';

export function HeroSection() {
  const router = useRouter();

  const onGoToLoginClick = () => {
    router.push(AppRoutes.login);
  };
  const onGoToRegisterClick = () => {
    router.push(AppRoutes.signup);
  };
  return (
    <div className="relative h-full max-h-halfScreen">
      {/* Image */}
      <div className="w-full h-full z-0 absolute top-0 left-0">
        <div className="z-20 shadow-inset-dark w-full h-full absolute"></div>
        <div className="w-full relative z-10 flex items-center justify-center h-full max-h-halfScreen">
          <Image
            src={heroImg}
            alt="hero"
            className="max-w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="relative px-4 md:px-12 lg:px-20">
        {/* Header */}
        <Box
          direction="row"
          className="relative z-10 justify-between items-center py-8"
        >
          <Box direction="row" className="items-center gap-4">
            <div className="relative bottom-1">
              <LogoWhite />
            </div>
            <Badge
              variant="transparent"
              className="hidden md:flex gap-1 text-sm font-normal font-inter shadow-md text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-alert"></span>
              <span>Connected Wallet:</span>
              <span className="text-textDisabled"> None</span>
            </Badge>
          </Box>
          <Box direction="row" className="items-center gap-2">
            <Button
              variant="transparent"
              size="small"
              className="text-baseSecondary"
              onClick={onGoToLoginClick}
            >
              Log in
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={onGoToRegisterClick}
            >
              Register
            </Button>
          </Box>
        </Box>
        {/* Hero Content */}
        <Box
          direction="col"
          className="relative w-full max-w-440 h-full z-10 py-8"
        >
          <Typography.h1 className="text-white text-shadow">
            Play to Win{' '}
          </Typography.h1>
          <Typography.h1 className="text-white text-shadow">
            Crypto Rewards
          </Typography.h1>
          <Typography.h3 className="text-white py-4">
            Quick sign-up, personal bonuses, and qualified support.
          </Typography.h3>
          <Button
            className="mt-6"
            width="auto"
            variant="secondary"
            size="large"
            onClick={onGoToRegisterClick}
          >
            Register Now
          </Button>
        </Box>
      </div>
    </div>
  );
}
