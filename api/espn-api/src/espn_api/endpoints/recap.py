# recap.py
from espn_api import ESPNAPI

class Recap(ESPNAPI):
    def get_recap(self, game_id):
        params = {"gameId": game_id}
        return self._get("recap", params)
