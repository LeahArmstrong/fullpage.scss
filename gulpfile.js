var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('default', function () {
  sass('./assets/scss/*.scss', {style: 'compact'})
    .pipe(prefix("last 3 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./assets/css'));
});
