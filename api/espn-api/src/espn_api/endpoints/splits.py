# scoring_splits.py
from espn_api import ESPNAPI

class ScoringSplits(ESPNAPI):
    def get_scoring_splits(self, game_id, team_id):
        params = {"gameId": game_id, "teamId": team_id}
        return self._get("statistics", params)
