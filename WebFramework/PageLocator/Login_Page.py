from selenium.webdriver.common.by import By

class LoginPage(object):


    SUBMIT_BUTTON = (By.ID, "submit")

    def __init__(self, driver):
        self.driver = driver

    def return_submit_button(self):
        return self.driver.find_element_by_id("submit")

    def return_username_textfield(self):
        return self.driver.find_element_by_id("username")

    def return_password_textfield(self):
        return self.driver.find_element_by_id("password")