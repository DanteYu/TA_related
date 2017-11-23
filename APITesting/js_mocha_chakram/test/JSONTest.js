const chakram = require('../node_modules/chakram/lib/chakram.js');
const expect = chakram.expect;
const URLs = require('../data/env.data.js');
const data = require('../data/test.data.js');

describe("Check json and json schema", function(){

  const expectedValue = data.body;

  const expectedValue_casts = data.cast;

  describe("check json", function(){

    before("Get response", function(){
      response = chakram.get(URLs.douban.URL_This_is_US);
    });

    // it("should check the content of JSON ", function () {
    //     expect(response).to.have.json(expectedValue);
    //     return chakram.wait();
    // });

    it("should be a TV show", function(){
      expect(response).to.have.json('subtype', 'tv');
      return chakram.wait();
    });

    it("should check sub object casts", function(){
      expect(response).to.have.json("casts", expectedValue_casts);
      return chakram.wait();
    });

    it("should check specified object is contained within the body JSON", function(){
      expect(response).to.comprise.of.json({
        "current_season": "1",
        "original_title": "This Is Us",
        "year": "2016"
      });
      return chakram.wait();
    })
  })

  describe("Check JSON Schema", function(){
    it("should check that the returned JSON object satisifies a JSON schema", function () {
      let response = chakram.get(URLs.httpbin.URL_code_get);
      let expectedSchema = {
          "type": "object",
          properties: {
              url: {
                  type: "string"
              },
              headers: {
                  type: "object"
              }
          }
      };
      expect(response).to.have.schema('headers', {"required": ["Host", "Accept"]});
      expect(response).to.have.schema(expectedSchema);
      return chakram.wait();
  });
  })
})
