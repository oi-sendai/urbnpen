var Usered
    , _ =               require('underscore')
    , passport =        require('passport')
    , LocalStrategy =   require('passport-local').Strategy
    , TwitterStrategy = require('passport-twitter').Strategy
    , FacebookStrategy = require('passport-facebook').Strategy
    , GoogleStrategy = require('passport-google').Strategy
    , LinkedInStrategy = require('passport-linkedin').Strategy
    , check =           require('validator').check
    , userRoles =       require('../../client/js/routingConfig').userRoles;

// var users = [
//     {
//         id:         456,
//         username:   "user",
//         password:   "123",
//         role:   userRoles.user
//     },
//     {
//         id:         123,
//         username:   "happycustomer",
//         password:   "readytogo",
//         role:   userRoles.user
//     },
//     // {
//     //     id:         2,
//     //     username:   "admin",
//     //     password:   "123",
//     //     role:   userRoles.admin
//     // }
// ];
var mongoose = require('mongoose');
// var Tong = new mongoose.model('Tong', {

// });
var User = mongoose.model('User', {
    id: String,
    username : String,
    password : String,
    role : Object,
    email : String,
});

users = User.find();

module.exports = {
    asyncHack: false,
    addUser: function(username, password, role, callback) {
        console.log(username, password, role, callback);
        var user= new User(); 
        user.username= username;  
        user.password= password;
        user.role= userRoles.user;
        //save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);
        });
    },
    updateUser: function(req, res) {
        //update the user and check for errors
        console.log('updateUser');
        console.log(req.params);

        User.find({
                _id : req.params.user_id
            }, function(err, user) {
                console.log(user);
                if (err)
                    res.send(err);
                res.json(user);
        });
    },
    getUsers: function(req, res) {
        // console.log('getIngredient'+req, res);
        User.find(function(err, users) {
            // console.log(getUsers);
            console.log(users);
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)
                res.json(users); // return all ingredients in JSON format
        });
    },

    // findOrCreateOauthUser: function(provider, providerId) {
    //     var user = module.exports.findByProviderId(provider, providerId);
    //     if(!user) {
    //         user = {
    //             id: _.max(users, function(user) { return user.id; }).id + 1,
    //             username: provider + '_user', // Should keep Oauth users anonymous on demo site
    //             role: userRoles.user,
    //             provider: provider
    //         };
    //         user[provider] = providerId;
    //         users.push(user);
    //     }

    //     return user;
    // },

    findAll: function() {
        return _.map(users, function(user) { return _.clone(user); });


    },

    findById: function(id) {
        // return _.clone(_.find(users, function(user) { return user.id === id }));
        var res = null;
        User.findOne({
            _id: id
        },function(err, result){
            if (err)
                console.log('error errr');
            console.log('inside async');
            console.log('result=')
            console.log(result);
            res = result;
            asyncHack = result;
        });
        // console.log('res=');
        // console.log(res);
        // return res;
    },




    findByUsername: function(username) {
        var res = null;
        User.findOne({
            username: username
        },function(err, result){
            if (err)
                console.log('error errr');
            console.log('inside async');
            console.log('result=')
            console.log(result);
            res = result;
            asyncHack = result;
        });
    },





    findByProviderId: function(provider, id) {
        return _.find(users, function(user) { return user[provider] === id; });
    },



    validate: function(user) {
        check(user.username, 'Username must be 1-20 characters long').len(1, 20);
        check(user.password, 'Password must be 5-60 characters long').len(5, 60);
        check(user.username, 'Invalid username').not(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);

        // TODO: Seems node-validator's isIn function doesn't handle Number arrays very well...
        // Till this is rectified Number arrays must be converted to string arrays
        // https://github.com/chriso/node-validator/issues/185
        var stringArr = _.map(_.values(userRoles), function(val) { return val.toString() });
        check(user.role, 'Invalid user role given').isIn(stringArr);
    },

    localStrategy: new LocalStrategy(
        function(username, password, done) {
            console.log('localStrategy '+username);
            console.log('localStrategy '+password);

            var user = module.exports.findByUsername(username);
            setTimeout(function(){
                    console.log('syncronious')
                if(asyncHack){
                    user = asyncHack; 
                    asyncHack = false;
                    console.log(user);
                    console.log('asyncHack strategy')
                    console.log(user.password);

                    if(!user) {
                        console.log('!user');
                        done(null, false, { message: 'Incorrect username.' });
                    }
                    else if(user.password != password) {
                        console.log('user.password != password');
                        done(null, false, { message: 'Incorrect password.' });
                    }
                    else {
                        console.log('else');
                        // console.log(done);
                        return done(null, user);
                    }
                }
                console.log('still still local strategy')
            }, 300);
        }
    ),

    // twitterStrategy: function() {
    //     if(!process.env.TWITTER_CONSUMER_KEY)    throw new Error('A Twitter Consumer Key is required if you want to enable login via Twitter.');
    //     if(!process.env.TWITTER_CONSUMER_SECRET) throw new Error('A Twitter Consumer Secret is required if you want to enable login via Twitter.');

    //     return new TwitterStrategy({
    //         consumerKey: process.env.TWITTER_CONSUMER_KEY,
    //         consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    //         callbackURL: process.env.TWITTER_CALLBACK_URL || 'http://localhost:8000/auth/twitter/callback'
    //     },
    //     function(token, tokenSecret, profile, done) {
    //         var user = module.exports.findOrCreateOauthUser(profile.provider, profile.id);
    //         done(null, user);
    //     });
    // },

    // facebookStrategy: function() {
    //     if(!process.env.FACEBOOK_APP_ID)     throw new Error('A Facebook App ID is required if you want to enable login via Facebook.');
    //     if(!process.env.FACEBOOK_APP_SECRET) throw new Error('A Facebook App Secret is required if you want to enable login via Facebook.');

    //     return new FacebookStrategy({
    //         clientID: process.env.FACEBOOK_APP_ID,
    //         clientSecret: process.env.FACEBOOK_APP_SECRET,
    //         callbackURL: process.env.FACEBOOK_CALLBACK_URL || "http://localhost:8000/auth/facebook/callback"
    //     },
    //     function(accessToken, refreshToken, profile, done) {
    //         var user = module.exports.findOrCreateOauthUser(profile.provider, profile.id);
    //         done(null, user);
    //     });
    // },

    // googleStrategy: function() {

    //     return new GoogleStrategy({
    //         returnURL: process.env.GOOGLE_RETURN_URL || "http://localhost:8000/auth/google/return",
    //         realm: process.env.GOOGLE_REALM || "http://localhost:8000/"
    //     },
    //     function(identifier, profile, done) {
    //         var user = module.exports.findOrCreateOauthUser('google', identifier);
    //         done(null, user);
    //     });
    // },

    // linkedInStrategy: function() {
    //     if(!process.env.LINKED_IN_KEY)     throw new Error('A LinkedIn App Key is required if you want to enable login via LinkedIn.');
    //     if(!process.env.LINKED_IN_SECRET) throw new Error('A LinkedIn App Secret is required if you want to enable login via LinkedIn.');

    //     return new LinkedInStrategy({
    //         consumerKey: process.env.LINKED_IN_KEY,
    //         consumerSecret: process.env.LINKED_IN_SECRET,
    //         callbackURL: process.env.LINKED_IN_CALLBACK_URL || "http://localhost:8000/auth/linkedin/callback"
    //       },
    //        function(token, tokenSecret, profile, done) {
    //         var user = module.exports.findOrCreateOauthUser('linkedin', profile.id);
    //         done(null,user); 
    //       }
    //     );
    // },
    serializeUser: function(user, done) {
        console.log('serializeUser');
        console.log(user, done);
        done(null, user._id);
    },

    deserializeUser: function(id, done) {
        console.log('deserializeUser');
        console.log(id);
        console.log(done);
        var user = module.exports.findById(id);
        setTimeout(function(){
            if(asyncHack){
                user = asyncHack; 
                asyncHack = false;
                if(user) { done(null, user); }
                    else { done(null, false); }

            }
        }, 300);
    }
};