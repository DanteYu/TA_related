from behave import *
from Util.JSONParsers.MovieInformationParser import MovieInformationParser
from Util import RequestService
from TestData.MovieData.MovieID import TheBourneIdentity_ID
from TestData.MovieData.ActorID import MattDamonID


@given('I have the The BourneIdentity ID')
def step_impl(context):
    pass

@when('I send request to Douban API')
def step_impl(context):
        context.response = RequestService._get_GET_response(RequestService.get_movie_api_with_movieid(TheBourneIdentity_ID))

@then('I can verify Matt Damon is one of the actors')
def step_impl(context):
        movieparser = MovieInformationParser(context.response)
        # print "The movie is: " + movieparser.get_movie_name()
        actorid_list = movieparser.get_movie_actor_id_list()
        # print "The actor ids are: " + str(actorid_list)
        result = MattDamonID in actorid_list
        assert result is True