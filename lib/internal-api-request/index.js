'use strict';

var util = require('util');
var _ = require('lodash');
var Request = require('./../api-request');

var InternalApiRequest = function(suiteRequest) {
  Request.call(this, suiteRequest);
};

util.inherits(InternalApiRequest, Request);

_.extend(InternalApiRequest.prototype, {

  get: function(customerId, url, options) {
    var completeUrl = this._assembleUrl(customerId, url);
    return Request.prototype.get.call(this, completeUrl, options);
  },


  post: function(customerId, url, data, options) {
    var completeUrl = this._assembleUrl(customerId, url);
    return Request.prototype.post.call(this, completeUrl, data, options);
  },


  put: function(customerId, url, data, options) {
    var completeUrl = this._assembleUrl(customerId, url);
    return Request.prototype.put.call(this, completeUrl, data, options);
  },


  _assembleUrl: function(customerId, url) {
    return '/' + customerId + url;
  }

});


InternalApiRequest.create = function(suiteRequest) {
  return new InternalApiRequest(suiteRequest);
};


module.exports = InternalApiRequest;
