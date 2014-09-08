var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    title : String,
    slug : String,
    body : String,
});

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
        console.log(post);
        //save the post and check for errors
        post.save(function(err) {
            if (err)
                res.send(err);
        });                      // get and return all the ingredients after you ADD one
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
		console.log('updatePost:||'+req.params);

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
