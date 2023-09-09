var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Cloud Infrastructure and Virtualization. This is the final presentation. Performed for DBS Assignment'); //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 5000
