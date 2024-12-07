# futures.py
from espn_api import ESPNAPI

class Futures(ESPNAPI):
    def get_futures(self, year):
        params = {"year": year}
        return self._get("futures", params)
