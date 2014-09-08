var mongoose = require('mongoose');

var Ingredient = mongoose.model('Ingredient', {
    sku : String,
    productName : String,
    price : String,
    inventory : String,
    image: String,
});
module.exports = {
	getIngredients: function(req, res) {
		// console.log('getIngredient'+req, res);

        Ingredient.find(function(err, ingredients) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)
                res.json(ingredients); // return all ingredients in JSON format
        });
    },
    addIngredient: function(req, res) {
        console.log('addIngredient:||'+req.body);

        var ingredient = new Ingredient(); 
        ingredient.sku= req.body.sku;  
        ingredient.productName= req.body.productName;
        ingredient.price= req.body.price;
        ingredient.inventory= req.body.inventory;
        ingredient.image= req.body.image;
        //save the ingredient and check for errors
        ingredient.save(function(err) {
            if (err)
                res.send(err);
        });                      // get and return all the ingredients after you ADD one
	},
	deleteIngredient: function(req, res) {
		console.log('deleteIngredient:||'+req.params);

        Ingredient.remove({
                _id : req.params.ingredient_id
            }, function(err, ingredient) {
                if (err)
                    res.send(err);
        });
	},
	updateIngredient: function(req, res) {
		console.log('updateIngredient'+req.params);

        Ingredient.find({
                _id : req.params.ingredient_id
            }, function(err, ingredient) {
                console.log(ingredient);
                if (err)
                    res.send(err);
                res.json(ingredient);
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
