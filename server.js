// Imports   /* SQL : // D:\MAMP\bin\mysql\bin\mysql -u root -p  */
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

// Instantiate server
var server = express();

// Body parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());	// Pour parser les données en JSON

// Configure routes
server.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send('<h1>Bonjour sur mon serveur</h1>');
}); 

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function() {
	console.log('Serveur en écoute sur le port 8080 :)');
});