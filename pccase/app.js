
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

var index = require('./routes/index');
var rollcall = require('./routes/rollcall');
var myclass = require('./routes/class');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.load);
app.get('/api/sallery-list', index.test);
app.post('/api/sallery-info', index.detail);

app.post('/api/buildrollcall1', rollcall.buildrollcall1);
app.post('/api/findClass', rollcall.findclass);
app.post('/api/buildrollcall2', rollcall.buildrollcall2);
app.post('/api/showrollcall', rollcall.showrollcall);
app.post('/api/rollcall-info', rollcall.detail);

app.post('/api/loadAttendance', myclass.loadAttendance);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
