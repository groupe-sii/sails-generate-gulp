module.exports = function (gulp, plugins) {
  gulp.task('build', function (cb) {
    plugins.sequence(
      'compileAssets',
      'linkAssetsBuild',
      'clean:build',
      'copy:build',
      cb
    );
  });

  gulp.task('build:prod', function (cb) {
    plugins.sequence(
      'compileAssets:prod',
      'concat:js',
      'linkAssetsBuild:prod',
      'clean:build',
      'copy:build',
      cb
    );
  });
};
