// GULP NOT CURRENTLY USED
// 'use strict';
//
// var gulp = require('gulp'),
//     concat = require('gulp-concat'),
//     babel = require('gulp-babel'),
//     minify = require('gulp-minify'),
//     rename = require('gulp-rename'),
//     cleanCSS = require('gulp-clean-css'),
//     del = require('del');
//
// gulp.task("minifyCSS", function() {
//   return gulp.src([
//     'css/styles.css'
//   ])
//   .pipe(cleanCSS())
//   .pipe(rename(function (path) {
//     path.basename = "Styles.min";
//   }))
//   .pipe(gulp.dest('css'));
// })
//
// gulp.task("compileJS", function() {
//   return gulp.src([
//     'js/vendor/jquery.js',
//     'js/vendor/react.min.js',
//     'js/vendor/react-dom.min.js',
//     'js/components/**/**',
//     'js/helpers/**.js',
//     'js/forms/**.js'
//   ])
//   .pipe(concat('app.js'))
//   .pipe(babel())
//   .pipe(minify())
//   .pipe(rename('app.min.js'))
//   .pipe(gulp.dest('src'));
// })
//
// gulp.task('clean', function() {
//   del('public');
// })
//
// gulp.task('build', ["compileJS", "minifyCSS"], function() {
//   return gulp.src([
//     "src/styles.min.css",
//     "js/app.min.js", // all compiled components
//     "data/**/**",
//     "media/**/**",
//     "forms/handle-submit.php",
//     "forms/**/**.html",
//     "js/forms/**/**.min.js",
//     "js/forms/**/print-view/**.min.js",
//     "*.html"
//   ], {base: './'})
//   .pipe(gulp.dest("public"));
// }).on('error', function(e) { console.log('\x07',e.message); return this.end(); })
//
// gulp.task("default", ["clean", "build"], function() {
// })
