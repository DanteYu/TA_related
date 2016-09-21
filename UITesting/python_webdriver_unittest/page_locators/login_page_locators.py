from selenium.webdriver.common.by import By

class LoginPageLocators(object):

    SUBMIT_BUTTON = (By.ID, "submit")
    USERNAME_BUTTON = (By.ID, "username")
    PASSWORD_TEXTFIELD = (By.ID, "password")
