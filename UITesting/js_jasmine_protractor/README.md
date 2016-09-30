#NCP Protractor Test Automation


##Project Structure

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
