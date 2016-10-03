import unittest
import requests
from TestData.EnvData.URLData import BASE_MOIVE_INFO_URL
from TestData.EnvData.URLData import BASE_BOOK_INFO_URL
from TestData.EnvData.URLData import TOP250_URL


def get_movie_api_with_movieid(movieid):
    return BASE_MOIVE_INFO_URL.replace("{movie_id}", str(movieid))

def get_book_api_with_bookid(bookid):
    print "The url is: " + BASE_BOOK_INFO_URL.replace("{book_id}", str(bookid))
    return BASE_BOOK_INFO_URL.replace("{book_id}", str(bookid))

def get_movie_api_top250():
    return TOP250_URL

def _get_GET_response(api_url):
    print "The request URL is: " + api_url
    with requests.session() as s:
        response = s.get(api_url)
    if response.status_code == 200:
        print "API connection is OK"
        s.close()
    return response.json()

