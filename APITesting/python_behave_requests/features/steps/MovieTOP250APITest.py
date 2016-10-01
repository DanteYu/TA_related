from behave import *
from Util.JSONParsers.MovieInformationParser import MovieInformationParser
from Util import RequestService
from TestData.MovieData.MovieID import TheShawshankRedemption_ID


@given('I have the The TheShawshankRedemption ID')
def step_impl(context):
    assert TheShawshankRedemption_ID is not False

@when('I send request to Douban TOP250 API')
def step_impl(context):
        context.response = RequestService._get_GET_response(RequestService.get_movie_api_top250())

@then('I can verify The Shawshank Redemption is #1 of all movies')
def step_impl(context):
        movieparser = MovieInformationParser(context.response)
        first_movie_id = movieparser.get_movie_id_from_top250(0)
        assert first_movie_id == TheShawshankRedemption_ID