var userRoles = require('../../client/js/routingConfig').userRoles
var accessLevels = require('../../client/js/routingConfig').accessLevels;

module.exports = {

    listingModel: [
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
    }

]
}
