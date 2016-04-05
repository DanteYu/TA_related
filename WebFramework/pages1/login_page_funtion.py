from page_elements.login_page_elements import LoginPageElement
from pages.base_page import BasePage

class LoginPageFunction(BasePage):

    def __init__(self, driver):
        super(LoginPageFunction, self).__init__(driver)
        self.driver = driver
        self.loginpage = LoginPageElement(self.driver)

    def enter_username_textfield(self, username = "username"):
        self.loginpage.return_username_textfield().clear()
        self.loginpage.return_username_textfield().send_keys(username)

    def enter_password_textfield(self, password = "password"):
        self.loginpage.return_password_textfield().clear()
        self.loginpage.return_password_textfield().send_keys(password)

    def enter_login_account(self, username = "username", password = "password"):
        self.enter_username_textfield(username)
        self.enter_password_textfield(password)

    def click_submit_button(self):
        submit_button = self.loginpage.return_submit_button()
        submit_button.click()

    def login(self, username="username", password="password"):
        self.enter_username_textfield(username)
        self.enter_password_textfield(password)
        self.click_submit_button()

    def is_title_matches(self):
        assert "Login" in self.return_page_title()