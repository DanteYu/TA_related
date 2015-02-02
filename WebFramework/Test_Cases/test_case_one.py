from test_case_base import TestCaseBase
from Page_Function import Function_Page_Generator
import unittest

class TestCaseOne(TestCaseBase):


    def test_case_one(self):
        self.open_browser_and_navigate("www.google.com")
        self.login_page_function.login()

        
if __name__ == '__main__':
    unittest.main()


