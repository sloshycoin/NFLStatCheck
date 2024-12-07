import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data - in a real app, this would come from an API
const teamData = [
  { name: 'Kansas City Chiefs', wins: 12, losses: 4, pointsScored: 455, pointsAllowed: 312 },
  { name: 'Baltimore Ravens', wins: 13, losses: 3, pointsScored: 442, pointsAllowed: 287 },
  { name: 'San Francisco 49ers', wins: 12, losses: 4, pointsScored: 480, pointsAllowed: 303 },
];

const playerData = [
  { name: 'Patrick Mahomes', position: 'QB', team: 'Kansas City Chiefs', passingYards: 4534, touchdowns: 42 },
  { name: 'Lamar Jackson', position: 'QB', team: 'Baltimore Ravens', passingYards: 3678, rushingYards: 821 },
  { name: 'Christian McCaffrey', position: 'RB', team: 'San Francisco 49ers', rushingYards: 1459, receivingYards: 741 },
];

const NFLStatsTracker = () => {
  const [activeTab, setActiveTab] = useState('teams');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">NFL Stats Tracker</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="teams">Team Stats</TabsTrigger>
          <TabsTrigger value="players">Player Stats</TabsTrigger>
        </TabsList>
        
        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {teamData.map((team) => (
                  <Card key={team.name} className="border">
                    <CardHeader>
                      <CardTitle>{team.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Wins: {team.wins}</p>
                      <p>Losses: {team.losses}</p>
                      <p>Points Scored: {team.pointsScored}</p>
                      <p>Points Allowed: {team.pointsAllowed}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6">
                <LineChart width={600} height={300} data={teamData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pointsScored" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="pointsAllowed" stroke="#82ca9d" />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="players">
          <Card>
            <CardHeader>
              <CardTitle>Player Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {playerData.map((player) => (
                  <Card key={player.name} className="border">
                    <CardHeader>
                      <CardTitle>{player.name}</CardTitle>
                      <p className="text-muted-foreground">{player.position} - {player.team}</p>
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
              
              <div className="mt-6">
                <LineChart width={600} height={300} data={playerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="passingYards" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="rushingYards" stroke="#82ca9d" />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NFLStatsTracker;
