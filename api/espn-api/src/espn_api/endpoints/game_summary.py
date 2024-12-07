# game_summary.py
from espn_api import ESPNAPI

class GameSummary(ESPNAPI):
    def get_game_summary(self, event_id):
        params = {"eventId": event_id}
        return self._get("summary", params)
