(function f() {
    var text1 = `const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html'),
      filename: 'index.html'
    })
  ]
}`;
    xk$('.text1 code').innerText=text1;


    let text7 = `引入文件：
<script src="js/scrollReveal.js"></script>

HTML：
<div class="box"></div>

JavaScript调用：
var sr = ScrollReveal();
sr.reveal('.box');`;

    xk$('.text7 code').innerText=text7;

    let text8 = 'var config = {\n' +
        '    reset    : false,              鼠标滚动时，动画开关  默认false关闭\n' +
        '    origin   : "bottom" ,          动画开始的方向\n' +
        '    duration : 500,                     动画持续时间\n' +
        '    delay    : 0,                          延迟\n' +
        '    rotate    : { x: 0, y: 0, z: 0 },   过渡到0 的初始角度\n' +
        '    opacity   : 0,               初始透明度\n' +
        '    scale     : 0.9              缩放\n' +
        '};\n' +
        'window.sr = ScrollReveal();\n' +
        'sr.reveal(\'.sr\',config);';

    xk$('.text8 code').innerText=text8;

    let text9 = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta name="viewport"\n' +
        '          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
        '    <title>Title</title>\n' +
        '    <style>\n' +
        '        div{\n' +
        '            width: 100px;\n' +
        '            height: 100px;\n' +
        '            background-color: red;\n' +
        '\n' +
        '            position: absolute;\n' +
        '            left: 30px;\n' +
        '            top: 30px;\n' +
        '        }\n' +
        '        /*清楚系统默认的事件*/\n' +
        '        *{\n' +
        '            touch-action: none;\n' +
        '        }\n' +
        '\n' +
        '    </style>\n' +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '<div class="box"></div>\n' +
        '\n' +
        '<script src="js/zepto.min.js"></script>\n' +
        '<script src="js/touch.js"></script>\n' +
        '<script src="js/fx.js"></script>\n' +
        '<script>\n' +
        '\n' +
        '    $(function () {\n' +
        '\n' +
        '        /**\n' +
        '         *\n' +
        '         $(\'.box\').swipe(function () {\n' +
        '            console.log(\'滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         $(\'.box\').swipeLeft(function () {\n' +
        '            console.log(\'向左滑动了\')\n' +
        '        });\n' +
        '         $(\'.box\').swipeRight(function () {\n' +
        '            console.log(\'向右滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         $(\'.box\').swipeUp(function () {\n' +
        '            console.log(\'向上滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         $(\'.box\').swipeDown(function () {\n' +
        '            console.log(\'向下滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         */\n' +
        '\n' +
        '        $(\'.box\').swipeLeft(function () {\n' +
        '            $(this).animate({\n' +
        '                left:0,\n' +
        '            })\n' +
        '        });\n' +
        '        $(\'.box\').swipeRight(function () {\n' +
        '            $(this).animate({\n' +
        '                left:\'200px\',\n' +
        '            })\n' +
        '        });\n' +
        '\n' +
        '        $(\'.box\').swipeUp(function () {\n' +
        '            $(this).animate({\n' +
        '                top:0,\n' +
        '            })\n' +
        '        });\n' +
        '        $(\'.box\').swipeDown(function () {\n' +
        '            $(this).animate({\n' +
        '                top:\'200px\',\n' +
        '            })\n' +
        '        });\n' +
        '\n' +
        '    })\n' +
        '\n' +
        '</script>\n' +
        '</body>\n' +
        '</html>';

    xk$('.text9 code').innerText=text9;

    let text10 = '<div class="swiper-slide">\n' +
        '<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容</p>\n' +
        '</div>';

    xk$('.text10 code').innerText=text10;


    let text11 = `/**
 * 定义源目录和输出目录
 * */
var app={
    'appSrc':'src/',
    'appBuild':'build/',
    'appDist':'dist/',
    'appPort':8080,
};

var gulp = require('gulp');
/*导入gulp-less插件*/
var less = require('gulp-less');
/*导入gulp-cssmin插件*/
var cssmin = require('gulp-cssmin');
/*导入gulp-concat插件*/
var concat = require('gulp-concat');
/*导入gulp-uglify 插件*/
var uglify = require('gulp-uglify');
/*导入gulp-imagemin 插件*/
var imagemin = require('gulp-imagemin');
/*导入gulp-open插件*/
var open = require('gulp-open');
/*导入gulp-connect插件*/
var connect = require('gulp-connect');


/**
 * 1.注册了一个html的任务
 * */
gulp.task('html', function() {
    /**
     * 意思是读取src下所有的.html文件
     * ** ： 代表是src下的任意目录, 0个或者多个
     * */
    gulp.src(app.appSrc+'**/*.html')  /*读取index.html文件*/
        .pipe( gulp.dest(app.appBuild))  /*将读取的文件写到build目录（没有会自动新建）*/
        .pipe( gulp.dest(app.appDist))  /*再将读取的文件写到dist目录（没有会自动新建）*/
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

/**
 * 2.注册了一个less的任务
 * */
gulp.task('less', function() {
    /**
     * 意思是读取src/style/index.less文件( 包含其中使用@import依赖文件 )
     * */
    gulp.src([app.appSrc+'style/index.less',app.appSrc+'style/category.less'])  /*less文件*/
        .pipe( less() )  /*将读取的 less文件 转成 css 文件 */
        // .pipe( concat('main.css') )  /*将读的css文件 合并成一个main.css文件 */
        .pipe( gulp.dest(app.appBuild+'style'))  /*将读取的css文件写到build目录（没有会自动新建）*/
        .pipe( cssmin() ) /*将读取的 css文件 压缩 */
        .pipe( gulp.dest(app.appDist+'style'))  /*再将读取压缩过的css文件写到dist目录（没有会自动新建）*/
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

/**
 * 3.注册了一个js的任务
 * */
gulp.task('js', function() {
    /**
     * 意思是读取src/js下所有的.js文件
     * ** ： 代表是src下的任意目录, 0个或者多个
     * */
    gulp.src(app.appSrc+'js/**/*.js')  /*读取.js文件*/
    // .pipe( concat('index.js') )  /*将读取所有的js文件 合并成一个index.js文件 */
        .pipe( gulp.dest(app.appBuild+"js"))  /*将读取的文件写到build/js目录（没有会自动新建）*/
        .pipe( uglify() )  /*将读取js文件并压缩js文件 */
        .pipe( gulp.dest(app.appDist+"js"))  /*再将读取压缩后的文件写到dist/js目录（没有会自动新建）*/
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

/**
 * 4.注册了压缩图片的任务
 * */
gulp.task('image', function() {
    /**
     * 意思是读取src/image下所有的图片文件
     * ** ： 代表是src下的任意目录, 0个或者多个
     * */
    gulp.src(app.appSrc+'images/**/*')  /*读取图片文件*/
        .pipe( gulp.dest(app.appBuild+'images'))  /*将读取所有的图片文件写到build目录（没有会自动新建）*/
        .pipe( imagemin() )  /*将读取所有的图片文件进行压缩 */
        .pipe( gulp.dest(app.appDist+'images'))  /*再将读取压缩后的文件写到dist目录（没有会自动新建）*/
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

/**
 *  5.注册一个lib任务（ 把 bower下载的前端框架放到我们项目当中 ）
 * */
gulp.task('lib',function () {
    gulp.src(['bower_components/**/*.js','bower_components/**/*.css'])
        .pipe(gulp.dest(app.appBuild+'libs'))
        .pipe(gulp.dest(app.appDist+'libs'))
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

/*
* 6.注册json任务(把src/data下的json文件放到项目中)
* */
gulp.task('json',function () {
    gulp.src(app.appSrc+'data/*.json')
        .pipe(gulp.dest(app.appBuild+'data'))
        .pipe(gulp.dest(app.appDist+'data'))
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
})

/**
 * 6.注册一个build任务（同时执行多个任务）
 *   当前 bulid 时，会自动把数组当中的所有任务给执行。
 * */
gulp.task('build',['html','less','js','image','lib','json']);

/**
 * 7.定义server任务
 * 搭建一个服务器。设置运行的构建目录
 * */
gulp.task('server',['build'],function () {
    /*1.设置web服务器*/
    connect.server({
        root:[app.appBuild],//服务器管理/运行哪个目录(默认是项目的根目录)
        livereload:true,  //是否热更新。
        port:app.appPort  //指定web服务的端口号（默认是8080）
    })

    /*2.gulp监视文件，并且可以在文件发生改动时候做一些事情.
    *  参数一：监视的文件
    *  参数二: 在文件变动后执行的一个task任务
    * */
    gulp.watch(['bower_components/**/*'], ['lib']);
    gulp.watch(app.appSrc+'**/*.html',['html']);
    gulp.watch(app.appSrc+'js/**/*.js',['js']);
    gulp.watch(app.appSrc+'images/**/*',['image']);
    gulp.watch(app.appSrc+'style/**/*.less',['less']);
    gulp.watch(app.appSrc+'data/*.json',['json']);

    //open相当于浏览器，下面是通过浏览器打开百度网址
    var options = {
        uri: '127.0.0.1:'+app.appPort,
        app: 'chrome'
    };
    gulp.src('')
        .pipe(open(options));
});


/**
 * 8.定义默认任务
 *  直接执行gulp 会调用该任务
 * */
gulp.task('default',['server']);`;

    xk$('.text11 code').innerHTML=zy(text11);







    var text26 = `{
  "name": "webpack8.6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "start": "webpack-dev-server --port 7272 --hot --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.4.1",
    "vue": "^2.6.10"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^3.1.0",
    "file-loader": "^4.1.0",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "style-loader": "^0.23.1",
    "url-loader": "^2.1.0",
    "vue-loader": "^15.7.1",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.39.1",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.7.2"
  }
}`;

    xk$('.text26 code').innerHTML = zy(text26);

    var text27 = `{
  "name": "demo1",
  "version": "1.0.0",
  "scripts": {
    "start": "webpack src/main.js -o dist/bundle.js --mode development"
  },
  "dependencies": {
    "jquery": "^3.4.1"
  },
  "devDependencies": {
    "webpack": "^4.35.0",
    "webpack-cli": "^3.3.5"
  }
}`;

    xk$('.text27 code').innerHTML = zy(text27);

    var text28 = `//只允许使用common.js
//它是一个配置文件
var path = require('path');
//专门对html模板控制的
var HtmlWebpakPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(src) {
    return path.join(__dirname, src)
}

//开发环境 和 生产环境
//生产环境是要上线。开发环境，配置一些工程化相关的东西，解放双手
module.exports = {
// 1模式  只有两个值development开发环境和production上线环境压缩
    mode: "development",
//    2入口
    entry: path.join(__dirname,'./src/main.js'),
//    3出口
    output: {
        path: path.join(__dirname,'./dist'),//目录不存可以帮你 创建
        filename: "bundle.js"//打包的js文件名称
    },
// 4插件 插件每个项都需要new
    plugins: [
        new HtmlWebpakPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    // 5.模块，把其它文件进行转化成模块，需要相应的loader
    //不同的文件需要不同的loader，
    //module表示是模块的意思，rules是规则的意思，每个规则对应的都是一个对象，
    //其中test字段表示是书写正则以哪个文件名结尾，use是一个数组，表示 当前类型文件用哪种加载器解释。
    module: {
        rules: [
            //css-loader 将css文件转成模块
            //style-loader 将css模块插入网页文档中
            // loader的执行顺序从右往左
            {test:/\\.css$/,use:['style-loader','css-loader']},

            //less-loader 默认依赖 less 需要安装
            //把less文件转换成css文件
            //css-loader 再转成webapck的模块
            //style-loader css模块插入到网页文档中
            {test:/\\.less$/,use:['style-loader','css-loader','less-loader']},
            {
                test:/\\.(jpg|jpeg|gif|png|webp)$/,
                use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit:1024,
                                name:'[path][name]-[hash:5].[ext]'
                            }
                        },
                    ]
            },
            //js文件需要做处理  转换低版本的语法,兼容更多的浏览器   排除node_modules dist两个目录正则
            {test:/\\.js$/,use:['babel-loader'], exclude:[/node_modules/,/dist/]},
            {test:/\\.vue$/,use:['vue-loader']},
        ]
    },
    //设置别名，编译器
    resolve: {
        extensions: ['.vue','.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'com':resolve('./src/components')
        }
    },
};`;

    xk$('.text28 code').innerHTML = zy(text28);

    var text29=`<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>`;

    xk$('.text29 code').innerHTML = zy(text29);
})();