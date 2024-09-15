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

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check for accessToken (either from localStorage or cookies)
    const token = localStorage.getItem('accessToken'); // Or you can use cookies

    if (!token) {
      console.log('not logged in!');
    } else {
      console.log('logged in!');
    }
  }, [router]);

  return (
    <Box
      direction="col"
      className="justify-start min-h-screen bg-backgroundDefault h-full w-full text-white"
    >
      <HeroSection />
      {/* Home Section */}
      <div className="relative px-20 py-4">
        <div className="mb-4">
          <Typography.h2 className="text-white">Games for You</Typography.h2>
          <Typography.Paragraph className="text-textSubdued">
            Test your skills in a range of popular skill-based games.
          </Typography.Paragraph>
        </div>
        <GameCardGrid />
      </div>

      <div className="relative px-20 py-4">
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

      <div className="relative px-20 py-4">
        <div className="mb-4">
          <Typography.h2 className="text-white text-xl font-semibold">
            Leaderboards
          </Typography.h2>
        </div>
        <LeaderBoardTable />
      </div>

      <FooterSection />
    </Box>
  );
}
