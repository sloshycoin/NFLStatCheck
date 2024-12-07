# coaches.py
from espn_api import ESPNAPI

class Coaches(ESPNAPI):
    def get_coaches(self, year):
        params = {"year": year}
        return self._get("coaches", params)
