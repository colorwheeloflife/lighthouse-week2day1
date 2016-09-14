var downloadImage = require("./downloadImageByUrl");
var index = require("./avatars_index");
var fs = require('fs');
var request = require("request");
require('dotenv').config();

module.exports = function getRepoContributors(repoOwner, repoName, api_token, cb) {
  var contributors = [];
  var apiRoot = "https://api.github.com";
  var options = {
    url: apiRoot + '/repos/' + repoOwner + "/" + repoName + '/contributors',
    auth: {
      user: 'colorwheeloflife',
      pass: api_token
    },
    headers: {
      'User-Agent': 'Lighthouse'
    },
    json: true
  }
  if(api_token === undefined) {
    console.log("Missing token. Please check if you have entered a valid token within an .env file");
    process.exit(1);
  }
  request.get(options, cb);
}