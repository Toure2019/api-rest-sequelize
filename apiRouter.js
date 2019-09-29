// Imports
var express 	 = require('express');
var usersCtrl 	 = require('./routes/usersCtrl');
var messagesCtrl = require('./routes/messagesCtrl');
 
// Router
exports.router = (function() {
	var apiRouter = express.Router();

	// Users Routes
	apiRouter.route('/users/register/').post(usersCtrl.register);
	apiRouter.route('/users/login/').post(usersCtrl.login);
	apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
	apiRouter.route('/users/me').put(usersCtrl.updateUserProfile);

	// Messages Routes
	apiRouter.route('/messages/new/').post(messagesCtrl.createMessage);
	apiRouter.route('/messages/').get(messagesCtrl.listMessages);
	
	return apiRouter;
})();
