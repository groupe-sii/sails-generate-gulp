module.exports = function (gulp, plugins) {
  gulp.task('linkAssetsBuild', function(cb) {
    plugins.sequence(
      'sails-linker-gulp:devAssetsRelative',
      'sails-linker-gulp:devViewsRelative',
      cb
    );
  });

  gulp.task('linkAssetsBuild:prod', function(cb) {
    plugins.sequence(
      'sails-linker-gulp:prodAssetsRelative',
      'sails-linker-gulp:prodViewsRelative',
      cb
    );
  });
};
