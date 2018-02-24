#!/usr/bin/env python
# -*- coding: utf-8 -*-

from unittest import TestCase, main
from Service import dataService as ds
from Service import profileService as pos
from Service import playerService as pls
from doublex import Mock, verify, assert_that, any_order_verify, expect_call
from Service import bodyService as bs
from Service import salaryService as ss

class TestSpy(TestCase):

    def test_spy(self):

        playername = "Kawhi Leonard"
        year = 2017
        salary = "20m"
        #使用with关键字和Mock()创建mock object
        #假设替代salaryService对象
        #定义mock需要调用的方法及其参数，此方法与被替代的salaryService中的方法相同
        with Mock() as mock:
            mock.set_salary("20m")
        #在SUT playerservice中调用这个mock
        #之前定义的mock.set_salary("20m")会被SUT调用
        player_service_mock_2017 = pls.playerService(playername, year, ds.dataService(playername), pos.profileService(playername), bs.bodyService(), mock)
        player_service_mock_2017.set_new_salary(salary)
        #verify()验证定义的mock期望是否正确被实现
        assert_that(mock, verify())

        #假设替代dataService对象
        #mock可以设置返回值
        with Mock() as mock_order:
            mock_order.get_score().returns("22")
            mock_order.get_assist().returns("3")
            mock_order.get_rebound().returns("6")
            mock_order.get_match_number(year).returns("77")
        #在SUT playerservice中调用这个mock
        player_service_mock_2017_order = pls.playerService(playername, year, mock_order, pos.profileService(playername), bs.bodyService(), ss.salaryService())
        player_service_mock_2017_order.get_player_info()
        # verify()验证定义的mock期望是否正确被实现，且方法调用顺序必须完全一致
        assert_that(mock_order, verify())

        #假设替代dataService对象，注意mock定义中期望的顺序和之前不一样，也会和执行顺序不一致
        with Mock() as mock_any_order:
            mock_any_order.get_score().returns("22")
            mock_any_order.get_rebound().returns("6")
            mock_any_order.get_match_number(year).returns("77")
            mock_any_order.get_assist().returns("3")
        #在SUT playerservice中调用这个mock
        player_service_mock_2017_any_order = pls.playerService(playername, year, mock_any_order, pos.profileService(playername),
                                                         bs.bodyService(), ss.salaryService())
        player_service_mock_2017_any_order.get_player_info()
        #any_order_verify()验证定义的mock期望是否正确被实现，且方法调用顺序不要求完全一致
        assert_that(mock_any_order, any_order_verify())

    def test_inline_mock(self):
        playername = "Kawhi Leonard"
        year = 2017
        #使用Mock()创建mock
        inline_mock = Mock()
        #使用expect_all()去设置期望值
        expect_call(inline_mock).get_score().returns("33")
        expect_call(inline_mock).get_assist().returns("6")
        expect_call(inline_mock).get_rebound().returns("7")
        expect_call(inline_mock).get_match_number(year).returns("no injury")
        #在SUT playerservice中调用这个mock
        player_service_mock_2017_order = pls.playerService(playername, year, inline_mock, pos.profileService(playername), bs.bodyService(), ss.salaryService())
        player_service_mock_2017_order.get_player_info()
        # verify()验证定义的mock期望是否正确被实现，且方法调用顺序必须完全一致
        assert_that(inline_mock, verify())


if __name__ == '__main__':
    main()
