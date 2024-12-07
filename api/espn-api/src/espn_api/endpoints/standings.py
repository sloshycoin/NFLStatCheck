# standings.py
from espn_api import ESPNAPI

class Standings(ESPNAPI):
    def get_standings(self, year, season_type, conference_id):
        params = {"year": year, "type": season_type, "conference": conference_id}
        return self._get("standings", params)
