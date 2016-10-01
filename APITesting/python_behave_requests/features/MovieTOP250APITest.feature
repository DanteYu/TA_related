Feature: Douban Top250 API to get movie information
  Scenario: Verify TheShawshankRedemption should be #1 movie of top20 movies
     Given I have the The TheShawshankRedemption ID
      When I send request to Douban TOP250 API
      Then I can verify The Shawshank Redemption is #1 of all movies
