module.exports = function(gulp) {
    var plugins,
        tsProject;

    plugins = {
      typescript : require('gulp-typescript'),
      notify : require('gulp-notify'),
    };


    tsProject = plugins.createProject('../typings.json');

    gulp.task('typescript', function() {
      return gulp.src([
        '**/*.ts',
        ], {
          cwd : 'static/scripts'
        })
        .pipe(plugins.ts(tsProject))
        .on("error",plugins.notify.onError(function (error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(gulp.dest('build/static/scripts'))
        .pipe(plugins.notify(gulp.config.notifyConfig('Typescript compiled')));
    });

}
