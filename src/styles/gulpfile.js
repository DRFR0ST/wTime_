var gulp = require('gulp');
var less = require('gulp-less'); 
 
 
/* Task to compile less */
gulp.task('build', function() {  
  gulp.src('./src/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'));
}); 
/* Task to watch less changes */
gulp.task('watch', function() {  
  gulp.watch('./src/**/*.less' , ['build']);
});
 
gulp.task('serve', function () {
    gulp.watch("./src/*.less").on("change", reload);
    gulp.watch("./dist/*.html").on("change", reload);
});
 
/* Task when running `gulp` from terminal */
gulp.task('default', ['watch']);