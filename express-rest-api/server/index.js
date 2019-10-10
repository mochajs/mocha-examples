#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./app');
const debug = require('debug')('example:server');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port);
