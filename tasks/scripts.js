module.exports = function(gulp) {
    var plugins;

    plugins = {
      typescript : require('gulp-typescript'),
      notify : require('gulp-notify'),
    };

    gulp.task('typescript', function() {
      return gulp.src([
        '**/*.ts',
        ], {
          cwd : 'static/scripts'
        })
        .pipe(plugins.typescript({
          "target": "ES5",
          "module": "system",
          "moduleResolution": "node",
          "sourceMap": true,
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "removeComments": true,
          "noImplicitAny": false

        })
        .on("error",plugins.notify.onError(function (error) {
            return "Message to the notifier: " + error.message;
        })))
        .pipe(gulp.dest('build/static/scripts'))
        .pipe(plugins.notify(gulp.config.notifyConfig('Coffee compiled')));
    });



}
