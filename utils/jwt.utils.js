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
	},

	parseAuthorization: function(authorization) {
		return (authorization != null) ? authorization.replace('Bearer ', '') : null;
	},

	getUserId: function(authorization) {
		var userId = -1;
		/* On précise "module.exports..." pour dire qu'on se trouve tjrs dans le même module" */
		var token = module.exports.parseAuthorization(authorization);
		if (token != null) {
			try {
				var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
				if (jwtToken != null)
					userId = jwtToken.userId;
			} catch (err) {}
		}
		return userId;	
	}
}