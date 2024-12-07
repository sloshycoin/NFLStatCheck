# power_index.py
from espn_api import ESPNAPI

class PowerIndex(ESPNAPI):
    def get_power_index(self, game_id, team_id):
        params = {"gameId": game_id, "teamId": team_id}
        return self._get("powerindex", params)
