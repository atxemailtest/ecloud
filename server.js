var http = require('http');
var express = require('express');

var app = express();

http.createServer(app).listen(5000,function(){
	console.log("===============================");
	console.log("Server started at port 5000");
	console.log("===============================");
});

app.get('/',function(req,res){
	res.send("cloud app");
});