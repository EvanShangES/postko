var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

// var crypto = require("crypto");
// var jwt = require("jsonwebtoken");

var userSchema = new Schema({
    profile: {
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: false
        },
        wechat:{
            type: String,
            required: false
        }
    }
});

// userSchema.pre('save', function(next){
//     var user = this;
//     bcrypt.hash(user.password, null, null, function(err, hash){
//         if (err) return next(err);
//         user.password = hash;
//         next();
//     });
// });
//

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.profile.password);
};

module.exports = mongoose.model('User', userSchema);

// userSchema.methods.setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
// };
//
// userSchema.methods.validPassword = function(password) {
//     var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
//     return this.hash === hash;
// };
//
// userSchema.methods.generateJwt = function() {
//     var expiry = new Date();
//     expiry.setDate(expiry.getDate() + 7);
//
//     return jwt.sign({
//         _id: this._id,
//         email: this.email,
//         first_name: this.first_name,
//         last_name: this.last_name,
//         phone_number: this.phone_number,
//         exp: parseInt(expiry.getTime() / 1000)
//     }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
// };
//
// mongoose.model('User', userSchema);