# boxscore.py
from espn_api import ESPNAPI

class Boxscore(ESPNAPI):
    def get_boxscore(self, game_id):
        params = {"gameId": game_id}
        return self._get("boxscore", params)
