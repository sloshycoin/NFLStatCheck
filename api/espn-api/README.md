# ESPN API Python Package

This Python package provides a convenient way to interact with the ESPN API for various endpoints related to football. Each endpoint is represented by a class with functions to query the API.

# Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Endpoints](#endpoints)
    - [Athletes](#athletes)
    - [Teams](#teams)
    - [Positions](#positions)
    - [Venues](#venues)
    - [Leaders](#leaders)
    - [Seasons](#seasons)
    - [Franchises](#franchises)
    - [News](#news)
    - [Scoreboard](#scoreboard)
    - [Schedule](#schedule)
    - [Standings](#standings)
    - [Boxscore](#boxscore)
    - [Recap](#recap)
    - [Plays](#plays)
    - [Game](#game)
    - [Matchup](#matchup)
    - [Odds](#odds)
    - [Predictor](#predictor)
    - [AgainstTheSpread](#againstthespread)
    - [Futures](#futures)
    - [HeadToHead](#headtohead)
    - [OddsRecords](#oddsrecords)
    - [GameOdds](#gameodds)
    - [QBR](#qbr)
    - [PastPerformances](#pastperformances)
    - [Events](#events)
    - [GameSummary](#gamesummary)
    - [DetailedPlays](#detailedplays)
    - [Probabilities](#probabilities)
    - [Linescores](#linescores)
    - [ScoringSplits](#scoringsplits)
    - [Roster](#roster)
    - [TalentPicks](#talentpicks)
    - [WeeklyEventIDs](#weeklyeventids)
    - [GameOfficials](#gameofficials)
    - [PowerIndex](#powerindex)
    - [CurrentLeaders](#currentleaders)
    - [Gamelog](#gamelog)
    - [Coaches](#coaches)
    - [PlayerStats](#playerstats)
    - [StatisticsLog](#statisticslog)
    - [Transactions](#transactions)
    - [SeasonStandings](#seasonstandings)
    - [Calendar](#calendar)

## Installation

To install the package, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/espn_api.git
cd espn_api
pip install -r requirements.txt
```

## Usage

Here's an example of how to use the package:

```python
from espn_api import Athletes, Teams, Positions, Venues, Leaders, Seasons, Franchises, News, Scoreboard, Schedule, Standings, Boxscore, Recap, Plays, Game, Matchup, Odds, Predictor, AgainstTheSpread, Futures, HeadToHead, OddsRecords, GameOdds, QBR, PastPerformances, Events, GameSummary, DetailedPlays, Probabilities, Linescores, ScoringSplits, Roster, TalentPicks, WeeklyEventIDs, GameOfficials, PowerIndex, CurrentLeaders, Gamelog, Coaches, PlayerStats, StatisticsLog, Transactions, SeasonStandings, Calendar

# Example usage
athletes_api = Athletes()
athletes = athletes_api.get_athletes()
print(athletes)

teams_api = Teams()
teams = teams_api.get_teams()
print(teams)
```

## Endpoints

### Athletes

- **Endpoint**: `athletes`
- **Inputs**:
  - `limit` (int): Number of athletes to retrieve (default: 1000)
  - `active` (bool): Filter active athletes (default: True)
- **Example**:
  ```python
  athletes_api = Athletes()
  athletes = athletes_api.get_athletes(limit=100, active=True)
  print(athletes)
  ```

### Teams

- **Endpoint**: `teams`
- **Inputs**:
  - `limit` (int): Number of teams to retrieve (default: 32)
- **Example**:
  ```python
  teams_api = Teams()
  teams = teams_api.get_teams(limit=32)
  print(teams)
  ```

### Positions

- **Endpoint**: `positions`
- **Inputs**:
  - `limit` (int): Number of positions to retrieve (default: 75)
- **Example**:
  ```python
  positions_api = Positions()
  positions = positions_api.get_positions(limit=75)
  print(positions)
  ```

### Venues

- **Endpoint**: `venues`
- **Inputs**:
  - `limit` (int): Number of venues to retrieve (default: 700)
- **Example**:
  ```python
  venues_api = Venues()
  venues = venues_api.get_venues(limit=700)
  print(venues)
  ```

### Leaders

- **Endpoint**: `leaders`
- **Inputs**:
  - `limit` (int): Number of leaders to retrieve (default: 100)
- **Example**:
  ```python
  leaders_api = Leaders()
  leaders = leaders_api.get_leaders(limit=100)
  print(leaders)
  ```

### Seasons

- **Endpoint**: `seasons`
- **Inputs**:
  - `limit` (int): Number of seasons to retrieve (default: 100)
- **Example**:
  ```python
  seasons_api = Seasons()
  seasons = seasons_api.get_seasons(limit=100)
  print(seasons)
  ```

### Franchises

- **Endpoint**: `franchises`
- **Inputs**:
  - `limit` (int): Number of franchises to retrieve (default: 50)
- **Example**:
  ```python
  franchises_api = Franchises()
  franchises = franchises_api.get_franchises(limit=50)
  print(franchises)
  ```

### News

- **Endpoint**: `news`
- **Inputs**:
  - `limit` (int): Number of news articles to retrieve (default: 50)
- **Example**:
  ```python
  news_api = News()
  news = news_api.get_news(limit=50)
  print(news)
  ```

### Scoreboard

- **Endpoint**: `scoreboard`
- **Inputs**:
  - `limit` (int): Number of scoreboard entries to retrieve (default: 50)
- **Example**:
  ```python
  scoreboard_api = Scoreboard()
  scoreboard = scoreboard_api.get_scoreboard(limit=50)
  print(scoreboard)
  ```

### Schedule

- **Endpoint**: `schedule`
- **Inputs**:
  - `year` (int): Year of the schedule
  - `week_num` (int): Week number of the schedule
- **Example**:
  ```python
  schedule_api = Schedule()
  schedule = schedule_api.get_schedule(year=2024, week_num=1)
  print(schedule)
  ```

### Standings

- **Endpoint**: `standings`
- **Inputs**:
  - `year` (int): Year of the standings
  - `season_type` (int): Type of the season (1: Preseason, 2: Regular Season, 3: Post Season)
  - `conference_id` (int): ID of the conference
- **Example**:
  ```python
  standings_api = Standings()
  standings = standings_api.get_standings(year=2024, season_type=2, conference_id=8)
  print(standings)
  ```

### Boxscore

- **Endpoint**: `boxscore`
- **Inputs**:
  - `game_id` (int): ID of the game
- **Example**:
  ```python
  boxscore_api = Boxscore()
  boxscore = boxscore_api.get_boxscore(game_id=12345)
  print(boxscore)
  ```

### Recap

- **Endpoint**: `recap`
- **Inputs**:
  - `game_id` (int): ID of the game
- **Example**:
  ```python
  recap_api = Recap()
  recap = recap_api.get_recap(game_id=12345)
  print(recap)
  ```

### Plays

- **Endpoint**: `plays`
- **Inputs**:
  - `game_id` (int): ID of the game
  - `limit` (int): Number of plays to retrieve (default: 300)
- **Example**:
  ```python
  plays_api = Plays()
  plays = plays_api.get_plays(game_id=12345, limit=300)
  print(plays)
  ```

### Game

- **Endpoint**: `game`
- **Inputs**:
  - `game_id` (int): ID of the game
- **Example**:
  ```python
  game_api = Game()
  game = game_api.get_game(game_id=12345)
  print(game)
  ```

### Matchup

- **Endpoint**: `matchup`
- **Inputs**:
  - `game_id` (int): ID of the game
- **Example**:
  ```python
  matchup_api = Matchup()
  matchup = matchup_api.get_matchup(game_id=12345)
  print(matchup)
  ```

### Odds

- **Endpoint**: `odds`
- **Inputs**:
  - `event_id` (int): ID of the event
- **Example**:
  ```python
  odds_api = Odds()
  odds = odds_api.get_odds(event_id=12345)
  print(odds)
  ```

### Predictor

- **Endpoint**: `predictor`
- **Inputs**:
  - `event_id` (int): ID of the event
- **Example**:
  ```python
  predictor_api = Predictor()
  predictor = predictor_api.get_predictor(event_id=12345)
  print(predictor)
  ```

### AgainstTheSpread

- **Endpoint**: `ats`
- **Inputs**:
  - `year` (int): Year of the season
  - `team_id` (int): ID of the team
- **Example**:
  ```python
  ats_api = AgainstTheSpread()
  ats = ats_api.get_ats(year=2024, team_id=1)
  print(ats)
  ```

### Futures

- **Endpoint**: `futures`
- **Inputs**:
  - `year` (int): Year of the season
- **Example**:
  ```python
  futures_api = Futures()
  futures = futures_api.get_futures(year=2024)
  print(futures)
  ```

### HeadToHead

- **Endpoint**: `head-to-heads`
- **Inputs**:
  - `event_id` (int): ID of the event
  - `bet_provider_id` (int): ID of the bet provider
- **Example**:
  ```python
  head_to_head_api = HeadToHead()
  head_to_head = head_to_head_api.get_head_to_head(event_id=12345, bet_provider_id=1)
  print(head_to_head)
  ```

### OddsRecords

- **Endpoint**: `odds-records`
- **Inputs**:
  - `year` (int): Year of the season
  - `team_id` (int): ID of the team
- **Example**:
  ```python
  odds_records_api = OddsRecords()
  odds_records = odds_records_api.get_odds_records(year=2024, team_id=1)
  print(odds_records)
  ```

### GameOdds

- **Endpoint**: `odds/history/0/movement`
- **Inputs**:
  - `event_id` (int): ID of the event
  - `bet_provider_id` (int): ID of the bet provider
- **Example**:
  ```python
  game_odds_api = GameOdds()
  game_odds = game_odds_api.get_game_odds(event_id=12345, bet_provider_id=1)
  print(game_odds)
  ```

### QBR

- **Endpoint**: `qbr/10000`
- **Inputs**:
  - `year` (int): Year of the season
  - `week_num` (int): Week number of the season
- **Example**:
  ```python
  qbr_api = QBR()
  qbr = qbr_api.get_qbr(year=2024, week_num=1)
  print(qbr)
  ```

### PastPerformances

- **Endpoint**: `past-performances`
- **Inputs**:
  - `team_id` (int): ID of the team
  - `bet_provider_id` (int): ID of the bet provider
- **Example**:
  ```python
  past_performances_api = PastPerformances()
  past_performances = past_performances_api.get_past_performances(team_id=1, bet_provider_id=1)
  print(past_performances)
  ```

### Events

- **Endpoint**: `events`
- **Example**:
  ```python
  events_api = Events()
  events = events_api.get_events()
  print(events)
  ```

### GameSummary

- **Endpoint**: `summary`
- **Inputs**:
  - `event_id` (int): ID of the event
- **Example**:
  ```python
  game_summary_api = GameSummary()
  game_summary = game_summary_api.get_game_summary(event_id=12345)
  print(game_summary)
  ```

### DetailedPlays

- **Endpoint**: `plays`
- **Inputs**:
  - `game_id` (int): ID of the game
  - `limit` (int): Number of plays to retrieve (default: 300)
- **Example**:
  ```python
  detailed_plays_api = DetailedPlays()
  detailed_plays = detailed_plays_api.get_detailed_plays(game_id=12345, limit=300)
  print(detailed_plays)
  ```

### Probabilities

- **Endpoint**: `probabilities`
- **Inputs**:
  - `game_id` (int): ID of the game
- **Example**:
  ```python
  probabilities_api = Probabilities()
  probabilities = probabilities_api.get_probabilities(game_id=12345)
  print(probabilities)
  ```

### Linescores

- **Endpoint**: `linescores`
- **Inputs**:
  - `game_id` (int): ID of the game
  - `team_id` (int): ID of the team
- **Example**:
  ```python
  linescores_api = Linescores()
  linescores = linescores_api.get_linescores(game_id=12345, team_id=1)
  print(linescores)
  ```

### ScoringSplits

- **Endpoint**: `statistics`
- **Inputs**:
  - `game_id` (int): ID of the game
  - `team_id` (int): ID of the team
- **Example**:
  ```python
  scoring_splits_api = ScoringSplits()
  scoring_splits = scoring_splits_api.get_scoring_splits(game_id=12345, team_id=1)
  print(scoring_splits)
  ```

### Roster

- **Endpoint**: `roster`
- **Inputs**:
  - `game_id` (int): ID of the game
  - `team_id` (int): ID of the team
- **Example**:
  ```python
  roster_api = Roster()
  roster = roster_api.get_roster(game_id=12345, team_id=1)
  print(roster)
  ```

### TalentPicks

- **Endpoint**: `talentpicks`
- **Inputs**:
  - `year` (int): Year of the season
  - `season_type` (int): Type of the season (1: Preseason, 2: Regular Season, 3: Post Season)
  - `week_num` (int): Week number of the season
- **Example**:
  ```python
  talent_picks_api = TalentPicks()
  talent_picks = talent_picks_api.get_talent_picks(year=2024, season_type=2, week_num=1)
  print(talent_picks)
  ```

### WeeklyEventIDs

- **Endpoint**: `events`
- **Inputs**:
  - `year` (int): Year of the season
  - `season_type` (int): Type of the season (1: Preseason, 2: Regular Season, 3: Post Season)
  - `week_num` (int): Week number of the season
- **Example**:
  ```python
  weekly_event_ids_api = WeeklyEventIDs()
  weekly_event_ids = weekly_event_ids_api.get_weekly_event_ids(year=2024, season_type=2, week_num=1)
  print(weekly_event_ids)
  ```

### GameOfficials

- **Endpoint**: `officials`
- **Inputs**:
  - `game_id` (int): ID of the game
- **Example**:
  ```python
  game_officials_api = GameOfficials()
  game_officials = game_officials_api.get_game_officials(game_id=12345)
  print(game_officials)
  ```

### PowerIndex

- **Endpoint**: `powerindex`
- **Inputs**:
  - `game_id` (int): ID of the game
  - `team_id` (int): ID of the team
- **Example**:
  ```python
  power_index_api = PowerIndex()
  power_index = power_index_api.get_power_index(game_id=12345, team_id=1)
  print(power_index)
  ```

### CurrentLeaders

- **Endpoint**: `leaders`
- **Example**:
  ```python
  current_leaders_api = CurrentLeaders()
  current_leaders = current_leaders_api.get_current_leaders()
  print(current_leaders)
  ```

### Gamelog

- **Endpoint**: `gamelog`
- **Inputs**:
  - `athlete_id` (int): ID of the athlete
- **Example**:
  ```python
  gamelog_api = Gamelog()
  gamelog = gamelog_api.get_gamelog(athlete_id=12345)
  print(gamelog)
  ```

### Coaches

- **Endpoint**: `coaches`
- **Inputs**:
  - `year` (int): Year of the season
- **Example**:
  ```python
  coaches_api = Coaches()
  coaches = coaches_api.get_coaches(year=2024)
  print(coaches)
  ```

### PlayerStats

- **Endpoint**: `eventlog`
- **Inputs**:
  - `year` (int): Year of the season
  - `athlete_id` (int): ID of the athlete
- **Example**:
  ```python
  player_stats_api = PlayerStats()
  player_stats = player_stats_api.get_player_stats(year=2024, athlete_id=12345)
  print(player_stats)
  ```

### StatisticsLog

- **Endpoint**: `statisticslog`
- **Inputs**:
  - `athlete_id` (int): ID of the athlete
- **Example**:
  ```python
  statistics_log_api = StatisticsLog()
  statistics_log = statistics_log_api.get_statistics_log(athlete_id=12345)
  print(statistics_log)
  ```

### Transactions

- **Endpoint**: `transactions`
- **Inputs**:
  - `limit` (int): Number of transactions to retrieve (default: 100)
- **Example**:
  ```python
  transactions_api = Transactions()
  transactions = transactions_api.get_transactions(limit=100)
  print(transactions)
  ```

### SeasonStandings

- **Endpoint**: `standings`
- **Inputs**:
  - `year` (int): Year of the season
  - `season_type` (int): Type of the season (1: Preseason, 2: Regular Season, 3: Post Season)
  - `conference_id` (int): ID of the conference
- **Example**:
  ```python
  season_standings_api = SeasonStandings()
  season_standings = season_standings_api.get_season_standings(year=2024, season_type=2, conference_id=8)
  print(season_standings)
  ```

### Calendar

- **Endpoint**: `calendar`
- **Example**:
  ```python
  calendar_api = Calendar()
  calendar = calendar_api.get_calendar()
  print(calendar)
  ```
