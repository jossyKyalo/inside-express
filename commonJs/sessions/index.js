var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');//stores session data for users

var app = express();

app.use(cookieParser());
//create a session store for tracking user visits
app.use(session({
   secret: 'sample-secret',//used to sign session ID cookies
   resave: false,//prevents re-saving unchanged sessions
   saveUninitialized: false//avoids creating sessions until needed
}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000);
