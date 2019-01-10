var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('./server/config/mongoose')
var routes_setter = require('./server/config/routes')

var app = express();
var port = 8000;

app.use(bodyParser.json());
routes_setter(app);

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../shopping_manager_Frontend/shopping_manager/public')));

app.listen(port, function() {
    console.log("listening to port: " + port)
})