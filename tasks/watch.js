module.exports = function(gulp) {
    var plugins;

    gulp.task('watch', function () {
      gulp.start('server');
      gulp.watch('templates/**/*', ['copy:templates']);
      gulp.watch('index.html', ['copy:index']);
      gulp.watch('static/scripts/**/*', ['typescript']);
    });
}
