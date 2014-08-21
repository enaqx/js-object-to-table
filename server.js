'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var koa = require('koa');
var serve = require('koa-static');

/**
 * Configuration
 */
var port = 3000;

/**
 * Server
 */
var app = module.exports  = koa();
app.use(serve(__dirname));
app.listen(port);
console.log('Server started, listening on port: ' + port);