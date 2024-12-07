# linescores.py
from espn_api import ESPNAPI

class Linescores(ESPNAPI):
    def get_linescores(self, game_id, team_id):
        params = {"gameId": game_id, "teamId": team_id}
        return self._get("linescores", params)
