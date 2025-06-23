//middleware funtions have access to the request object(req) and the response object(res)
var express = require('express');
var app = express();
//mounting the body-parser(a third-party middleware)
var bodyParser= require('body-parser');
//mounting cookie-parser
var cookieParser= require('cookie-parser')
app.use(cookieParser())

//to pass url encoded data
app.use(bodyParser.urlencoded({extended: false}))
//to pass json data
app.use(bodyParser.json())

// Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date().now());
   
   // This function call is very important. It tells that more processing is
   // required for the current request and is in the next middleware
   // function route handler.
   next();//passes control to the next middleware
});

app.listen(3000);