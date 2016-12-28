var gulp = require('gulp');
var shell = require('gulp-shell');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('build/css'))
});

/*
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/!**!/!*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/!*.html', browserSync.reload);
    gulp.watch('app/js/!**!/!*.js', browserSync.reload);
});*/

gulp.task('start-lite-server', shell.task([
    'npm start'
]));

gulp.task('watch', ['sass'], function (){
    gulp.watch('app/sass/**/*.scss', ['sass']);
});

gulp.task('start', ['start-lite-server', 'watch']);