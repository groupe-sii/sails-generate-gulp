/**
 * sails-generate-gulp
 *
 * Usage:
 * `sails generate sails-generate-gulp`
 */

module.exports = {
  templatesDirectory: require('path').resolve(__dirname, '../templates'),

  before: require('./before'),
  after: require('./after'),

  targets: {

    // Gulp file
    './gulpfile.js': { template: 'gulpfile.js' },

    // Default asset pipeline config
    './tasks/pipeline.js': { template: 'tasks/pipeline.js' },

    // Gulp task configurations (`tasks/config`)
    './tasks/config/clean.prod.js': { template: 'tasks/config/clean.prod.js' },
    './tasks/config/concat.prod.js': { template: 'tasks/config/concat.prod.js' },
    './tasks/config/copy.prod.js': { template: 'tasks/config/copy.prod.js' },
    './tasks/config/images.prod.js': { template: 'tasks/config/images.prod.js' },
    './tasks/config/jst.js': { template: 'tasks/config/jst.js' },
    './tasks/config/reload.js': { template: 'tasks/config/reload.js' },
    './tasks/config/sails-linker-gulp.prod.js': { template: 'tasks/config/sails-linker-gulp.prod.js' },
    './tasks/config/sass.prod.js': { template: 'tasks/config/sass.prod.js' },
    './tasks/config/sync.js': { template: 'tasks/config/sync.js' },
    './tasks/config/watch.js': { template: 'tasks/config/watch.js' },

    // Built-in gulp tasks which are automatically called by Sails (`tasks/register`)
    './tasks/register/build.js': { template: 'tasks/register/build.js' },
    './tasks/register/compileAssets.prod.js': { template: 'tasks/register/compileAssets.prod.js' },
    './tasks/register/default.js': { template: 'tasks/register/default.js' },
    './tasks/register/linkAssets.js': { template: 'tasks/register/linkAssets.js' },
    './tasks/register/linkAssetsBuild.js': { template: 'tasks/register/linkAssetsBuild.js' },
    './tasks/register/prod.prod.js': { template: 'tasks/register/prod.prod.js' },
    './tasks/register/syncAssets.js': { template: 'tasks/register/syncAssets.js' },

    // Default SASS architecture
    './assets/styles/index.scss': { template: './styles/index.scss' },
    './assets/styles/utils/.gitkeep': { template: './styles/utils/.gitkeep' },
    './assets/styles/vendors/.gitkeep': { template: './styles/vendors/.gitkeep' },
    './assets/styles/base/.gitkeep': { template: './styles/base/.gitkeep' },
    './assets/styles/layout/.gitkeep': { template: './styles/layout/.gitkeep' },
    './assets/styles/components/.gitkeep': { template: './styles/components/.gitkeep' },
    './assets/styles/pages/.gitkeep': { template: './styles/pages/.gitkeep' },
    './assets/styles/themes/.gitkeep': { template: './styles/themes/.gitkeep' }
  }
};
