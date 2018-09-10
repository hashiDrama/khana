const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

var createSchema = function(db, collectionName){
	db.createCollection(collectionName);
}

async function findUser(collection, userDetails, res){
	await collection.findOne({email : userDetails.email}, function(err, result){
		if(err) console.log("Error while fetching result");
		const sendObj = {};
		if(result){
			console.log("result : ");
			console.log(result);
			//res.send("Welcome "+ result.email);
			sendObj.responseCode = 'SUCCESS';
			sendObj.user = result.email;
			sendObj.desc = 'User found';
			res.send(sendObj);
		}
		else
		{
			console.log("no records");
			sendObj.responseCode = 'FAILURE';
			sendObj.user = userDetails.email;
			sendObj.desc = 'User not found';
			res.send(sendObj);
		}
	});
}

function addUser(collection, userDetails, res){
	collection.insertOne(userDetails, function(err, result){
		if(err) throw err;
		console.log("result:");
		console.log(result.ops);
		res.end("Thank you for using our app "+ result.ops[0].email)
	})
}

module.exports = {createSchema, findUser, addUser};
