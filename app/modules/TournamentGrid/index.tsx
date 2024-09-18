import { tournamentGridItems } from './tournamentGridItems';
import { TournamentCard } from '@/app/components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { ChevronIcon } from './ChevronIcon';

export function TournamentGrid() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const windowSize = useWindowSize();
  const onSlideRightClick = useCallback(() => {
    setScrollPosition(
      scrollPosition - (windowSize.width ?? window.innerWidth) / 2
    );
  }, [scrollPosition, windowSize]);
  const onSlideLeftClick = useCallback(() => {
    setScrollPosition(
      scrollPosition + (windowSize.width ?? window.innerWidth) / 2
    );
  }, [scrollPosition, windowSize]);
  return (
    <div className="overflow-hidden relative w-full">
      <div
        id="carousel"
        className="flex transition-transform duration-300 ease-out gap-4"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {tournamentGridItems?.map((item, index) => (
          <div
            className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-3/10 xl:w-1/4 2xl:w-1/5 3xl:w-1/6 shrink-0"
            key={item?.name + index}
          >
            {/* @ts-ignore */}
            <TournamentCard name={item.name} src={item.imgSrc} />
          </div>
        ))}
      </div>

      {scrollPosition !== 0 ? (
        <button
          id="prev"
          className="absolute left-0 top-1/2 [transform:rotateY(180deg)] bg-backgroundLightest px-1 py-1"
          onClick={onSlideLeftClick}
        >
          <ChevronIcon />
        </button>
      ) : null}

      <button
        id="next"
        className="absolute right-0 top-1/2 bg-backgroundLightest px-1 py-1"
        onClick={onSlideRightClick}
      >
        <ChevronIcon />
      </button>
    </div>
  );
}
