const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function formatStyles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/styles"));
}
function imgMin() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}
function JSmin() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"));
}

exports.default = gulp.parallel(formatStyles, imgMin, JSmin);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(formatStyles));
  gulp.watch("./index.html", gulp.parallel(formatStyles));
  gulp.watch("./src/scripts/*.js", gulp.parallel(JSmin));
};
