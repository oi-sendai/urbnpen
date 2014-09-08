var mongoose = require('mongoose');

var Listing = mongoose.model('Listing', { 
            "name": String,
            "email": String,
            "location": String,
            "bedsavailable": String,
            "bedsrequired": String,
            //"interest-rainbow": [],
            "image" : String
});

module.exports = {
    getListings: function(req, res) {
        // console.log('getIngredient'+req, res);

        Listing.find(function(err, listings) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)
                res.json(listings); // return all ingredients in JSON format
        });
    },
    addListing: function(req, res) {
        console.log('addListing:||')
        console.log(req.body);

        var listing = new Listing(); 
        listing.name= req.body.name;  
        listing.email= req.body.email;
        listing.location= req.body.location;
        listing.bedsrequired= req.body.bedsrequired;
        listing.bedsavailable= req.body.bedsavailable;
        listing.image= req.body.image;
        console.log(listing.name);
        //save the listing and check for errors
        listing.save(function(err) {
            if (err)
                res.send(err);
        });                      // get and return all the ingredients after you ADD one
    },
    deleteListing: function(req, res) {
        console.log('deleteListing:||'+req.params);

        Listing.remove({
                _id : req.params.listing_id
            }, function(err, listing) {
                if (err)
                    res.send(err);
        });
    },
    updateListing: function(req, res) {
        console.log('updateListing'+req.params);

        Listing.find({
                _id : req.params.listing_id
            }, function(err, listing) {
                console.log(listing);
                if (err)
                    res.send(err);
                res.json(listing);
        });
    },
    getListing: function(req, res) {
        console.log('getListing'+req.params);

        Listing.find({
                _id : req.params.listing_id
            }, function(err, listing) {
                console.log(listing);
                if (err)
                    res.send(err);
                res.json(listing);
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
