'use strict';

var cp            = require('child_process');

var browserSync   = require('browser-sync').create();
var gulp          = require('gulp');
var del           = require('del');
var cleanCSS      = require('gulp-clean-css');
var concat        = require('gulp-concat');
var header        = require('gulp-header');
var imagemin      = require('gulp-imagemin');
var rename        = require("gulp-rename");
var template      = require('gulp-template');
var uglify        = require('gulp-uglify');
var runSequence   = require('run-sequence');

var pkg           = require('./package.json');
// Set the banner content
var banner = ['/*!\n',
' * RODRIGO3D.COM - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author.name %>\n',
' * Licensed under <%= pkg.license %> (https://github.com/rodrigo3d/<%= pkg.name %>/blob/master/LICENSE)\n',
' */\n',
''
].join('');


// Gulp task to minify css files
gulp.task('css:theme', function(){
  return gulp.src(['./src/css/theme.css'])
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(browserSync.stream())
  .pipe(gulp.dest('./_site/assets/css/'));
});
// Gulp task to minify css files
gulp.task('css:custom', function(){
  return gulp.src(['./src/css/custom/**/*.css'])
  .pipe(concat('custom.css'))
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(browserSync.stream())
  .pipe(gulp.dest('./_site/assets/css/'));
});
// CSS
gulp.task('css', ['css:theme', 'css:custom']);


// Minify JavaScript
gulp.task('js:minify', function() {
  return gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(browserSync.stream())
  .pipe(gulp.dest('./_site/assets/js/'));
});
// JS
gulp.task('js', ['js:minify']);


// Gulp task to minify image files
gulp.task('img:minify', function() {
  return gulp.src(['./src/img/**/*.{gif,jpg,jpeg,png,svg,ico}', '!./src/img/**/*.fw.png'])
  .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
  .pipe(browserSync.stream())
  .pipe(gulp.dest('./_site/assets/img/'));
});
// Gulp task to minify image files
gulp.task('img:screenshot', function() {
  return gulp.src(['./screenshot.png'])
  .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
  .pipe(browserSync.stream())
  .pipe(gulp.dest('./_site/'));
});
// IMAGES
gulp.task('img', ['img:minify', 'img:screenshot']);


// Gulp task to compile and minify html files
gulp.task('html:compile', function() {
  gulp.src('index.html')
  .pipe(template({
    title: pkg.title,
    description: pkg.description
  }))
  .pipe(gulp.dest('./_site/'));
});
gulp.task('html', ['html:compile']);


// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
  .pipe(gulp.dest('./_site/assets/vendor/bootstrap'))

  // Font Awesome
  gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{scss,scss/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
    ])
  .pipe(gulp.dest('./_site/assets/vendor/font-awesome'))

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
    ])
  .pipe(gulp.dest('./_site/assets/vendor/jquery'))

  // jQuery Easing
  gulp.src([
    './node_modules/jquery.easing/*.js'
    ])
  .pipe(gulp.dest('./_site/assets/vendor/jquery-easing'))

  // tracking.js
  gulp.src([
    './node_modules/tracking/build/**'
    ])
  .pipe(gulp.dest('./_site/assets/vendor/tracking'))

});


// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./_site", directory: false,  index: "index.html"
    }
  });
});

// Clean output directory
gulp.task('clean', function () {
  return del([
    './assets', './_site'
    ]);
});

// Watch all files for changes & recompile
//Watch all files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
  gulp.watch('./src/css/**/*.css', ['css:theme', 'css:custom']);
  gulp.watch('./src/js/*.js', ['js']);
  gulp.watch('./*.html', ['html:compile']);
  gulp.watch('./*.html', browserSync.reload);
});

// Gulp task to default all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'css',
    'js',
    'img',
    'html',
    'vendor',
    'browserSync',
    'watch'
    );
});

// Gulp task to build all files
gulp.task('build', ['clean'], function () {
  runSequence(
    'css',
    'js',
    'img',
    'html',
    'vendor'
    );
});
