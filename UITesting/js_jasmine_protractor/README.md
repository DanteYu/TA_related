#NCP Protractor Test Automation


##Project Structure
1. pages - contains all locators and basic page operation methods
2. pagehandler - contains business logic methods for every pages
3. navigator - contains methods which can navigate to certain page with business logic
4. specs - protractor specification
5. data - test data
6. config - protractor configuration

##Setup

`npm run setup` will run the install/setup script as specified in the _package.json_ file.

##Running tests

`npm test` or `npm run test` 

##Notes
Runs in Chrome. Must have all other instances of Chrome browser closed before starting tests.

##Jenkins configure guide
1. Source Code Management
 * Git - Repositories & Branch Specifier (refs/heads/master) & Repository browser
 * Build Environment(if proxy is needed)
   * Inject environment variable to the build process
     * Properties Content
       * HTTP_PROXY=http://localhost:3128
       * HTTPS_PROXY=http://localhost:3128
 * Build
   * Execute Windows batch command
     * command
        * call npm run setup
        * call npm run test
