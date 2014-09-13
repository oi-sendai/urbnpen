var _ =           require('underscore')
    , path =      require('path')
    , passport =  require('passport')
    , mongoose =  require('mongoose')
    , AuthCtrl =  require('./controllers/auth')
    , UserCtrl =  require('./controllers/user')
    , TransCtrl = require('./controllers/translate.js')
    , PostCtrl = require('./controllers/blog/post.js')
    , OrderCtrl = require('./controllers/order/order.js')
    , IngredientCtrl = require('./controllers/ingredient.js')
    , ListingCtrl = require('./controllers/listing.js')
    , User =      require('./models/User.js')
    , userRoles = require('../client/js/routingConfig').userRoles
    , accessLevels = require('../client/js/routingConfig').accessLevels
    , dlurl = __dirname+'/products';

var Recipe = mongoose.model('Recipe', {
    name : String,
    creator: String,
    bom: [{material_id:String, quantity:String, active:String}],
});
// routes.push(ListinMdl.listingModel);

var routes = [
    
    // Media Server
    {
        path: 'api/uploads',
        httpMethod: 'POST',
        middleware: [function (req, res, next) {



    if (req.files) { 
        console.log(util.inspect(req.files));
        if (req.files.myFile.size === 0) {
                    return next(new Error("Hey, first would you select a file?"));
        }
        fs.exists(req.files.myFile.path, function(exists) { 
            if(exists) { 
                res.end("Got your file!"); 
            } else { 
                res.end("Well!"); 
            } 
        }); 
    } 



        }]
    },

    // Views
    {
        path: '/partials/*',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            var requestedView = path.join('./', req.url);
            res.render(requestedView);
        }]
    },


    // API
    {
        path: '/api',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            // var requestedView = path.join('./', req.url);
            res.send('Not Cookied API is running');
            // res.render(requestedView);
        }],
        accessLevel: accessLevels.public
    },

    // Uploads 
    {
        path: '/api/uploads',
        httpMethod: 'POST',
        middleware: [function (req, res, next) {
            console.log(req.body);
            console.log(req.files);
        }],
        accessLevel: accessLevels.public
    },

    // Downloads
    {
        path: '/api/downloads/:product',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            var product = req.params.product;
            // console.log(product);
            // product.replace(/.txt/g, "");
            console.log(product);
            var dictionary = {
                'aptitude-is-abundance.pdf':'totallyscrambled.pdf',
                'this-website.txt':'enteranewonehere64756.txt'
            }
            res.send('<ul>'
                + '<li>Download <a href="/api/products/'+product+' target="blank" download="'+product+'">'+product+'</a>.</li>'
                + '</ul><p>pIf you have a problem with downloading your files contact eshopworkshop@gmail and we will send your product right away'
            );
        }],
        accessLevel: accessLevels.public
    },
    {
        path: '/api/downloads/:file(*)',
        httpMethod: 'GET',
        middleware: [function(req, res, next){
            var file = req.params.file;
            console.log(file);
            file.replace(/.txt/g, "");
            console.log(file);
            var dictionary = {
                'aptitude-is-abundance.pdf':'totallyscrambled.pdf',
                'this-website.txt':'enteranewonehere64756.txt',
                'little-book-of-scribbles.pdf': 'totallyscrambled.pdf'
            }
            file = dictionary[file];
            var path = __dirname + '/downloads/' + file;

            res.download(path);
        }],
        accessLevel: accessLevels.public
    },

    // Uploads
    {
        path: '/api/uploads',
        httpMethod: 'POST',
        middleware: [function(req, res){
            console.log('hit');
        console.log(req);
           // console.log(req.files);
        }],
        accessLevel: accessLevels.public
    },




    // Users
    // This should return username + public profile
    {
        path: '/api/users',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            User.getUsers(req, res)
        }],
        accessLevel: accessLevels.public
    },
    // Get user
    // this should return entire user detail
    {
        path: '/api/users/:user_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            User.findById(req, res)
        }],
        accessLevel: accessLevels.public
    },
    // Create a new user
    {
        path: '/api/users',
        httpMethod: 'POST',
        middleware: [function (req, res) {

            User.addUser(req, res)
        }],
        accessLevel: accessLevels.public
    },













{
        path: '/api/listings',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            ListingCtrl.getListings(req, res)
        }],
        accessLevel: accessLevels.public
    },
    // Create a new listing
    {
        path: '/api/listings',
        httpMethod: 'POST',
        middleware: [function (req, res) {

            ListingCtrl.addListing(req, res)
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/listings/:listing_id',
        httpMethod: 'DELETE',
        middleware: [function (req, res) {
            ListingCtrl.deleteListing(req, res)
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/listings/:listing_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            ListingCtrl.getListing(req, res)
        }],
        accessLevel: accessLevels.public
    },














        //### POSTS  ####

    // Return all posts
    {
        path: '/api/posts',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            PostCtrl.getPosts(req, res)
        }],
        accessLevel: accessLevels.public
    },
    // Create a new post
    {
        path: '/api/posts',
        httpMethod: 'POST',
        middleware: [function (req, res) {

            PostCtrl.addPost(req, res)
        }],
        accessLevel: accessLevels.public
    },
        {
        path: '/api/posts/comment/:post_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            console.log('api route hit')
            console.log(req.params);
            res.send(req.params);
            // PostCtrl.insertComment();

        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/posts/:post_id',
        httpMethod: 'DELETE',
        middleware: [function (req, res) {
            PostCtrl.deletePost(req, res)
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/posts/:post_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            PostCtrl.getPost(req, res)
        }],
        accessLevel: accessLevels.public
    },










    //### Orders  ####

    // Return all orders
    {
        path: '/api/orders',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            OrderCtrl.getOrders(req, res)
        }],
        accessLevel: accessLevels.public
    },
    // Create a new order
    {
        path: '/api/orders',
        httpMethod: 'POST',
        middleware: [function (req, res) {
            console.log(req.body);
            OrderCtrl.addOrder(req, res)
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/orders/:order_id',
        httpMethod: 'DELETE',
        middleware: [function (req, res) {
            OrderCtrl.deleteOrder(req, res)
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/orders/:order_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            OrderCtrl.getOrder(req, res)
        }],
        accessLevel: accessLevels.public
    },











    //### INGREDIENTS  ####

    // Return all ingredients
    {
        path: '/api/ingredients',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            IngredientCtrl.getIngredients(req, res)
        }],
        accessLevel: accessLevels.public
    },
    // Create a new ingredient
    {
        path: '/api/ingredients',
        httpMethod: 'POST',
        middleware: [function (req, res) {
            IngredientCtrl.addIngredient(req, res)
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/ingredients/:ingredient_id',
        httpMethod: 'DELETE',
        middleware: [function (req, res) {
            IngredientCtrl.deleteIngredient(req, res)
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/ingredients/:ingredient_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {

        }],
        accessLevel: accessLevels.public
    },


    // Get all recipes
    {
        path: '/api/recipes',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            Recipe.find(function(err, recipes) {
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err)
                        res.send(err)
                    res.json(recipes); // return all ingredients in JSON format
            });
        }],
        accessLevel: accessLevels.public
    },

    // Create a new recipe
    {
        path: '/api/recipes',
        httpMethod: 'POST',
        middleware: [function (req, res) {
            console.log('new recipe req.body:-------');
            console.log(req.body);
            console.log("req.body.name:------");
            console.log(req.body.name);
            console.log("req.body.creator-----");
            console.log(req.body.creator);
            console.log("req.body.bom-------");
            console.log(req.body.bom);
            var recipe = new Recipe(); 
            recipe.name= req.body.name;  
            recipe.creator= req.body.creator;
            recipe.bom= req.body.bom;
            //save the recipe and check for errors
            recipe.save(function(err) {
                if (err)
                    res.send(err);
            });
        }],
        accessLevel: accessLevels.public
    },

    // return a individual recipe
    {
        path: '/api/recipes/:recipe_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            console.log(req.params);
            Recipe.find({
                    _id : req.params.recipe_id
                }, function(err, recipe) {
                    console.log(recipe);
                    if (err)
                        res.send(err);
                    res.json(recipe);
            });
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/translate',
        httpMethod: 'GET',
        middleware: [TransCtrl.translate],
        // note TransCtrl.translate() produces error, i think becuase it passed the invoked function and not the reference to the function
        accessLevel: accessLevels.public
    },

    // OAUTH
    {
        path: '/auth/twitter',
        httpMethod: 'GET',
        middleware: [passport.authenticate('twitter')]
    },
    {
        path: '/auth/twitter/callback',
        httpMethod: 'GET',
        middleware: [passport.authenticate('twitter', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },
    {
        path: '/auth/facebook',
        httpMethod: 'GET',
        middleware: [passport.authenticate('facebook')]
    },
    {
        path: '/auth/facebook/callback',
        httpMethod: 'GET',
        middleware: [passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },
    {
        path: '/auth/google',
        httpMethod: 'GET',
        middleware: [passport.authenticate('google')]
    },
    {
        path: '/auth/google/return',
        httpMethod: 'GET',
        middleware: [passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },
    {
        path: '/auth/linkedin',
        httpMethod: 'GET',
        middleware: [passport.authenticate('linkedin')]
    },
    {
        path: '/auth/linkedin/callback',
        httpMethod: 'GET',
        middleware: [passport.authenticate('linkedin', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },

    // Local Auth
    {
        path: '/register',
        httpMethod: 'POST',
        middleware: [AuthCtrl.register]
    },
    {
        path: '/login',
        httpMethod: 'POST',
        middleware: [AuthCtrl.login]
    },
    {
        path: '/logout',
        httpMethod: 'POST',
        middleware: [AuthCtrl.logout]
    },

    // User resource
    {
        path: '/users',
        httpMethod: 'GET',
        middleware: [UserCtrl.index],
        accessLevel: accessLevels.admin
    },

    // All other get requests should be handled by AngularJS's client-side routing system
    {
        path: '/*',
        httpMethod: 'GET',
        middleware: [function(req, res) {
            var role = userRoles.public, username = '';
            if(req.user) {
                role = req.user.role;
                username = req.user.username;
            }
            res.cookie('user', JSON.stringify({
                'username': username,
                'role': role
            }));
            res.render('index');
        }]
    }
];
// my broken api
// routes.push(ListingMdl.listingModel);

module.exports = function(app) {

    _.each(routes, function(route) {
        route.middleware.unshift(ensureAuthorized);
        var args = _.flatten([route.path, route.middleware]);

        switch(route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });
}

function ensureAuthorized(req, res, next) {
    var role;
    if(!req.user) role = userRoles.public;
    else          role = req.user.role;
    var accessLevel = _.findWhere(routes, { path: req.route.path, httpMethod: req.route.stack[0].method.toUpperCase() }).accessLevel || accessLevels.public;

    if(!(accessLevel.bitMask & role.bitMask)) return res.send(403);
    return next();
}
