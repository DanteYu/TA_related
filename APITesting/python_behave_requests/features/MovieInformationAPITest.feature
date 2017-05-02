@movie
Feature: Display latest movie data in our application using Douban API
  In order to support getting the latest movie data to our application
  As an application user
  I want to get movie information from Douban API

  Scenario: Verify Matt Damon should be one of actors of The Bourne Identity
     Given I have the The BourneIdentity ID
      When I send request to Douban movie API and get response
      Then I can verify Matt Damon is one of the actors

  Scenario: Verify TheShawshankRedemption should be #1 movie of top20 movies
     Given I have the The TheShawshankRedemption ID
      When I send request to Douban TOP250 API and get response
      Then I can verify The Shawshank Redemption is #1 of all movies

