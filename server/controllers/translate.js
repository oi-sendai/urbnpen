var curl = require('curlrequest');
// var passport =  require('passport')
//     , User = require('../models/User.js');
module.exports = {
    translate: function(req, res, next) {
    	var dataObject = {   
		    "text":"In the era of Siri",
		    "target_language":"pt",
		    "callback_url": "http://news.unbabel.co/unbabel_endpoint/"
		}
		,	api_token = "binarygeometry"
		,	ApiKey = "#"

		// ,	headers "Authorization: ApiKey username:api_token" 
		var options = {
		    url: 'http://www.unbabel.co/tapi/v2/translation/',
		    headers: {
		    	"Authorization": ApiKey,
		    	// "username:": api_token,
		    	"Content-Type": "application/json"
		    },
			method: "POST",
			data: dataObject,
			verbose: true,
			stderr: true
		};

		curl.request(options, function (err, data) {
			console.log(err, data);
		});
	}
}


// curl -H "Authorization: ##### username: binarygeometry" -H "Content-Type: application/json" -X POST http://www.unbabel.co/tapi/v2/translation/ 
