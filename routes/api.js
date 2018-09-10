var express = require('express');
var app =express();
var mongoclient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

app.use('/register', function(req, res, next){
			
});
app.get('/register', function(req,res){
	console.log('get');
});

app.listen(3001);