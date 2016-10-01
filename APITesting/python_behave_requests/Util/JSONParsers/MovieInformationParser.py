class MovieInformationParser(object):

    def __init__(self, response):
        self.response = response

    def get_movie_name(self):
        return self.response['title']

    def get_movie_casts_list(self):
        return self.response['casts']

    def get_movie_actor_id_list(self):
        actor_id_list = []
        for cast in self.get_movie_casts_list():
            actor_id_list.append(cast['id'])
        return actor_id_list

    def get_movie_actor_name_list(self):
        actor_name_list = []
        for cast in self.get_movie_casts_list():
            actor_name_list.append(cast['name'])
        return actor_name_list

    def get_movie_from_top250(self, rank):
        return self.response["subjects"][int(rank)]

    def get_movie_id_from_top250(self, rank):
        return self.response["subjects"][int(rank)]["id"]



