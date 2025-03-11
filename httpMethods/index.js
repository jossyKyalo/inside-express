var express=require('express');
var app= express();
app.get('/', function(req, res){
    res.send('GET request!');
});
app.post('/', function(req, res){
    res.send('POST request!');
});
app.put('/', function(req, res){
    res.send('PUT request!');
});
app.delete('/', function(req, res){
    res.send('DELETE request!');
});
app.listen(3000);