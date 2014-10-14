







var gulp = require('gulp');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var umd = require('gulp-umd')









// Javascript -------------------- //
gulp.task('default', function() {
    gulp.src('src/*coffee')
        .pipe(coffeelint('./coffeelint.json'))
        .pipe(coffeelint.reporter())
        .pipe(coffee({bare: true}))
        .pipe(umd())
        .pipe(gulp.dest('build'));
});
