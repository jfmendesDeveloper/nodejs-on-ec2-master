var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Cloud Infrastructure and Virtualization performed by Craig and Joao. come on'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000
