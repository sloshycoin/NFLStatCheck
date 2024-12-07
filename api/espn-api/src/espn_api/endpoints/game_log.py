# gamelog.py
from espn_api import ESPNAPI

class Gamelog(ESPNAPI):
    def get_gamelog(self, athlete_id):
        params = {"athleteId": athlete_id}
        return self._get("gamelog", params)
