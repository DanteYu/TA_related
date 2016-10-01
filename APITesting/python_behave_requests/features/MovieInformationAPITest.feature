Feature: Douban API to get movie information
  Scenario: Verify Matt Damon should be one of actors of The Bourne Identity
     Given I have the The BourneIdentity ID
      When I send request to Douban API
      Then I can verify Matt Damon is one of the actors
