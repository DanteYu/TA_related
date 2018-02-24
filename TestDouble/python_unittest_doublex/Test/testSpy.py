#!/usr/bin/env python
# -*- coding: utf-8 -*-

from unittest import TestCase, main
from Service import dataService as ds
from Service import profileService as pos
from Service import playerService as pls
from doublex import Spy, called, ProxySpy, assert_that
from Service import bodyService as bs
from Service import salaryService as ss
from doublex import ANY_ARG, when, is_, never
from hamcrest import anything

class TestSpy(TestCase):

    def test_spy(self):

        playername = "Kawhi Leonard"
        year = 2017
        salary = "20m"


        #使用with关键字和Spy()来创建free spy
        #设置和salaryService一样的方法
        with Spy() as free_ss_spy:
            free_ss_spy.set_salary(salary).returns("20m")
        #通过SUT调用spy对象的方法
        pls.playerService(playername, 2017, ds.dataService(playername), pos.profileService(playername), bs.bodyService(), free_ss_spy).set_new_salary(salary)
        #验证spy_ss.set_salary方法被调用过
        assert_that(free_ss_spy.set_salary, called())

        #使用Spy(类对象)来创建spy
        spy_ss = Spy(ss.salaryService)
        #通过SUT调用spy对象的方法
        pls.playerService(playername, 2017, ds.dataService(playername), pos.profileService(playername), bs.bodyService(), spy_ss).set_new_salary(salary)
        #验证spy_ss.set_salary方法被调用过
        assert_that(spy_ss.set_salary, called())

        #Spy是Stub的扩展，所以除了记录方法被调用的情况，也可以设定返回值
        with Spy(bs.bodyService) as spy_bs_as_stub:
            spy_bs_as_stub.get_height().returns("188cm")
            spy_bs_as_stub.get_weight().returns("110kg")
            spy_bs_as_stub.illnessHistory(2017).returns("Year 2017 no injury")
            spy_bs_as_stub.illnessHistory(2018).returns("Year 2017 has ankle injury")
        #直接调用spy对象方法
        spy_bs_as_stub.get_height()
        spy_bs_as_stub.get_weight()
        spy_bs_as_stub.illnessHistory(2017)
        spy_bs_as_stub.illnessHistory(2018)
        #可以验证spy对象方法已经被调用及其参数接受情况
        assert_that(spy_bs_as_stub.get_height, called())
        assert_that(spy_bs_as_stub.get_weight, called())
        assert_that(spy_bs_as_stub.illnessHistory, called().times(2))
        #使用anything()去任意匹配
        assert_that(spy_bs_as_stub.illnessHistory, called().with_args(anything()))
        #通过SUT调用spy对象的方法
        player_service_spy_2016 = pls.playerService(playername, 2017, ds.dataService(playername), pos.profileService(playername), spy_bs_as_stub, ss.salaryService())
        player_service_spy_2016.get_physical_feature(2017)
        #验证spy对象方法再一次被方法(SUT)调用 called验证调用与否，times验证调用次数
        assert_that(spy_bs_as_stub.get_height, called().times(2))
        assert_that(spy_bs_as_stub.get_weight, called().times(2))
        assert_that(spy_bs_as_stub.illnessHistory, called().times(3))

        #传递实例给ProxySpy()
        spy_pos = ProxySpy(pos.profileService(playername))
        #通过SUT调用spy对象的方法
        pls.playerService(playername, 2016, ds.dataService(playername), spy_pos, bs.bodyService(), ss.salaryService()).get_player_info()
        #验证spy对象方法被调用过
        assert_that(spy_pos.get_player_team, called())

    def test_inline_spy(self):
        #Spy()创建free spy
        spy_inline_free = Spy()
        #使用when()设置方法参数和返回值
        when(spy_inline_free).foo().returns("I am inline foo")
        #调用方法
        spy_inline_free.foo()
        #验证调用情况
        assert_that(spy_inline_free.foo(), is_("I am inline foo"))
        assert_that(spy_inline_free.foo, called())

        #Spy()创建spy
        spy_inline = Spy(ss.salaryService)
        #使用when()设置方法参数
        when(spy_inline).set_salary(ANY_ARG)
        #调用方法
        spy_inline.set_salary("12m")
        #验证调用情况
        assert_that(spy_inline.set_salary, called().with_args("12m"))


    def test_calls_spy(self):
        salary = "20m"
        year = 2017
        #创建spy
        with Spy(ss.salaryService) as ss_spy:
            ss_spy.set_salary(salary)
        #调用方法
        ss_spy.set_salary(salary)
        ss_spy.set_salary("22m")
        #使用calls取得调用传入的参数
        #多次调用可以多次取得，calls是一个数组
        assert_that(ss_spy.set_salary.calls[0].args, is_((salary, )))
        assert_that(ss_spy.set_salary.calls[1].args, is_(("22m", )))

        #创建spy
        with Spy(bs.bodyService) as bs_spy:
            bs_spy.get_height().returns("190cm")
            bs_spy.illnessHistory(year).returns("no injury")
        #调用方法
        bs_spy.get_height()
        bs_spy.illnessHistory(year)
        #使用calls取得调用传入的参数和返回值
        assert_that(bs_spy.get_height.calls[0].retval, is_("190cm"))
        assert_that(bs_spy.illnessHistory.calls[0].args, is_((year, )))
        assert_that(bs_spy.illnessHistory.calls[0].retval, is_("no injury"))


if __name__ == '__main__':
    main()
