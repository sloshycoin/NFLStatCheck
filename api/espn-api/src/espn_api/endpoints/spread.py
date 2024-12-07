# spread.py
from espn_api import ESPNAPI

class AgainstTheSpread(ESPNAPI):
    def get_ats(self, year, team_id):
        params = {"year": year, "teamId": team_id}
        return self._get("ats", params)
