from page_locator.login_page import LoginPage

class LoginPageFunction(LoginPage):

    def enter_username_textfield(self, username = "username"):
        self.return_username_textfield().clear()
        self.return_username_textfield().send_keys(username)

    def enter_password_textfield(self, password = "password"):
        self.return_password_textfield().clear()
        self.return_password_textfield().send_keys(password)

    def enter_login_account(self, username = "username", password = "password"):
        self.enter_username_textfield(username)
        self.enter_password_textfield(password)

    def click_submit_button(self):
        submit_button = self.driver.find_element(LoginPage.SUBMIT_BUTTON)
        submit_button.click()

    def login(self, username="username", password="password"):
        self.enter_username_textfield(username)
        self.enter_password_textfield(password)
        self.click_submit_button()


