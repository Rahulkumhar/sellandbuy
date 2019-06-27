const express = require("express");
const server = express();
const bodyParser = require('body-Parser')
//const port = 8080;

server.get("/home", function (req, res) {
  console.log(req.params) // prints all data in request object
  res.json(req.query);  // send back same data in response object
})


server.listen(8080, () => {
  console.log("server started")
})
