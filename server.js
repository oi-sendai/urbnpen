var express =           require('express')
    , http =            require('http')
    , passport =        require('passport')
    , path =            require('path')
    , morgan =          require('morgan')
    , bodyParser =      require('body-parser')
    , methodOverride =  require('method-override')
    , mongoose =        require('mongoose')
    , cookieParser =    require('cookie-parser')
    , cookieSession =   require('cookie-session')
    , session =         require('express-session')
    , bodyParser =      require('body-parser')
    , csrf =            require('csurf')
    , User =            require('./server/models/User.js')
    , credentials =     require('./credentials');




    // var multer = require('multer');





// mongoose.connect("localhost","cool");//credentials.mongoose);   // connect to mongoDB database on modulus.io
mongoose.connect(credentials.mongoose);   // connect to mongoDB database on modulus.io

var app = module.exports = express();

app.set('views', __dirname + '/client');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
//     app.use(multer({

//           dest: './uploads/'
 
// }));
app.use(bodyParser.json());
// app.use(bodyParser({uploadDir:'./client/css'}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'client')));
app.use(cookieParser());
app.use(session(
    {
        secret: process.env.COOKIE_SECRET || "Superdupersecret"
    }));

var env = process.env.NODE_ENV || 'development';
if ('development' === env || 'production' === env) {
    app.use(csrf());
    app.use(function(req, res, next) {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        next();
    });
}

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.localStrategy);
// passport.use(User.twitterStrategy());  // Comment out this line if you don't want to enable login via Twitter
// passport.use(User.facebookStrategy()); // Comment out this line if you don't want to enable login via Facebook
// passport.use(User.googleStrategy());   // Comment out this line if you don't want to enable login via Google
// passport.use(User.linkedInStrategy()); // Comment out this line if you don't want to enable login via LinkedIn

passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);

require('./server/routes.js')(app);

app.use(bodyParser({uploadDir:'./uploads'}));

app.set('port', process.env.PORT || 8000);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

