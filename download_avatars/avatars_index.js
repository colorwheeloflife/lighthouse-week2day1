var repoContributors = require("./getRepoContributors");

var inputs = process.argv.slice(2);
if (inputs > 2) {
  throw new Error("ERROR: Too many arguments. Please enter 2 arguments.");
}
if (inputs < 2) {
  throw new Error("ERROR: Too few arguments. Please enter 2 arguments.");
}

var owner = inputs[0];
var repo = inputs[1];

repoContributors(owner, repo, (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});




// PROBLEMATIC SITUATIONS TO ELIMINATE:
// folder to store images to does not exist
  // logging/printing an error message and exiting

// incorrect number of arguments given to program (0, 1, 3, etc.) √
  // throwing an error √

// nonexisting owner/repo provided
  // throwing a custom error (read: http://benno.id.au/blog/2011/08/08/nodejs-exceptions)

// missing .env file with configuration information
  // preventing the error from happening

// incorrect credentials in .env file
  // falling back to a default value





