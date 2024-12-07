# weekly_event_ids.py
from espn_api import ESPNAPI

class WeeklyEventIDs(ESPNAPI):
    def get_weekly_event_ids(self, year, season_type, week_num):
        params = {"year": year, "type": season_type, "week": week_num}
        return self._get("events", params)
