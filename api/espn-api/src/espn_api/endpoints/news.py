# news.py
from espn_api import ESPNAPI

class News(ESPNAPI):
    def get_news(self, limit=50):
        params = {"limit": limit}
        return self._get("news", params)
