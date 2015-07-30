var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    path = require('path');

var lessFiles = ['**/*.less', '!node_modules/**/*.*'];
var cssFiles = ['**/*.css', '!node_modules/**/*.*'];
var htmlFiles = ['**/*.html', '!node_modules/**/*.*'];

gulp.task('less', function() {
  gulp.src(lessFiles)
    .pipe(less())
    .pipe(gulp.dest('./'));
});

gulp.task('connect', function() {
  connect.server({
    root: path.resolve('./'),
    livereload: true
  });
});

gulp.task('css', function () {
  gulp.src(cssFiles)
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(htmlFiles)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(lessFiles, ['less']);
  gulp.watch(cssFiles, ['css']);
  gulp.watch(htmlFiles, ['html']);
});

gulp.task('default', ['connect', 'watch']);