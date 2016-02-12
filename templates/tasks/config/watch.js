/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 *
 */
module.exports = function(gulp, plugins, growl) {
  plugins.livereload.listen();

  // Watch API files
  // NOTE This watcher is set-up by the sails-hook-autoreload NPM package

  // Watch assets
  gulp.task('watch:assets', function() {
    gulp.watch(['assets/**/*', 'tasks/pipeline.js'], ['syncAssets']);
  });

  // Watch views
  gulp.task('watch:views', function() {
    gulp.watch(['views/*', 'views/**/*'], ['reload']);
  });

};
