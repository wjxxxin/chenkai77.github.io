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
$('.add2.text2  .other code').text(text2);

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
$('.add.text3  .other code').text(text3);

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
$('.add2.text4  .other code').text(text4);

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
