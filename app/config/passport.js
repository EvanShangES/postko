var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');

module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            // console.log(req.body);

            // console.log(email);
            // console.log(firstName);
            // console.log(lastName);
            // console.log(password);
            // console.log(phone);
            // asynchronous
            // User.findOne wont fire unless data is sent back

            process.nextTick(function() {
                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user) {

                        return done("That email is already taken.");
                        // return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        var newUser            = new User();
                        // set the user's local credentials
                        newUser.profile.email    = email;
                        newUser.profile.password = newUser.generateHash(password);
                        newUser.profile.firstName = req.body.firstName;
                        newUser.profile.lastName = req.body.lastName;
                        newUser.profile.phone = req.body.phone;
                        newUser.profile.wechat = req.body.wechat;

                        // save the user
                        newUser.save(function(err) {
                            // console.log(err);
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({ 'profile.email' :  email }, function(err, user) {
                // if there are any errors, return the error before anything else
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user)
                    return done('No user found.'); // req.flash is the way to set flashdata using connect-flash

                // if the user is found but the password is wrong
                if (!user.validPassword(password))
                    return done('Oops! Wrong password.'); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, user);
            });

        }));

};