var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();

// app.use(cookieParser());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }))

app.use(upload.array());

//Require the Router we defined in movies.js
var movies = require('./routes/movies.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);

app.listen(3001, function() {
    console.log('listening on *:3001');
 });