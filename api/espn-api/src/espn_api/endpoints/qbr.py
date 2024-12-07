# qbr.py
from espn_api import ESPNAPI

class QBR(ESPNAPI):
    def get_qbr(self, year, week_num):
        params = {"year": year, "week": week_num}
        return self._get("qbr/10000", params)
