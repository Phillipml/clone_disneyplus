const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
// const imagemin = require("gulp-imagemin");

function formatStyles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/css"));
}
// function imgMin() {
//   return gulp
//     .src("./src/images/**/*")
//     .pipe(imagemin())
//     .pipe(gulp.dest("./dist/images"));
// }

exports.default = gulp.parallel(formatStyles);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(formatStyles));
  gulp.watch("./index.html", gulp.parallel(formatStyles));
};
