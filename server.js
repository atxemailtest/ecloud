var http = require('http');
var express = require('express');

var app = express();

http.createServer(app).listen(5000,function(){
	console.log("===============================");
	console.log("Server started at port 5000");
	console.log("===============================");
});

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));


app.get('/',function(req,res){
	res.render('index');
});