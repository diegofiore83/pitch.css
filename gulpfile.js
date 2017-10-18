var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var sassOptions = {
    errLogToConsole: true,
    outputStyle: "expanded"
};

var autoprefixerOptions = { browsers: ["> 1%", "last 3 versions", "Firefox ESR", "Opera 12.1", "Android >= 2"] };

gulp.task("styles", function () {
    gulp.src("sass/pitch.scss")
        .pipe(sass(sassOptions).on("error", sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest("css"));
});

//Watch task
gulp.task("default", function () {
    gulp.watch("sass/**/*.scss", ["styles"]);
});