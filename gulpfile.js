const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

function formatStyles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/css"));
}
function scriptsMin() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
}

exports.default = gulp.parallel(formatStyles, scriptsMin);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(formatStyles));
  gulp.watch("./index.html", gulp.parallel(formatStyles));
  gulp.watch("./src/scripts/*.js", gulp.parallel(scriptsMin));
};
