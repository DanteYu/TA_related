#被测试的对象： 相册，图片上传功能
#三种测试执行方式： 1. 手工执行测试用例；2，界面自动化测试；3，分层测试

#分层测试sample

#应用服务器三个核心接口，Moment/pic_add  Moment/pic_update  Moment/get_feed

#Moment/pic_add 增加图片
#URL Https://dante.test.test:12345
#JSON support
#HTTP request POST
#need login
#parameter: 
#Id required Int 为了区分每张图片的不同，每张图片都需要给一个uuid
#description optional string 每张图片可以附带的描述
#Lng,lat optional, Float, 当前定位的经纬度

#第一层 单一接口的实现 ------- 接口文档

#在测试单个接口的同时，和应用业务做强绑定，从而将用户平时会使用到得业务功能逻辑一并进行自动化测试
#返回的接口使用json解析  该层和每个单个的接口做强绑定

def picture_add(self, id, description, lng, lat):
	fields = { 'id' : str(id), 'description' : str(description), 'lng' : str(lng), 'lat' : str(lat) }
	return self.urlopen('http://dante.test.test:12345/Moment/pic_add', fields)

#第二层 多个接口的组合封装实现 -------- 应用功能列表
#将第一层单独的接口中，关联较强或用户经常用到的接口组合封装成单独的方法。与功能做强绑定，一个功能可能是有一个或是多个接口组成

def picture_upload(self, description, lng, lat):
	picture_uuid = uuid.uuid1()
	group_uuid = uuid.uuid2()
	picture_add(picture_uuid, description, lng, lat)
	picure_update(group_id)



#第三层 多个方法的组合封装实现 -------- 应用业务列表
#第三层完全与业务强绑定。一个业务可能是由一个或者多个功能组成的
#第三层实现后，更多的注意力要放在测试设计上，设计各种类型的参数

class TestCaseOne(unittest.TestCase):
	def setUp(self):
		self.login = True

	def tearDown(self):
		self.login = None

	def test_upload_pic(self):
		picture_upload(description, lbg, lat)
