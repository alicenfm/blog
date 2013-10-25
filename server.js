/**
 * Blog experiment
 *
 * Nil Gradisnik <nil.gradisnik@gmail.com>
 */

var PORT = 3000;

var app = require('./web/app');

// Start the server
app.listen(PORT, function() {
  console.info('Blog experiment web server running on localhost:'+PORT);
});