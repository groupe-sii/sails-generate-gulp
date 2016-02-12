/**
 * Copy files and folders.
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies modulesToCopy array content
 * Copies all directories and files, except sass files, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies modulesToCopy array content
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 */

module.exports = function(gulp, plugins, growl) {
  gulp.task('copy:dev', function() {
    require('../pipeline').modulesToCopy.forEach(function(module) {
      gulp.src(module.src).pipe(gulp.dest('.tmp/public/' + module.dest));
    });

    return gulp.src(['./assets/**/*.!(scss)', '!assets/images{,/**}'])
      .pipe(gulp.dest('.tmp/public'))
      .pipe(plugins.if(growl, plugins.notify({ message: 'Copy dev task complete' })));
  });

  gulp.task('copy:build', function() {
    require('../pipeline').modulesToCopy.forEach(function(module) {
      gulp.src(module.src).pipe(gulp.dest('.tmp/public/' + module.dest));
    });

    return gulp.src(['./assets/**/*.!(scss)', '!assets/images{,/**}'])
      .pipe(gulp.dest('.tmp/public'))
  });
};
