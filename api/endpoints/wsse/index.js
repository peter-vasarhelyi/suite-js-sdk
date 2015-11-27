'use strict';

var util = require('util');
var _ = require('lodash');
var logger = require('logentries-logformat')('suite-sdk');

var Base = require('../_base');

var Wsses = function(request, options) {
  Base.call(this, options);
  this._request = request;
};

util.inherits(Wsses, Base);

_.extend(Wsses.prototype, {

  runs: function(payload, options) {
    logger.log('create_wsse_via_api');

    let customerId = this._getCustomerId(options);

    return this._request.post(
      customerId,
      '/customers/' + customerId + '/wsse',
      payload,
      options
    );
  }

});

Wsses.create = function(request, options) {
  return new Wsses(request, options);
};

module.exports = Wsses;
