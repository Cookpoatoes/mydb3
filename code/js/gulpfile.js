


var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js压缩插件
var bom = require('gulp-bom'); //解决中文乱码插件
//var minifyCss = require('gulp-minify-css'); //css压缩插件
//var minifyHtml = require('gulp-minify-html'); //html压缩插件
var babel = require('gulp-babel'); //es6转es5
//var imagemin = require('gulp-imagemin'); //图片压缩相关插件
//var pngquant = require('imagemin-pngquant'); //png图片压缩插件
var rename = require('gulp-rename');


gulp.task("jsTask", function(){
	
	gulp.src("js/*")
		.pipe( babel({"presets": ["es2015"]}) ) //es6转es5
		.pipe( uglify() )  
		.pipe( rename('bullet2.min.js') )
		.pipe( gulp.dest("date") );
	
})

//默认任务
gulp.task("default", ["jsTask"]);