'use strict';

var ProgramsApi = require('./');
var testApiMethod = require('../_test');

describe('SuiteAPI Programs endpoint', function() {

  describe('#runs', function() {

    testApiMethod(ProgramsApi, 'runs').withArgs({
      customer_id: 1
    }).shouldPostToEndpoint('/ac/programs/entrypoints/entry-pushwoosh/runs', {
      customer_id: 1
    });

  });

});
