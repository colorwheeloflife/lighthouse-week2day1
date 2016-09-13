var downloadImage = require("./downloadImageByUrl");
var index = require("./avatars_index");
var fs = require('fs');
var request = require("request");
require('dotenv').config();

module.exports = function getRepoContributors(repoOwner, repoName, cb) {
  var api_token = process.env['GITHUB_API_TOKEN'];
  var contributors = [];
  var apiRoot = "https://api.github.com";

  result = [];
  request.get({
    url: apiRoot + '/repos/' + repoOwner + "/" + repoName + '/contributors',
    auth: {
      user: 'colorwheeloflife',
      pass: api_token
    },
    headers: {
      'User-Agent': 'Lighthouse'
    },
    json: true
  }, function (err, incomingMessage, responseBody) {
      if (err) {
        console.log(err);
        return;
      }
      var value = 0;
      var index = responseBody.length;

      responseBody.forEach(function(value, index) {
        var filename = "./avatar/"+value.id+".jpg";
        downloadImage.downloadImageByURL(value.avatar_url, filename);
      });

  });
}