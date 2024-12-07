# statistics_log.py
from espn_api import ESPNAPI

class StatisticsLog(ESPNAPI):
    def get_statistics_log(self, athlete_id):
        params = {"athleteId": athlete_id}
        return self._get("statisticslog", params)
