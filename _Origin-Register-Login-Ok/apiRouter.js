// Imports
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');

// Router
exports.router = (function() {
	var apiRouter = express.Router();

	// Users Routes
	apiRouter.route('/users/register/').post(usersCtrl.register);
	apiRouter.route('/users/login/').post(usersCtrl.login);

	return apiRouter;
})();
