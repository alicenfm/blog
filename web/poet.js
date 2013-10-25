/**
 * Poet blogging engine [http://jsantell.github.io/poet/]
 */
var Poet = require('poet');

module.exports = function(app) {

  // Poet configuration
  var poet = Poet(app, {
    posts: 'content/posts',
    metaFormat: 'yaml',
    showDrafts: false,
    postsPerPage: 5
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