const chakram = require('../node_modules/chakram/lib/chakram.js');
const expect = chakram.expect;
const URLs = require('../data/env.data.js');

describe("Check compression", function(){

  it("should detect deflate compression", function () {
          this.timeout(10000);
          var deflate = chakram.get(URLs.httpbin.URL_Deflate);
          return expect(deflate).to.be.encoded.with.deflate;
      });

  it("should detect gzip compression", function () {
          this.timeout(10000);
            return chakram.get(URLs.httpbin.URL_Gzip).then(function(response){
              expect(response).to.be.encoded.with.gzip;
            });
        });

  it("should support shorter language chains", function () {
        this.timeout(10000);
            var deflate = chakram.get(URLs.httpbin.URL_Deflate);
            return chakram.waitFor([
              expect(deflate).not.to.be.gzip,
              expect(deflate).to.be.deflate
            ])
        });
})
