var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Cloud Infrastructure and Virtualization performed by Craig and Joao. Testing phase 1'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
