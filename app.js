//EXPRESS
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

//MONGODB
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

//TWITTER
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

//Connect Database from mlab(mongodb hosting site)
MongoClient.connect("mongodb://crespoter:blantest@ds115573.mlab.com:15573/voting-app", (err, database) => {
    if (err)
        console.log(err);
    db = database;
    app.listen(process.env.PORT | 80, () => {
        console.log("listening to port " + process.env.PORT | 80);
    });
});

Twitter.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function (err, data, response) {
    console.log(data)
})
app.set('view engine', 'pug');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));




