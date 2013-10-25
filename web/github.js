/**
 * Pull the github repo route
 */
var config = require('../config.json');
var exec = require('child_process').exec,
    child;

exports.update = function(req, res) {
  console.info('Github webhook update');
  
  // Inspect payload
  var payload = req.body.payload;
  if (payload) {
    payload = JSON.parse(payload);

    // Optionally check if repo ID maches
    if (config.github.repoId === 0 || payload.repository.id === config.github.repoId)
      updateBlog();

    res.send(200);
  }
  else
    res.send(404);
};

// Execute git pull
function updateBlog() {
  child = exec('git pull origin master', {cwd: 'personal'}, function(err) {
    if (err !== null)
      console.error('updateBlog: '+err);
  });
}