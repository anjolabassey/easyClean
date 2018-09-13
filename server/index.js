var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var db = require("./models/database");

var port = process.env.PORT || 3000;

var app = express();


app.get('/', function (req, res) {
    res.send('Welcome to Easy Clean')
});

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.listen(port, function() {
    console.log('Successfully started on port ' + port);
});

module.exports = app;