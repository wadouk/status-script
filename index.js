var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port', listener.address().port);
});
