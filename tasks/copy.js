module.exports = function(gulp) {
    var plugins,
        argv;

    argv = require('yargs').argv;

    plugins = {
      notify  : require('gulp-notify'),
      runSequence  : require('run-sequence'),
    };

    gulp.task('copy:templates', function() {
      return gulp.src([
        'templates/**/*'
        ])
        .pipe(gulp.dest(gulp.config.deploy_routes().templates))
        .pipe(plugins.notify(gulp.config.notifyConfig('Copy templates')));
    });

    gulp.task('copy:index', function() {
      return gulp.src([
        'index.html'
        ])
        .pipe(gulp.dest(gulp.config.deploy_routes().base))
        .pipe(plugins.notify(gulp.config.notifyConfig('Copy index')));
    });

    gulp.task('copy', function () {
      plugins.runSequence('copy:templates', 'copy:index');
    })
}
