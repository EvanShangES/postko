var express = require('express');
var app = express();

var port     = process.env.PORT || 8000;
var mongoose = require('mongoose');
var mongo = require('mongodb');
var cors = require('cors');
var passport = require('passport');
// var flash    = require('connect-flash');
var path        = require("path");

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
// var geocoder     = require('node-geocoder');
// var cron         = require('node-cron');

var configDB = require('./app/config/database.js');
mongoose.connect(configDB.url);

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'mrbaffo123456',
    cookie: { maxAge: 60000 * 60 },
    saveUninitialized: true,
    resave: true })); // session secret
app.use(passport.initialize());
app.use(passport.session());

// require('./app/config/passport')(passport); // pass passport for configuration
// routes ======================================================================
// require('./app/routes/api')(app, passport); // load our routes and pass in our app and fully configured passport

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);
console.log('The magic happens on port ' + port);