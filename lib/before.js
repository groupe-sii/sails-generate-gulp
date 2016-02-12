var fs      = require('fs'),
    rimraf  = require('rimraf'),
    sails   = require('sails'),
    _       = require('lodash');

/**
 * This `before` function is run before generating targets.
 *
 * - Validate, configure defaults, get extra dependencies
 * - Remove Gruntfile.js
 * - Remove old tasks folder
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

  // Remove Gruntfile if exists
  try {
    fs.unlinkSync(scope.rootPath + '/Gruntfile.js');
  } catch (e) {
    sails.log.error('Unable to delete \'' + e.path + '\'');
  }

  // Remove previous styles folder
  try {
    rimraf.sync(scope.rootPath + '/assets/styles');
  } catch (e) {
    sails.log.error('Unable to delete \'' + e.path + '\'');
  }

  // Remove gulpfile.js if exists
  try {
    fs.unlinkSync(scope.rootPath + '/gulpfile.js');
  } catch (e) {}

  // Remove old `tasks` folder then trigger callback
  rimraf(scope.rootPath + '/tasks', function () {
    cb();
  });
};
