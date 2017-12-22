var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var del = require('del');

// check env
var isProd = gutil.env.e === 'prod';

gulp.task('default', ['clean', 'server', 'watch']);

// start the server
gulp.task('server', ['css', 'js'], function () {
    if(isProd) {
        connect.server({
            root: 'public',
            livereload: true
        });
    }else {
        connect.server({
            livereload: true
        });
    }
});

// delete generated files before build
gulp.task('clean', function() {
    del(['app/css/*', 'app/js/*', 'app/template/*', 'public/app/css/*', 'public/app/js/*']);
});

// compile scss to css
gulp.task('scss', function () {
    return gulp
        .src(['*.scss', 'app/**/*.scss'])
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('app/css'));
});

//generate the bundle.css which is used in index.html
gulp.task('css', ['scss'], function () {
    return gulp
        .src(['app/**/*.css'])
        .pipe(!isProd ? sourcemaps.init() : gutil.noop())
        .pipe(concat('bundle.css'))
        .pipe(isProd ? cssmin() : gutil.noop())
        .pipe(!isProd ? sourcemaps.write() : gutil.noop())
        .pipe(isProd ? gulp.dest('public/app/css') : gulp.dest('app/css'));
});

// take care of ngAnnotate
gulp.task('annotate', function () {
    return gulp
        .src(['app/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(gulp.dest('app'));
});

// generate bundle.js
gulp.task('js', ['annotate', 'html'], function () {
    return gulp
        .src(['app/**/*.js', '!app/**/*/min.js'])
        .pipe(!isProd ? sourcemaps.init() : gutil.noop())
        .pipe(concat('bundle.js'))
        .pipe(isProd ? uglify() : gutil.noop())
        .pipe(!isProd ? sourcemaps.write() : gutil.noop())
        .pipe(isProd ? gulp.dest('public/app/js') : gulp.dest('app/js'));
});

// take care of templateCache
gulp.task('html', function() {
    return gulp
        .src('app/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(templateCache({
            root: 'app',
            module: 'app'
        }))
        .pipe(gulp.dest('app/template'))
});

// watches file changes
gulp.task('watch', function () {
    gulp.watch('app/**/*.scss', ['scss']);
});