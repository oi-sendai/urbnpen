var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

// var Post = mongoose.model('Post', {
//     title : String,
//     slug : String,
//     author : String,
//     // time : { type : Date, default: Date.now }
//     body : String,
// });
var PostSchema = new mongoose.Schema({
    title : String,
    slug : String,
    author : String,
    body : String,
    comments : Array
});

var CommentSchema = new mongoose.Schema({
    name : String,
    message : String,
    author : String,
    parent: String

});

PostSchema.plugin(timestamps);
CommentSchema.plugin(timestamps);

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);


module.exports = {
	getPosts: function(req, res) {
		console.log('getPost'+req, res);

        Post.find(function(err, posts) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)
                res.json(posts); // return all ingredients in JSON format
        });
    },
    addPost: function(req, res) {
        console.log('addPost:||');//+req.body);

        var post = new Post(); 
        post.title= req.body.title;  
        post.body= req.body.body;
        post.author= req.body.author;
        post.comments= req.body.comments;
        console.log(post);
        //save the post and check for errors
        post.save(function(err) {
            if (err)
                res.send(err);
        });                
	},
	deletePost: function(req, res) {
		console.log('deletePost:||'+req.params);

        Post.remove({
                _id : req.params.post_id
            }, function(err, post) {
                if (err)
                    res.send(err);
        });
	},
	updatePost: function(req, res) {
        console.log('updatePost.req.params.post_id');
		console.log(req.params.post_id);

        Post.findById(req.params.post_id
            , function(err, post) {
                if (err)
                    res.send(err);
                console.log(post);
                console.log('post[0].comments');
                console.log(post.comments);
                console.log(req.body);
                post.comments.push(req.body);
                // post.body = "this has changed";
                console.log(post);
                post.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json(post);
                });
                // res.json(post);
        });
	},

    getComments: function(req, res) {
        // var post_id = req.params.post_id
        // res.send(req.params.post_id);
        var comment = new Comment(); 
        comment.name= req.body.name;  
        comment.message= req.body.message;
        comment.author= req.body.author;
        comment.parent= req.params.post_id;
        // // comment.comments= req.body.comments;
        console.log(comment);
        //save the comment and check for errors
        Post.find({
                _id : req.params.post_id
            }, function(err, post) {
                post.comments = comment;
                console.log(post);
                if (err)
                    res.send(err);
                res.json(post);
        });
    },   


    insertComment: function(req, res) {
        // var post_id = req.params.post_id
        // res.send(req.params.post_id);
        var comment = new Comment(); 
        comment.name= req.body.name;  
        comment.message= req.body.message;
        comment.author= req.body.author;
        comment.parent= req.params.post_id;
        // // comment.comments= req.body.comments;
        console.log(comment);
        // //save the comment and check for errors
        comment.save(function(err) {
        //     Post.findByIdAndUpdate(
        //         req.params.post_id,
        //         {$push: {"Comment": {title: title, msg: msg}}},
        //         {safe: true, upsert: true},
        //         function(err, model) {
        //             console.log(err);
        //         }
        //     );
            if (err)
                res.send(err);
        });                
    },   

        // comment.find({
        //         // _id : req.params.post_id
        //         _id : '540c4526a4232e040f000002'
        //     }, function(err, post) {
        //         var unittest = [

        //                 {"name":"user1", "message":"this is really interesting"},
        //                 {"name":"user2", "message":"someone elses opinion"}
        //             ];
        //         console.log('unittest');
        //         console.log(unittest);
        //         if (err)
        //             res.send(err);
        //         res.json(unittest);
        // });
    // },
    getPost: function(req, res) {
        console.log('getPost'+req.params);

        Post.find({
                _id : req.params.post_id
            }, function(err, post) {
                console.log(post);
                if (err)
                    res.send(err);
                res.json(post);
        });
    }
}

         /** CREATE Unit Test - jquery.post should add something to the database
          ******************************
        jQuery.post("/api/ingredients", {
            "sku" : "String",
            "productName" : "String",
            "price": "String",
            "inventory": "String",
            "image": "String",
          }, function (data, textStatus, jqXHR) { 
              console.log("Post response:"); console.dir(data); console.log(textStatus); console.dir(jqXHR); 
          });
          *****************************
          / Works 0.0.1 */
