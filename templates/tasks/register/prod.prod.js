module.exports = function (gulp, plugins) {
  gulp.task('prod', function(cb) {
    plugins.sequence(
      'compileAssets:prod',
      'concat:prod',
      'sails-linker-gulp:prodAssets',
      'sails-linker-gulp:prodViews',
      'images:prod',
      cb
    );
  });
};
