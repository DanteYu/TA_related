Feature: Display latest book data in our application using Douban API
  In order to support getting the latest book data to our application
  As an application user
  I want to get book information from Douban API

  Scenario: Verify the publish date of Software Testing which id is 1801050 is 2006-4
     Given I have the The software testing ID
      When I send request to Douban book API and get response
      Then I can verify the publish date of Software Testing which id is 1801050 should be 2006-4


