# !/usr/bin/env python
# -*- coding: utf-8 -*-os
import responses
import requests
from unittest import TestCase, main
# import sys, os
# sys.path.append(os.path.abspath('..'))
# print(sys.path)

#不需要使用@responses.activate
class MockResponsesWithContextManager(TestCase):

    def test_context_manager(self):
        #使用with关键字和responses.RequestsMock()
        with responses.RequestsMock() as resp:
            #同样使用add()方法定义
            resp.add(resp.GET,
                     'https://nbaplayerprofile.com/api/1/kawhi_leonard',
                     json={
                         'team': 'San Antonio Spurs',
                         'personal': {
                             'DOB': '6/29/1991',
                             'Ht': '67',
                             'Wt': '230'
                         }},
                     status=200,
                     content_type='application/json'
                     )

            expected_Kawhi_profile = {
                         'team' : 'San Antonio Spurs',
                          'personal' : {
                              'DOB' : '6/29/1991',
                              'Ht' : '67',
                              'Wt' : '230'
                          }
                      }

            # 发送了两次请求
            resps = requests.get('https://nbaplayerprofile.com/api/1/kawhi_leonard')
            resps1 = requests.get('https://nbaplayerprofile.com/api/1/kawhi_leonard')

            # 对获得的response进行验证
            self.assertEqual(resps.status_code, 200)
            self.assertEqual(resps1.json(), expected_Kawhi_profile)

            # responses.calls会记录所有的请求响应情况，可以利用起来进行验证
            self.assertEqual(len(resp.calls), 2)
            self.assertEqual(resp.calls[0].request.url, 'https://nbaplayerprofile.com/api/1/kawhi_leonard')
            self.assertEqual(resp.calls[1].response.text,
                             '{"team": "San Antonio Spurs", "personal": {"DOB": "6/29/1991", "Ht": "67", "Wt": "230"}}')

    def test_requests_fired(self):
        # 设置assert_all_requests_are_fired来避免AssertionError: Not all requests have been executed`
        with responses.RequestsMock(assert_all_requests_are_fired=False) as resp:
            # 同样使用add()方法定义
            resp.add(resp.GET,
                     'https://nbaplayerprofile.com/api/1/kawhi_leonard',
                     json={
                         'team': 'San Antonio Spurs',
                         'personal': {
                             'DOB': '6/29/1991',
                             'Ht': '67',
                             'Wt': '230'
                         }},
                     status=200,
                     content_type='application/json'
                     )

    def test_callback(self):
        #定义response_callback方法，接受一个responses为参数，返回一个responses
        #这个例子中我们给responses加了一个属性
        def response_callback(resp):
            resp.result = 'pass'
            return resp

        with responses.RequestsMock(response_callback=response_callback) as stub:
            stub.add(responses.GET,
                               "https://nbaplayerprofile.com/api/1/foo",
                                body="I am body"
                               )
            resps = requests.get("https://nbaplayerprofile.com/api/1/foo", "I am request")
            self.assertEqual(resps.text, "I am body")
            #验证callback方法写入的新属性
            self.assertEqual(resps.result, "pass")

if __name__ =='__main__':
    main()