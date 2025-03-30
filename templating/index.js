var express=require('express');
var app= express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/first_template', function(req, res){
   res.render('first_view');
});

//paasing values to templates
app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: 'Express🔥',
      url:"http://www.tutorialspoint.com"
   });
});
app.get('/components', function(req, res){
   res.render('content')
})
app.listen(3000);