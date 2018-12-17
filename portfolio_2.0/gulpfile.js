var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('buildcss', function(){
    return gulp.src('scss/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['buildcss']);
});