__author__ = 'diyu'

class BasePage(object):

    def __init__(self, driver):
        self.driver = driver

    def return_page_title(self):
        return self.driver.title

    def return_page_source(self):
        return self.driver.page_source
