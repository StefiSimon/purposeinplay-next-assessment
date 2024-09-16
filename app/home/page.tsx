'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Box, Typography } from '../components';
import {
  GameCardGrid,
  LeaderBoardTable,
  TournamentGrid,
  FooterSection,
  HeroSection,
} from '../modules';
import { useQuery } from '@apollo/client';
import { GetUser } from '../lib/graphql/schema/queries/getUser';
import client from '../lib/graphql/apolloClient';

export default function Home() {
  const { loading, error, data } = useQuery(GetUser, {
    client,
  });

  useEffect(() => {
    if (!loading && !error) {
      if (data?.user?.__typename === 'UserNotFoundError') {
        console.log('User not found!');
      } else if (data?.user?.__typename === 'InvalidTokenError') {
        console.log('Invalid user token!');
      } else if (data?.user?.__typename === 'User') {
        console.log(data?.user);
      }
    }
  }, [data, loading, error]);

  return (
    <Box
      direction="col"
      className="justify-start min-h-screen bg-backgroundDefault h-full w-full text-white"
    >
      <HeroSection />
      {/* Home Section */}
      <div className="relative px-4 md:px-12 lg:px-20 py-4">
        <div className="mb-4">
          <Typography.h2 className="text-white">Games for You</Typography.h2>
          <Typography.Paragraph className="text-textSubdued">
            Test your skills in a range of popular skill-based games.
          </Typography.Paragraph>
        </div>
        <GameCardGrid />
      </div>

      <div className="relative px-4 md:px-12 lg:px-20 py-4">
        <div className="mb-4">
          {' '}
          <Typography.h2 className="text-white">
            Active Tournaments
          </Typography.h2>
          <Typography.Paragraph className="text-textSubdued">
            Compete with others & win crypto rewards.
          </Typography.Paragraph>
        </div>
        <TournamentGrid />
      </div>

      <div className="relative px-4 md:px-12 lg:px-20 py-4">
        <div className="mb-4">
          <Typography.h2 className="text-white text-xl font-semibold">
            Leaderboard
          </Typography.h2>
        </div>
        <LeaderBoardTable />
      </div>

      <FooterSection />
    </Box>
  );
}
