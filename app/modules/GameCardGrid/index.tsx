import { Badge, Box, GameCard } from '@/app/components';
import { gamesGridItems } from './gamesGridItems';

export function GameCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gamesGridItems?.map((item, index) => (
        <GameCard key={item?.name + index}>
          {/* @ts-ignore */}
          <GameCard.Image src={item?.imgSrc} />
          <GameCard.Footer
            //    @ts-ignore
            avatar={item?.avatar}
            name={item?.name}
            description={item?.description}
          >
            <Box direction="row" className="gap-1">
              <Badge
                variant="lightest"
                className="text-textLightPurple text-sm"
              >
                {item?.badgeName}
              </Badge>
              <Badge
                variant="lightest"
                className="text-textLightPurple text-sm"
              >
                +{item?.badgeCount}
              </Badge>
            </Box>
          </GameCard.Footer>
        </GameCard>
      ))}
    </div>
  );
}
