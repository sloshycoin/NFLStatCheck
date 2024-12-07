# teams.py
from espn_api import ESPNAPI

class Teams(ESPNAPI):
    def get_teams(self, limit=32):
        params = {"limit": limit}
        return self._get("teams", params)
