/**
 * Express configuration
 */

var stylus = require('stylus'),
    nib = require('nib'),
    express = require('express');

module.exports = function(app) {

  app.configure(function() {

    app.set('view engine', 'jade');
    app.set('views', 'public/blog');

    app.use(app.router);
    app.use(express.compress());
    app.use(express.favicon());

    // Stylus + nib
    app.use(stylus.middleware({
      src: 'public/style',
      dest: 'public',
      compile: function(str, path) {
        return stylus(str)
          .set('filename', path)
          .set('compress', true)
          .use(nib());
      }
    }));

    app.use(express.static('public'));
    app.use(express.logger('dev'));
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
  });
};