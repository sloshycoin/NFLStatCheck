# events.py
from espn_api import ESPNAPI

class Events(ESPNAPI):
    def get_events(self):
        return self._get("events")
