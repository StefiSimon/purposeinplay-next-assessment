import { ReactNode } from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

export function GameCard({ children }: { children: ReactNode }) {
  return (
    <Box direction="col" className="gap-3">
      {children}
    </Box>
  );
}

function GameCardImage({ src }: { src: string }) {
  return (
    <div className="w-full max-h-250">
      <Image
        src={src}
        alt="game-card-img"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function GameCardFooter({
  avatar,
  name,
  description,
  children,
}: {
  avatar: string;
  name: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="flex flex-row ">
        <div className="w-9 h-9">
          <Image
            src={avatar}
            alt="avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-2">
          <Typography.Paragraph className="text-textSubdued">
            {description}
          </Typography.Paragraph>
          <Typography.h3 className="text-white">{name}</Typography.h3>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

GameCard.Image = GameCardImage;
GameCard.Footer = GameCardFooter;
