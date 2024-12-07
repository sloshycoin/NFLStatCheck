# venues.py
from espn_api import ESPNAPI

class Venues(ESPNAPI):
    def get_venues(self, limit=700):
        params = {"limit": limit}
        return self._get("venues", params)
