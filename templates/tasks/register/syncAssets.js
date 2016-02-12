module.exports = function (gulp, plugins) {
  gulp.task('syncAssets', function(cb) {
    plugins.sequence(
      // 'jst:dev',
      // 'images',
      // 'sync:dev',
      'compileAssets',
      'images',
      'linkAssets',
      cb
    );
  });
};
