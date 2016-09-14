var repoContributors = require("./getRepoContributors");
var downloadImage = require("./downloadImageByUrl");

var request = require("request");
var fs = require('fs');
require('dotenv').config();

var inputs = process.argv.slice(2);
var owner = inputs[0];
var repo = inputs[1];
var api_token = process.env['GITHUB_API_TOKEN'];

if (inputs.length !== 2) {
  function erroArguments() {
    throw new Error("Incorrect number of arguments. Please enter 2 arguments.");
  }
  return erroArguments();
}

repoContributors(owner, repo, api_token, function(err, incomingMessage, contributors) {

  if (err) {
    console.log("Error geting cons: " + err);
    return;
  }
  else if (incomingMessage.caseless.dict.status !== '200 OK'){
    console.log("An error has been found. Please check credentials.")
  }
  else if (!Array.isArray(contributors)) {
    console.log('repo', repo, 'is not a valid repo');
  }
  else {
    contributors.forEach(function(value, index) {
      var directory = "./avatars";
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
        console.log(`Directory ${directory} has been created`);
      }
      var filename = directory + '/' + value.id + ".jpg";
      downloadImage(value.avatar_url, filename);
    });
  }
});
