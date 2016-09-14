var repoContributors = require("./getRepoContributors");
var index = require("./avatars_index");
var request = require("request");
var fs = require('fs');

module.exports = function downloadImageByURL(url, filePath) {
  request
  .get(url)
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream(filePath))
}