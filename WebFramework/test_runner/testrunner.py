__author__ = 'diyu'

import  unittest
from test_suite.feature import test_case_one


from test_runner.xmlrunner import XMLTestRunner

if __name__ == '__main__':
    suite1 = unittest.makeSuite(test_case_one, 'test')
    alltests = unittest.TestSuite((suite1))
    runner = XMLTestRunner()
    result = runner.run(alltests).wasSuccessful()
    if result:
        print "Test Succeed"
    else:
        print "Test Failed"
