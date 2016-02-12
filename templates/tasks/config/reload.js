/**
 * Reload current page using LiveReload
 *
 * ---------------------------------------------------------------
 *
 */

module.exports = function(gulp, plugins) {
  gulp.task('reload', function() {
    plugins.livereload.reload();
  });
};
