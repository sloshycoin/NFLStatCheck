# player_stats.py
from espn_api import ESPNAPI

class PlayerStats(ESPNAPI):
    def get_player_stats(self, year, athlete_id):
        params = {"year": year, "athleteId": athlete_id}
        return self._get("eventlog", params)
