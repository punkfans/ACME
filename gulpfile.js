var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('default', ['server', 'watch']);

gulp.task('server', ['scss'], function () {
    connect.server({
        livereload: true
    });
});

gulp.task('scss', function () {
    return gulp
        .src(['*.scss', 'app/**/*.scss'])
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('app/css'));
});


gulp.task('watch', function () {
    gulp.watch('app/**/*.scss', ['scss']);
});