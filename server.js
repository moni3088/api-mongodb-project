var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/logs');

/*app.use(bodyParser.json());
app.use(require('./routes'))*/;

app.listen(4000, function () {
    console.log('Server on!');
});
