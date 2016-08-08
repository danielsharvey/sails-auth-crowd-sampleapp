/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * Authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

 module.exports.passport = {
	 'atlassian-crowd': {
		 name: 'Crowd',
		 protocol: 'delegated',
		 strategy: require('passport-atlassian-crowd2').Strategy,
		 options: {
			 crowdServer:	'see config/local.js',
			 crowdApplication: 'see config/local.js',
			 crowdApplicationPassword: 'see config/local.js',
			 retrieveGroupMemberships: true,
			 storeGroupMembershipsInSession: 'crowdGroups',
			 usernameField: 'identifier',
			 passwordField: 'password'
		 }
	 }
 };
