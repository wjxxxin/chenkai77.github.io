(function f() {
    var text1 = ' //在$符号被定义之前使用noConflict方法来重新设置名称\n' +
        '     var jq = $.noConflict();\n' +
        '     // $符号可能被定义为字符串或其他数据\n' +
        '     var $ = "重新赋值";\n' +
        '     //解决冲突之后,使用新设置的名称来操作\n' +
        '     jq(function () {\n' +
        '     \tconsole.log("DOM加载完毕");\n' +
        ' \t })'
    xk$('.text1  code').innerHTML = zy(text1);

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
    xk$('.text2 code').innerHTML=zy(text2);

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
    xk$('.text3 code').innerHTML=zy(text3);

    let text4 = '$("button").on("click",{name:"zs"},function (event) {\n' +
        '\tconsole.log("点击了按钮----2");\n' +
        '\t//获取事件的类型\n' +
        '\tconsole.log(event.type);\n' +
        '\t//获取目标对象\n' +
        '\tconsole.log(event.target);\n' +
        '\t//获取被省略的对象\n' +
        '\tconsole.log(event.data);\n' +
        '})';

    xk$('.text4 code').innerHTML=zy(text4);

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

    let text6 = '//01 创建DOM节点\nvar oDom = $("&lt;div>&lt;/div>");\n//02 设置DOM节点的内容\n oDom.text("测试的div标签");\n//02 把DOM节点添加到页面中\n $("body").append(oDom);\n\n\n$("body").append($("&lt; div>我是测试的div标签&lt;/div>"));';

    xk$('.tapSection .text6 code').innerHTML=zy(text6);

})();