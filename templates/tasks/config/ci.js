module.exports = function(gulp, plugins, growl) {
  gulp.task('images', function() {
    return gulp.src('assets/images/**/*')
      .pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('.tmp/public/images'))
      .pipe(plugins.if(growl, plugins.notify({ message: 'Images task complete' })));
  });

  var projectName = "Patient-Ambulatoire";
  var projectPath = __dirname + '/../../';

  // path to source files
  var scssSources = ['assets/styles/**/*.scss'];
  var jsSources = ['api/**/*.js'];
  var htmlSources = ['views/**/*.handlebars'];

  // path to the report generation folder ending with /
  var reportsPath = "./";

  var SonarWebReporters = require("sonar-web-frontend-reporters/sonarWebReporters");

  var scssReporter = new SonarWebReporters.SCSSReporter(reportsPath+"scssHint.json");
  gulp.task('ci-styles', function() {
    scssReporter.openReporter(projectName, projectPath+"assets/");
    return gulp.src(scssSources)
      .pipe(plugins.scssLint({
        config : ".scssHint.yml",
        customReport: scssReporter.reporter.bind(scssReporter)
      }))
      .on('end', scssReporter.closeReporter.bind(scssReporter));
  });

  var jsReporter = new SonarWebReporters.JSReporter(reportsPath+"jsHint.json");
  gulp.task('ci-scripts', function() {
    jsReporter.openReporter(projectName, projectPath+"api/");
    return gulp.src(jsSources)
      .pipe(plugins.jshint())
      .pipe(jsReporter.reporter)
      .on('end', jsReporter.closeReporter.bind(jsReporter));
    ;
  });

  var htmlReporter = new SonarWebReporters.HTMLReporter(reportsPath+"htmlHint.json");
  gulp.task('ci-html', function() {
    htmlReporter.openReporter(projectName, projectPath+"views/");
    return gulp.src(htmlSources)
      .pipe(plugins.htmlhint())
      //    .pipe(htmlhint('{"doctype-first" : false}'))
      //.pipe(htmlhint.reporter())
      .pipe(plugins.htmlhint.reporter(htmlReporter.reporter.bind(htmlReporter)))
      .on('end', htmlReporter.closeReporter.bind(htmlReporter));
  });

  gulp.task('ci-clean', function() {
    return gulp.src(['scssHin.json', 'jsHin.json', 'coverage/*'])
      .pipe(plugins.rimraf())
  });

  gulp.task('ci-default', ['ci-clean'], function() {
    gulp.start('ci-styles', 'ci-scripts', 'ci-html');
  });
};
