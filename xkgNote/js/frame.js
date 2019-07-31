//内容文本代码块=========================================
var text1 = ' //在$符号被定义之前使用noConflict方法来重新设置名称\n' +
    '     var jq = $.noConflict();\n' +
    '     // $符号可能被定义为字符串或其他数据\n' +
    '     var $ = "重新赋值";\n' +
    '     //解决冲突之后,使用新设置的名称来操作\n' +
    '     jq(function () {\n' +
    '     \tconsole.log("DOM加载完毕");\n' +
    ' \t })'
$('.text1  code').text(text1);

var text2 = '   //jq的css()方法获取div的宽度的值,只传一个参数获取\n' +
    '        console.log($("div").css("width"));\n' +
    '        //传两个参数就是修改，方法一\n' +
    '        $("div").css("width","400px");\n' +
    '        //同时修改多个css,链式编程\n' +
    '        $("div").css("width","400px").css("height","400px");\n' +
    '        //另外一种写法，里面传一个对象\n' +
    '        $("button").click(function () {\n' +
    '            $("div").css({\n' +
    '                width:function(index, value) {\n' +
    '                    return parseFloat(value) * 1.2;\n' +
    '                },\n' +
    '                height:300,\n' +
    '                background:"red"\n' +
    '            });\n' +
    '        });'
$('.text2 code').text(text2);

var text3 = '//【1】使用快捷方法来给按钮添加点击事件\n' +
    '$("button").click(function () {\n' +
    ' console.log("点击了按钮---1");\n' +
    ' });\n' +
    '$("button").click(function () {\n' +
    ' console.log("点击了按钮---2");\n' +
    ' });\n' +
    '//【2】使用on方法来给按妞添加点击事件\n' +
    '$("button").on("click",{name:"Neld"},function (event) {\n' +
    ' \tconsole.log("点击了按钮----on");\n' +
    '    //使用event.data访问传递进来的参数\n' +
    ' \tconsole.log(event.data.name);\n' +
    ' })';
$('.text3 code').text(text3);

let text4 = '$("button").on("click",{name:"zs"},function (event) {\n' +
    '\tconsole.log("点击了按钮----2");\n' +
    '\t//获取事件的类型\n' +
    '\tconsole.log(event.type);\n' +
    '\t//获取目标对象\n' +
    '\tconsole.log(event.target);\n' +
    '\t//获取被省略的对象\n' +
    '\tconsole.log(event.data);\n' +
    '})';

$('.text4 code').text(text4);

let text5 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
        width: 200px;
        height: 50px;
        background: red;
    }
    </style>
</head>
<body>
<div>我是个好人</div>
<button>喜欢我就点我吧</button>
<button>喜欢我就点我吧2</button>
<script src="js/jquery-3.2.1.js"></script>
<script>
    $(function () {
        $("button:eq(0)").click(function () {
            $("div").animate({
            width:"+=50",
            height:"+=100"
            },1000);
        })
        $("button:eq(1)").click(function () {
            //01 直接设置目标值:速度和回调函数可以被省略
            // $("div").animate({
            // width:400,
            // height:100
            // },2000,function () {
            // alert("执行完毕");
            // })
            //02 第二种用法
                // $("div").animate({
            // width:"+=50",
            // height:"+=100"
            // },1000);
            //03 动画切换(如果有值那么就设置为0,否则就恢复)
            $("div").animate({
            \twidth:"toggle",
            \theight:"+=100"
            },1000);
        })
    })
</script>
</body>
</html>`;

$('.text5 code').text(text5);

let text6 = `//01 创建DOM节点
var oDom = $("<div></div>");
//02 设置DOM节点的内容
 oDom.text("测试的div标签");
//02 把DOM节点添加到页面中
 $("body").append(oDom);


$("body").append($("<div>我是测试的div标签</div>"));`;

$('.tapSection .text6 code').text(text6);


let text7 = `//引入文件：
<script src="js/scrollReveal.js"></script>

//HTML：
<div class="box"></div>

//JavaScript调用：
var sr = ScrollReveal();
sr.reveal('.box');`;

$('.text7 code').text(text7);

let text8 = 'var config = {\n' +
    '    reset    : false,              //鼠标滚动时，动画开关  默认false关闭\n' +
    '    origin   : "bottom" ,          //动画开始的方向\n' +
    '    duration : 500,                     //动画持续时间\n' +
    '    delay    : 0,                          //延迟\n' +
    '    rotate    : { x: 0, y: 0, z: 0 },   //过渡到0 的初始角度\n' +
    '    opacity   : 0,               //初始透明度\n' +
    '    scale     : 0.9              //缩放\n' +
    '};\n' +
    'window.sr = ScrollReveal();\n' +
    'sr.reveal(\'.sr\',config);';

$('.text8 code').text(text8);

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

$('.text9 code').text(text9);

let text10 = '<div class="swiper-slide">\n' +
    '<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容</p>\n' +
    '</div>';

$('.text10 code').text(text10);

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

$('.text11 code').text(text11);

var text12 = `<script>
var vm = new Vue({
    el:"绑定的元素"//（例如：通过el:"#app" 和html绑定关系 ，最终实现数据呈现。）,
    data:{
        //数据
    },
    watch :{
        //watch是时监听data中的数据Key,可以深度监测
        '要监听的数据':{
            handler(){
                //数据发生变化时将变化后的数据处理
            },
            deep:true/false(是否深监听)
        }
    }
    computed : {
        //computed一般是计算一个值,变成实例的属性,值就是函数执行的结果,网页发布时会自动触发一次。
        //函数默认执行，相当于将返回结果给到 data 中
        //如果数据发生改变，会重新执行并且再次保存最新结果
    }
    methods:{
        //函数
    },
    mounted(){
        //将要执行的函数放这里
        //数据和模板编译完成，并且已经把编译后的html显示到网页中，
        // 相当于 window.onload = function(){ }  $(function(){})  网页加载完执行
    }
})
</script>`;

$('.text12 code').text(text12);

let text13 = `<div id="app">
<p v-for="(value,key,index) in people">
{{key}}---{{value}}
</p>
</div>
<script>
var vm = new Vue({
el: '#app',
data: {
people: {
    name: "小李",
    age: 18,
    sex: "男"
    }
  }
})
</script>`;
$('.text13 code').text(text13);

let text14 = `// 注册一个全局自定义指令 \`v-focus\`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})`;
$('.text14 code').text(text14);

let text15 = `directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}`;

$('.text15 code').text(text15);





/*
$(function () {
    $('.tapMain').each(function (index,ele) {
        $(ele).css({
            height:$(ele).children().eq(0).height()+30
        });
    });
    $('.bntTap').next('.tapNav').slideUp();
    $('.bntTap').next('.tapNav').next('.tapMain').slideUp();
});*/
