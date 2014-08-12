base-tumblr
===============

## Overview
This repo attempts to marry base-marionette with the needs of custom tumblr themes.  

It's roughly based off of the html from [https://github.com/davesantos/tumblr-boilerplate](https://github.com/davesantos/tumblr-boilerplate)

Most of the tumblr html action happens in [https://github.com/UseAllFive/base-tumblr/blob/master/web/index.html](https://github.com/UseAllFive/base-tumblr/blob/master/web/index.html)

## Getting started
```BASH
npm install
bower install
grunt
```

### Development Flow
1. Run `node rendered_server.js` to server up the pre-rendered tumblr html with every post type
2. Develop js/css as needed
3. Deploy and test

### Annotated Source
We use [groc](http://nevir.github.io/groc) to generate annotated source code for
all our files. It is generated automatically when `grunt` is running and can be found at
`<webroot>/docs/app.html`.

# Deploy Process for Production

### Deploy
1. Install dependencies `npm install;bower install`
2. Copy require-main.js to compiled.js and upload through tumblr's UI

## Testing

## Code Standards
### Sublime Settings
The JavaScript linting for this project requires [Sublime Text 3](http://www.sublimetext.com/3).

In Sublime Text 3 (ST3) install the following packages `CMD + Shift + P`:
- SublimeLinter
- SublimeLinter-jshint
- SublimeLinter-jscs

Next make sure you globally install the following on your command line:
- jshint `npm install -g jshint`
- jscs (JavaScript Code Style Checker) `npm -g install jscs`

### Resources
- Setup package control in ST3 - [Setup Package Control in ST3](https://sublime.wbond.net/installation)
- jscs documentation -  [jscs github repo](https://github.com/mdevils/node-jscs)
