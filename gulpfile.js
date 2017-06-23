
var gulp = require('gulp'),
  connect = require('gulp-connect');
gulp.task('connect', function() {
  connect.server({
 	port: 9000,
    root: 'yw_template',
    livereload: true,
  });
});
 
gulp.task('html', function () {
  gulp.src('./yw_template/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./yw_template/*.html'], ['html']);
});
 
// gulp.task('default', ['connect', 'watch']);
// 

// gulp.task('watch', ['connect', 'watch']);
gulp.task('server', ['connect', 'watch']);

gulp.task('help', function() {

    console.log('	gulp build			文件打包');

    console.log('	gulp watch			文件监控打包');

    console.log('	gulp help			gulp参数说明');

    console.log('	gulp server			测试server');

    console.log('	gulp -p				生产环境（默认生产环境）');

    console.log('	gulp -d				开发环境');

    console.log('	gulp -m <module>		部分模块打包（默认全部打包）');

});
/* 默认 */
gulp.task('default', function() {
    gulp.start('help');
});

//方法二：浏览器打开
// var gulp = require('gulp'); // 基础库
// var livereload = require('gulp-livereload'), // 网页自动刷新（文件变动后即时刷新页面）
//   webserver = require('gulp-webserver'); // 本地服务器

// // 注册任务
// gulp.task('webserver', function() {
//   gulp.src( './src' ) // 服务器目录（.代表根目录）
//   .pipe(webserver({ // 运行gulp-webserver
//     livereload: true, // 启用LiveReload
//     open: true // 服务器启动时自动打开网页
//   }));
// });

// // 监听任务
// gulp.task('watch',function(){
//   // 监听 html
//   gulp.watch('src/**/*.html')
// });
 
// // 默认任务
// gulp.task('default',['webserver','watch']);