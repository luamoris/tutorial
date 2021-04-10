const gulp = require('gulp');
const del = require('del');
const exec = require('child_process').exec;
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('clean', () => {
	return del(['docs/**', 'docs/.*', '!docs'], {
		force: true
	});
});

gulp.task('copy', () => {
	return gulp.src([ '_book/**/*' ]).pipe(gulp.dest('docs'));
});


gulp.task('build', (callback) => {
	exec('gitbook build', (err, stdout, stderr) => {
		console.log(stdout);
		console.log(stderr);
		callback();
	});
});

gulp.task('default', gulp.series('clean', 'build', 'copy', (done) => {
	done();
}));
