'use strict';

var createBucketsFn = require('./fn-buckets').createBucketsFn;

var FN_NAME = 'equal';

module.exports = function (datasource) {
  return createBucketsFn(datasource, FN_NAME, '>');
};

module.exports.fnName = FN_NAME;
