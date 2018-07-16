'use strict';

var cp            = require('child_process');

var browserSync   = require('browser-sync').create();
var gulp          = require('gulp');
var del           = require('del');
var cleanCSS      = require('gulp-clean-css');
var header        = require('gulp-header');
var imagemin      = require('gulp-imagemin');
var rename        = require("gulp-rename");
var sass          = require('gulp-sass');
var uglify        = require('gulp-uglify');
var runSequence   = require('run-sequence');

var pkg           = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
' */\n',
''
].join('');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
  .pipe(gulp.dest('./assets/vendor/bootstrap'))

  // Font Awesome
  gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{scss,scss/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
    ])
  .pipe(gulp.dest('./assets/vendor/font-awesome'))

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
    ])
  .pipe(gulp.dest('./assets/vendor/jquery'))

  // jQuery Easing
  gulp.src([
    './node_modules/jquery.easing/*.js'
    ])
  .pipe(gulp.dest('./assets/vendor/jquery-easing'))

  // Simple Line Icons
  gulp.src([
    './node_modules/simple-line-icons/fonts/**',
    ])
  .pipe(gulp.dest('./assets/vendor/simple-line-icons/fonts'))

  gulp.src([
    './node_modules/simple-line-icons/css/**',
    ])
  .pipe(gulp.dest('./assets/vendor/simple-line-icons/css'))

  // tracking.js
  gulp.src([
    './node_modules/tracking/build/**'
    ])
  .pipe(gulp.dest('./assets/vendor/tracking'))

  // device-mockups
  gulp.src([
    './src/device-mockups/**'
    ])
  .pipe(gulp.dest('./assets/device-mockups'))

});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sass.sync({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(gulp.dest('./assets/css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
    './src/css/*.css',
    '!./src/css/*.min.css'
    ])
  .pipe(cleanCSS())
  .pipe(rename({ suffix: '.min' }))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('./assets/css'));
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
gulp.task('js:minify', function() {
  return gulp.src([
    './src/js/*.js',
    '!./src/js/*.min.js'
    ])
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('./assets/js'));
});

// JS
gulp.task('js', ['js:minify']);

// Gulp task to minify image files
gulp.task('img:minify', function() {
  return gulp.src(['./src/img/**/*.{gif,jpg,jpeg,png,svg,ico}', '!./src/img/**/*.fw.png'])
  .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
  .pipe(gulp.dest('./assets/img/'));
});

// JS
gulp.task('img', ['img:minify']);



// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Clean output directory
gulp.task('clean', function () {
  return del([
    './assets'
    ]);
});

// Watch all files for changes & recompile
//Watch all files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['css']);
  gulp.watch('./src/js/*.js', ['js']);
  gulp.watch('./*.html', browserSync.reload);
});

// Gulp task to default all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'css',
    'js',
    'img',
    'vendor',
    'browserSync',
    'watch',
    );
});

// Gulp task to build all files
gulp.task('build', ['clean'], function () {
  runSequence(
    'css',
    'js',
    'img',
    'vendor'
    );
});
