var gulp = require('gulp');
//var shell = require('gulp-shell');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
});

/*gulp.task('minify-css', function() {
    return gulp.src('styles/!*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});*/

/*gulp.task('js', function(){
    return gulp.src('app/js/!**!/!*.js')
        .pipe(gulp.dest('dist/js'))
});*/

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

/*
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/!**!/!*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/!*.html', browserSync.reload);
    gulp.watch('app/js/!**!/!*.js', browserSync.reload);
});*/

// Need gulp-shell npm module
/*gulp.task('start-lite-server', shell.task([
    'npm start'
]));*//*gulp.task('start-lite-server', shell.task([
    'npm start'
]));*/

gulp.task('watch', ['sass', 'js'], function (){
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['js']);
});

//gulp.task('start', ['start-lite-server', 'watch']);