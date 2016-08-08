/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	homepage: function (req, res) {
		return res.view('homepage', {
			//user: req.user
    });
	},

	protected: function (req, res) {
		return res.view('testpage');
	},
	unprotected: function (req, res) {
		return res.view('testpage');
	},

};
