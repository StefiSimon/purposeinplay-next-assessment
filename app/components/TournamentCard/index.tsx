import { Badge } from '../Badge';
import { Box } from '../Box';
import { Typography } from '../Typography';
import Image from 'next/image';

export function TournamentCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute z-10 top-4 left-4">
        <p className="font-proxima text-white text-base font-bold">{name}</p>
      </div>
      <div className="w-full h-full max-h-200 relative z-1">
        <Image
          src={src}
          alt="game-card-img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute w-full z-10 bottom-3 flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 relative left-4">
          <p className="font-proxima text-white text-lg font-semibold">$100</p>
          <Typography.h4 className="text-white">Reward</Typography.h4>
        </div>
        <div className="relative right-4">
          <Badge
            variant="light"
            className="text-sm font-normal text-textSubdued"
          >
            15 Entry
          </Badge>
        </div>
      </div>
    </div>
  );
}
