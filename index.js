var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
      res.render(__dirname + '/views/home.jade');
});


//app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.static(__dirname + '/public'));

http.listen(3000, function(){
      console.log('listening on: 3000');
});
