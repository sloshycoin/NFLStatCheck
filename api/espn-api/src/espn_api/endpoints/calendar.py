# calendar.py
from espn_api import ESPNAPI

class Calendar(ESPNAPI):
    def get_calendar(self):
        return self._get("calendar")
    
    def get_on_days(self):
        return self._get("calendar/ondays")
    
    def get_off_days(self):
        return self._get("calendar/offdays")
    
    def get_blacklist(self):
        return self._get("calendar/blacklist")
    
    def get_whitelist(self):
        return self._get("calendar/whitelist")
