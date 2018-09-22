const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

var createSchema = function(db, collectionName){
	db.createCollection(collectionName);
}

async function findUser(collection, userDetails, res){
	await collection.findOne({email : userDetails.email, pswrd: userDetails.pswrd}, function(err, result){
		if(err) console.log("Error while fetching result");
		const sendObj = {};
		console.log("the result is:");
		console.log(result);
		console.log("printed result");
		if(result != null){
			console.log("result : ");
			console.log(result);
			//res.send("Welcome "+ result.email);
			sendObj.responseCode = 'SUCCESS';
			sendObj.user = result.email;
			sendObj.desc = result.email + ' found';
			res.send(sendObj);
		}
		else
		{
			console.log("no records");
			sendObj.responseCode = 'FAILURE';
			sendObj.user = userDetails.email;
			sendObj.desc = userDetails.email + ' not found';
			res.send(sendObj);
		}
	});
}

function addUser(collection, userDetails, res){
	collection.insertOne(userDetails, function(err, result){
		if(err) throw err;
		console.log("result:");
		console.log(result.ops);
		const sendObj = {};
		sendObj.responseCode = 'SUCCESS';
		sendObj.user = result.ops[0].email;
		sendObj.desc = result.ops[0].email + ' added';
		res.send(sendObj);
	})
}

module.exports = {createSchema, findUser, addUser};
