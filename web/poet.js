/**
 * Poet blogging engine [http://jsantell.github.io/poet/]
 */
var config = require('../config.json'),
    content = require('../content/config.json');

var Poet = require('poet'),
    moment = require('moment'),
    _ = require('lodash');

module.exports = function(app) {

  // Poet configuration
  var poet = Poet(app, {
    posts: 'content/posts',
    metaFormat: 'yaml',
    showDrafts: config.posts.showDrafts,
    postsPerPage: config.posts.perPage,
    readMoreLink: function(post) {
      return '<a href="'+post.url+'" class="read-more">'+post.title+'</a>';
    }
  });

  // Routes
  poet.addRoute('/', function(req, res) {
    renderPage(req, res, 1);
  });
  poet.addRoute('/page/:page', function(req, res) {
    renderPage(req, res, req.params.page);
  });

  poet.addRoute('/post/:post', function(req, res) {
    setParameters(res.locals);

    var post = poet.helpers.getPost(req.params.post);
    if (post) {
      res.render('post', {
        post: post
      });
    }
    else
      res.redirect('/');
  });

  // Init
  poet.init(function(err, posts) {
    console.info('Poet engine initialized. [found '+posts.helpers.getPostCount()+' posts]');
    if (err)
      console.error('Poet init '+err);
  });

  // Watch for file changes
  poet.watch();

  function renderPage(req, res, page) {
    setParameters(res.locals);

    var lastPost = page*config.posts.perPage;
    var posts = poet.helpers.getPosts(lastPost-config.posts.perPage, lastPost);

    addToPosts(posts);

    if (poet.helpers.getPageCount() >= page) {
      res.render('page', {
        posts: posts,
        page: page
      });
    }
    else
      res.redirect('/');
  }
  function setParameters(locals) {
    locals.config = content;
    locals.author = content.author;
  }

  function addToPosts(posts) {
    _.forEach(posts, function(post) {
      var m = moment(post.date);
      post.dateDay = m.format('DD');
      post.dateMonth = m.format('MMM');
      post.dateYear = m.format('YYYY');
    });
  }
};