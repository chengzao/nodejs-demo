var gulp = require('gulp');
var tiny = require('gulp-tinypng-nokey');
var path = require('path');

var imgSrc = path.join(__dirname,'./images/**/*.{png,jpg,jpeg}');
var imgDest = path.join(__dirname,'./dest');

/**
 * 压缩图片
 */
gulp.task('tinypng', function(cb) {
    gulp.src(imgSrc)
        .pipe(tiny())
        .pipe(gulp.dest(imgDest));
});