module.exports = function (gulp, plugins) {
  gulp.task('default', function(cb) {
    plugins.sequence(
      'compileAssets',
      ['images', 'linkAssets'],
      ['watch:assets', 'watch:views'],
      cb
    );
  });
};
