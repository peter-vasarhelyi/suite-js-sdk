'use strict';

var util = require('util');
var _ = require('lodash');
var logger = require('logentries-logformat')('suite-sdk');

var Base = require('../_base');

var Programs = function(request, options) {
  Base.call(this, options);
  this._request = request;
};

util.inherits(Programs, Base);

_.extend(Programs.prototype, {

  runs: function(payload, options) {
    logger.log('start_program_via_api');

    return this._request.post(
      this._getCustomerId(options),
      '/ac/programs/entrypoints/entry-pushwoosh/runs',
      payload,
      options
    );
  }

});

Programs.create = function(request, options) {
  return new Programs(request, options);
};

module.exports = Programs;
