var express= require('express'); //import express in our file
var app= express();// create an express app instance
var things= require('./things.js')
//define a GET route for '/' (root url)
app.get('/hello', function(req, res){
    res.send("Hello world!");//sends the response when someone visits
});
app.post('/hello', function(req, res){
    res.send("I called the post method at '/hello'!");
});
//all method- handles all types of http methods at a partciular route using the same function
app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
})
app.use('/things', things)
app.listen(3000);//starting the server at port 3000