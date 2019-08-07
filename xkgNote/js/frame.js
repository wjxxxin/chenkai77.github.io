(function f() {
    var text1 = ' //在$符号被定义之前使用noConflict方法来重新设置名称\n' +
        '     var jq = $.noConflict();\n' +
        '     // $符号可能被定义为字符串或其他数据\n' +
        '     var $ = "重新赋值";\n' +
        '     //解决冲突之后,使用新设置的名称来操作\n' +
        '     jq(function () {\n' +
        '     \tconsole.log("DOM加载完毕");\n' +
        ' \t })'
    xk$('.text1  code').innerHTML = text1;

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
    xk$('.text2 code').innerHTML=text2;

    var text3 = '//【1】使用快捷方法来给按钮添加点击事件\n' +
        '$("button").click(function () {\n' +
        ' console.log("点击了按钮---1");\n' +
        ' });\n' +
        '$("button").click(function () {\n' +
        ' console.log("点击了按钮---2");\n' +
        ' });\n' +
        '//【2】使用on方法来给按妞添加' +
        '点击事件\n' +
        '$("button").on("click",{name:"Neld"},function (event) {\n' +
        ' \tconsole.log("点击了按钮----on");\n' +
        '    //使用event.data访问传递进来的参数\n' +
        ' \tconsole.log(event.data.name);\n' +
        ' })';
    xk$('.text3 code').innerHTML=text3;

    let text4 = '$("button").on("click",{name:"zs"},function (event) {\n' +
        '\tconsole.log("点击了按钮----2");\n' +
        '\t//获取事件的类型\n' +
        '\tconsole.log(event.type);\n' +
        '\t//获取目标对象\n' +
        '\tconsole.log(event.target);\n' +
        '\t//获取被省略的对象\n' +
        '\tconsole.log(event.data);\n' +
        '})';

    xk$('.text4 code').innerHTML=text4;

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

    xk$('.text5 code').innerHTML=zy(text5);

    let text6 = `//01 创建DOM节点
var oDom = $("<div></div>");
//02 设置DOM节点的内容
 oDom.text("测试的div标签");
//02 把DOM节点添加到页面中
 $("body").append(oDom);


$("body").append($("<div>我是测试的div标签</div>"));`;

    xk$('.tapSection .text6 code').innerHTML=text6;


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
            deep:true / false(是否深监听)
        }
    }
    computed : {
        //computed一般是计算一个值,变成实例的属性,值就是函数执行的结果,网页发布时会自动触发一次。
        //函数默认执行，相当于将返回结果给到 data 中
        //如果数据发生改变，会重新执行并且再次保存最新结果
        '值' : {
            get(){
                return : 输出的值 
            },
            set(newval){
                值状态改变时触发的函数
            }
            
        },
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

    xk$('.text12 code').innerHTML=zy(text12);

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
    xk$('.text13 code').innerHTML=zy(text13);

    let text14 = `// 注册一个全局自定义指令 \`v-focus\`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})`;
    xk$('.text14 code').innerHTML=zy(text14);

    let text15 = `directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}`;

    xk$('.text15 code').innerHTML=zy(text15);


    let text16 = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="css/todo_base.css">
    <link rel="stylesheet" href="css/todo_index.css">
</head>

<body class="learn-bar">
<section id="todoapp">
    <header id="header">
        <h1>todos</h1>
        <input v-model.trim="user"
               @keydown.enter="add()"
               id="new-todo" placeholder="来添加一些大事件?" autofocus="autofocus">
    </header>
    <section id="main">
        <input id="toggle-all" type="checkbox" v-model="toggleall">
        <label for="toggle-all">选中全部</label>
        <ul id="todo-list">
            <li v-for="(item,index) in curlist" :class="{editing:order==index,completed:item.status}">
                <div class="view">
                    <input v-model="item.status" type="checkbox" class="toggle">
                    <label @dblclick="edit(index)">{{item.title}}</label>
                    <button class="destroy" @click="remove(item)"></button>
                </div>
                <input v-focus="order==index"
                       v-model="item.title"
                       @keydown.enter="edit(-1)"
                       @blur="edit(-1)" class="edit">
            </li>
        </ul>
    </section>
    <footer id="footer"><span id="todo-count"><strong>{{left}}</strong>进行中</span>
        <ul id="filters">
            <li>
                <a :class="{selected:sign=='all'}" href="#all">全部</a>
            </li>
            <li>
                <a :class="{selected:sign=='activing'}" href="#activing">进行中</a>
            </li>
            <li>
                <a :class="{selected:sign=='completed'}" href="#completed">已完成</a>
            </li>
        </ul>
        <button id="clear-completed" v-show="com" @click="removeall()">删除完成</button>
    </footer>
</section>
<script src="js/vue.js"></script>
<script>
    //2.封装本地存储
    var local = {
        getStorage() {
            return JSON.parse(localStorage.getItem('todos')) || []
        },
        setStorage(newval) {
            localStorage.setItem('todos', JSON.stringify(newval))
        }
    };

    Vue.directive('focus', {
        update(el, binding) {
            //当v-focus=值为true，将元素聚焦
            if (binding.value) {
                el.focus()
            }
        }
    });

    var filter = {
        all(data){
            return data
        },
        activing(data){
            return data.filter(item=>item.status==false)
        },
        completed(data){
            return data.filter(item=>item.status==true)
        }
    };
    
    var vm = new Vue({
        el: '#todoapp',
        data: {
            sign: 'all',//标识底栏
            order: -1,
            user: '',
            list: local.getStorage(),
            curlist:[]
        },
        watch: {
            //1.监测list数据发生变化时，更新本地存储
            list: {
                handler() {
                    local.setStorage(this.list);
                    this.curlist = filter[this.sign](this.list);//添加或者删除curlist的值，一定要重新从list中获取
                },
                deep: true//深度检测
            }
        },
        computed : {
            toggleall : {
                get(){
                    return this.list.length&&this.list.length === filter.completed(this.list).length
                },
                set(newval){
                    this.list.forEach(function (ele) {
                        ele.status = newval
                    })
                }
            },
            left(){
                return filter.activing(this.list).length
            },
            com(){
                return filter.completed(this.list).length
            }
        },
        methods: {
            add() {
                if (this.user == '') {
                    alert('请输入内容');
                    return;
                }
                this.list.unshift({status: false, title: this.user});
                this.user = ''
            },
            remove(item) { //改为根据内容找到该索引删除，因为如果根据索引的话用的是curlist的索引，
                // 用curlist的索引来list找到对应的内容，导致出现删除错误的现象。curlist和list数组里的项都是对象，所以都是堆存储
                var index = this.list.indexOf(item);
                this.list.splice(index, 1)
            },
            edit(index) {
                this.order = index;
            },
            cahngeSign(sign){
                this.sign = sign;
                this.curlist = filter[this.sign](this.list);//选中当前需要展示的数据
            },
            removeall(){
                this.list = filter.activing(this.list)
            }
        }
    });
    
    window.onhashchange = hashChange;
    hashChange();
    function hashChange() {
        var hash = location.hash.split('#')[1]||'all';
        vm.cahngeSign(hash);
    }
    
</script>
</body>`;

    xk$('.text16 code').innerHTML=zy(text16);

    let text17 = `<div id="app">
<my-article></my-article>
</div>
<script src="js/vue.js"></script>
<script>
    Vue.component('my-article',{
        template:\`<div>
            <h3>这是标题</h3>
            <p>段落</p>
            </div>\`
    })
    var vm = new Vue({
        el:"#app"
    })
</script>`;

    xk$('.text17 code').innerHTML=zy(text17);

    let text18 = `<div id="app">
<my-article></my-article>
</div>
<template id="myarticle">
    <div>
        <h3>这是标题</h3>
        <p>段落</p>
    </div>
</template>
<script>
    Vue.component('my-artilce',{
        template:'#myarticle'
    })
    var vm = new Vue({
        el:'#app'
    })
</script>`;

    xk$('.text18 code').innerHTML=zy(text18);

    var text19 =  `1.通过普通的 JavaScript 对象来定义组件：
var ComponentA = { /* ... */ }

var ComponentB = { /* ... */ }

2.在 components 选项中注册你想要使用的组件：

new Vue({
  el: '#app',
  components: {
    ComponentA,
    ComponentB
  }
})

3.使用注意注册在哪里，那么这个组件就只能这里使用

<component-a></component-a>
<component-b></component-b>

另一种写法：
   <script>
        1.创建一个对象
        var MyComp = {
            template:\`<div>这是局部组件</div>\`
        }
        2.把这个对象注册到实例或者组件上成为组件使用  通过组件或者实例的 components这个选项上，以key值为组件名称。
        3.使用这个实例或者组件的环境中（template中）就可以使用这个组件
        var vm = new Vue({
            components:{
                MyComp
            },
            template: \`<my-comp></my-comp>\`
        }).$mount('#app')

    </script>
`;

    xk$('.text19 code').innerText = text19;

    var text20 = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>05组件私有化数据</title>
</head>
<body>
    <div id="app">
        {{msg}}
        <btn></btn>
        <btn></btn>
        <btn></btn>
    </div>
    <script src="js/vue.js"></script>
    <script>

        Vue.component('btn',{
            data(){
                return {
                    num:0
                }
            },
            template:\`<button @click="add()">{{num}}</button>\`,
            methods:{
                add(){
                    this.num++;
                }
            }
        })
        var vue = new Vue({
            el:'#app',
            data:{
                msg:1
            }
        })
    </script>
</body>
</html>`;

    xk$('.text20 code').innerText = text20;

    var text21 = `<div id="app" class="container">
    <ym-alert a="asdfasdf"></ym-alert>
</div>

<template id="box">
    <div class="alert" :class="'alert-'+cn">
    这是警示框{{a}} {{typeof close}}
    <span v-show="close" class="close">&times;</span>
</div>
</template>
<script src="vue.js"></script>
<script>
    Vue.component('ym-alert', {
        template: '#box',
        /*数组是仅接收不验证
         props: ['a', 'cn', 'close']
        对象的简单验证方式*/
        props:{
            a:String,
            cn:String,
            close:Boolean
        }
        /*既验证又有默认值，而且还可以必须传递*/
        props:{
            a:{
                type:String, /*类型 的值是 内置构造函数*/
                default:'',   /*默认值*/
                required:true   /*必须传递 默认值是false*/
            },
            cn:{
                type: String,
                default:'warning'
            },
            close:{
                type:Boolean,
                default:true
            }
        }
    });

    var vm = new Vue({
        el: "#app",
        data: {

        }
    })
</script>`;

    xk$('.text21 code').innerText = text21;

    var text22 =  `<div id="app">
    <ym-btn @parqie="parChange" :show="show"></ym-btn>
    <!--第一步：在父组件上指定自定义事件并且指定函数名称。注意绑定事件对应的函数名称不可以加括号-->
    <p v-show="show"></p>
</div>
<script src="js/vue.js"></script>
<script>
    Vue.component('ym-btn',{
      props:['show'],
      template:\`<button @click="change">按钮{{show}}</button>\`,
           /*第三步：在子组件中正常绑定事件。并且在当前组件环境的methods下定义该功能change。*/
      methods:{
        change(){
          this.$emit('parqie',!this.show);
          /*第四步：对应的功能如何才能将父组件中的自定义事件对应的函数功能触发，通过this.$emit('自定义事件名称',参数)*/
        }
      }
    });
    var vm = new Vue({
      el:'#app',
      data:{
        show:true
      },
      methods:{
      /*第二步：指定的函数名称书写在对应的组件环境的methods下。并且定义该功能时，一般都要传参。*/
        parChange(value){
          this.show = value;
        }
      }
    })
</script>`;
    xk$('.text22 code').innerText = text22;

    var text23 = `<div id="app">
    <my-com></my-com>
    <my-com>你好</my-com>
    <my-com>
        <h2>插槽</h2>
        <p>果然好用</p>
    </my-com>
</div>
<template id="myCom">
    <div>
        <slot>我是默认值</slot>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    Vue.component('my-com',{
        template:'#myCom'
    })
    var vm = new Vue({
        el:'#app'
    })
</script>

结果：我是默认值
     你好
     插槽
     果然好用
`;
    xk$('.text23 code').innerText = text23;

    var text24 = `<div id="app">
    <my-com></my-com>
    <hr>
    <my-com>
        <span slot="center">叩丁狼</span>
    </my-com>
    <hr>
    <my-com>
        <span slot="left">返回</span>
        <span slot="center">叩丁狼</span>
        <span slot="left">菜单</span>
    </my-com>
</div>
<template id="myCom">
    <div>
        <slot name="left">默认左侧</slot>
        <slot name="center">默认中间</slot>
        <slot name="right">默认右侧</slot>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    Vue.component('my-com',{
        template:'#myCom'
    })
    var vm = new Vue({
        el:'#app'
    })
</script>
结果: 默认左侧
      默认中间
      默认右侧
      
      默认左侧
      叩丁狼
      默认右侧
      
      返回
      菜单
      叩丁狼
      默认右侧
`;
    xk$('.text24 code').innerText = text24;

    var text25 = `<div id="app">
    <my-com>
        <template slot-scope="abc" slot="left">
            <ul>        //给插槽标签写成template标签写法。并且添加slot-scope属性，
                          并且书写一个自定义的固定值（xxx）。在template标签中间添加
                          {{xxx，绑定数据的key值}}
                <li v-for="(item,index) in abc.data">{{item}}</li>
            </ul>
        </template>
    </my-com>
</div>
<script src="js/vue.js"></script>
<script>
  Vue.component('my-com', {
    template: \` <div>
        <slot :data="language" name="left"></slot>
    </div>\`,      //插槽绑定数据
    data() {
      return {
        language: ['H5学科', 'Java学科', 'UI学科']
      }
    }
  });
  var vm = new Vue({
    el: '#app',
  });
</script>`;
    xk$('.text25 code').innerHTML = zy(text25);

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
    "jquery": "^3.4.1"
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
    "start": "webpack src/main.js -o dist/bundle.js"
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
        })
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
        ]
    }
};`;

    xk$('.text28 code').innerHTML = zy(text28);


})();
