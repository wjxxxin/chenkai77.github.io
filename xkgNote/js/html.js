//内容文本代码块=========================================
var text1 = ' <! DOCTYPE html>\n' +
    '        <html lang="zh">\n' +
    '        <head>\n' +
    '            <meta charset="UTF-8">\n' +
    '            <title>\n' +
    '            </title>\n' +
    '        </head>\n' +
    '        <body>\n' +
    '\n' +
    '        </body>\n' +
    '        </html>';
xk$('.text1 code').innerHTML=zy(text1);

var text2 = '<fieldset>\n' +
    '        <legend>用户注册信息</legend>\n' +
    '        姓名: <input type="text" value="我是文字" placeholder="请输入账号">\n' +
    '        <br>\n' +
    '        <br>\n' +
    '        密码: <input type="password" placeholder="请输入密码">\n' +
    '        <textarea name="" id="" placeholder="介绍下自己，才能认识更多的朋友"></textarea>    \n' +
    '</fieldset>';
xk$('section .fieldset .text2 code').innerText=text2;

var text3 = '<video controls width="500">\n' +
    '    <source type="video/mp4" src="media/super.mp4">\n' +
    '    <source type="video/flv" src="media/super.flv">\n' +
    '    <source type="video/ogg" src="media/super.ogg">\n' +
    '    <source type="video/webm" src="media/super.webm">\n' +
    '    不好意思，您的播放器不支持视频标签，请更换谷歌或者火狐浏览器重试\n' +
    '</video>';
xk$('section .video .text3 code').innerText=text3;

var text4 = `<canvas id="canvas" width="400" height="300"></canvas>
// 01.获取canvas画布
var canvas = document.getElementById("canvas");
// 02.获取canvas上下文对象（绘图工具）
var ctx = canvas.getContext("2d");
// 03.设置路径
// 设置路径的起点
ctx.moveTo(20, 50);
// 设置路径的目标值
ctx.lineTo(100, 50);
// 绘制线条
ctx.stroke();`;

xk$('.text4 code').innerHTML=zy(text4);


