# roster.py
from espn_api import ESPNAPI

class Roster(ESPNAPI):
    def get_roster(self, game_id, team_id):
        params = {"gameId": game_id, "teamId": team_id}
        return self._get("roster", params)
