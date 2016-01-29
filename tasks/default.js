module.exports = function(gulp) {
    var plugins;


    plugins = {
      notify  : require('gulp-notify'),
      runSequence  : require('run-sequence'),
    };

    gulp.task('default', function () {
      plugins.runSequence('typescript', 'copy');
    })
}
