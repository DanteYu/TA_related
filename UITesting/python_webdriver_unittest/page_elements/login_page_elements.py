__author__ = 'diyu'

from page_locators.login_page_locators import LoginPageLocators

class LoginPageElement(object):

    def __init__(self, driver):
        self.driver = driver

    def return_submit_button(self):
        return self.driver.find_element(*LoginPageLocators.SUBMIT_BUTTON)

    def return_username_textfield(self):
        return self.driver.find_element(*LoginPageLocators.USERNAME_BUTTON)

    def return_password_textfield(self):
        return self.driver.find_element(*LoginPageLocators.PASSWORD_TEXTFIELD)