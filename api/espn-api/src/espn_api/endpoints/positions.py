# positions.py
from espn_api import ESPNAPI

class Positions(ESPNAPI):
    def get_positions(self, limit=75):
        params = {"limit": limit}
        return self._get("positions", params)
