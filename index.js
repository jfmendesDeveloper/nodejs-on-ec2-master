var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Cloud Infrastructure and Virtualization oerformed by Craig and Joao.testing'); //write a response to the client
  p Welcome to the #{title} Application:
  p 1. Create EC2 Instance (Ubuntu image)
  p 2. Install and configure Jenkins on Ubuntu
  p 3. Install node and npm
  p 4. Install docker on ubuntu 
  p 5. Create a docker file
  p 6. Github as source code repo
  p 7. Create CI CD pipeline
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
