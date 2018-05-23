var User = require("../models/users");

module.exports = function (app, passport){

    // app.post('/api/admin/serviceBox', function(req, res){
    //     var serviceBox = new ServiceBox(req.body);
    //     console.log(serviceBox);
    //
    //     serviceBox.save(function(err){
    //         if(err){
    //             res.send(err);
    //         }else{
    //             res.send('success');
    //         }
    //     })
    // });
    //
    // app.get('/api/users/me', function(req, res){
    //     // console.log(req.user);
    //     User.findOne({"_id": Object(req.user._id)}, function(err,user){
    //         if(user){
    //             // console.log(email);
    //             res.send(user);
    //         }else{
    //             // console.log('no email');
    //             res.send("no user found");
    //         }
    //     })
    // });
    //
    // app.put('/api/users/me/profile/:id', function(req, res){
    //     var id = req.params.id;
    //
    //     var query = {"_id": Object(id)};
    //     var newvalues = { $set: {"profile.email": req.body.email, "profile.firstName" : req.body.firstName, "profile.lastName" : req.body.lastName }, "profile.phone" : req.body.phone};
    //
    //     User.updateOne(query, newvalues, function(err, res){
    //         console.log(err);
    //         console.log(res);
    //     });
    // });
    //
    // app.post('/api/users/me/payment', function(req, res){
    //     console.log(req.body);
    //
    //     stripe.tokens.create({
    //         card: {
    //             "number": '4242424242424242',
    //             "exp_month": 12,
    //             "exp_year": 2019,
    //             "cvc": '123'
    //         }
    //     }, function(err, token) {
    //         console.log(token);
    //         // asynchronously called
    //
    //         stripe.customers.create({
    //             source: token.id
    //             // description: 'Customer for addison.davis@example.com',
    //             // source: {
    //             //     "object": "card",
    //             //     "number": req.body.cardNumber,
    //             //     "exp_month": req.body.expMonth,
    //             //     "exp_year": req.body.expYear,
    //             //     "cvc": req.body.cvc,
    //             //     "name": req.body.fullName
    //             // } // obtained with Stripe.js
    //         }, function(err, customer) {
    //             console.log(err);
    //             console.log(customer);
    //             var query = {"_id": Object(req.user._id)};
    //             var newvalues = { $set: {"stripeInfo": customer }};
    //
    //             User.updateOne(query, newvalues, function(err, res){
    //                 console.log(err);
    //                 console.log(res);
    //             });
    //             // asynchronously called
    //         });
    //     });
    //
    // });
    //
    // app.post('/api/users/me/cleanCloud', function(req, res){
    //     console.log(req.body);
    //
    //     var query = {"_id": Object(req.user._id)};
    //     var newvalues = { $set: {"cleanCloudInfo.id": req.body.cleanCloudId }};
    //
    //     User.updateOne(query, newvalues, function(err, res){
    //         console.log(err);
    //         console.log(res);
    //     });
    // });
    //
    // app.get('/api/loggedIn', function(req, res){
    //     if(req.user){
    //         res.send(true);
    //     }else{
    //         res.send(false);
    //     }
    // });
    //
    // app.get('/api/logout', function(req, res){
    //     req.logout();
    //     res.send(false);
    // });
    //
    // app.get('/api/email/:email', function(req, res){
    //     console.log(req.params);
    //
    //     User.findOne({'local.email': req.params.email}, function(err, email){
    //         if(email){
    //             // console.log(email);
    //             res.send(true);
    //         }else{
    //             // console.log('no email');
    //             res.send(false);
    //         }
    //     })
    // });
    //
    // app.get('/api/postalCheck/:postal', function(req, res){
    //
    //     ServiceBox.findOne({'areaCode': req.params.postal}, function(err, box){
    //         console.log(box);
    //         if(box){
    //             // console.log(email);
    //             res.send(box);
    //         }else{
    //             // console.log('no email');
    //             res.send(err);
    //         }
    //     })
    // });
    //
    // app.get('/api/addressCheck/:address/:postal', function(req, res){
    //     var data = {
    //         address: req.params.address,
    //         country: 'Canada',
    //         zipcode: req.params.postal
    //     };
    //
    //     addressConfrim(data, function (response){
    //         res.send(response);
    //     })
    // });
    //
    // app.put('/api/address/:id/:type', function(req, res){
    //     var id = req.params.id;
    //     var type = req.params.type;
    //     console.log(type);
    //
    //     console.log(req.body);
    //
    //     switch (type){
    //         case 'home':
    //             User.updateOne( {"_id": Object(id)}, {$set: {'addressInfo.home': req.body}}, function(err, res){
    //                 console.log(err);
    //                 console.log(res);
    //             });
    //             break;
    //         case 'office':
    //             User.updateOne( {"_id": Object(id)}, {$set: {'addressInfo.office': req.body}}, function(err, res){
    //                 console.log(err);
    //                 console.log(res);
    //             });
    //             break;
    //         case 'other':
    //             User.updateOne( {"_id": Object(id)}, {$set: {'addressInfo.other': req.body}}, function(err, res){
    //                 console.log(err);
    //                 console.log(res);
    //             });
    //             break;
    //     }
    //
    //     res.send(true);
    //
    //
    //
    //
    //     // User.findOne({"_id": Object(req.params.id)}, function(err,user){
    //     //     if(user){
    //     //         user = _.extend(user.addressInfo.type, req.body);
    //     //         // console.log(email);
    //     //         user.save(function(err, user){
    //     //            if(err){
    //     //                res.send(err);
    //     //            }
    //     //            res.send(user);
    //     //         });
    //     //
    //     //         res.send(user);
    //     //     }else{
    //     //         // console.log('no email');
    //     //         res.send("no user found");
    //     //     }
    //     // })
    //
    // });

    app.post('/api/login', passport.authenticate('local-login'), function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        // res.redirect('/users/' + req.user.username);

        // app.post('/api/login', function(req, res, next){
        //     passport.authenticate('local-login', function(err, user, info) {
        //         console.log(err);
        //         console.log(user);
        //         console.log(info);
        //         if (err) {
        //             res.send(err);
        //         }
        //
        //         if (!user) {
        //             return res.send({
        //                 status: 401,
        //                 error: err,
        //                 info: info
        //             });
        //         }
        //
        //         res.send({
        //             status: 200,
        //             userId: user._id,
        //             loggedIn: true
        //         });
        //         // if (!user){ res.send({userId: user._id, loggedIn: true})}
        //         // if (!user) { return res.redirect('/login'); }
        //         // req.logIn(user, function(err) {
        //         //     if (err) { return next(err); }
        //         //     return res.send({auth: true});
        //         // });
        //     })(req, res, next);
        // });

        res.send({
            status: 200,
            user: req.user,
            auth: true
        })
    });

    //checks to see if email already exists in database;

    app.post('/api/register', function(req, res, next){
        //     passport.authenticate('local-login', function (err, user, info) {
        //         if (err) {
        //             console.log(err);
        //
        //             return res.send({
        //                 status: 402,
        //                 error: err,
        //                 info: info
        //             });
        //
        //         }
        //
        //         if (!user) {
        //
        //             return res.send({
        //                 status: 401,
        //                 error: err,
        //                 info: info
        //             });
        //         }
        //
        //         res.send({
        //             status: 200,
        //             user: user,
        //             info: info
        //         });
        //
        //     })(req, res, next);
        // });
        passport.authenticate('local-signup', function (err, user, info) {
            if (err) {
                console.log(err);
                return res.send({
                    status: 402,
                    error: err,
                    info: info
                });
            }

            if (!user) {
                return res.send({
                    status: 401,
                    error: err,
                    info: info
                });
            }

            res.send({
                status: 200,
                user: user,
                info: info
            });

        })(req, res, next);

    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    //
    // // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('*');
}



// var Product = mongoose.model('Product', {
//     name: String
// });
//
// var product = new Product({
//     name: "something"
// });
//
//
// product.save(function(err){
//     if (err){
//         console.log('error')
//     }else {
//         console.log('success');
//     }
// });