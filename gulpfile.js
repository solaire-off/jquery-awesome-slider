var syntax        = 'sass'; // Syntax: sass or scss;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'demo'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
  gulp.src('src/sass/awesome-jquery-slider.sass')
    .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('dist/'))
    .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
    .pipe(rename({ suffix: '.min', prefix : '' }))
    .pipe(gulp.dest('demo/css'))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
  gulp.src('src/sass/demo.sass')
    .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('demo/css'))
    .pipe(browserSync.stream())
});

gulp.task('js', function() {
	gulp.src([
		'src/js/awesome-jquery-slider.js'
		])
	.pipe(gulp.dest('demo/js'))
	.pipe(gulp.dest('dist/'))
	.pipe(concat('awesome-jquery-slider.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({ stream: true }))
	gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
		])
	.pipe(gulp.dest('demo/js'))
});

gulp.task('rsync', function() {
	return gulp.src('demo/**')
	.pipe(rsync({
		root: 'demo/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', ['styles', 'js', 'browser-sync'], function() {
	gulp.watch('src/'+syntax+'/**/*.'+syntax+'', ['styles']);
	gulp.watch(['libs/**/*.js', 'src/js/*.js'], ['js']);
	gulp.watch('demo/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);
