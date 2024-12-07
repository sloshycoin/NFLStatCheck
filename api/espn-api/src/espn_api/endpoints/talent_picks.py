# talent_picks.py
from espn_api import ESPNAPI

class TalentPicks(ESPNAPI):
    def get_talent_picks(self, year, season_type, week_num):
        params = {"year": year, "type": season_type, "week": week_num}
        return self._get("talentpicks", params)
