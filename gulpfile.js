var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

//sass
gulp.task('sass', function(){
	return gulp.src('source/sass/main.scss')
	.pipe(sass({ sourceComments: 'map'}))
	//autoprefixer
	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	.pipe(gulp.dest('builds/css')); 
});

//watch
gulp.task('watch', function(){
	gulp.watch('source/sass/*.scss', ['sass']);
});