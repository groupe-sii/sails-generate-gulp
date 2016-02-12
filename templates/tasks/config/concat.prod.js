/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 *
 */
module.exports = function(gulp, plugins, growl) {

  gulp.task('concat:js', function() {
    return gulp.src(require('../pipeline').jsFilesToInject)
      //.pipe(plugins.jshint('.jshintrc'))
      //.pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat('production.js'))
      .pipe(plugins.rename({ suffix: '.min' }))
      .pipe(plugins.uglify(/* {mangle: true} */))
      .pipe(gulp.dest('./.tmp/public/concat'))
      .pipe(plugins.if(growl, plugins.notify({ message: 'Concatenate Scripts task complete' })));
  });

  gulp.task('concat:prod', function() {
    return gulp.src(require('../pipeline').jsFilesToInject)
      //.pipe(plugins.jshint('.jshintrc'))
      //.pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat('production.js'))
      .pipe(plugins.rename({ suffix: '.min' }))
      .pipe(plugins.uglify(/* {mangle: true} */))
      .pipe(gulp.dest('./.tmp/public/concat'));
  });

};

