from Page_Locator.Login_Page import LoginPage

class LoginPageFunction(LoginPage):

    def login(self, username="username", password="password"):
        self.return_username_textfield().clear()
        self.return_username_textfield().send_keys(username)
        self.return_password_textfield().clear()
        self.return_password_textfield().send_keys(password)
        submit_button = self.return_submit_button()
        submit_button.click()
