# leaders.py
from espn_api import ESPNAPI

class Leaders(ESPNAPI):
    def get_leaders(self, limit=100):
        params = {"limit": limit}
        return self._get("leaders", params)
