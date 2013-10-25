/**
 * Blog experiment
 *
 * Nil Gradisnik <nil.gradisnik@gmail.com>
 */
var config = require('./config.json');
var app = require('./web/app');

// Start the server
app.listen(config.server.port, function() {
  console.info('Blog experiment web server running on localhost:'+config.server.port);
});