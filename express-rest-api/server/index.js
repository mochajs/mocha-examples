#!/usr/bin/env node

const app = require('./app');
const debug = require('debug')('example:server');

app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + app.get('port'));
});
