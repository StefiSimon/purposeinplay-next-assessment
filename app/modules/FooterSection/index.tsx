import {
  InstagramIcon,
  LogoCertik,
  LogoWhite,
  TelegramIcon,
  TwitchIcon,
  Typography,
  WinSdkLogo,
  XIcon,
} from '@/app/components';

const gamesLinks = [
  'Wordcraft',
  'Pillars of Defense',
  'Hoopshot',
  'Royal Bingo',
  'Karate Panda',
  'Ball Dash',
  '21 Knights & Dragons',
];
const generalLinks = ['Blog', 'Whitepaper', 'About Us', 'Careers'];
const supportLinks = [
  'FAQ',
  'Terms & Conditions',
  'Privacy Policy',
  'Contact Us',
];

export function FooterSection() {
  return (
    <div className="relative px-20 pt-20 pb-4 bg-gradient-to-b from-backgroundDefault via-backgroundDefault to-gradientPurpleBg">
      <div className="grid grid-cols-[repeat(7,_minmax(0,_1fr))] gap-4 pt-8 border-t border-borderLightDefault">
        <div className="col-span-2 flex flex-col gap-4">
          <LogoWhite />
          <div className="flex flex-row gap-4 items-center">
            <LogoCertik />
            <WinSdkLogo />
          </div>
          <div className="pt-4 text-sm font-medium">
            <p>Copyright 2024 © Play to Win DAO</p>
            <p className="text-textSubdued">Made with 💜 Around the World</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <Typography.h4 className="text-white">Games</Typography.h4>
          {gamesLinks?.map((link) => (
            <Typography.Paragraph className="text-textSubdued">
              {link}
            </Typography.Paragraph>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <Typography.h4 className="text-white">General</Typography.h4>
          {generalLinks.map((link) => (
            <Typography.Paragraph className="text-textSubdued">
              {link}
            </Typography.Paragraph>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <Typography.h4 className="text-white">Support</Typography.h4>
          {supportLinks.map((link) => (
            <Typography.Paragraph className="text-textSubdued">
              {link}
            </Typography.Paragraph>
          ))}
        </div>
        <div className="col-span-2 flex flex-row justify-end gap-4 items-start">
          <TelegramIcon />
          <TwitchIcon />
          <XIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}
