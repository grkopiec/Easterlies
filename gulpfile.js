const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const gulpConcat = require('gulp-concat');
const gulpSass = require('gulp-sass');

const paths = {
    html: [
        'app/**/*.html'
    ],
    sass: [
    	'app/styles/style.scss'
    ],
    sassWatch: [
        'app/styles/**/*.scss'
    ],
    js: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'
    ],
    jsWatch: [
        'app/scripts/**/*.js'
    ]
};

function html() {
    return gulp.src(paths.html)
            .pipe(gulp.dest('dist'));
};

function sass() {
    return gulp.src(paths.sass)
            .pipe(gulpSass())
            .pipe(gulp.dest('dist'));
};

function js() {
    return gulp.src(paths.js)
            .pipe(gulpConcat('scripts.js'))
            .pipe(gulp.dest('dist'));
};

function watch() {
	gulp.watch(paths.html, gulp.series(html));
	gulp.watch(paths.sassWatch, gulp.series(sass));
	gulp.watch(paths.jsWatch, gulp.series(js));
};

function serve() {
	return browserSync.init({
		watch: true,
		server: './dist'
	});
};

exports.html = html;
exports.sass = sass;
exports.js = js;
exports.watch = watch;
exports.serve = serve;
exports.build = gulp.series(html, sass, js);
exports.default = gulp.parallel(watch, serve);
