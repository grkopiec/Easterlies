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

exports.html = html;
exports.default = gulp.series(html);
