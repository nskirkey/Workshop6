// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();

// Defines what happens when it receives the `GET /` request
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Imports body-parser library to handle body of JSON obj.
var bodyParser = require('body-parser');
app.use(bodyParser.text());
var Utility = require('./util.js');
var reverseString = Utility.reverseString;
// Handle POST /reverse [data]
app.post('/reverse', function (req, res) {
  // If the request came with text, then the text() middleware handled it
  // and made `req.body` a string.
  // Check that req.body is a string.
  if (typeof(req.body) === 'string') {
    var reversed = reverseString(req.body);
    res.send(reversed);
  }
  else {
    res.status(400).end();
  }
});
