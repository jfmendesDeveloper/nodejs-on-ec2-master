var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Cloud Infrastructure and Virtualization. CA presentation video. This is the final presentation. I hope it goes well!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000
