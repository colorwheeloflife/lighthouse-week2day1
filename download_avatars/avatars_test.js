require('dotenv').config();
var fs = require('fs');

var request = require("request");

var api_token = process.env['GITHUB_API_TOKEN'];

var inputs = process.argv.slice(2);

var owner = inputs[0];
var repo = inputs[1];
var contributors = [];
var apiRoot = "https://api.github.com";


function getRepoContributors(repoOwner, repoName, cb) {
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
         downloadImageByURL(value.avatar_url, filename);
       });
    });

    function downloadImageByURL(url, filePath) {
      request
      .get(url)
      .on('error', function(err) {
        console.log(err)
      })
      .pipe(fs.createWriteStream(filePath))
    }
}



getRepoContributors(owner, repo, (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});
