# franchise.py
from espn_api import ESPNAPI

class Franchises(ESPNAPI):
    def get_franchises(self, limit=50):
        params = {"limit": limit}
        return self._get("franchises", params)
