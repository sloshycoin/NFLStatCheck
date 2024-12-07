# odds.py
from espn_api import ESPNAPI

class Odds(ESPNAPI):
    def get_odds(self, event_id):
        params = {"eventId": event_id}
        return self._get("odds", params)
