var settings,
    config,
    gulp,
    argv;

gulp = require('gulp');
config = require('./config.js');

require('gulp-simple-load-tasks')(gulp)
settings = require('./settings/dev');

config.settings = settings;
gulp.config = config;
gulp.loadTasks(__dirname + '/tasks');
