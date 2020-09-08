gulp.task('scripts', function() {
    return gulp.src(['app/js/common.js', 'app/libs//.js'])
    .pipe(browserSync.reload({ stream: true }))
});
 
gulp.task('code', function() {
    return gulp.src('app/.html')
    .pipe(browserSync.reload({ stream: true }))
});
 
gulp.task('watch', function() {
    gulp.watch('app/sass//.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/common.js', 'app/libs/*/.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
