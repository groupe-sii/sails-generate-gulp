module.exports = function (gulp, plugins) {
  gulp.task('ci', function (cb) {
    plugins.sequence(
      'ci-clean',
      ['ci-styles', 'ci-scripts'],
      function(){
        process.exit(0);
      }
    );
  });
};
