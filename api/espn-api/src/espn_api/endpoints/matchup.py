# matchup.py
from espn_api import ESPNAPI

class Matchup(ESPNAPI):
    def get_matchup(self, game_id):
        params = {"gameId": game_id}
        return self._get("matchup", params)
