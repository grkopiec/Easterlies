const browserSync = require('browser-sync').create();
const gulp = require('gulp');

const paths = {
    html: [
        'app/**/*.html'
    ]
};

function html() {
    return gulp.src(paths.html)
            .pipe(gulp.dest('dist'));
};

function watch() {
	gulp.watch(paths.html, gulp.series(html));
};

function serve() {
	return browserSync.init({
		watch: true,
		server: './dist'
	});
};

exports.html = html;
exports.watch = watch;
exports.serve = serve;
exports.build = gulp.series(html);
exports.default = gulp.parallel(watch, serve);
