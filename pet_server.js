var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var petRoutes = require('./routes/pet.js')(app);

var server = app.listen(3002, function () {
    console.log('Server: Pet running http://localhost:3002');
});
