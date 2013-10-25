/**
 * Poet blogging engine [http://jsantell.github.io/poet/]
 */
var config = require('../config.json');
var Poet = require('poet');

module.exports = function(app) {

  // Poet configuration
  var poet = Poet(app, {
    posts: 'personal/posts',
    metaFormat: 'yaml',
    showDrafts: config.posts.showDrafts,
    postsPerPage: config.posts.perPage
  });

  // Init
  poet.init(function(err, posts) {
    console.info('Poet engine initialized. [found '+posts.helpers.getPostCount()+' posts]');
    if (err)
      console.error('Poet init '+err);
  });

  // Watch for file changes
  poet.watch();
};