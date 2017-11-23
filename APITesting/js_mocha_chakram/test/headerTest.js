const chakram = require('../node_modules/chakram/lib/chakram.js');
const expect = chakram.expect;
const URLs = require('../data/env.data.js');

describe("Check Header", function(){

  it("should allow checking content-type of HTTP headers", function () {
      var response = chakram.get(URLs.douban.URL_Wolf_Warrior);
      expect(response).to.have.header('content-type');
      expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
      expect(response).to.have.header('content-type', /json/);
      expect(response).to.have.header('content-type', function(contentType) {
          expect(contentType).to.equal('application/json; charset=utf-8');
      });
      return chakram.wait();
  });

  it("should allow checking X-DAE-App of HTTP headers", function () {
      let response = chakram.get(URLs.douban.URL_Wolf_Warrior);
      expect(response).to.have.header('X-DAE-App');
      expect(response).to.have.header('X-DAE-App', 'movie');
      expect(response).to.have.header('X-DAE-App', /^\w+$/);
      expect(response).to.have.header('X-DAE-App', function(compression) {
          expect(compression).to.equal('movie');
      });
      return chakram.wait();
  });

})
