const express = require('express');
const app = express();
const fs = require('fs');
const mongoClient = require('mongodb').MongoClient;
const url  = "mongodb://localhost:27017/";
var dbObj;
const UserDb = require('./models/users');
var path = require('path');
// var cors = require('cors');

// use cors to allow react to make a rest request
// app.use(cors);

// app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	if(req.method === 'OPTIONS')
	{
		res.header("Access-Control-Allow_Methods", "PUT, POST, PATCH, DELETE, GET");
		return(res.status(200).json({}));
	}
	next();
});

//Connecting once to the db
mongoClient.connect(url, {useNewUrlParser: true}, function(err, database){
	if(err) throw err;
	dbObj = database.db("newDB");
	app.listen(3001, () => console.log("listening on 3001"));
});

/*if(db !== undefined)
{
	UserDb.createSchema(db.db("newDB"), 'Users');
}*/

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/ge', (req, res) => {
	console.log('In get');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// res.header('Access-Control-Allow-Headers', 'Content-Type');
	 res.send(JSON.stringify({"em":"hi"}));
	//res.send("hello");
});

app.post('/login', function(req, res){
	console.log("req.body :");
	console.log(req.body);
	UserDb.findUser(dbObj.collection("users"), req.body, res).then( data => {
		console.log("data");
		console.log(data);
		console.log("done data");
	}).catch(err => {console.log("cannot find data")});
});


app.post('/register', function(req, res){
	UserDb.addUser(dbObj.collection("users"), req.body, res);
	console.log("data added");
});
