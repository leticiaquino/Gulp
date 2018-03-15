var gulp = require('gulp');
var sass = require('gulp-sass');

var origem = './scss/style.scss';
var destino = './css';

gulp.task('sass', function(){
    gulp.src(origem)
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(destino))
});

gulp.task('default', ['sass'], function(){
});


