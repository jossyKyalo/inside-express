var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function (req, res) {
  // Setting a cookie without expiration (session-based)
  res.cookie('name', 'express'); 

  // Setting a cookie with an expiration time
  res.cookie('name', 'express', { expires: new Date(Date.now() + 360000) });

  console.log('Cookies:', req.cookies); // Logs cookies in the backend console

  res.send('Cookies have been set! Check your browser.');
});
//deleting existing cookies
app.get('/clear_cookie', function(req, res){
   res.clearCookie('express');
   res.send('cookie express cleared');
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
