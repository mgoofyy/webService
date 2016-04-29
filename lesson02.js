var express = require('express');
var utility = require('utility');

var app = express();

app.get('/',function(req,res){
	var q = req.query.q;
	res.send(q);
});

app.listen(3000,function(req,res){
	console.log('console in 3000 port');
});
