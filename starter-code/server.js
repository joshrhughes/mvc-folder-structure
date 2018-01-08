//Set up Express  (moved to routes.js)
var express = require('express');
var app = express();

//Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Set up EJS -- look at those views
app.set('views', __dirname + '/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Get Routes
let routeyTime = require('./config/routes.js'); //routeo can be named anything
app.use('/', routeyTime);

//Start server
app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});