/**
 * Pull the github repo route
 */

var REPO_ID = 12929302;

var exec = require('child_process').exec,
    child;

exports.update = function(req, res) {
  console.debug('Github webhook update');
  
  // Inspect payload
  var payload = req.body.payload;
  if (payload) {
    payload = JSON.parse(payload);

    // Make sure repo ID maches
    if (payload.repository.id === REPO_ID)
      updateBlog();

    res.send(200);
  }
  else
    res.send(404);
};

// Execute git pull
function updateBlog() {
  child = exec('git pull', {cwd: 'content'}, function(err) {
    if (err !== null)
      console.error('updateBlog: '+err);
  });
}