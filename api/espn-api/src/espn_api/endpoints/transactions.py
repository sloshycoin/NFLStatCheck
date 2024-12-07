# transactions.py
from espn_api import ESPNAPI

class Transactions(ESPNAPI):
    def get_transactions(self, limit=100):
        params = {"limit": limit}
        return self._get("transactions", params)
