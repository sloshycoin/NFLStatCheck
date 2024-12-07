# predictor.py
from espn_api import ESPNAPI

class Predictor(ESPNAPI):
    def get_predictor(self, event_id):
        params = {"eventId": event_id}
        return self._get("predictor", params)
