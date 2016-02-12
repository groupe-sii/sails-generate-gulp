/**
 * Copies images to .tmp/images after compressing them.
 *
 * ---------------------------------------------------------------
 *
 *
 */
module.exports = function(gulp, plugins, growl) {
  gulp.task('images', function() {
    return gulp.src('assets/images/**/*')
      .pipe(gulp.dest('.tmp/public/images'))
      .pipe(plugins.if(growl, plugins.notify({ message: 'Images task complete' })));
  });

  gulp.task('images:prod', function() {
    return gulp.src('assets/images/**/*')
      .pipe(gulp.dest('.tmp/public/images'));
  });
};
