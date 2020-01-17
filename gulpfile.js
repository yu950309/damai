const gulp = require('gulp'); //引入gulp模块
const html = require('gulp-minify-html'); //引入gulp下面的gulp-minify-html包
const css = require('gulp-minify-css'); //引入gulp下面的gulp-minify-css包
const uglifyjs=require('gulp-uglify');//引入gulp下面的gulp-uglify包
const imagemin=require('gulp-imagemin');//引入gulp下面的gulp-imagemin包
const babel = require('gulp-babel'); //es6转es5主要模块(npm install gulp-babel@7 -D)
const bablecore = require('babel-core'); //es6转es5主要模块
const es2015 = require('babel-preset-es2015'); //es6转es5主要模块
const sass = require('gulp-sass'); //引入sass编译包。
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件
const watch=require('gulp-watch');
const requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('runhtml', function () {
    return gulp.src('src/*.html')
        .pipe(html()) //调用模块或者包
        .pipe(gulp.dest('dist/'));
});
// gulp.task('compilesass', function () {
//     return gulp.src('src/sass/*.scss')
//         .pipe(plugins.sourcemaps.init()) // 初始化 gulp-sourcemaps 插件  生成.map文件初始化  
//         .pipe(plugins.sass({ // 调用 sass 插件，编译 sass 文件
//             outputStyle: 'compressed' //压缩一行
//         }))
//         .pipe(plugins.sourcemaps.write('.')) // 生成 sourcemap 生成.map文件 
//         .pipe(gulp.dest('dist/css/')); // 目标文件存放路径
// });
 gulp.task('runcss', function () {
     return gulp.src('src/stylesheets/*.css')
         .pipe(css()) //调用模块或者包
         .pipe(gulp.dest('dist/stylesheets/'));
 });
// gulp.task('uglifyjs', function () {
//     return gulp.src('src/script/*.js')
//         .pipe(babel({ //es6转es5
//             presets: ['es2015']
//         }))
//         .pipe(uglifyjs()) //调用模块或者包
//         .pipe(gulp.dest('dist/script/'));
// });
gulp.task('rjs', function () {
    return gulp.src('src/script/js/main.js')
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('dist/script/js/'));
});
    
//6.图片压缩
//图片压缩的插件：gulp-imagemin
gulp.task('runimg', function () {
    return gulp.src('src/images/*.{png,gif,jpg,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});
