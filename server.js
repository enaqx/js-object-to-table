'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var koa = require('koa');
var favicon = require('koa-favicon');
var serve = require('koa-static');

/**
 * Configuration
 */
var port = 3000;
var icon = '/img/favicon.ico';

/**
 * Server
 */
var app = module.exports  = koa();
app.use(serve(__dirname));
app.use(favicon(__dirname + icon));
app.listen(port);
console.log('Server started, listening on port: ' + port);