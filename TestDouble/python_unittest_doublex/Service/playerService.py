from Service import bodyService as bs
from Service import dataService as ds
from Service import profileService as ps
from Service import salaryService as ss

class playerService(object):

    def __init__(self, playername, year, dataService, profileService, bodyService, salaryService):
        self.playername = playername
        self.year = year
        self.dataService = dataService
        self.profileService = profileService
        self.bodyService = bodyService
        self.salaryService = salaryService

    def get_player_info(self):
        personal_data = self.dataService.get_score() + '\n' + self.dataService.get_assist() + '\n' + self.dataService.get_rebound() +'\n' + self.dataService.get_match_number(self.year)
        personal_profile = self.profileService.get_player_team() + '\n' + self.profileService.get_player_position()
        return personal_profile + '\n' + personal_data

    def get_physical_feature(self, queryyear):
        height = self.bodyService.get_height()
        weight = self.bodyService.get_weight()
        illness = self.bodyService.illnessHistory(queryyear)
        return 'Physical feature is: ' + height + ' ' + weight + ' ' + illness

    def set_new_salary(self, salary):
        self.salaryService.set_salary(salary)

# if __name__ == '__main__':
#     playername = "Kawhi Leonard"
#     year = 2017
#     salary = "20m"
#     ps = playerService(playername, 2016, ds.dataService(playername), ps.profileService(playername), bs.bodyService(), ss.salaryService())
#     player = ps.get_player_info()
#     print(player)
#     print(ps.get_physical_feature(year))
#     ps.set_new_salary(salary)