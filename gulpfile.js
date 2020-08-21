var gulp = require('gulp');

var paths = {
    html: [
        'app/**/*.html'
    ]
};

function html() {
    return gulp.src(paths.html)
            .pipe(gulp.dest('dist'));
};

function watch() {
	return gulp.watch(paths.html, gulp.series(html));
}

exports.html = html;
exports.watch = watch;
exports.default = gulp.series(html, watch);
