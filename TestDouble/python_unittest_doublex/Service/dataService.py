class dataService(object):

    def __init__(self, playername):
        self.playername = playername

    def get_rebound(self):
        return self.playername + ' ' + str("6")

    def get_score(self):
        return self.playername + ' ' + str("25")

    def get_assist(self):
        return self.playername + ' ' + str("6")

    def get_match_number(self, year):
        return self.playername + ' plays ' + ' 80 games at the year of ' + str(year)