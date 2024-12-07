# game.py
from espn_api import ESPNAPI

class Game(ESPNAPI):
    def get_game(self, game_id):
        params = {"gameId": game_id}
        return self._get("game", params)
