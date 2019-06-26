    
var express = require('express');
var app = express();

var productController=function(req, res){

  var product = [
    {id:1, title:"Activa",quantity:50, unitprice:65000},
    {id:2, title:"passion",quantity:30, unitprice:70000},
    {id:3, title:"splender",quantity:20, unitprice:60000},
   
  ];
  res.send(product);
};

app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app listening at http://localhost:8086", host, port)
})