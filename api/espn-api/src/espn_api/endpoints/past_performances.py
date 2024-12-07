# past_performances.py
from espn_api import ESPNAPI

class PastPerformances(ESPNAPI):
    def get_past_performances(self, team_id, bet_provider_id):
        params = {"teamId": team_id, "betProviderId": bet_provider_id}
        return self._get("past-performances", params)
