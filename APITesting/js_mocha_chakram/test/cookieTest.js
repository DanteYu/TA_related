const chakram = require('../node_modules/chakram/lib/chakram.js');
const expect = chakram.expect;
const URLs = require('../data/env.data.js');

describe("Check cookie", function(){

  it("should allow checking of HTTP cookies", function () {
      let response = chakram.get(URLs.httpbin.URL_setup_cookie);
      expect(response).to.have.cookie('chakram');
      expect(response).to.have.cookie('chakram', 'testval');
      expect(response).to.have.cookie('chakram', /val/);
      return chakram.wait();
  });

  it("should see the cookie from douban", function(){
    return chakram.get(URLs.douban.URL_Wolf_Warrior).then(function(response){
      expect(response).to.have.cookie('bid');
      expect(response).to.have.cookie('bid', /.{1,11}$/);
    });
  })

})
