var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('customerapp', ['users']);
var ObjectId = mongojs.ObjectId; 

var app = express();

console.log('worked');


//Set Static Vars
app.use(express.static(__dirname + '/public'));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', function (req, res) {
   
        res.render('index', {
            title: 'Customers',
            users: 'Users;'
    })
});



app.listen(3000, function () {
    console.log('Server started on Port 3000');
})