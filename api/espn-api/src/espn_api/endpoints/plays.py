# plays.py
from espn_api import ESPNAPI

class Plays(ESPNAPI):
    def get_plays(self, game_id, limit=300):
        params = {"gameId": game_id, "limit": limit}
        return self._get("plays", params)
