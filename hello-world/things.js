//import express
var express= require('express');
var router= express.Router();

router.get('/', function(req, res){
    res.send('GET route on the things.');
});
router.post('/', function(req, res){
    res.send('POST route on things.');
})
module.exports= router;//exporting this router to be used elsewhere