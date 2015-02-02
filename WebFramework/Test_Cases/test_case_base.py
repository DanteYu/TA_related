# -*- coding:utf-8 -*-

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from Page_Function import Function_Page_Generator
import unittest

class TestCaseBase(unittest.TestCase):
    def setUp(self):
        self.driver =webdriver.Firefox()
        self.driver.implicitly_wait(30)
        self.verificationErrors = []
        function_pages_generator = Function_Page_Generator.FunctionPageGenertor(self.driver)
        self.login_page_function = function_pages_generator.login_page_generator()

    def open_browser_and_navigate(self, url):
        driver = self.driver
        driver.get(url)

    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException, e: return False
        return True

    def is_alert_present(self):
        try: self.driver.switch_to.alert()
        except NoAlertPresentException, e : return False
        return True

    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to.alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert.text
        finally:self.accept_next_alert = True

    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)