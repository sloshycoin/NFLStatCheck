# base.py
import requests

class ESPNAPI:
    BASE_URL = "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/"

    def _get(self, endpoint, params=None):
        response = requests.get(f"{self.BASE_URL}{endpoint}", params=params)
        response.raise_for_status()
        return response.json()
