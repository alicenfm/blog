/**
 * Express web app
 */
var app = require('express')();

// Load web modules
require('./configure')(app);
require('./routes')(app);

// Poet blogging engine
require('./poet')(app);

module.exports = app;