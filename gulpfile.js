var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var sketch = require('gulp-sketch');
var browserSync = require('browser-sync');

gulp.task('build', ['copy', 'js', 'sketch']);
gulp.task('default', ['build', 'watch']);

gulp.task('watch', function(){

 gulp.watch('./src/*.js', ['js'])
  gulp.watch('./src/*.sketch', ['sketch'])

  browserSync({
    server: {
      baseDir: 'build'
    },
    browser: 'google chrome',
    injectChanges: false,
    files: ['build/**/*.*'],
    notify: false
  })

})

gulp.task('js', function(){
  gulp.src('src/*.js')
    .pipe(gulp.dest('build/'))
})

gulp.task('sketch', function(){
  gulp.src('src/*.sketch')
    .pipe(sketch({
      export: 'slices',
      format: 'png',
      saveForWeb: true,
      scales: 1.0,
      trimmed: false
    }))
    .pipe(gulp.dest('build/images'))
})

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
  gulp.src('src/lib/**/*.*')
    .pipe(gulp.dest('build/lib'))
  gulp.src('src/images/**/*.{png, jpg, svg}')
    .pipe(gulp.dest('build/images'))
})
