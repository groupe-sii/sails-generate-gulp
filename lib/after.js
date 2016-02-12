var fs = require('fs');
/**
 * This `after` function is run after generating targets.
 *
 * - Update `.sailsrc` to set grunt hook to false
 * - Remove all grunt dependencies from `package.json`
 * - Add gulp dependencies in `package.json`
 * - Create a default SASS architecture
 *
 * @param  {Object}   scope
 * @param  {Function} cb
 */

module.exports = function(scope, cb) {
  var sailsrc     = JSON.parse(fs.readFileSync(scope.rootPath + '/.sailsrc')),
      packagejson = JSON.parse(fs.readFileSync(scope.rootPath + '/package.json'));

  //------------------------------
  // .sailsrc
  //------------------------------

  sailsrc.hooks = sailsrc.hooks || {};
  sailsrc.hooks.grunt = false;

  fs.writeFileSync(scope.rootPath + '/.sailsrc', JSON.stringify(sailsrc, null, 2));

  //------------------------------
  // Grunt
  //------------------------------

  delete packagejson.dependencies.grunt;
  delete packagejson.dependencies['grunt-contrib-clean'];
  delete packagejson.dependencies['grunt-contrib-coffee'];
  delete packagejson.dependencies['grunt-contrib-concat'];
  delete packagejson.dependencies['grunt-contrib-copy'];
  delete packagejson.dependencies['grunt-contrib-cssmin'];
  delete packagejson.dependencies['grunt-contrib-jst'];
  delete packagejson.dependencies['grunt-contrib-less'];
  delete packagejson.dependencies['grunt-contrib-uglify'];
  delete packagejson.dependencies['grunt-contrib-watch'];
  delete packagejson.dependencies['grunt-sails-linker'];
  delete packagejson.dependencies['grunt-sync'];

  //------------------------------
  // Gulp
  //------------------------------

  packagejson.dependencies.gulp = '^3.8.7';
  packagejson.dependencies['gulp-autoprefixer'] = '^3.1.0';
  packagejson.dependencies['gulp-concat'] = '^2.3.4';
  packagejson.dependencies['gulp-linker'] = '^0.1.7';
  packagejson.dependencies['gulp-load-plugins'] = '^0.6.0';
  packagejson.dependencies['gulp-rename'] = '^1.2.2';
  packagejson.dependencies['gulp-sass'] = '^2.1.1';
  packagejson.dependencies['gulp-uglify'] = '^1.0.1';
  packagejson.dependencies['rimraf'] = '^2.5.1';
  packagejson.dependencies['run-sequence'] = '^1.1.5';
  packagejson.dependencies['sails-hook-gulp'] = '0.0.1';

  packagejson.devDependencies = {};
  packagejson.devDependencies['gulp-cache'] = '^0.4.1';
  packagejson.devDependencies['gulp-changed'] = '1.3.0';
  packagejson.devDependencies['gulp-clean'] = '^0.3.1';
  packagejson.devDependencies['gulp-htmlhint'] = '^0.0.8';
  packagejson.devDependencies['gulp-if'] = '^1.2.4';
  packagejson.devDependencies['gulp-jade'] = '0.8.0';
  packagejson.devDependencies['gulp-jshint'] = '^1.8.4';
  packagejson.devDependencies['gulp-livereload'] = '^3.8.1';
  packagejson.devDependencies['gulp-notify'] = '^1.4.2';
  packagejson.devDependencies['gulp-rimraf'] = '^0.2.0';
  packagejson.devDependencies['gulp-scss-lint'] = '^0.3.0';
  packagejson.devDependencies['gulp-sourcemaps'] = '^1.6.0';
  packagejson.devDependencies['gulp-template-compile'] = '^0.2.1';
  packagejson.devDependencies['gulp-util'] = '^3.0.0';

  fs.writeFileSync(scope.rootPath + '/package.json', JSON.stringify(packagejson, null, 2));

  cb();
};
