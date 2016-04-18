module.exports = function(gulp) {
  gulp.task('server', function () {
    var connect = require('connect');
    var app = connect()
        .use('/', connect.static(gulp.config.deploy_routes().base))
        .use('/node_modules', connect.static('./node_modules'))
        .use('/templates', connect.static(gulp.config.deploy_routes().templates))
        .use('/static', connect.static(gulp.config.deploy_routes().static));

    require('http')
      .createServer(app)
      .listen(9000)
      .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
      })
  });
}


