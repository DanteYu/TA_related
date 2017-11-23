const chakram = require('../node_modules/chakram/lib/chakram.js');
const expect = chakram.expect;
const URLs = require('../data/env.data.js');

describe("Check Wolf Warrir 2", function(){

  this.retries(3);

  before(function(){

    chakram.addProperty("WJisDirector", function (respObj) {
        let hostMatches = /1000525/.test(respObj.body.directors[0].id);
        this.assert(hostMatches,
            'expected director of this movie is: '+respObj.body.directors[0].id,
            'expected director of this movie is: '+respObj.body.directors[0].id
          );
    });

    chakram.addMethod("haveHighAverageRating", function (respObj, average) {
      let ratingRangeResult = respObj.body.rating.average >= average;
      this.assert(ratingRangeResult,
          'expected average rating of this movie is: '+ respObj.body.rating.average
        );
     });

     chakram.addMethod("BeOnYearAt", function (respObj, year) {
          expect(respObj).to.have.json("year", year);
      });

  });

  it("should be a movie directed by WuJing", function () {
    let response = chakram.get(URLs.douban.URL_Wolf_Warrior);
    return chakram.waitFor([
      expect(response).to.be.WJisDirector,
      expect(response).to.be.BeOnYearAt("2017"),
      expect(response).to.have.haveHighAverageRating(7)
    ])
  });

})
