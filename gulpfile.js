var gulp = require('gulp');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var vinylPaths = require('vinyl-paths');

var paths = {
  srcDir : 'src/',
  dstDir : 'dist/',
}

/*===============================
 server
===============================*/
var browser = require('browser-sync');
gulp.task('server', function(){
	browser({
		server: {
      baseDir: 'dist/'
		},
    open: true,
    browser: 'Google Chrome Canary',
    ui: {
      port: 9090
    },
	});
});

gulp.task('reload', browser.reload);

/*===============================
 html
===============================*/
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest( paths.dstDir ))
	.pipe(browser.reload({stream:true}));
});

/*===============================
 sass
===============================*/
var sass = require('gulp-ruby-sass');
var cache = require('gulp-cached');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
gulp.task('sass', function() {

	var sassOpt = {
		style : 'expanded',
	};
	var errorMessage = "Error: <%= error.message %>";

	return sass( paths.srcDir + '**/*.scss', sassOpt)
	.pipe(cache( 'sass' ))
    .pipe(plumber({
      errorHandler: notify.onError( errorMessage )
    }))
	.pipe(autoprefixer())
	.pipe(gulp.dest( paths.dstDir ))
	.pipe(browser.reload({stream:true}));
});

/*===============================
 scripts
===============================*/
var babel = require('gulp-babel');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var handleErrors = require('./util/handleErrors.js');

gulp.task('scripts', function () {
	//.pipe(plumber())
  browserify({
    entries: paths.srcDir + 'js/bundle.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
	.on('error', handleErrors)
  .pipe(source('bundle.js'))
	.pipe(gulp.dest( paths.dstDir + 'js'))
});

gulp.task('scripts:build', function () {
	//.pipe(plumber())
  browserify({
    entries: paths.srcDir + 'js/bndle.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
	.on('error', handleErrors)
  .pipe(source('bundle.js'))
	.pipe(uglify())
	.pipe(gulp.dest( paths.dstDir + 'js'))
});


/*===============================
 ejs
===============================*/
var ejs  = require('gulp-ejs');
//gulp.task('ejs', function () {
   //const json = {
     //path: 'hoge',
   //}
  //gulp.src([ paths.srcDir + '**/*.ejs', '!' +  paths.srcDir + "**/_*.ejs"])
  //.pipe(ejs(json, { ext: '.html' }))
  //.pipe(gulp.dest( paths.dstDir ));
//});

//gulp.task('ejs:build', function () {
   //const json = {
     //path: 'hoge',
   //}
  //gulp.src([ paths.srcDir + '**/*.ejs', '!' +  paths.srcDir + "**/_*.ejs"])
  //.pipe(ejs(json, { ext: '.html' }))
  //.pipe(gulp.dest('dist'));
//});


// Clean
var del = require('del');
gulp.task('clean', function (cb) {
  del(['dist/'], cb);
  //gulp.src( 'dist' )
  //.pipe(vinylPaths( del ));
});


// img
var imagemin = require('gulp-imagemin');
var changed  = require('gulp-changed');
gulp.task('imgmin', function(){
	//build image
	var imageminOptions = {
		optimizationLevel: 7
	};
	gulp.src( paths.dstDir + '**/*.+(jpg|jpeg|png|gif|svg)' )
	.pipe(changed( paths.dstDir ))
	.pipe(imagemin( imageminOptions ))
	.pipe(gulp.dest( paths.dstDir ));
});


//watch
gulp.task('watch', ['server'], function () {
	gulp.watch([ paths.srcDir + '**/*.html'],['html']);
	gulp.watch([ paths.srcDir + '**/*.scss'], ['sass']);
	gulp.watch([ paths.srcDir + '**/*.js'],['scripts']);
  gulp.watch([ paths.srcDir + '**/*'], ['reload']);
});

//gulp.task('default', function(){
gulp.task('default', function(callback){
  runSequence(
    //'clean',
    ['scripts', 'sass'],
    'watch',
    callback
  );
});

// build
gulp.task('build', function(callback){
  runSequence(
    //'clean',
    ['scripts:build', 'imgmin'],
    callback
  );
});

