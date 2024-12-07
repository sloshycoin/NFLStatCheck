from espn_api.endpoints import Athletes, Teams

athletes_api = Athletes()
teams_api = Teams()

athletes = athletes_api.get_athletes()
teams = teams_api.get_teams()

print(athletes)
print(teams)
