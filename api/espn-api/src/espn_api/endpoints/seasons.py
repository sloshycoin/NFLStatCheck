# seasons.py
from espn_api import ESPNAPI

class Seasons(ESPNAPI):
    def get_seasons(self, limit=100):
        params = {"limit": limit}
        return self._get("seasons", params)
