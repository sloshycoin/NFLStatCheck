# scoreboard.py
from espn_api import ESPNAPI

class Scoreboard(ESPNAPI):
    def get_scoreboard(self, limit=50):
        params = {"limit": limit}
        return self._get("scoreboard", params)
