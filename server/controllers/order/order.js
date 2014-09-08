var mongoose = require('mongoose');

var Order = mongoose.model('Order', {
    name : String,
    email : String,
    address : String,
    // date: { type: Date, default: Date.now },
    cost : String,
    order: String,
    // order : [{
    //     productId: String, 
    //     price: String}],
    message : String,
});

module.exports = {
    getOrders: function(req, res) {
        console.log('getOrders'+req, res);

        Order.find(function(err, orders) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)
                res.json(orders); // return all ingredients in JSON format
        });
    },

    
    addOrder: function(req, res) {
        console.log('addOrder:||');//+req.body);

        var order = new Order(); 
        order.name= req.body.name;  
        order.email= req.body.email;
        order.address= req.body.address;
        // order.date= req.body.date;
        order.cost= req.body.cost;
        order.order= req.body.order;
        order.order= req.body.message;
        //save the order and check for errors
        order.save(function(err) {
            if (err)
                res.send(err);
        });                      // get and return all the ingredients after you ADD one
    },
    // deleteOrder: function(req, res) {
    //     console.log('deleteOrder:||'+req.params);

    //     Order.remove({
    //             _id : req.params.order_id
    //         }, function(err, order) {
    //             if (err)
    //                 res.send(err);
    //     });
    // },
    // updateOrder: function(req, res) {
    //     console.log('updateOrder:||'+req.params);

    //     Order.find({
    //             _id : req.params.order_id
    //         }, function(err, order) {
    //             console.log(order);
    //             if (err)
    //                 res.send(err);
    //             res.json(order);
    //     });
    // },
    getOrder: function(req, res) {
        console.log('getOrder:||'+req.params);

        Order.find({
                _id : req.params.order_id
            }, function(err, order) {
                console.log(order);
                if (err)
                    res.send(err);
                res.json(order);
        });
    }
}
