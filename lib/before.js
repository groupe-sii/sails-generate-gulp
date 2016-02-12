/**
 * Module dependencies
 */

var util  = require('util'),
    _     = require('lodash');

/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object}   scope
 * @param  {Function} cb
 */

module.exports = function(scope, cb) {

  // Validate custom scope variables which are required by this generator
  if (!scope.rootPath) {
    return cb(new Error(
      'Missing scope variable: `rootPath`\n' +
      'Please make sure it is specified and try again.'
    ));
  }

  // Determine default values based on the available scope
  _.defaultsDeep(scope, {
    currentTime: new Date()
  });

  // Take multiple "passes" if necessary
  _.defaultsDeep(scope, {
    rootPath: scope.rootPath
  });

  // Trigger callback
  cb();
};
