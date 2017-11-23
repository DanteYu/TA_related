const chakram = require('../node_modules/chakram/lib/chakram.js');
const expect = chakram.expect;
const URLs = require('../data/env.data.js');

describe("Check status code", function(){

  it("should allow checking of the response's status code", function () {
      return chakram.get(URLs.douban.URL_Wolf_Warrior).then(function(response){
        return expect(response).to.have.status(200);
      });
  });

  it("should assert return status code", function() {
      var exists = chakram.get(URLs.httpbin.URL_code_200);
      var missing = chakram.get(URLs.httpbin.URL_code_404);
      return chakram.all([
          expect(exists).to.have.status(200),
          expect(missing).to.have.status(404)
      ]);
  });

})
