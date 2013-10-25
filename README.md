# Blog experiment
This is a blog experiment using various geek friendly shortcuts to avoid reinventing a full blown blogging platform. Cloning this repo and executing a few command and you have a simple blogging platform ready to roll.

## Using
- Nodejs web server
- [Poet](https://github.com/jsantell/poet) blogging engine
- Github as a [CMS](http://en.wikipedia.org/wiki/Content_management_system)

## How to blog
1. Fork this repository.
2. Fork the [content](https://github.com/nilgradisnik/blog-experiment-content) repository.
3. Fix the git submodule path so that it points to your content fork. (.gitmodules file)
4. Clone this repository to your server and run it. (edit config.json if necessary)
5. Make sure you add Service Hook -> Webhook URL in the [content](https://github.com/nilgradisnik/blog-experiment-content) repository Settings.
6. Write blog posts by adding new files to the `posts` folder inside [content](https://github.com/nilgradisnik/blog-experiment-content) repository using Github website and commit changes.

## How does it work
Every commit to the content repository triggeres a Webhook, which makes a post request to your blog-experiment server. The server pulls the changes from the content git submodule. Poet engine detects file changes and reloads the blog content.

## Blog content
The blog content is located in `content` submodule, more info on how to write blog posts can be found there. Run `git submodule init && git submodule update` to fetch submodule.

## Dependencies
Run `npm install` to install all dependencies

## Running
Run `npm start`

### Author
Nil Gradisnik <nil.gradisnik@gmail.com>