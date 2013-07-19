var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    var buffer = new Buffer();
    response.send(fs.readFileSync("index.html").toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
