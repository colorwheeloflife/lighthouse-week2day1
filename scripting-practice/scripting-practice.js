//http
var http = require("http");

var requestOptions = {
  host: "example.com",
  path: "/"
};

http.get(requestOptions, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", function(data) {           // On Data Received
    console.log(data);
  });

});


//request
var request = require("request");

request("http://www.example.com", function(err, response, body) {
  if (err) {
    throw err;
  }

  console.log("Response Status Code:", body);

});
















