# schedule.py
from espn_api import ESPNAPI

class Schedule(ESPNAPI):
    def get_schedule(self, year, week_num):
        params = {"year": year, "week": week_num}
        return self._get("schedule", params)
