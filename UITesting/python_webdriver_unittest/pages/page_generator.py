from pages.Login_Page_Function import LoginPageFunction

class FunctionPageGenertor(object):

    def __init__(self, driver):
        self.driver = driver
        self.login_page_function = None

    def login_page_generator(self):
        driver = self.driver
        self.login_page_function = LoginPageFunction(driver)
        return self.login_page_function


