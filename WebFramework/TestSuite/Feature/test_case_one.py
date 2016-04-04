from TestSuite.test_case_base import TestCaseBase
import unittest
from TestData.test_data import URL

class TestCaseOne(TestCaseBase):


    def test_case_one(self):
        self.open_browser_and_navigate(URL)
        self.login_page_function.login()

        
if __name__ == '__main__':
    unittest.main()


