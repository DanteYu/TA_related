#!/usr/bin/env python
# -*- coding: utf-8 -*-

from unittest import TestCase, main
from Service import dataService as ds
from Service import profileService as pos
from Service import playerService as pls
from Service import bodyService as bs
from Service import salaryService as ss
from doublex import Stub, ANY_ARG, assert_that, is_, when
from doublex import method_raising, method_returning
class TestStub(TestCase):

    def test_stub(self):

        playername = "Kawhi Leonard"

        #需使用with关键字来创建Stub
        #Stub接受dataService类对象作为参数，并且实现dataService类对象全部的方法
        #根据dataService的实现，get_assist()等方法不用接受参数，这里的参数必须完全匹配
        #get_match_number()可以根据参数的不同返回不同的值
        #returns()方法定义返回值
        #不能定义非dataService的属性
        with Stub(ds.dataService) as stub:
            stub.get_assist().returns("6")
            stub.get_score().returns("30")
            stub.get_rebound().returns("10")
            stub.get_match_number(2015).returns(playername + " plays 80 games at the year of 2015")
            stub.get_match_number(2016).returns(playername + " plays 81 games at the year of 2016")

        #使用来自于hamcrest的assert_that()和is_()做stub的验证
        assert_that(stub.get_assist(), is_("6"))
        assert_that(stub.get_score(), is_("30"))
        assert_that(stub.get_rebound(), is_("10"))
        assert_that(stub.get_match_number(2015), is_("Kawhi Leonard plays 80 games at the year of 2015"))
        assert_that(stub.get_match_number(2016), is_("Kawhi Leonard plays 81 games at the year of 2016"))

        #使用stub代替dataService，来对待测对象playerService进行测试验证
        player_service_stub_2016 = pls.playerService(playername, 2016, stub, pos.profileService(playername), bs.bodyService(), ss.salaryService())
        assert_that(
            player_service_stub_2016.get_player_info().split('\n')[0],
            is_("Kawhi Leonard - san antonio spurs"))
        assert_that(
            player_service_stub_2016.get_player_info().split('\n')[-1],
            is_("Kawhi Leonard plays 81 games at the year of 2016"))

        player_service_stub_2015 = pls.playerService(playername, 2015, stub, pos.profileService(playername), bs.bodyService(), ss.salaryService())
        assert_that(
            player_service_stub_2015.get_player_info().split('\n')[-1],
            is_("Kawhi Leonard plays 80 games at the year of 2015"))

        #当Stub()不带参数的时候，称之为Free Stub
        #ANY_ARG表示任意参数
        with Stub() as freestub:
            freestub.get_assist().returns("6")
            freestub.get_score().returns("30")
            freestub.get_rebound().returns("8")
            freestub.get_match_number(ANY_ARG).returns(playername + " plays 82 games")

        player_service_stub_2017 = pls.playerService(playername, 2017, freestub, pos.profileService(playername), bs.bodyService(), ss.salaryService())
        #使用freestub代替dataService，来对待测对象playerService进行测试验证
        assert_that(player_service_stub_2017.get_player_info().split('\n')[-2], is_("8"))
        assert_that(player_service_stub_2017.get_player_info().split('\n')[-1], is_("Kawhi Leonard plays 82 games"))

    def test_adhoc_stub(self):
        bodyservice = bs.bodyService()
        #method_returning()直接在实例上建立stub，并设定返回值
        bodyservice.get_height = method_returning("210cm")
        assert_that(bodyservice.get_height(), is_("210cm"))
        #method_raising()直接在实例上建立stub，并抛出异常
        bodyservice.get_weight = method_raising(Exception)
        with self.assertRaises(Exception):
            bodyservice.get_weight()

    def test_delegate_stub(self):
        def get_height():
            return "181cm"
        #创建stub
        with Stub(bs.bodyService) as stub:
            #使用delegates()来设定返回值，接受方法或是可以迭代的对象
            stub.get_height().delegates(get_height)
            stub.get_weight().delegates(["120kg", "121kg"])
        #验证返回值
        assert_that(stub.get_height(), is_("181cm"))
        assert_that(stub.get_weight(), is_("120kg"))
        assert_that(stub.get_weight(), is_("121kg"))

    def test_observer_stub(self):
        def bar():
            print("I am attached")
        with Stub() as stub:
            stub.foo().returns("I am foo")
            stub.foo.attach(bar)
        assert_that(stub.foo(), is_("I am foo"))

    def test_inline_stub(self):
        #Stub()创建free stub
        inline_stub_free = Stub()
        #使用when()设置方法参数和返回值
        when(inline_stub_free).foo(1).returns("I am inline free stub")
        assert_that(inline_stub_free.foo(1), is_("I am inline free stub"))
        #Stub(Collaborator)创建stub
        inline_stub = Stub(bs.bodyService)
        # 使用when()设置方法参数和返回值
        when(inline_stub).get_height().returns("188cm")
        assert_that(inline_stub.get_height(), is_("188cm"))



if __name__ == '__main__':
    main()
