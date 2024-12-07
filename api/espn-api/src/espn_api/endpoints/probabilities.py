# probabilities.py
from espn_api import ESPNAPI

class Probabilities(ESPNAPI):
    def get_probabilities(self, game_id):
        params = {"gameId": game_id}
        return self._get("probabilities", params)
