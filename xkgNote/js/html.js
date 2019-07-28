//内容文本代码块=========================================
var text1 = ' <!DOCTYPE html>\n' +
    '        <html lang="">\n' +
    '        <head>\n' +
    '            <meta charset="">\n' +
    '            <title>\n' +
    '            </title>\n' +
    '        </head>\n' +
    '        <body>\n' +
    '\n' +
    '        </body>\n' +
    '        </html>';
$('.text1 code').text(text1);

var text2 = '<fieldset>\n' +
    '        <legend>用户注册信息</legend>\n' +
    '        姓名: <input type="text" value="我是文字" placeholder="请输入账号">\n' +
    '        <br>\n' +
    '        <br>\n' +
    '        密码: <input type="password" placeholder="请输入密码">\n' +
    '        <textarea name="" id="" placeholder="介绍下自己，才能认识更多的朋友"></textarea>    \n' +
    '</fieldset>';
$('section .fieldset .text2 code').text(text2);

var text3 = '<video controls width="500">\n' +
    '    <source type="video/mp4" src="media/super.mp4">\n' +
    '    <source type="video/flv" src="media/super.flv">\n' +
    '    <source type="video/ogg" src="media/super.ogg">\n' +
    '    <source type="video/webm" src="media/super.webm">\n' +
    '    不好意思，您的播放器不支持视频标签，请更换谷歌或者火狐浏览器重试\n' +
    '</video>';
$('section .video .text3 code').text(text3);

