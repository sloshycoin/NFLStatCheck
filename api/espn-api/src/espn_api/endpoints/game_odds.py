# game_odds.py
from espn_api import ESPNAPI

class GameOdds(ESPNAPI):
    def get_game_odds(self, event_id, bet_provider_id):
        params = {"eventId": event_id, "betProviderId": bet_provider_id}
        return self._get("odds/history/0/movement", params)
