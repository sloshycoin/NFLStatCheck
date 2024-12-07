import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

// Types for our data structures
interface TeamStats {
  teamName: string;
  wins: number;
  losses: number;
  pointsScored: number;
  pointsAllowed: number;
  currentStreak: string;
}

interface PlayerStats {
  name: string;
  position: string;
  team: string;
  passingYards?: number;
  rushingYards?: number;
  receivingYards?: number;
  touchdowns?: number;
}

const NFLStatsTracker: React.FC = () => {
  const [teamStats, setTeamStats] = useState<TeamStats[]>([]);
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch team stats
  const fetchTeamStats = async () => {
    try {
      // In a real app, replace with your actual API endpoint and authentication
      const response = await axios.get('https://api.mysportsfeeds.com/v2.1/pull/nfl/current/team_standings.json', {
        headers: {
          'Authorization': `Basic ${btoa('YOUR_API_USERNAME:YOUR_API_PASSWORD')}`,
          'Content-Type': 'application/json'
        }
      });

      // Transform API response to our TeamStats interface
      const transformedTeamStats = response.data.teams.map((team: any) => ({
        teamName: team.name,
        wins: team.wins,
        losses: team.losses,
        pointsScored: team.pointsScored,
        pointsAllowed: team.pointsAllowed,
        currentStreak: team.currentStreak
      }));

      setTeamStats(transformedTeamStats);
    } catch (err) {
      setError('Failed to fetch team stats');
      console.error(err);
    }
  };

  // Function to fetch player stats
  const fetchPlayerStats = async () => {
    try {
      // In a real app, replace with your actual API endpoint
      const response = await axios.get('https://api.mysportsfeeds.com/v2.1/pull/nfl/current/player_stats.json', {
        headers: {
          'Authorization': `Basic ${btoa('YOUR_API_USERNAME:YOUR_API_PASSWORD')}`,
          'Content-Type': 'application/json'
        }
      });

      // Transform API response to our PlayerStats interface
      const transformedPlayerStats = response.data.players.map((player: any) => ({
        name: player.fullName,
        position: player.position,
        team: player.team.name,
        passingYards: player.stats.passingYards,
        rushingYards: player.stats.rushingYards,
        receivingYards: player.stats.receivingYards,
        touchdowns: player.stats.touchdowns
      }));

      setPlayerStats(transformedPlayerStats);
    } catch (err) {
      setError('Failed to fetch player stats');
      console.error(err);
    }
  };

  // Fetch stats on component mount and set up periodic updates
  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      await Promise.all([fetchTeamStats(), fetchPlayerStats()]);
      setIsLoading(false);
    };

    fetchStats();

    // Refresh stats every 5 minutes
    const intervalId = setInterval(fetchStats, 5 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="h-[200px] w-full mb-4" />
        <Skeleton className="h-[200px] w-full" />
      </div>
    );
  }

  // Error handling
  if (error) {
    return (
      <div className="container mx-auto p-4">
        <Badge variant="destructive">{error}</Badge>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Real-Time NFL Stats</h1>

      {/* Team Stats Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Team Performance</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {teamStats.map((team) => (
            <Card key={team.teamName}>
              <CardHeader>
                <CardTitle>{team.teamName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Wins: {team.wins}</p>
                <p>Losses: {team.losses}</p>
                <p>Points Scored: {team.pointsScored}</p>
                <p>Points Allowed: {team.pointsAllowed}</p>
                <Badge variant="secondary" className="mt-2">
                  Current Streak: {team.currentStreak}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Player Stats Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Top Players</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {playerStats.map((player) => (
            <Card key={player.name}>
              <CardHeader>
                <CardTitle>{player.name}</CardTitle>
                <p className="text-muted-foreground">
                  {player.position} - {player.team}
                </p>
              </CardHeader>
              <CardContent>
                {player.passingYards && <p>Passing Yards: {player.passingYards}</p>}
                {player.rushingYards && <p>Rushing Yards: {player.rushingYards}</p>}
                {player.receivingYards && <p>Receiving Yards: {player.receivingYards}</p>}
                {player.touchdowns && <p>Touchdowns: {player.touchdowns}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NFLStatsTracker;
