# sails-auth-crowd-sampleapp

a [Sails](http://sailsjs.org) application

Demonstrating [sails-auth](https://github.com/langateam/sails-auth) using
[passport-atlassian-crowd2](https://bitbucket.org/celix/passport-atlassian-crowd2).

## Introduction

This sample application demonstrates/tests using sails-auth and
passport-atlassian-crowd2 together.

Let me know of any issues.

## Configuration and Usage

1. **[DEVELOPMENT ONLY]** I have pull requests in for both sails-auth and
   passport-atlassian-crowd2 to get them to talk together.
   In the meantime, I am working of local development as follows:
  - `npm link sails-auth`
  - `npm link passport-atlassian-crowd2`
1. Review the configuration for a Crowd authentication strategy in
   `config/passport.js`.
1. Configure an appropriate Crowd Application (using the Crowd webapp - outside
   the scope of this sampleapp).
1. Enter the Crowd Application specific configuration in `config/local.js` e.g.
   ```
   module.exports = {

   passport: {
      'atlassian-crowd': {
         options: {
            crowdServer: 'https://somewhere.com/crowd/',
            crowdApplication: 'appname',
            crowdApplicationPassword: "XXX"
         }
        }
      }
   }
   ```
1. Start the app and test (`sails lift`).
