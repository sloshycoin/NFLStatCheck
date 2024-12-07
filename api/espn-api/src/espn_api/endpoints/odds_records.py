# odds_records.py
from espn_api import ESPNAPI

class OddsRecords(ESPNAPI):
    def get_odds_records(self, year, team_id):
        params = {"year": year, "teamId": team_id}
        return self._get("odds-records", params)
