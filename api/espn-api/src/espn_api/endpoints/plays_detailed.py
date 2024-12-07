# detailed_plays.py
from espn_api import ESPNAPI

class DetailedPlays(ESPNAPI):
    def get_detailed_plays(self, game_id, limit=300):
        params = {"gameId": game_id, "limit": limit}
        return self._get("plays", params)
