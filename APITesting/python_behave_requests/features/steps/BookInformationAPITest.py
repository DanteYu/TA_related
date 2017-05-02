from behave import *
from Util.JSONParsers.BookResponseParser import BookResponseParser
from Util import RequestService
from TestData.BookData.BookID import TheSWTesting_ID
from TestData.BookData.BookPubDate import TheSoftwareTesting_Pubdate

@given('I have the The software testing ID')
def step_impl(context):
    assert TheSWTesting_ID is not False

@when('I send request to Douban book API and get response')
def step_impl(context):
    request_url = RequestService.get_book_api_with_bookid(TheSWTesting_ID)
    context.response = RequestService._get_GET_response(request_url)

@then('I can verify the publish date of Software Testing which id is 1801050 should be 2006-4')
def step_impl(context):
        bookparser = BookResponseParser(context.response)
        book_id = bookparser.get_book_id()
        assert book_id == TheSWTesting_ID
        book_pubdate = bookparser.get_book_pubdate()
        assert book_pubdate == TheSoftwareTesting_Pubdate