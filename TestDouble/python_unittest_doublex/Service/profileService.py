class profileService(object):

    def __init__(self, playername):
        self.playername = playername

    def get_player_team(self):
        return self.playername + " - san antonio spurs"

    def get_player_position(self):
        return self.playername + " - small forward"