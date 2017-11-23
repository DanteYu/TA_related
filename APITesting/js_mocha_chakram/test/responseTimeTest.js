const chakram = require('../node_modules/chakram/lib/chakram.js');
const expect = chakram.expect;
const URLs = require('../data/env.data.js');

describe("Check response time", function(){

  it("should response time less than or equal to 900", function () {
      return chakram.get(URLs.douban.URL_This_is_US).then(function(response){
        expect(response).to.have.responsetime(900);
      });

})

})
