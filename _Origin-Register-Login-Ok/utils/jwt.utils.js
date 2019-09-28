// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '12ToureJuinAdama2018ImranRamadan';

// Exported functions
module.exports = {
	generateTokenForUser: function(userData) {
		return jwt.sign({
		 	userId: userData.id,
		 	isAdmin: userData.isAdmin
		},
		JWT_SIGN_SECRET,
		{
			expiresIn: '1h' /* Le token expire au bout d'1h */
		})
	}
}