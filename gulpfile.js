const gulp = require("gulp");
const csso = require("gulp-csso");
const htmlmin = require("gulp-htmlmin");
const svgmin = require("gulp-svgmin");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");

function html() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("."));
}

function css() {
  return gulp
    .src(["src/styles/_common.css", "src/styles/*.css"])
    .pipe(concat("main.css"))
    .pipe(csso())
    .pipe(gulp.dest("public"));
}

function svg() {
  return gulp
    .src("src/images/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("public/images"));
}

function raster() {
  return gulp
    .src("src/images/*.{jpg,png,gif}")
    .pipe(imagemin())
    .pipe(gulp.dest("public/images"));
}

exports.default = gulp.task('default', gulp.parallel(html, css, svg, raster));