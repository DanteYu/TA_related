class BookResponseParser(object):

    def __init__(self, response):
        self.response = response

    def get_book_id(self):
        print "The book id is: " + str(self.response['id'])
        return self.response['id']

    def get_book_pubdate(self):
        print "The publish date of this book is: " + str(self.response['pubdate'])
        return self.response['pubdate']





