import classNames from 'classnames';
import { tournamentGridItems } from './tournamentGridItems';
import { TournamentCard } from '@/app/components';

export function TournamentGrid() {
  return (
    <div className="grid grid-rows-1 grid-cols-[repeat(1,_minmax(0,_1fr))] md:grid-cols-[repeat(4,_minmax(0,_1fr))] lg:grid-cols-[repeat(7,_minmax(0,_1fr))] gap-4">
      {tournamentGridItems?.map((item, index) => (
        <div
          className={classNames({
            'col-span-1': index === tournamentGridItems?.length - 1,
            'col-span-2': index < tournamentGridItems?.length - 1,
          })}
          key={item?.name + index}
        >
          {/* @ts-ignore */}
          <TournamentCard name={item.name} src={item.imgSrc} />
        </div>
      ))}
    </div>
  );
}
