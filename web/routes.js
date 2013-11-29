/**
 * Routes
 */
var config = require('../config.json');
var github = require('./github');

module.exports = function(app) {

  // Github Webhook
  app.post(config.github.webhook, github.update);

  // 404
  app.use(function(req, res) {
    res.status(404);
    res.redirect('/');
  });
};