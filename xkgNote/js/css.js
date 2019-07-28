var text1 = '<b></b>\n' +
    '<u></u>\n' +
    '<i></i>\n' +
    '<em></em>(斜体)\n' +
    '<hr></hr>(下划线)';
$('section pre.text1 code').text(text1);

var text2 = 'h2{display:inline;\n' +
    'border-top:6px soild red;\n' +
    'border-left:6px dashed green;\n' +
    'border-right:6px dotted blue; \n' +
    'border-bottom:6px soild tan;}\n' +
    '\n' +
    'p{width:500px;\n' +
    'border-top:2px soild #000;\n' +
    'border-bottom:2px soild #000\n' +
    'border-left:2px dotted #000\n' +
    'border-right:2px dashed #000}';
$('.text2  code').text(text2);

var text3 = '<table> \n' +
    '\t<tr>\n' +
    '    \t<td>单元格1</td>\n' +
    '        <td>单元格2</td>\n' +
    '        <td rowspan="2">单元格3</td>\n' +
    '\t</tr>\n' +
    '    <tr>\n' +
    '        <td colspan="2">单元格4</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '    \t<td>单元格6</td>\n' +
    '        <td>单元格7</td>\n' +
    '        <td>单元格8</td>\n' +
    '\t</tr>\n' +
    '</table>';
$('.text3  code').text(text3);

var text4 = '当 flex 取值为 none，则计算值为 0 0 auto，如下是等同的：\n' +
    '.item {flex: none;}\n' +
    '.item {\n' +
    '    flex-grow: 0;\n' +
    '    flex-shrink: 0;\n' +
    '    flex-basis: auto;\n' +
    '}\n' +
    '当 flex 取值为 auto，则计算值为 1 1 auto，如下是等同的：\n' +
    '.item {flex: auto;}\n' +
    '.item {\n' +
    '    flex-grow: 1;\n' +
    '    flex-shrink: 1;\n' +
    '    flex-basis: auto;\n' +
    '}\n' +
    '当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：\n' +
    '.item {flex: 1;}\n' +
    '.item {\n' +
    '    flex-grow: 1;\n' +
    '    flex-shrink: 1;\n' +
    '    flex-basis: 0%;\n' +
    '}';
$('.text4  code').text(text4);

var text5 = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '    <title>叩丁狼教育</title>\n' +
    '    <style>\n' +
    '        .father{width: 1200px; background: gold; margin: auto;}\n' +
    '        .child{width: 360px; height: 200px; background: pink; float: left;}\n' +
    '        .mid{margin: 0 60px;}\n' +
    '        .clear{ height: 0; font-size: 0; overflow: hidden; clear:both;}\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <div class="father">\n' +
    '        <div class="child"></div>\n' +
    '        <div class="child mid"></div>\n' +
    '        <div class="child"></div>\n' +
    '        <div class="clear"></div>\n' +
    '    </div>\n' +
    '</body>\n' +
    '</html>';
$('.tapSection .text5 code').text(text5);


var text6 = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '    <title>叩丁狼教育</title>\n' +
    '    <style>\n' +
    '        .father{width: 1200px; background: gold; margin: auto;}\n' +
    '        .child{width: 360px; height: 200px; background: pink; float: left;}\n' +
    '        .mid{margin: 0 60px;}\n' +
    '        .clearfix:after{ content:"";height: 0;display: block; font-size: 0; overflow: hidden; clear:both;}\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <div class="father clearfix">\n' +
    '        <div class="child"></div>\n' +
    '        <div class="child mid"></div>\n' +
    '        <div class="child"></div>\n' +
    '    </div>\n' +
    '</body>\n' +
    '</html>';
$('.tapSection .text6 code').text(text6);


var text7='<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>04浮动</title>\n' +
    '    <style>\n' +
    '        *{\n' +
    '            margin: 0;\n' +
    '            padding: 0; list-style: none;\n' +
    '            border: none;}\n' +
    '        .nav{\n' +
    '            width: 200px;\n' +
    '            height: 200px;\n' +
    '            margin: auto;\n' +
    '            margin-bottom: 60px;\n' +
    '            background:tan;\n' +
    '        }\n' +
    '        .parent{\n' +
    '            overflow: hidden;\n' +
    '            height: 200px;\n' +
    '            width: 200px;\n' +
    '            background: pink;margin: auto;\n' +
    '        }\n' +
    '        .clearfix:after,.clearfix:before{\n' +
    '            /*注意必须转成块级元素，第二高度为0 第三溢出隐藏，第四 字体大小为0  第五清浮动*/\n' +
    '            overflow: hidden;\n' +
    '            font-size: 0;\n' +
    '            content: "";\n' +
    '            display: block;\n' +
    '            height: 0px;\n' +
    '            clear: both;\n' +
    '        }\n' +
    '        .child{\n' +
    '            width: 100px;\n' +
    '            height: 100px;\n' +
    '            background: skyblue;\n' +
    '            margin-top: 60px;\n' +
    '        }\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <div class="nav">\n' +
    '    </div>\n' +
    '    <div class="parent clearfix">\n' +
    '        <div class="child">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</body>\n' +
    '</html>';

$('.text7 code').text(text7);

var text8 = '.clearfix:after,.clearfix:before{ content:"";height: 0;display: block; font-size: 0; overflow: hidden; clear:both;}\n' +
    '<div class="brother1"></div>\n' +
    '<div class="clearfix"></div>\n' +
    '<div class="brother2"></div>';

$('.text8 code').text(text8);

var text9 = '<!doctype html>\n' +
    '<html>\n' +
    '<head>\n' +
    '<meta charset="utf-8">\n' +
    '<title>无标题文档</title>\n' +
    '<style>\n' +
    '*{margin: 0;padding: 0;}\n' +
    'body, html {\n' +
    '    overflow-x: hidden;\n' +
    '}\n' +
    '.box{ \n' +
    '    height: 300px;  background: pink; padding: 0 200px; min-width: 600px; \n' +
    '    }\n' +
    '.box .center{ \n' +
    '    height: 300px;  width: 100%;background: orange;float: left;\n' +
    '    }\n' +
    '.box .left{\n' +
    '    width: 200px;height: 300px;background:green; float: left; margin-left: -100%; position: relative; left:-200px;\n' +
    '    }\n' +
    '.box .right{\n' +
    '    width: 200px;height: 300px;background:blue; float: right; margin-left: -100%;position: relative; left:200px\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '</style>\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '\n' +
    '<div class="box">\n' +
    '\t<div class="center">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n' +
    '\t哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n' +
    '\t哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n' +
    '\t哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n' +
    '\t哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>\n' +
    '\t<div class="left">左边的内容</div>\n' +
    '\t<div class="right">右边的内容</div>\n' +
    '</div>\n' +
    '</body>\n' +
    '</html>';
$('.tapSection .text9 code').text(text9);

var text10= '<!doctype html>\n' +
    '<html>\n' +
    '<head>\n' +
    '<meta charset="utf-8">\n' +
    '<title>无标题文档</title>\n' +
    '<style>\n' +
    '*{\n' +
    '    margin: 0;padding: 0;\n' +
    '    }\n' +
    '.box{ \n' +
    '    height: 300px; background: pink; \n' +
    '    }\n' +
    '.box .center{\n' +
    '    width: 100%; height: 300px; background: orange; float: left;\n' +
    '    }\n' +
    '.box .left{\n' +
    '    width: 200px; height: 300px; background: blue; float: left; margin-left: -100%;\n' +
    '    }\n' +
    '.box .right{\n' +
    '    width: 200px; height: 300px; background: green;float: right; margin-left: -200px; \n' +
    '    }\n' +
    '.box .center div{\n' +
    '    margin: 0 200px;\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '</style>\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '<div class="box">\n' +
    '\t<div class="center"><div>中间中间</div></div>\n' +
    '\t<div class="left">左边左边容</div>\n' +
    '\t<div class="right">右边右边</div>\n' +
    '</div>\n' +
    '</body>\n' +
    '</html>';
$('.tapSection .text10 code').text(text10);


var text11 = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '    <title>叩丁狼教育</title>\n' +
    '    <style>\n' +
    '        *{margin: 0; padding: 0; list-style: none; border: none;}\n' +
    '        .box{  min-width: 600px; height: 400px; background: gold; position: relative;}\n' +
    '        .center{ height: 100%; background: pink; position: absolute;top: 0; left: 300px; right: 300px;}\n' +
    '        .left{background: blue; width: 300px;height: 100%;  float: left;}\n' +
    '        .right{background: green; width: 300px;height: 100%;float: right;}\n' +
    '\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <div class="box">\n' +
    '        <div class="center">\n' +
    '                欢迎大家来到叩丁狼学习代码\n' +
    '        </div>\n' +
    '        <div class="left">左栏</div>\n' +
    '        <div class="right">右栏</div>\n' +
    '    </div>\n' +
    '</body>\n' +
    '</html>';
$('.tapSection .text11 code').text(text11);

var text12 = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>10</title>\n' +
    '    <style>\n' +
    '        .wrapper{width: 1140px; margin: auto;background: skyblue;overflow: hidden;}\n' +
    '        .clearfix:after,.clearfix:before{content:"";display: block;height: 0;\n' +
    '        font-size: 0;overflow: hidden; clear: both;}\n' +
    '        .item{width: 270px;height: 100px;background: pink;float: left;margin-right: 20px;}\n' +
    '\t\t.cur{  margin-right:0}\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <!--一行排四个，而且只有四个-->\n' +
    '    <div class="wrapper clearfix">\n' +
    '        <div class="item">1</div>\n' +
    '        <div class="item">2</div>\n' +
    '        <div class="item">3</div>\n' +
    '        <div class="item cur">4</div>\n' +
    '    </div>\n' +
    '</body>\n' +
    '</html>';
$('.tapSection .text12 code').text(text12);

var text13 = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>10</title>\n' +
    '    <style>\n' +
    '        .wrapper{width: 1140px; margin: auto;background: skyblue;overflow: hidden;}\n' +
    '        .clearfix:after,.clearfix:before{content:"";display: block;height: 0;\n' +
    'font-size: 0;overflow: hidden; clear: both;}\n' +
    '        .item{width: 270px;height: 100px;background: pink;float: left;margin-right: 20px;}\n' +
    '        .row{width: 9999999999999px;}\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <!--一行排四个，而且只有四个-->\n' +
    '    <div class="wrapper clearfix">\n' +
    '        <div class="row">\n' +
    '            <div class="item">1</div>\n' +
    '            <div class="item">2</div>\n' +
    '            <div class="item">3</div>\n' +
    '            <div class="item">4</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</body>\n' +
    '</html>';

$('.tapSection .text13 code').text(text13);

var text14 = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>10</title>\n' +
    '    <style>\n' +
    '        /*\n' +
    '            注意，这里面的东西不是我一开始就会的，而是去看别的框架设计才去弄懂。\n' +
    '                它是一种思想\n' +
    '                思想这种东西，不是一看就会的。需要沉下心研究。\n' +
    '                栅格化思想\n' +
    '        */\n' +
    '        .wrapper{width: 1140px;height: 400px; margin: auto;\n' +
    '            border: 1px solid #000;}\n' +
    '        .row{ margin:  0 -10px;height: 300px;}\n' +
    '        .item{width: 25%;float: left;height: 100px;padding: 0 10px; \n' +
    '            box-sizing: border-box;}\n' +
    '    </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '<!--一行排四个，而且只有四个-->\n' +
    '<div class="wrapper "> 第一层\n' +
    '    <div class="row ">第二层\n' +
    '        <div class="item"> 第三层\n' +
    '            1 第四层\n' +
    '        </div>\n' +
    '        <div class="item"> 第三层\n' +
    '            2第四层\n' +
    '        </div>\n' +
    '        <div class="item">第三层\n' +
    '            3第四层\n' +
    '        </div>\n' +
    '        <div class="item">第三层\n' +
    '            4第四层\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</body>\n' +
    '</html>';

$('.tapSection .text14 code').text(text14);

var text15 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>index</title>
    <style>

        *{margin: 0; padding: 0; list-style: none; border: none;}
        /*指定根字体大小，100px 都是以iphone6屏幕来进行计算的，很多时候，屏幕的内容会随着，屏幕的变大而变大，需要转换为vw值*/
        /*
        
        100px      ?vw\t\t\t\t\t\t\t\t\t\t\t\t 100px*100vw
 \t   ------ =  ------     --->   100px *100vw = ?vw*375px  -----> -----------  = ?vw
        375px      100vw\t\t\t\t\t\t\t\t\t\t\t\t375px
        
        
        */
      
        html{ font-size: 100px; font-size:26.66667vw;}
        /*屏幕 尺寸超过640像素，限制根字体大小，到一定的范围*/
        @media (min-width: 640px) {
            html{
                font-size: 170px;
            }
        }

        body{font-size:0.12rem;}/*指定默认文字 大小是12像素*/
        div{ height: 2rem; background: gold;}
        p{height: 0.1rem; background: purple;}


    </style>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <div>宽等于屏幕 的宽度高等于200px我们写移动端 但是要转换成rem</div>
    <p>宽度等于屏宽度，高度等于10像素</p>
</body>
</html>`;

$('.text15 code').text(text15);

var text16 = ` <!--添加视口, 适配移动设备:
        width=device-width: 让html的宽等于设备的宽（例如设备是iphone6 宽是375 pt）
        initial-scale=1.0 : 不允许用户进行手动缩放
    -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`;
$('.text16 code').text(text16);

var text17 = `  <!-- 是否启用 WebApp 全屏模式（ content有两个值”yes”和”no”,默认no就是显示苹果工具栏和菜单栏 ） -->
    <meta name="apple-mobile-web-app-capable" content="yes">`;

$('.text17 code').text(text17);

var text18 = `    <!-- 设置状态栏的背景颜色,只有在 “apple-mobile-web-app-capable” content=”yes” 时生效，默认值为default（白色），可以定为black（黑色） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">`;

$('.text18 code').text(text18);

var text19 = ` <!--告诉设备忽略将页面中的数字识别为电话号码-->
    <meta name="format-detection" content="telephone=no">`;

$('.text19 code').text(text19);

var text20 = `@charset "utf-8";
/* 清零 */
*:focus{outline: none;}
html{
\t/*禁用iPhone中Safari的字号自动调整*/
\t-webkit-text-size-adjust:100%;
\t-ms-text-size-adjust:100%;
\t/* 解决IOS默认滑动很卡的情况 */
\t-webkit-overflow-scrolling : touch;
}
body{font-family:'Microsoft YaHei', Tahoma,Arial,"Roboto","Droid Sans","Helvetica Neue","Droid Sans Fallback","STHeiti",sans-serif;}
/*去除iPhone中默认的input样式*/
input{-webkit-appearance:none; resize:none;}
/*取消链接高亮*/
body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,select,p,dl,dt,dd,a,img,button,form,table,th,th,tr,th,tbody,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{-webkit-tap-hightlight-color:rgba(0,0,0,0);    -webkit-tap-highlight-color: transparent; margin: 0;padding: 0;border: none; }
/*设置HTML5元素为块级元素*/
article,aside,details,figcaption,figure,footer,hgroup,menu,nav,section{display: block;}
/*图片自适应*/
img{max-width: 100%;height: auto;width:auto\\9; /*IE8*/-ms-interpolation-mode:bicubic; /*为了照顾IE图片缩放失真*/}


em,i,strong{font-style: normal;}
.clearfix:after{content: "";display: block;visibility: hidden;height: 0; clear: both;}
.clearfix{zoom:1}
a{text-decoration: none;color: #929292;font-family:'Microsoft YaHei', Tahoma,Arial,"Roboto","Droid Sans","Helvetica Neue","Droid Sans Fallback","STHeiti",sans-serif;}
a:hover{color: #929292; text-decoration: none;}
ul,ol,li{list-style: none;}
h1,h2,h3,h4,h5,h6{font-size: 100%; font-family:'Microsoft YaHei', Tahoma,Arial,"Roboto","Droid Sans","Helvetica Neue","Droid Sans Fallback","STHeiti",sans-serif;}
fieldset,img{border: none;}
table{border-collapse: collapse;border-spacing: 0;}
caption,th{text-align: left;}
q:before,q:after{content: "";}
/*禁止表单使用文本框输入法*/
input:password{ime-mode: disabled;}
.scope{max-width: 640px;margin: 0 auto;}
.clear{clear: both;}
/*连续英文，数字换行*/
.wordwrap{word-break: break-all;word-wrap: break-word;}
/*单行文字超出显示省略号*/
.omg{overflow: hidden;text-overflow:ellipsis ;white-space: nowrap;}

*{box-sizing: border-box;}

/* 禁止长按链接与图片弹出菜单 */
a, img {-webkit-touch-callout: none;}
/* 禁止选中文本（如无文本选中需求，此为必选项） */
html, body {-webkit-user-select: none;user-select: none;}`;

$('.text20 code').text(text20);


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
