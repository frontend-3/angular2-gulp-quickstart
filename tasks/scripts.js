module.exports = function(gulp) {
    var plugins,
        tsProject;

    plugins = {
      typescript : require('gulp-typescript'),
      notify : require('gulp-notify'),
    };


    tsProject = plugins.typescript.createProject('./tsconfig.json');

    gulp.task('typescript', function() {
      var tsResult = gulp.src([
        '**/*.ts',
        ], {
          cwd : 'static/scripts'
        }).pipe(plugins.typescript(tsProject))
          .pipe(gulp.dest('build/static/scripts'))
          .pipe(plugins.notify(gulp.config.notifyConfig('Typescript compiled')));
    });

}
