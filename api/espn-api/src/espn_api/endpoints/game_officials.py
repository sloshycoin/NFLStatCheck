# game_officials.py
from espn_api import ESPNAPI

class GameOfficials(ESPNAPI):
    def get_game_officials(self, game_id):
        params = {"gameId": game_id}
        return self._get("officials", params)
