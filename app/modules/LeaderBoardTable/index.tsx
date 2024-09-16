import Image from 'next/image';
import { leaderBoardItems } from './leaderBoardItems';
import { Typography } from '@/app/components';

export function LeaderBoardTable() {
  const thStyles =
    'uppercase text-sm text-left text-textSubdued text-xs font-normal leading-8';
  return (
    <div className="w-full overflow-auto">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr className={thStyles}>
            <th className="min-w-56">game</th>
            <th className="min-w-40">player</th>
            <th className="min-w-40">bet amount</th>
            <th className="min-w-40">multiplier</th>
            <th className="min-w-40">profit</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoardItems?.map((row, index) => (
            <tr
              className=" bg-backgroundSurfaceDefault font-normal text-sm "
              key={row?.profit + index}
            >
              <td className="flex flex-row gap-2 p-2 items-center">
                <div className="w-8 h-8">
                  <Image
                    src={row.avatar}
                    alt="avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <Typography.Paragraph className="text-white font-medium">
                    {row?.game.name}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="text-textSubdued">
                    {row?.game.description}
                  </Typography.Paragraph>
                </div>
              </td>
              <td>{row?.player}</td>
              <td>{row?.betAmount}</td>
              <td>{row?.multiplier}</td>
              <td>{row?.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
