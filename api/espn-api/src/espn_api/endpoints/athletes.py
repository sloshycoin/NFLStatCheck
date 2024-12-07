# athletes.py
from espn_api import ESPNAPI

class Athletes(ESPNAPI):
    def get_athletes(self, limit=1000, active=True):
        params = {"limit": limit, "active": active}
        return self._get("athletes", params)
