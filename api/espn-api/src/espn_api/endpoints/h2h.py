# h2h.py
from espn_api import ESPNAPI

class HeadToHead(ESPNAPI):
    def get_head_to_head(self, event_id, bet_provider_id):
        params = {"eventId": event_id, "betProviderId": bet_provider_id}
        return self._get("head-to-heads", params)
