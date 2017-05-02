# -*- coding:utf-8 -*-

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from pages import page_generator
import unittest
import os

class TestCaseBase(unittest.TestCase):

    def setUp(self):
        super(TestCaseBase, self).__init__(methodName="runTest")
        #download PDF file automatically
        fp = webdriver.FirefoxProfile()
        fp.set_preference("browser.download.folderList",2)
        fp.set_preference("browser.download.manager.showWhenStarting",False)
        fp.set_preference("browser.download.dir", os.getcwd())
        fp.set_preference("browser.helperApps.neverAsk.saveToDisk", "application/octet-stream")
        fp.set_preference("pdfjs.disabled", True)
        fp.set_preference("plugin.scan.plid.all", False)
        fp.set_preference("plugin.scan.Acrobat", "99.0")
        self.driver =webdriver.Firefox(firefox_profile=fp)
        self.driver.implicitly_wait(30)
        self.verificationErrors = []
        function_pages_generator = page_generator.FunctionPageGenertor(self.driver)
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
