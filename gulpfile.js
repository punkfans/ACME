var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default', ['server', 'watch']);

// start the server
gulp.task('server', ['css'], function () {
    connect.server({
        livereload: true
    });
});

// compile scss to css
gulp.task('scss', function () {
    return gulp
        .src(['*.scss', 'app/**/*.scss'])
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('app/css'));
});

//generate the app.css which is used in index.html
gulp.task('css', ['scss'], function () {
    return gulp
        .src(['app/**/*.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('app/css'));
});

// watches file changes
gulp.task('watch', function () {
    gulp.watch('app/**/*.scss', ['scss']);
});