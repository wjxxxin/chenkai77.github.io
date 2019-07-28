let text1 = '<form action="请求路径">\n' +
    '    <input type="text" placeholder="请传入用户名" name="username">\n' +
    '    <input type="text" placeholder="请传入密码" name="password">\n' +
    '    <input type="submit">\n' +
    '</form>';

$('.text1 code').text(text1);

let text2 = '<form action="请求路径" method="POST">\n' +
    '    <input type="text" placeholder="请传入用户名" name="username">\n' +
    '    <input type="text" placeholder="请传入密码" name="password">\n' +
    '    <input type="submit">\n' +
    '</form>';

$('.text2 code').text(text2);

let text3 = '<form action="请求路径" method="POST" enctype="multipart/form-data">\n' +
    '    <input type="file" name="fileName">\n' +
    '    <input type="submit">\n' +
    '</form>';

$('.text3 code').text(text3);

let text4 = 'let buf1 = Buffer.from(\'wolfcode\');\n' +
    'let buf2 = Buffer.from(\'.cn\');\n' +
    'console.log(Buffer.isEncoding(\'utf8\'));\n' +
    'console.log(Buffer.isBuffer(\'国家\', \'utf8\'));\n' +
    'console.log(Buffer.byteLength(buf1));\n' +
    '\n' +
    'let concatBuf = Buffer.concat([buf1, buf2]);\n' +
    'console.log(concatBuf.toString());\n' +
    '\n' +
    '\n' +
    'let buf = Buffer.alloc(128);\n' +
    'let len = buf.write("www.wolfcode.cn");\n' +
    'console.log("写入字节数 : " +  len);         // 15\n' +
    '\n' +
    'let buf = Buffer.from(\'wolfcode\').slice(0, 2);\n' +
    'console.log(buf.toString());\n' +
    '\n' +
    'let buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);\n' +
    'console.log(buf.toJSON());\n' +
    'console.log(buf.toJSON().type);\n' +
    'console.log(buf.toJSON().data);';

$('.text4 code').text(text4);

let text5 = 'const events = require(\'events\');\n' +
    'let emitter = new events.EventEmitter();\n' +
    'emitter.on(\'someEvent\', function(arg1, arg2) { // 绑定事件处理函数\n' +
    '    console.log(\'listener1\', arg1, arg2);\n' +
    '});\n' +
    'emitter.on(\'someEvent\', function(arg1, arg2) {  // 绑定事件处理函数\n' +
    '    console.log(\'listener2\', arg1, arg2);\n' +
    '});\n' +
    'emitter.emit(\'someEvent\', \'lony\', 1988);        // 触发事件';

$('.text5 code').text(text5);

let text6 = 'let p = \'/foo/bar/baz/asdf/quux.html\';\n' +
    'console.log(path.basename(p));                                                  // quux.html\n' +
    'console.log(path.basename(p, \'.html\'));                                         // quux\n' +
    'console.log(path.extname(p));                                                   // .html\n' +
    '\n' +
    '\n' +
    'let p = \'/foo/bar/baz/asdf/quux.html\';\n' +
    'console.log(path.parse(p));\n' +
    '\n' +
    'let pathObj = {\n' +
    '    root: \'E:\\\\\',               // 根路径\n' +
    '    dir: \'E:\\\\Note\\\\Node.js\',   // 目录\n' +
    '    base: \'12.路径.html\',       // 文件\n' +
    '    ext: \'.html\',               // 后缀名\n' +
    '    name: \'12.路径\'             // 文件名\n' +
    '};\n' +
    'console.log(path.format(pathObj));\n' +
    '\n' +
    '\n' +
    'console.log(path.isAbsolute(p));                                                // true\n' +
    '\n' +
    'console.log(path.join(\'/foo\', \'bar\', \'baz/asdf\', \'quux\'));                      // \\foo\\bar\\baz\\asdf\\quux\n' +
    'console.log(path.join(\'/foo\', \'bar\', \'baz/asdf\', \'quux\', \'..\'));                // \\foo\\bar\\baz\\asdf\n' +
    'console.log(path.join(\'/foo\', \'bar\', \'baz/asdf\', \'quux\', \'../..\'));             // \\foo\\bar\\baz\n' +
    '\n' +
    'console.log(path.normalize(\'C:\\\\temp\\\\\\\\foo\\\\bar\\\\..\\\\\'));                      // C:\\temp\\foo\\\n' +
    'console.log(path.relative(\'C:\\\\orandea\\\\test\\\\aaa\', \'C:\\\\orandea\\\\impl\\\\bbb\')); // ..\\..\\impl\\bbb\n' +
    '\n' +
    'console.log(path.resolve(\'\\\\foo\\\\bar\', \'.\\\\baz\'));                              // e:\\foo\\bar\\baz\n' +
    'console.log(path.resolve(\'f:\', \'\\\\foo\\\\bar\', \'.\\\\baz\'));                        // f:\\foo\\bar\\baz\n' +
    '// 依次从右边给定的路径开始，解析出绝对路径，若给定的路径没有包含根路径，那则以当前运行文件所以在根路径为准。';

$('.text6 code').text(text6);

let text7 = 'const fs = require(\'fs\');\n' +
    'const path = require(\'path\');\n' +
    'fs.stat(path.join(__dirname, \'data.txt\'), (err, stat) => {\n' +
    '    /*\n' +
    '    atime 文件访问时间\n' +
    '    ctime 文件的状态信息发生变化的时间（比如文件的权限）\n' +
    '    mtime 文件数据发生变化的时间\n' +
    '    birthtime 文件创建的时间\n' +
    '    */\n' +
    '    console.log(err);\n' +
    '    console.log(stat);\n' +
    '    console.log(stat.isDirectory());\n' +
    '    console.log(stat.isFile());\n' +
    '    console.log(1);\n' +
    '});\n' +
    'console.log(2);\n' +
    '\n' +
    '// 同步操作\n' +
    '// console.log(1);\n' +
    '// let ret = fs.statSync(\'./data.txt\');\n' +
    '// console.log(ret);\n' +
    '// console.log(2);';

$('.text7 code').text(text7);

let text8 = 'fs.readFile(path.join(__dirname, \'data.txt\'), (err, data) => {\n' +
    '    console.log(data);\n' +
    '});\n' +
    '\n' +
    '// 如果有第二个参数并且是编码，那么回调函数获取到的数据就是字符串\n' +
    '// 如果没有第二个参数，那么得到的就是 Buffer 实例对象\n' +
    'fs.readFile(path.join(__dirname, \'data.txt\'), \'utf8\', (err, data) => {\n' +
    '    console.log(data);\n' +
    '});\n' +
    '\n' +
    '// 同步操作\n' +
    'let ret = fs.readFileSync(strpath, \'utf8\');\n' +
    'console.log(ret);';

$('.text8 code').text(text8);

let text9 = 'fs.writeFile(path.join(__dirname, \'data.txt\'), \'hello\', \'utf8\', (err) => {\n' +
    '    if(!err){\n' +
    '        console.log(\'文件写入成功\');\n' +
    '    }\n' +
    '});\n' +
    '\n' +
    'let buf = Buffer.from(\'hi\');\n' +
    'fs.writeFile(path.join(__dirname, \'data.txt\'), buf, (err) => {\n' +
    '    if(!err){\n' +
    '        console.log(\'文件写入成功\');\n' +
    '    }\n' +
    '});\n' +
    '\n' +
    '// 同步操作\n' +
    'fs.writeFileSync(path.join(__dirname, \'data.txt\'), \'你好吗\');';

$('.text9 code').text(text9);

let text10 = 'const path = require(\'path\');\n' +
    'const fs = require(\'fs\');\n' +
    '// 创建目录\n' +
    'fs.mkdir(path.join(__dirname, \'abc\'), (err) => {\n' +
    '    console.log(err);\n' +
    '});\n' +
    '//同步创建目录 \n' +
    'fs.mkdirSync(path.join(__dirname, \'efg\'));\n' +
    '\n' +
    '// 读取目录\n' +
    'fs.readdir(__dirname, (err, files) => {\n' +
    '    files.forEach((item, index) => {\n' +
    '        fs.stat(path.join(__dirname, item), (err, stat) => {\n' +
    '            if(stat.isFile()){\n' +
    '                console.log(item, \'文件\');\n' +
    '            }else if(stat.isDirectory()){\n' +
    '                console.log(item, \'目录\');\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '});\n' +
    '// 同步读取目录\n' +
    'let files = fs.readdirSync(__dirname);\n' +
    'files.forEach((item, index) => {\n' +
    '    fs.stat(path.join(__dirname, item), (err, stat) => {\n' +
    '        if(stat.isFile()){\n' +
    '            console.log(item, \'文件\');\n' +
    '        }else if(stat.isDirectory()){\n' +
    '            console.log(item, \'目录\');\n' +
    '        }\n' +
    '    });\n' +
    '});\n' +
    '\n' +
    '// 删除目录\n' +
    'fs.rmdir(path.join(__dirname, \'abc\'), (err) => {\n' +
    '    console.log(err);\n' +
    '});\n' +
    '// 同步删除目录\n' +
    'fs.rmdirSync(path.join(__dirname, \'abc\'));';

$('.text10 code').text(text10);

let text11 = '/*\n' +
    '    文件操作案例（初始化目录结构）\n' +
    '*/\n' +
    'const path = require(\'path\');\n' +
    'const fs = require(\'fs\');\n' +
    '\n' +
    'let root = \'C:\\\\Users\\\\www\\\\Desktop\';\n' +
    'let fileContent = `\n' +
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>Document</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <div>welcome to this</div>\n' +
    '</body>\n' +
    '</html>\n' +
    '`;\n' +
    '\n' +
    '// 初始化数据\n' +
    'let initData = {\n' +
    '    projectName : \'mydemo\',\n' +
    '    data : [{\n' +
    '        name : \'img\',\n' +
    '        type : \'dir\'\n' +
    '    },{\n' +
    '        name : \'css\',\n' +
    '        type : \'dir\'\n' +
    '    },{\n' +
    '        name : \'js\',\n' +
    '        type : \'dir\'\n' +
    '    },{\n' +
    '        name : \'index.html\',\n' +
    '        type : \'file\'\n' +
    '    }]\n' +
    '}\n' +
    '\n' +
    '// 创建项目跟路径\n' +
    'fs.mkdir(path.join(root, initData.projectName), (err) => {\n' +
    '    if(err) return;\n' +
    '    // 创建子目录和文件\n' +
    '    initData.data.forEach((item) => {\n' +
    '        if(item.type == \'dir\'){\n' +
    '            // 创建子目录\n' +
    '            fs.mkdirSync(path.join(root, initData.projectName, item.name));\n' +
    '        }else if(item.type == \'file\'){\n' +
    '            // 创建文件并写入内容\n' +
    '            fs.writeFileSync(path.join(root, initData.projectName, item.name), fileContent);\n' +
    '        }\n' +
    '    });\n' +
    '});';

$('.text11 code').text(text11);

let text12 = 'const path = require(\'path\');\n' +
    'const fs = require("fs");\n' +
    'let data = \'\';\n' +
    '// 创建可读流\n' +
    'let readerStream = fs.createReadStream(path.join(__dirname, \'input.txt\'));\n' +
    '// 设置编码为 utf8。\n' +
    'readerStream.setEncoding(\'utf8\');\n' +
    '// 处理流事件\n' +
    '// 有有数据可读时触发\n' +
    'readerStream.on(\'data\', (chunk) => {\n' +
    '    data += chunk;\n' +
    '});\n' +
    '// 当没有更多的数据可读时触发\n' +
    'readerStream.on(\'end\', () => {\n' +
    '    console.log(data);\n' +
    '});\n' +
    '// 在读取或写入过程中发生错误时触发\n' +
    'readerStream.on(\'error\', (err) => {\n' +
    '    console.log(err.stack);\n' +
    '});';

$('.tapSection .text12 code').text(text12);

let text13 = 'const path = require(\'path\');\n' +
    'const fs = require("fs");\n' +
    'let data = \'你好美，么么哒\';\n' +
    '// 创建一个可以写入的流，写入到文件 output.txt 中\n' +
    'let writerStream = fs.createWriteStream(path.join(__dirname, \'output.txt\'));\n' +
    '\n' +
    '// 处理流事件\n' +
    '// 所有数据已被写入到底层系统时触发\n' +
    'writerStream.on(\'finish\', () => {\n' +
    '    console.log("写入完成。");\n' +
    '});\n' +
    '// 在读取或写入过程中发生错误时触发\n' +
    'writerStream.on(\'error\', (err) => {\n' +
    '   console.log(err.stack);\n' +
    '});\n' +
    '\n' +
    '// 使用 utf8 编码写入数据\n' +
    'writerStream.write(data, \'utf8\');\n' +
    '// 标记文件末尾，表明后面没数据要再写入了\n' +
    'writerStream.end();\n';

$('.tapSection .text13 code').text(text13);

let text14 = 'const path = require(\'path\');\n' +
    'const fs = require(\'fs\');\n' +
    'let spath = path.join(__dirname, \'src.txt\');\n' +
    'let dpath = path.join(__dirname, \'dest.txt\');\n' +
    '// pipe 的作用直接把输入流和输出流 readStream.pipe(writeStream);\n' +
    'fs.createReadStream(spath).pipe(fs.createWriteStream(dpath));';

$('.tapSection .text14 code').text(text14);

let text15 = 'const path = require(\'path\');\n' +
    'const fs = require(\'fs\');\n' +
    'let spath = path.join(__dirname, \'src.txt\');\n' +
    'let dpath = path.join(__dirname, \'dest.txt\');\n' +
    '// 默认情况下将创建或覆盖目标文件。\n' +
    'fs.copyFile(spath, dpath, (err) => {\n' +
    '    if(err){\n' +
    '        throw err;\n' +
    '    } \n' +
    '    console.log(\'源文件已拷贝到目标文件\');\n' +
    '});';

$('.tapSection .text15 code').text(text15);

let text16 = 'const http = require(\'http\');\n' +
    '\n' +
    '// http.createServer 创建了一个 http.Server 的实例，将一个函数作为 HTTP 请求处理函数\n' +
    'let server = http.createServer((req, res) => {\n' +
    '    // 发送 HTTP 头部 \n' +
    '    // HTTP 状态值: 200 : OK，内容类型: text/plain\n' +
    '    res.writeHead(200, {\'Content-Type\': \'text/plain\'});\n' +
    '    // 发送响应数据 "Hello World"\n' +
    '    res.end(\'Hello World\');\n' +
    '});\n' +
    'server.listen(8888);    // 监听 8888 端口 ';

$('.text16 code').text(text16);

let text17 = 'const http = require(\'http\');\n' +
    'let server = new http.Server();\n' +
    'server.on(\'request\', (req, res) => {\n' +
    '    // 设置响应的状态码和响应的消息类型\n' +
    '    res.writeHead(200, {\'Content-Type\': \'text/plain\'});\n' +
    '    // 设置响应的内容\n' +
    '    res.end(\'Hello World\');\n' +
    '});\n' +
    'server.listen(8888);';

$('.text17 code').text(text17);

let text18 = 'const http = require(\'http\');\n' +
    'const url = require(\'url\');\n' +
    'const util = require(\'util\');\n' +
    'http.createServer((req, res) => {\n' +
    '    res.writeHead(200, {\'Content-Type\': \'text/plain\'});\n' +
    '    let params = util.inspect(url.parse(req.url, true)); // 利用 url 模块功能解析出请求参数\n' +
    '    res.end(params);\n' +
    '}).listen(8888);';

$('.tapSection .text18 code').text(text18);

let text19 = 'const http = require(\'http\');\n' +
    'const querystring = require(\'querystring\');\n' +
    'const util = require(\'util\');\n' +
    'http.createServer((req, res) => {\n' +
    '    // 定义了一个 postData 变量，用于暂存请求体的信息。\n' +
    '    let postData = \'\';\n' +
    '    // 每当接受到请求体的数据，就累加到 post 变量中\n' +
    '    req.on(\'data\', function(chunk) {\n' +
    '        postData += chunk;\n' +
    '    });\n' +
    '    // 当请求体数据传输完成时，通过 querystring.parse 将 postData 解析为真正的 POST 请求格式\n' +
    '    req.on(\'end\', function() {\n' +
    '        postData = querystring.parse(postData);\n' +
    '        res.end(util.inspect(postData));\n' +
    '    });\n' +
    '}).listen(8888);';

$('.tapSection .text19 code').text(text19);

let text20 = 'const http = require(\'http\');\n' +
    'let server = http.createServer((req, res) => {\n' +
    '    // req.url可以获取URL中的路径（端口之后部分）\n' +
    '    if(req.url.startsWith(\'/index\')){\n' +
    '        res.end(\'index\');\n' +
    '    }else if(req.url.startsWith(\'/about\')){\n' +
    '        res.end(\'about\');\n' +
    '    }else if(req.url.startsWith(\'/close\')){\n' +
    '        res.end(\'Server is closed!\');\n' +
    '        server.close();\n' +
    '    }else{\n' +
    '        res.end(\'no content\');\n' +
    '    }\n' +
    '});\n' +
    'server.listen(8888);';

$('.tapSection .text20 code').text(text20);

let text21 = 'const http = require(\'http\');\n' +
    'const path = require(\'path\');\n' +
    'const fs = require(\'fs\');\n' +
    'const mime = require(\'./mime.json\');\n' +
    '\n' +
    'http.createServer((req, res) => {\n' +
    '    fs.readFile(path.join(__dirname, \'static\', req.url), (err, fileContent) => {\n' +
    '        if(err){\t\n' +
    '            // 没有找到对应文件\n' +
    '            res.writeHead(404, {\'Content-Type\' : \'text/plain;charset=utf8\'});\n' +
    '            res.end(\'页面被外星人劫持了\');\n' +
    '        }else{\n' +
    '            let dtype = \'text/html\';\n' +
    '            // 获取请求文件的后缀\n' +
    '            let ext = path.extname(req.url);\n' +
    '            // 如果请求的文件后缀合理，就获取到标准的响应格式\n' +
    '            if(mime[ext]){\n' +
    '                dtype = mime[ext];\n' +
    '            }\n' +
    '            // 如果响应的内容是文本，就设置成 utf8 编码\n' +
    '            if(dtype.startsWith(\'text\')){\n' +
    '                dtype += \';charset=utf8\';\n' +
    '            }\n' +
    '            // 设置响应头信息\n' +
    '            res.writeHead(200, {\'Content-Type\' : dtype});\n' +
    '            res.end(fileContent);\n' +
    '        } \n' +
    '    });\n' +
    '}).listen(8888);';

$('.tapSection .text21 code').text(text21);

let text22 = 'const http = require(\'http\');\n' +
    '// 响应 JSON 格式的数据\n' +
    'http.createServer((req, res) => {\n' +
    '    res.writeHead(200, {\'Content-Type\': \'application/json\'});\n' +
    '    // 模拟从数据库查询了用户数据\n' +
    '    res.end(\'{"name":"lony","age":18}\');\n' +
    '}).listen(8888);';

$('.tapSection .text22 code').text(text22);

let text23 = 'const http = require(\'http\');\n' +
    '// 响应 HTML 格式的数据\n' +
    'http.createServer((req, res) => {\n' +
    '    res.writeHead(200, {\'Content-Type\' : \'text/html\'});\n' +
    '    res.write(\'<!DOCTYPE html>\');\n' +
    '\tres.write(\'<html lang="en">\');\n' +
    '\tres.write(\'<head>\');\n' +
    '    res.write(\'<meta charset="UTF-8">\');\n' +
    '    res.write(\'<title>书籍</title>\');\n' +
    '\tres.write(\'</head>\');\n' +
    '    res.write(\'<body>\');\n' +
    '    // 模拟从数据库查询了书籍数据\n' +
    '    res.write(\'<ul><li>三国演义</li><li>水浒传</li><li>西游记</li><li>红楼梦</li></ul>\');\n' +
    '    res.write(\'</body>\');\n' +
    '\tres.write(\'</html>\');\n' +
    '    res.end();\n' +
    '}).listen(8888);';

$('.tapSection .text23 code').text(text23);

let text24 = '// 模板文件 out.ejs\n' +
    '<h2><%= user.name %></h2>\n' +
    '<h2><%- user.name %></h2>\n' +
    '============================================\n' +
    '\n' +
    'const ejs = require(\'ejs\');\n' +
    'ejs.renderFile(__dirname + \'/out.ejs\', {user : {name : \'<span>lony</span>\'}}, (err, str) => {\n' +
    '    // str => 输出绘制后的 HTML 字符串\n' +
    '    console.log(str);\n' +
    '});'
$('.tapSection .text24 code').text(text24);


let text25 = '// 模板文件 if.ejs\n' +
    '<% if (user) { %>\n' +
    '  <h2><%= user.name %></h2>\n' +
    '<% } %>\n' +
    '\n' +
    '==============================================\n' +
    '\n' +
    'const ejs = require(\'ejs\');\n' +
    'ejs.renderFile(__dirname + \'/if.ejs\', {user : {name : \'lony\'}}, (err, str) => {\n' +
    '    console.log(str);\n' +
    '});';

$('.tapSection .text25 code').text(text25);


let text26 = '// 模板文件 loop.ejs\n' +
    '<% users.forEach((user) => { %>\n' +
    '  <%= user.id %> <%= user.name %>\n' +
    '<% }) %>\n' +
    '\n' +
    '============================================\n' +
    '\n' +
    'const ejs = require(\'ejs\');\n' +
    'ejs.renderFile(__dirname + \'/loop.ejs\', {users : [{id : 1, name: \'xx\'}, {id : 2, name: \'yy\'}]}, (err, str) => {\n' +
    '    console.log(str);\n' +
    '});';

$('.tapSection .text26 code').text(text26);

let text27 = '// books.ejs\n' +
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>书籍</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <ul>\n' +
    '        <% books.forEach((book) => { %>\n' +
    '            <li><%= book %></li>\n' +
    '        <% }) %>\n' +
    '    </ul>\n' +
    '</body>\n' +
    '</html>\n' +
    '\n' +
    '\n' +
    '=================================================\n' +
    '\n' +
    'const http = require(\'http\');\n' +
    'const ejs = require(\'ejs\');\n' +
    '// 使用模板技术响应 HTML 格式的数据\n' +
    'http.createServer((req, res) => {\n' +
    '    res.writeHead(200, {\'Content-Type\' : \'text/html\'});\n' +
    '    let data = {books: [\'西游记\', \'三国演义\', \'水浒传\', \'红楼梦\']};\n' +
    '    ejs.renderFile(__dirname + \'/books.ejs\', data, (err, str) => {\n' +
    '        console.log(str);\n' +
    '        res.end(str);\n' +
    '    });\n' +
    '}).listen(8888);';

$('.tapSection .text27 code').text(text27);

let text28 = 'const express = require(\'express\');\n' +
    'const app = express();\n' +
    'const path = require(\'path\');\n' +
    '\n' +
    '// 简单静态资源服务 path.join(__dirname, \'public\')\n' +
    'app.use(express.static(path.join(__dirname, \'public\')))\n' +
    '    .listen(8888, () => {\n' +
    '        console.log(\'running...\');\n' +
    '    });\n' +
    '\n' +
    '======================================\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    'const path = require(\'path\');\n' +
    '\n' +
    '// 指定虚拟路径静态资源服务\n' +
    'app.use(\'/static\', express.static(path.join(__dirname, \'public\')))\n' +
    '    .listen(8888, () => {\n' +
    '        console.log(\'running...\');\n' +
    '    });\n' +
    '\n' +
    '==========================================\n' +
    '\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    'const path = require(\'path\');\n' +
    '\n' +
    '// 指定虚拟路径静态资源服务，指定多个放静态资源的目录，若虚拟路径相同，自上而下找\n' +
    'app.use(\'/abc\', express.static(path.join(__dirname, \'static\')))\n' +
    '    .use(\'/efg\', express.static(path.join(__dirname, \'public\')))\n' +
    '    .listen(8888, () => {\n' +
    '        console.log(\'running...\');\n' +
    '    });';

$('.text28 code').text(text28);

let text29 = 'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.get(\'/\', (req, res) => {\n' +
    '    res.send(\'get data\');\n' +
    '});\n' +
    'app.post(\'/\', (req, res) => {\n' +
    '    res.send(\'post data\');\n' +
    '});\n' +
    'app.put(\'/\', (req, res) => {\n' +
    '    res.send(\'put data\');\n' +
    '});\n' +
    'app.delete(\'/\', (req, res) => {\n' +
    '    res.send(\'delete data\');\n' +
    '});\n' +
    '// all 方法绑定的路由与请求方式无关\n' +
    'app.all(\'/abc\', (req, res) => {\n' +
    '    res.end(\'test router\');\n' +
    '});\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'running...\');\n' +
    '});\n' +
    '\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '// 针对相同路径不同请求方式可以像下面这样写，以减少冗余和输入错误\n' +
    'app.route(\'/\')\n' +
    '    .get((req, res) => {\n' +
    '       res.send(\'get data\');\n' +
    '    }).post((req, res) => {\n' +
    '       res.send(\'post data\');\n' +
    '    }).put((req, res) => {\n' +
    '        res.send(\'put data\');\n' +
    '    }).delete((req, res) => {\n' +
    '        res.send(\'delete data\');\n' +
    '    });\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'running...\');\n' +
    '});';

$('.text29 code').text(text29);

let text30 = 'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '// 根据不同的请求路径，不同的请求方式\n' +
    'app.route(\'/users\')\n' +
    '    .get((req, res) => {\n' +
    '        res.send(\'get user data\');\n' +
    '    }).post((req, res) => {\n' +
    '        res.send(\'post user data\');\n' +
    '    }).put((req, res) => {\n' +
    '        res.send(\'put user data\');\n' +
    '    }).delete((req, res) => {\n' +
    '        res.send(\'delete user data\');\n' +
    '    });\n' +
    'app.route(\'/departments\')\n' +
    '    .get((req, res) => {\n' +
    '        res.send(\'get department data\');\n' +
    '    }).post((req, res) => {\n' +
    '        res.send(\'post department data\');\n' +
    '    }).put((req, res) => {\n' +
    '        res.send(\'put department data\');\n' +
    '    }).delete((req, res) => {\n' +
    '        res.send(\'delete department data\');\n' +
    '    });\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'running...\');\n' +
    '});';

$('.text30 code').text(text30);

let text31 = '// 文件位置：myapp/routes/index.js\n' +
    'const express = require(\'express\');\n' +
    'const router = express.Router();\n' +
    '\n' +
    'router.get(\'/\', function(req, res) {\n' +
    '    res.send(\'home page\');\n' +
    '});\n' +
    'router.get(\'/about\', function(req, res) {\n' +
    '    res.send(\'About us\');\n' +
    '});\n' +
    '\n' +
    'module.exports = router;\n' +
    '\n' +
    '\n' +
    '// 文件位置：myapp/routes/users.js\n' +
    'const express = require(\'express\');\n' +
    'const router = express.Router();\n' +
    '\n' +
    'router.route(\'/\')\n' +
    '    .get((req, res) => {\n' +
    '       res.send(\'get user data\');\n' +
    '    }).post((req, res) => {\n' +
    '       res.send(\'post user data\');\n' +
    '    }).put((req, res) => {\n' +
    '        res.send(\'put user data\');\n' +
    '    }).delete((req, res) => {\n' +
    '        res.send(\'delete user data\');\n' +
    '    });\n' +
    '\n' +
    'module.exports = router;\n' +
    '\n' +
    '\n' +
    '\n' +
    '// 文件位置：myapp/app.js\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    'const index = require(\'./routes/index\');    // 导入路由\n' +
    'const users = require(\'./routes/users\');    // 导入路由\n' +
    '\n' +
    'app.use(\'/\', index);                        // 应用路由                \n' +
    'app.use(\'/users\', users);                   // 应用路由\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'running...\');\n' +
    '});';

$('.text31 code').text(text31);

let text32 = '// 版本 1，不单独抽出中间件\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    '// 对 / 请求配置多个处理函数，注意第一个函数 next 参数，并调用\n' +
    'app.get(\'/\', (req, res, next) => {\n' +
    '    console.log(Date.now());\n' +
    '    next(); // 若这里不显示调用，下面那个函数就不会执行，也即不会响应。\n' +
    '}, (req, res) => {\n' +
    '    res.send(\'Hello World!\')\n' +
    '});\n' +
    '\n' +
    '    app.listen(8888, () => {\n' +
    '    console.log(\'8888 Running...\');\n' +
    '});';

$('.tapSection .text32 code').text(text32);

let text33 = '// 版本 2，单独抽出中间件\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'let myLogger = function (req, res, next) { // 中间件\n' +
    '    console.log(Date.now());\n' +
    '    next();                                // 不能少了\n' +
    '}\n' +
    '\n' +
    'app.get(\'/\', myLogger);                    // 应用中间\n' +
    '\n' +
    'app.get(\'/\', (req, res) => { \n' +
    '    res.send(\'Hello World!\');\n' +
    '})\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'8888 Running...\');\n' +
    '});';

$('.tapSection .text33 code').text(text33);

let text34 = '// 版本 3，单独抽出中间件，针对多种请求方式\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'let myLogger = function (req, res, next) { // 中间件\n' +
    '    console.log(Date.now());\n' +
    '    next();                                // 不能少了\n' +
    '}\n' +
    '\n' +
    'app.use(myLogger);                         // 省略路径，默认是 “/” \n' +
    '\n' +
    'app.get(\'/\', (req, res) => { \n' +
    '    res.send(\'Hello World Get!\');\n' +
    '})\n' +
    'app.post(\'/\', (req, res) => { \n' +
    '    res.send(\'Hello World Post!\');\n' +
    '})\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'8888 Running...\');\n' +
    '});';

$('.tapSection .text34 code').text(text34);

let text35 = '// 版本 4，单独抽出中间模块\n' +
    '// 文件位置 myapp/mylogger.js\n' +
    'let myLogger = function (req, res, next) {\n' +
    '    console.log(Date.now());\n' +
    '    next();                               \n' +
    '}\n' +
    '\n' +
    'module.exports = myLogger;\n' +
    '\n' +
    '===================================================\n' +
    '// 文件位置 myapp/app.js\n' +
    'const myLogger = require(\'./mylogger.js\');\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.use(myLogger);                      \n' +
    '\n' +
    'app.get(\'/\', (req, res) => { \n' +
    '    res.send(\'Hello World Get!\');\n' +
    '})\n' +
    'app.post(\'/\', (req, res) => { \n' +
    '    res.send(\'Hello World Post!\');\n' +
    '})\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'8888 Running...\');\n' +
    '});';

$('.tapSection .text35 code').text(text35);

let text36 = '// GET 方式获取请求参数\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.get(\'/\', (req, res) => {\n' +
    '    console.log(req.query);\n' +
    '    console.log(req.ip);\n' +
    '    res.send(\'GET\');\n' +
    '});\n' +
    'app.listen(8888, () => { \n' +
    '    console.log(\'Example app listening on port 8888!\');\n' +
    '});';

$('.tapSection .text36 code').text(text36);

let text37 = '// POST 方式获取表单类型的请求参数\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.use(express.urlencoded());\n' +
    '\n' +
    'app.post(\'/\', (req, res) => {\n' +
    '    console.log(req.body);\n' +
    '    res.send(\'POST application/x-www-form-urlencoded\');\n' +
    '});\n' +
    '\n' +
    'app.listen(8888, () => { \n' +
    '    console.log(\'Example app listening on port 8888!\');\n' +
    '}); ';

$('.tapSection .text37 code').text(text37);

let text38 = '// POST 方式获取 JSON 类型的请求参数\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.use(express.json());; // 应用中间件\n' +
    '\n' +
    'app.post(\'/\', (req, res) => {\n' +
    '    console.log(req.body);\n' +
    '    res.send(\'POST application/json\');\n' +
    '});\n' +
    '\n' +
    'app.listen(8888, () => { \n' +
    '    console.log(\'Example app listening on port 8888!\');\n' +
    '}); ';

$('.tapSection .text38 code').text(text38);


let text39 = '// 响应 JSON 格式数据\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.get(\'/\', (req, res) => {\n' +
    '    let jsonData = {name : \'xx\', age : 11};\n' +
    '    res.json(jsonData);\n' +
    '});\n' +
    'app.listen(8888, () => { \n' +
    '    console.log(\'Example app listening on port 8888!\');\n' +
    '});\n' +
    '\n' +
    '=================================================\n' +
    '\n' +
    '// 文件下载\n' +
    '// 文件位置 myapp/a.txt\n' +
    'const path = require(\'path\');\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.get(\'/\', (req, res) => {\n' +
    '    res.download(path.join(__dirname, \'a.txt\'));\n' +
    '});\n' +
    'app.listen(8888, () => { \n' +
    '    console.log(\'Example app listening on port 8888!\');\n' +
    '});';

$('.tapSection .text39 code').text(text39);

let text40 = '// 文件位置 myapp/views/index.ejs\n' +
    '<h1><%= title %></h1>\n' +
    '<p>Welcome to <%= title %></p>\n' +
    '\n' +
    '==========================================\n' +
    '\n' +
    'const path = require(\'path\');\n' +
    'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.set(\'views\', path.join(__dirname, \'views\'));    // 设置模板目录\n' +
    'app.set(\'view engine\', \'ejs\');                      // 设置使用模板引擎\n' +
    '\n' +
    '\n' +
    'app.get(\'/index\', (req, res) => {\n' +
    '    res.render(\'index\', {title : \'Express\'});       // 模板文件 + 数据 使用 EJS 渲染 HTML 响应回浏览器\n' +
    '});\n' +
    '\n' +
    'app.listen(8888, () => { \n' +
    '    console.log(\'Example app listening on port 8888!\');\n' +
    '}); ';

$('.text40 code').text(text40);


let text42 = 'window.onload = function(){\n' +
    '    var loginEle = document.querySelector(\'#login\');\n' +
    '    loginEle.onclick = function(){\n' +
    '        var username = document.getElementById(\'username\').value;\n' +
    '        var password = document.getElementById(\'password\').value;\n' +
    '        var params = \'username=\' + username + \'&password=\' + password;\n' +
    '\n' +
    '        var ajax = new XMLHttpRequest();\n' +
    '        ajax.open(\'get\', \'/login?\' + params, true);\n' +
    '\n' +
    '        ajax.onreadystatechange = function () {\n' +
    '            if(ajax.readyState == 4 && ajax.status == 200){ // 代表后台处理完毕且响应 200\n' +
    '                // 执行对应逻辑\n' +
    '                console.log(ajax.responseText);\n' +
    '                document.getElementById(\'result\').innerText = ajax.responseText;\n' +
    '            }\n' +
    '        }\n' +
    '        ajax.send();\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '\n' +
    '\n' +
    '<span id="result"></span>\n' +
    '<form>\n' +
    '    <input type="text" id="username" name="username" placeholder="用户名">\n' +
    '    <input type="text" id="password" name="username" placeholder="密码">\n' +
    '    <input id="login" type="button" value="登录">\n' +
    '</form>';

$('.tapSection .text42 code').text(text42);

let text43 = 'window.onload = function(){\n' +
    '    var loginEle = document.querySelector(\'#login\');\n' +
    '    loginEle.onclick = function(){\n' +
    '        var username = document.getElementById(\'username\').value;\n' +
    '        var password = document.getElementById(\'password\').value;\n' +
    '        var params = \'username=\' + username + \'&password=\' + password;\n' +
    '\n' +
    '        var ajax = new XMLHttpRequest();\n' +
    '\n' +
    '        ajax.open(\'post\', \'/login\', true);\n' +
    '        // 参数进行 URL 编码，不然后台代码无法获取请求体中的参数\n' +
    '        ajax.setRequestHeader(\'Content-Type\', \'application/x-www-form-urlencoded\'); \n' +
    '\n' +
    '        ajax.onreadystatechange = function () {\n' +
    '            if(ajax.readyState == 4 && ajax.status == 200){ // 代表后台处理完毕且响应 200\n' +
    '                // 执行对应逻辑\n' +
    '                console.log(ajax.responseText);\n' +
    '                document.getElementById(\'result\').innerText = ajax.responseText;\n' +
    '            }\n' +
    '        }\n' +
    '        ajax.send(params);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '\n' +
    '<span id="result"></span>\n' +
    '<form id="loginForm">\n' +
    '    <input type="text" id="username" name="username" placeholder="用户名">\n' +
    '    <input type="text" id="password" name="username" placeholder="密码">\n' +
    '    <input id="login" type="button" value="登录">\n' +
    '</form>';

$('.tapSection .text43 code').text(text43);

let text44 = 'const express = require(\'express\');\n' +
    'const app = express();\n' +
    '\n' +
    'app.use(\'/static\', express.static(path.join(__dirname, \'static\')));\n' +
    'app.use(express.urlencoded({extended: false}));\n'+
    '\n' +
    'app.get(\'/login\', (req, res) => {\n' +
    '    console.log(req.query);\n' +
    '    if(\'zs\' == req.query.username && \'12345\' == req.query.password) {\n' +
    '        res.send(\'登录成功\');\n' +
    '    }else{\n' +
    '        res.send(\'登录失败\');\n' +
    '    }\n' +
    '});\n' +
    '\n' +
    '\n' +
    '\n' +
    'app.post(\'/login\', (req, res) => {\n' +
    '    console.log(req.body);\n' +
    '    if(\'zs\' == req.body.username && \'12345\' == req.body.password){\n' +
    '        res.send(\'登录成功\');\n' +
    '    }else{\n' +
    '        res.send(\'登录失败\');\n' +
    '    }\n' +
    '});\n' +
    '\n' +
    '\n' +
    'app.listen(8888, () => {\n' +
    '    console.log(\'running...\');\n' +
    '});';

$('.text44 code').text(text44);


let text45 = '// 使用表单创建 FormData 对象\n' +
    'var formElement = document.querySelector(\'form\');\n' +
    'var formData = new FormData(formElement);\n' +
    '\n' +
    '// ----------------------------------------------\n' +
    '// 不使用表单创建 FormData 对象\n' +
    'var data = new FormData();\n' +
    '\n' +
    '//设置 FormData 数据\n' +
    'data.set(\'username\', \'zs\');\n' +
    'data.set(\'password\', \'12345\');\n' +
    'data.set(\'email\', \'zs@126.com\');\n' +
    'data.append(\'email\', \'zs@163.com\');\n' +
    '\n' +
    '//获取 FormData 数据\n' +
    'console.log(data.get(\'username\'));\n' +
    'console.log(data.get(\'email\'));\n' +
    'console.log(data.getAll(\'email\'));\n' +
    '\n' +
    '//遍历成员\n' +
    'data.forEach(function (value, key) {\n' +
    '    console.log(key, value);\n' +
    '})\n' +
    '\n' +
    'console.log(data.has(\'password\'));\n' +
    'data.delete(\'password\');\n' +
    'console.log(data.has(\'password\'));\n' +
    '\n' +
    '//创建迭代器\n' +
    'var iteratorKeys = data.keys();\n' +
    'console.log(iteratorKeys.next());\n' +
    '\n' +
    'var iteratorValues = data.values();\n' +
    'console.log(iteratorValues.next());\n' +
    '\n' +
    'var iteratorEntries = data.entries();\n' +
    'console.log(iteratorEntries.next());';

$('.text45 code').text(text45);

let text46 = 'window.onload = function(){\n' +
    '    var loginEle = document.querySelector(\'#login\');\n' +
    '    loginEle.onclick = function(){\n' +
    '         // 使用 FormData 来处理参数数据\n' +
    '        var formData = new FormData(document.querySelector(\'#loginForm\'));\n' +
    '        var arr = [];\n' +
    '        formData.forEach(function (value, key) {\n' +
    '            arr.push(key + \'=\' + value);\n' +
    '        });\n' +
    '\n' +
    '        var ajax = new XMLHttpRequest()\n' +
    '        ajax.open(\'get\', \'/login?\' + arr.join(\'&\'), true);\n' +
    '    \n' +
    '        ajax.onload = function () {\n' +
    '            if(ajax.status == 200) {\n' +
    '                document.getElementById(\'result\').innerText = ajax.responseText;\n' +
    '            }\n' +
    '        }\n' +
    '        ajax.send();\n' +
    '    }\n' +
    '}';

$('.tapSection .text46 code').text(text46);

let text47 = 'window.onload = function(){\n' +
    '    var loginEle = document.querySelector(\'#login\');\n' +
    '    loginEle.onclick = function(){\n' +
    '         // 使用 FormData 来处理参数数据\n' +
    '        var formData = new FormData(document.querySelector(\'#loginForm\'));\n' +
    '\n' +
    '        var ajax = new  XMLHttpRequest();\n' +
    '        ajax.open(\'post\', \'/login\', true);\n' +
    '\n' +
    '        // 发送信息至服务器时内容编码类型，默认为 \'multipart/form-data\'\n' +
    '        ajax.onload = function () { // 当 xhr.readyState = 4 执行回调函数\n' +
    '            if(ajax.status == 200 ) {\n' +
    '                document.getElementById(\'result\').innerText = ajax.responseText;\n' +
    '            } \n' +
    '        }\n' +
    '        ajax.send(formData);\n' +
    '    }\n' +
    '}';

$('.tapSection .text47 code').text(text47);

let text48 = '<span id="result"></span>\n' +
    '<form id="loginForm">\n' +
    '    <input type="text" id="username" name="username" placeholder="用户名">\n' +
    '    <input type="text" id="password" name="password" placeholder="密码">\n' +
    '    <input id="login" type="button" value="登录">\n' +
    '</form>';

$('.text48 code').text(text48);


let text49 = 'window.onload = function(){\n' +
    '    var loginEle = document.querySelector(\'#login\');\n' +
    '    loginEle.onclick = function(){\n' +
    '         // 使用 FormData 来处理参数数据\n' +
    '        var formData = new FormData(document.querySelector(\'#loginForm\'));\n' +
    '\n' +
    '        var ajax = new  XMLHttpRequest();\n' +
    '        ajax.open(\'post\', \'/prfile\', true);\n' +
    '\n' +
    '        // 发送信息至服务器时内容编码类型，默认为 \'multipart/form-data\'\n' +
    '        ajax.onload = function () { // 当 xhr.readyState = 4 执行回调函数 2.0\n' +
    '            if(ajax.status == 200 ) {\n' +
    '                document.getElementById(\'result\').innerText = ajax.responseText;\n' +
    '            } \n' +
    '        }\n' +
    '        ajax.send(formData);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '\n' +
    '<span id="result"></span>\n' +
    '<form id=\'loginForm\'>\n' +
    '    <input type="text" id="username" name="username" placeholder="用户名">\n' +
    '    <input type="text" id="password" name="password" placeholder="密码">\n' +
    '    <input type="file" id="foo" name="foo">\n' +
    '    <input id="login" type="button" value="登录">\n' +
    '</form>'

$('.text49 code').text(text49);

let text50 =  `const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();

app.use(fileUpload());
app.use(express.urlencoded({extended: false}));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.post('/profile', (req, res) => {
    console.log(req.files.foo) // foo 是上传表单 file input 名称
    console.log(req.body);
    let f =  req.files.foo;
    f.mv(path.join(__dirname, 'static', 'upload', 'a.png'), function(err) {
        if(err){
            return res.status(500).send(err);
        }
        res.send('文件上传成功!');
    });
});

app.listen(8888, () => {
    console.log('running...');
});`;

$('.text50 code').text(text50);

let text51 = `// 设置 AJAX 请求默认地址为 "/xmlhttp/"，禁止触发全局 AJAX 事件，用 POST 代替默认 GET 方法。其后的 AJAX 请求不再设置任何选项参数。
$.ajaxSetup({
   url: "/xmlhttp/",
   global: true, // 设置这个下面的全局函数才会起作用
   type: "POST"
 
 });
 // 设置全局请求成功的回调函数
 $(document).ajaxSuccess(function(data){
    console.log(data);
 });

 $.ajax({data: {username:'zs', password:'12345'}});`;

$('.text51 code').text(text51);

let text52 = `var isMomHappy = false;
// Promise
var p = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // 完成了
        } else {
            var reason = new Error('妈妈不开心');
            reject(reason); // reject
        }
    }
); 

p.then(function (fulfilled) {
        // 太好啦, 你获得了一个新手机
        console.log(fulfilled);
        // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(function (error) {
        // 好不幸，你妈妈没买手机
        console.log(error.message);
        // output: '妈妈不开心'
    });`;

$('.text52 code').text(text52);

let text53 = `let request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};

request({url: "employees.json"})
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });`;

$('.text53 code').text(text53);


let text54 = `axios.get('/users/12345')
    .then(function (response) {
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    })
    .catch(function (error) {
        console.log(error);
    });`;

$('.tapSection .text54 code').text(text54);

let text55 =  `axios.post('/users', {
        username: 'Fred'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });`;

$('.tapSection .text55 code').text(text55);

let text56 =  `axios.put('/users/12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });`;

$('.tapSection .text56 code').text(text56);

let text57 = `axios.delete('/users/12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });`;

$('.tapSection .text57 code').text(text57);

let text58 = `var jsonStr1 = '{"name" : "xx", "age" : 17}';  // JSON 字符串，按照 JSON 格式写的字符串
var jsonStr2 = '[{"name" : "xx", "age" : 17}, {"name": "yy", "age": 18}]'; // JSON 字符串，按照 JSON 格式写的字符串
var obj = {name : "xx", age : 18};  // JS 对象
var objArr = [{name : "xx", age : 18}, {name : "yy", age : 19}]; // JS 数组对象`;

$('.text58 code').text(text58);

let text59 = `JSON.parse(jsonStr1);       // JSON 字符串 => JS 对象
JSON.parse(jsonStr2);       // JSON 字符串 => JS 对象

JSON.stringify(obj);        // JS 对象 => JSON 字符串
JSON.stringify(objArr);     // JS 对象 => JSON 字符串`;

$('.text59 code').text(text59);

let text60 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="/static/js/jquery.min.js"></script>
    <script src="/static/js/axios.min.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            box-sizing: border-box;
            margin: 50px auto;
        }
        h3, h4{
            text-align: center;
        }
        img{
            display: block;
            margin: 0 auto;
            width: 300px;
            height: 300px;
            background-size: cover;
        }
        .box>div{
            margin-top: 20px;
            text-align: center;
        }
    </style>

</head>
<body>
<div class="box">
    <div id="product">
        <h3 id="name">类别名称</h3>
        <h4 id="desc">描述信息</h4>
        <img id="img" src="/static/images/default.png">
    </div>
    <div id="buttons">
        <button name="dress">女装</button>
        <button name="bag">包包</button>
        <button name="shoes">鞋子</button>
    </div>    
</div>
<script>

    $('#buttons > button').click(function(){
        var name = $(this).attr('name');
        // console.log(name);
        axios.get('/product?name=' + name)
        .then(function (response) {
            $('#product').html(response.data);
        })
    });
    /*
    $('#buttons > button').click(function(){
        var name = $(this).attr('name');
        // console.log(name);
        $.get('/product?name='+ name, function(data){
            // console.log(data);
            $('#product').html(data);
        });
    });*/
    /*
    var btns = document.getElementsByTagName('button');
    // console.log(btns);
    for(var i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            var name = this.name;
            // console.log(name);

            var ajax = new XMLHttpRequest();
            ajax.open('get', '/product?name=' + name);
            ajax.onload = function(){
                if(ajax.status == 200){
                    // 拿到服务器响应数据做 DOM 操作
                    // console.log(ajax.responseText);

                    document.getElementById('product').innerHTML = ajax.responseText
                }
            }
            ajax.send();
        }
    }*/
</script>
</body>
</html>`;

$('.tapSection .text60 code').text(text60);


let text61 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="/static/js/jquery.min.js"></script>
    <script src="/static/js/axios.min.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            box-sizing: border-box;
            margin: 50px auto;
        }
        h3, h4{
            text-align: center;
        }
        img{
            display: block;
            margin: 0 auto;
            width: 300px;
            height: 300px;
            background-size: cover;
        }
        .box>div{
            margin-top: 20px;
            text-align: center;
        }
    </style>

</head>
<body>
<div class="box">
    <div id="product">
        <h3 id="name">类别名称</h3>
        <h4 id="desc">描述信息</h4>
        <img id="img" src="/static/images/default.png">
    </div>
    <div id="buttons">
        <button name="dress">女装</button>
        <button name="bag">包包</button>
        <button name="shoes">鞋子</button>
    </div>    
</div>
<script>

    /*
    $('#buttons > button').click(function(){
        var name = $(this).attr('name');
        // console.log(name);
        axios.get('/productXML?name=' + name)
        .then(function (response) {
            var xmlData = response.data;
            var $data = $($.parseXML(xmlData));
            // console.log($data);

            var name = $data.find('name').html();
            var desc = $data.find('des').html();
            var img = $data.find('img').html();
           
            $('#name').html(name);
            $('#desc').html(desc);
            $('#img').attr('src', img);
        })
    });*/
    
    /*
    $('#buttons > button').click(function(){
        var name = $(this).attr('name');
        // console.log(name);
        $.get('/productXML?name='+ name, function(data){
            // console.log(data);
            // $('#product').html(data);
            var $data = $(data);

            var name = $data.find('name').html();
            var desc = $data.find('des').html();
            var img = $data.find('img').html();
           
            $('#name').html(name);
            $('#desc').html(desc);
            $('#img').attr('src', img);
        });
    });
    */    
    /*
    var btns = document.getElementsByTagName('button');
    // console.log(btns);
    for(var i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            var name = this.name;
            // console.log(name);

            var ajax = new XMLHttpRequest();
            ajax.open('get', '/productXML?name=' + name);
            ajax.onload = function(){
                if(ajax.status == 200){
                    // 拿到服务器响应数据做 DOM 操作
                    // console.log(ajax.responseXML);
                    var xmlData = ajax.responseXML;
                    var name = xmlData.getElementsByTagName('name')[0].innerHTML;
                    var desc = xmlData.getElementsByTagName('des')[0].innerHTML;
                    var img = xmlData.getElementsByTagName('img')[0].innerHTML;
                
                    document.getElementById('name').innerHTML = name;
                    document.getElementById('desc').innerHTML = desc;
                    document.getElementById('img').src = img;
                }
            }
            ajax.send();
        }
    }*/
</script>
</body>
</html>`;

$('.tapSection .text61 code').text(text61);

let text62 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="/static/js/jquery.min.js"></script>
    <script src="/static/js/axios.min.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            box-sizing: border-box;
            margin: 50px auto;
        }
        h3, h4{
            text-align: center;
        }
        img{
            display: block;
            margin: 0 auto;
            width: 300px;
            height: 300px;
            background-size: cover;
        }
        .box>div{
            margin-top: 20px;
            text-align: center;
        }
    </style>

</head>
<body>
<div class="box">
    <div id="product">
        <h3 id="name">类别名称</h3>
        <h4 id="desc">描述信息</h4>
        <img id="img" src="/static/images/default.png">
    </div>
    <div id="buttons">
        <button name="dress">女装</button>
        <button name="bag">包包</button>
        <button name="shoes">鞋子</button>
    </div>    
</div>
<script>

    
    $('#buttons > button').click(function(){
        var name = $(this).attr('name');
        // console.log(name);
        axios.get('/productJSON?name=' + name)
        .then(function (response) {
            $('#name').html(response.data.name);
            $('#desc').html(response.data.desc);
            $('#img').attr('src', response.data.img);
        })
    });
    
    /*
    $('#buttons > button').click(function(){
        var name = $(this).attr('name');
        // console.log(name);
        $.get('/productJSON?name='+ name, function(data){
            // 它会根据响应头里面 Content-Type 的值来判断
            // 若响应数据类型是 application/json 它在调用者函数之前把响应数据转成 JS 对象
            // console.log(data);
            $('#name').html(data.name);
            $('#desc').html(data.desc);
            $('#img').attr('src', data.img);
        });
    });*/
    
    /*
    var btns = document.getElementsByTagName('button');
    // console.log(btns);
    for(var i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            var name = this.name;
            // console.log(name);

            var ajax = new XMLHttpRequest();
            ajax.open('get', '/productJSON?name=' + name);
            ajax.onload = function(){
                if(ajax.status == 200){
                    // console.log(ajax.responseText);
                    var prodcut = JSON.parse(ajax.responseText);
                    // console.log(prodcut);
                    document.getElementById('name').innerHTML = prodcut.name;
                    document.getElementById('desc').innerHTML = prodcut.desc;
                    document.getElementById('img').src = prodcut.img;
                }
            }
            ajax.send();
        }
    }*/
</script>
</body>
</html>`;

$('.tapSection .text62 code').text(text62);

let text63 = 'const express = require(\'express\');\n' +
    'const path = require(\'path\');\n' +
    'var app = express();\n' +
    '\n' +
    'app.set(\'views\', path.join(__dirname, \'views\'));\n' +
    'app.set(\'view engine\', \'ejs\');\n' +
    'app.use(\'/static\', express.static(path.join(__dirname, \'static\')));\n' +
    '\n' +
    'let products = {\n' +
    '    dress:{\n' +
    '        name:\'衣服\',\n' +
    '        desc:\'料越少越贵\',\n' +
    '        img:\'/static/images/dress.png\'\n' +
    '    },\n' +
    '    bag:{\n' +
    '        name:\'包包\',\n' +
    '        desc:\'包治百病\',\n' +
    '        img:\'/static/images/bag.png\'\n' +
    '    },\n' +
    '    shoes:{\n' +
    '        name:\'女鞋\',\n' +
    '        desc:\'多多益善\',\n' +
    '        img:\'/static/images/shoes.png\'\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'app.get(\'/productXML\', (req, res) => {\n' +
    '    let name = req.query.name; // bag\n' +
    '    // 根据名字给对应数据，响应回浏览器\n' +
    '    // 造假的数据\n' +
    '    let product = products[name];\n' +
    '    // 响应 XML\n' +
    '    res.type(\'xml\');\n' +
    '    \n' +
    '    // let data = `\n' +
    '    // <product id="dress">\n' +
    '    //     <name>${product.name}</name>\n' +
    '    //     <des>${product.desc}</des>\n' +
    '    //     <img>${product.img}</img>\n' +
    '    // </product>\n' +
    '    // `\n' +
    '    // res.send(data);\n' +
    '    res.render(\'product_xml\', product)\n' +
    '    \n' +
    '});\n' +
    '\n' +
    'app.get(\'/product\', (req, res) => {\n' +
    '    let name = req.query.name; // bag\n' +
    '    // 根据名字给对应数据，响应回浏览器\n' +
    '    // 造假的数据\n' +
    '    let product = products[name];\n' +
    '    // 响应 HTML\n' +
    '    res.type(\'html\');\n' +
    '   \n' +
    '    /*\n' +
    '    let data = `\n' +
    '        <h3 id="name">${product.name}</h3>\n' +
    '        <h4 id="desc">${product.desc}</h4>\n' +
    '        <img id="img" src="${product.img}">\n' +
    '    `\n' +
    '    res.send(data);*/\n' +
    '\n' +
    '    res.render(\'product\', product)\n' +
    '    \n' +
    '});\n' +
    '\n' +
    'app.get(\'/productJSON\', (req, res) => {\n' +
    '    let name = req.query.name; // bag\n' +
    '    // 根据名字给对应数据，响应回浏览器\n' +
    '    // 造假的数据\n' +
    '    let product = products[name];\n' +
    '    // 响应 JSON\n' +
    '    // res.type(\'json\'); \n' +
    '    // res.send(JSON.stringify(prodcut))\n' +
    '    res.json(product);\n' +
    '    \n' +
    '});\n' +
    '\n' +
    'app.listen(80, () => console.log(\'启动 80\'));';

$('.text63 code').text(text63);

let text64 = `document.cookie = 'name=zs';            //设置数据  
document.cookie = 'email=18@126.com';   //设置数据  
document.cookie = 'name=ls';            // 修改

var date = new Date();
date.setDate(date.getDate() + 7);

document.cookie = 'age=18; expires=' + date; // 设置数据并设置有效期
console.log(document.cookie)                 // 获取数据  `;

$('.text64 code').text(text64);

let text65 = `var Cookie = {
    getCookie : function(key) {
        // 先把字符串转换为数组
        var keyValues = document.cookie.split('; ');
        var value;
        // 遍历数组
        keyValues.forEach(function (ele) {
            var keyValue = ele.split('=');
            if(key == keyValue[0]){
                value = keyValue[1];
                return; // 找到结束循环
            }
        })
        return value;
    },
    setCookie : function(key, value, day) {
        if(arguments.length == 3) {
            var date = new Date();
            date.setDate(date.getDate() + day);
            document.cookie = key + '=' + value + '; expires=' + date;
        }else {
            document.cookie = key + '=' + value;
        }
    },
    removeCookie : function(key) {
        this.setCookie(key, '', -1);
    },
    clearCookie : function() {
        var keys = this.getKeys();
        for(var i = 0; i < keys.length; i++) {
            this.setCookie(keys[i], '', -1);
        }
    },
    getKeys : function () {
        var keyValues = document.cookie.split('; ');
        return keyValues.map(function(keyValue){
            keyValue.split('=')[0];
        });
    }
}`;

$('.text65 code').text(text65);

let text66 = `// 客户端代码
document.cookie = 'age=18; path=/';

var xhr = new XMLHttpRequest();
xhr.open('get', '/a', true);

xhr.onload = function () {
    if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304)
    {
        console.log("成功" + xhr.responseText);
    }
}
xhr.send();`;

$('.text66 code').text(text66);

let text67 = `// 服务端代码
// 获取 Cookie 数据
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();


app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(cookieParser());


app.get('/a', (req, res) => {
    console.log(req.cookies);
    res.send('xx')
});

app.listen(80, () => console.log('启动 80'));`;

$('.text67 code').text(text67);

let text68 = `sessionStorage.setItem('name', 'zs');
sessionStorage.setItem('age', '18');
sessionStorage.setItem('name', 'ls');
sessionStorage.getItem('name');
sessionStorage.removeItem('name');
sessionStorage.clear()

sessionStorage.des = "一位同学";
delete sessionStorage.des;`;

$('.text68 code').text(text68);

let text69 = `localStorage.setItem('name', 'zs');
localStorage.setItem('age', '18');
localStorage.setItem('name', 'ls');
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear()

localStorage.des = "一位同学";
delete localStorage.des;`;

$('.text69 code').text(text69);

let text70 = `var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);`;

$('.text70 code').text(text70);


let text71 = `<input type="text" id="keyword">
<script>
    function fn(obj) {
        console.log(obj);
        var data = obj['s'];

        var ulEle = document.getElementsByTagName('ul')[0] || document.createElement('ul');
        ulEle.innerHTML = ''; // 清空原来的搜索内容

        data.forEach(function (ele) {
            var liEle = document.createElement("li");
            liEle.innerText = ele;
            ulEle.appendChild(liEle);
        });
        document.body.appendChild(ulEle);
    }
</script>

<script>
    var inputEle = document.getElementById('keyword');
    inputEle.onkeyup = function () {
    
        // 删除原来的 script 标签
        var oldScriptEle = document.getElementById('baiduJsonp');
        if(oldScriptEle){
            document.body.removeChild(oldScriptEle);
        }

        //创建 script 标签插入到页面中
        var newScriptEle = document.createElement('script');
        newScriptEle.setAttribute('id', 'baiduJsonp');
        newScriptEle.setAttribute('src','https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + inputEle.value + '&cb=fn');
        document.body.appendChild(newScriptEle);
    }
</script>`;

$('.text71 code').text(text71);

let text72 = `const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost/test';

// 连接
mongoose.connect(DB_URL);

// 给事件 connected 绑定处理函数，当连接成功时执行
mongoose.connection.on('connected', () => {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    
// 给事件 error 绑定处理函数，当连接错误时执行
mongoose.connection.on('error', (err) => {    
    console.log('Mongoose connection error: ' + err);  
});    
// 给事件 disconnected 绑定处理函数，当连接断开时执行
mongoose.connection.on('disconnected', () => {    
    console.log('Mongoose connection disconnected');  
});`;

$('.text72 code').text(text72);

let text73 = `// 编写 student.js，文件位置 mongoose-demo/student.js，内容如下：
require('./db.js');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义 Schema
const StudentSchema = new Schema({
    name: String,
    age: Number,
    score: Number
});

// 根据 Schema 编译 Model
// 第一个参数是 MongoDB 中集合的名字，可以不加 "s"，默认找的时候会加上的
// 第二个参数是 Schema
// 若后面保存发现数据库没有对应 students 集合会自动创建
const Student = mongoose.model('student', StudentSchema); 
// 导出，因为模型在项目会多个地方使用，而定义的话就需一次就可以了，避免定义重复
module.exports = Student;`;

$('.text73 code').text(text73);

let text74=`// 编写 student.js，文件位置 mongoose-demo/studentService.js，内容如下：
const Student = require("./student.js");

function save() {
    // 根据 Model 创建文档
    let user = new Student({
        name : 'Jerry',                 
        age: 17,                            
        score: 78
    });
    // 向数据库插入文档，若有错，err 有值，若没有 res 是插入的返回结果
    user.save((err, res) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log("Res:" + res);
    });
}
save();`;

$('.text74 code').text(text74);

let text75 = `// 在 student.js 中以下内容：
function update(){
    let conditions = {name : 'jerry'};
    let update = {score : 99};
    let options = { multi: false}; // 默认只改一条，若改成 true，则可改多条
    // 更多选项参考，https://mongoosejs.com/docs/api.html#model_Model.update
    Student.update(conditions, update, options, (err, res) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log("Res:" + res);
    });
}
update();

function updateById(){
    let id = '5c73af7ed0ccdb347c899f38';
    var update = {name : 'Tom'};
    // 修改文档，修改的话，res 是修改前文档数据，若该 id 值对应的文档不存在的话，res 是 null
    Student.findByIdAndUpdate(id, update, (err, res) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log("Res:" + res);
    });
}
updateById();`;

$('.text75 code').text(text75);

let text76 = `function deleteById(){
    let id = '5c73af7ed0ccdb347c899f38';
    // 删除文档，若删除成功，res 是被删除的文档数据，若根据 id 没查询到，res 是 null
    Student.findByIdAndRemove(id, (err, res) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log("Res:" + res);
    });
}
deleteById();`;

$('.text76 code').text(text76);

let text77 = `// // 根据 id 查询出文档
function getById(){
    let id = '5c73ae519d85483d4ce0836e';
    let fields = {"name" : 1, "_id" : 0} // 表示要查询的字段，1 表示要拆线呢，0 表示不要查询
    // 若查询到 data 是文档数据，若没查询 data 是 null
    Student.findById(id, fields, (err, data) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log(data);
    });
}
getById();

// 查询出所有文档
function selectAll(){
    Student.find({}, (err, data) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log(data);
    });
    /* 链式操作
    Student.find({}).exec((err, data) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log(data);
    });*/
}
selectAll();


function query() {
    // 根据分数范围查询文档
    let conditions1 = {score : {$gte : 18 , $lte : 20}};
    Student.find(conditions1).exec((err, data) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log(data);
    });

    // 根据名字模糊查询
    let conditions2 = {$or : [{name : {$regex : /r/i}}]}; // i 表示不区分大小写
    Student.find(conditions2, (err, data) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log(data);
    });
    // 根据分数范围查询文档和名字模糊查询
    let conditions3 = {score : {$gte : 18 , $lte : 20}, $or : [{name : {$regex : /x/i}}]};
    Student.find(conditions3, (err, data) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log(data);
    });
}
query();


// 分页查询查询文档
function page(){
    let currentPage = 1;                        // 当前第几页
    let pageSize = 5;                           // 一页多少条
    let sort = {score : -1};                    // 1 表示升序，-1 表示降序
    let condition = {};                         // 条件
    let skip = (currentPage - 1) * pageSize;    //跳过数

    Student.find(condition).skip(skip).limit(pageSize).sort(sort).exec((err, data) => {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        console.log(data);
    });
}
page();`;

$('.text77 code').text(text77);

let text78=`var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/apis');
const mongoose = require('mongoose');

/**
 *  连接数库
 */
const DB_URL = 'mongodb://localhost/lony';
// 给事件 connected 绑定处理函数，当连接成功时执行
mongoose.connection.on('connected', () => {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    
// 给事件 error 绑定处理函数，当连接错误时执行
mongoose.connection.on('error', (err) => {    
    console.log('Mongoose connection error: ' + err);  
});    
// 给事件 disconnected 绑定处理函数，当连接断开时执行
mongoose.connection.on('disconnected', () => {    
    console.log('Mongoose connection disconnected');  
});
mongoose.connect(DB_URL, {user:'root', pass:'12345', authSource:'admin'});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;`;

$('.text78 code').text(text78);

let text79 = `var express = require('express');
var articleService = require('../services/article');
var router = express.Router();

// 针对文章列表的请求
router.get('/articles', function(req, res, next) {
  articleService.selectAll()
    .then(result => {
      res.render('articles/list', {articles : result}); 
    }).catch(err =>{
      throw err;
    });
});
// 针对文章发布的请求
router.post('/articles', function(req, res, next) {
  var {title, author, source, content, createTime = new Date().toLocaleString()} = req.body;
  articleService.save({title, author, source, content, createTime})
    .then(ressult => {    // 保存成功
      res.json({msg : '文章发布成功'});
    }).catch(err => { // 保存失败
      res.json({msg : '文章发布失败'});
    });
});
// 针对文章删除的请求
router.delete('/articles/:id', function(req, res, next) {
  articleService.deleteById(req.params.id)
    .then(resutl => {
      res.json({msg : '文章删除成功'});
    }).catch(err => {
      res.json({msg : '文章删除失败'});
    });
});

// 针对文章详情的请求
router.get('/articles/:id', function(req, res, next) {
  articleService.selectById(req.params.id)
    .then(result => {
      res.json(result); 
    }).catch(err =>{
      throw err;
    });
});

// 针对文章修改请求
router.put('/articles/:id', function(req, res, next) {
  var {title, author, source, content} = req.body;
  articleService.updateById(req.params.id, {title, author, source, content})
    .then(resutl => {
      res.json({msg : '文章修改成功'});
    }).catch(err => {
      res.json({msg : '文章修改失败'});
    });
});
module.exports = router;`;

$('.text79 code').text(text79);

let text80 = `// models/article.js

const mongoose = require('mongoose');

// 定义 Schema
const ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  source: String,
  content: String,
  createTime: String
});

// 根据 Schema 编译 Model
// 第一个参数是 MongoDB 中集合的名字，可以不加 "s"，默认找的时候会加上的
// 第二个参数是 Schema
// 若后面保存发现数据库没有对应 students 集合会自动创建
const Article = mongoose.model('article', ArticleSchema); 
// 导出，因为模型在项目会多个地方使用，而定义的话就需一次就可以了，避免定义重复
module.exports = Article;


// services/articles.js

var mongoose = require('mongoose');
var Article = require('../models/article');

module.exports = {
    save        :   article => new Article(article).save(),
    selectAll   :   () => Article.find(),
    deleteById  :   id => Article.findByIdAndRemove(id),
    selectById  :   (id) => Article.findById(id),
    updateById  :   (id, updates) => Article.findByIdAndUpdate(id, updates)
}`;

$('.text80 code').text(text80);

let text81 = `// views/articles/list.ejs

<!DOCTYPE html>
<html>
\t<head>
\t\t<meta charset="UTF-8">
\t\t<title>文章列表</title>
\t\t<script type="text/javascript" src="/javascripts/jquery-1.11.3.min.js"></script>
\t\t<style type="text/css">
\t\t\ttable{
\t\t\t\twidth: 100%;
\t\t\t\tborder-collapse: collapse;
\t\t\t\tfont-size: 14px;
\t\t\t}
\t\t\t
\t\t\ttable td{
\t\t\t\tborder: solid 1px #eee;
\t\t\t\tpadding-right: 5px;
\t\t\t\theight: 30px;
\t\t\t\tfont-family: "微软雅黑";
\t\t\t}
\t\t\t
\t\t\ttable td a{
\t\t\t\ttext-decoration: none;
\t\t\t\tcolor: black;
\t\t\t\tmargin-left: 10px;
\t\t\t}
\t\t\t
\t\t\t.tdcenter{
\t\t\t\ttext-align: center;
\t\t\t}
\t\t\t
\t\t\t.td100{
\t\t\t\twidth: 100px;
\t\t\t}
\t\t\t#btnsave{
\t\t\t\twidth: 80px;
\t\t\t\tbackground-color: darkorange;
\t\t\t\tcolor: white;
\t\t\t\tborder:solid 1px #FF8C00;
\t\t\t\theight: 20px;
\t\t\t}
\t\t</style>
\t\t<script>
\t\t\t$(function(){
\t\t\t\t$('.del').click(function(){
\t\t\t\t\tvar id = $(this).data('id');
\t\t\t\t\t$.ajax({
\t\t\t\t\t\turl: '/api/articles/' + id,
\t\t\t\t\t\ttype: 'DELETE',
\t\t\t\t\t\tsuccess: function(result) {
\t\t\t\t\t\t\talert(result.msg);
\t\t\t\t\t\t\tlocation.href = '/api/articles';
\t\t\t\t\t\t}
\t\t\t\t\t});
\t\t\t\t});
\t\t\t});
\t\t</script>
\t</head>
\t<body>
\t\t<a href="/articles/new.html">新增</a>
\t\t<table cellpadding="0" cellspacing="0">
\t\t\t<tr>
          <td class="tdcenter">标题</td>
          <td class="tdcenter td100">来源</td>
          <td class="tdcenter td100">作者</td>
          <td class="tdcenter td100">时间</td>
          <td class="tdcenter td100">操作</td>
          </tr>
\t\t\t<% articles.forEach((article) => { %>
\t\t\t<tr>
            <td><a href="/articles/view.html?id=<%= article.id %>"><%= article.title %></a></td>
            <td class="tdcenter"><%= article.source %></td><td class="tdcenter"><%= article.author %></td>
            <td class="tdcenter"><%= article.createTime %></td>
            <td><a href="/articles/edit.html?id=<%= article.id %>">修改</a>
            <a class='del' data-id='<%= article.id %>' href="#">删除</a></td>
           </tr>
\t\t\t<% }) %>
\t\t</table>
\t</body>
</html>`;

$('.text81 code').text(text81);

let text82 = `// public/articles/new.html

<!DOCTYPE html>
<html>
\t<head>
\t\t<meta charset="UTF-8">
\t\t<title>文章发布</title>
\t\t<script type="text/javascript" src="/javascripts/jquery-1.11.3.min.js"></script>
\t\t<style type="text/css">
\t\t\ttable{
\t\t\t\twidth: 100%;
\t\t\t\tborder-collapse: collapse;
\t\t\t\tfont-size: 14px;
\t\t\t}

\t\t\ttable td{
\t\t\t\tborder: solid 1px #eee;
\t\t\t\tpadding-right: 5px;
\t\t\t\theight: 30px;
\t\t\t\tfont-family: "微软雅黑";
\t\t\t}

\t\t\ttable td.leftlable{
\t\t\t\twidth: 100px;
\t\t\t\ttext-align: right;
\t\t\t}

\t\t\ttable td input{
\t\t\t\twidth: 200px;
\t\t\t\tborder: solid 1px #eee;
\t\t\t\tmargin-left: 5px;
\t\t\t\theight:20px;
\t\t\t}

\t\t\ttable td textarea{
\t\t\t\twidth: 500px;
\t\t\t\theight:200px;
\t\t\t\tborder: solid 1px #eee;
\t\t\t\tmargin: 5px;
\t\t\t}

\t\t\t#btnSave{
\t\t\t\twidth: 80px;
\t\t\t\tbackground-color: darkorange;
\t\t\t\tcolor: white;
\t\t\t\tborder:solid 1px #FF8C00;
\t\t\t\theight: 20px;
\t\t\t}
\t\t</style>
\t\t<script>
\t\t\t$(function(){
\t\t\t\t$('#btnSave').click(function(){
\t\t\t\t\tvar id = $(this).data('id');
\t\t\t\t\t$.ajax({
\t\t\t\t\t\turl: '/api/articles/',
\t\t\t\t\t\ttype: 'POST',
\t\t\t\t\t\tdata : $('#articleForm').serialize(),
\t\t\t\t\t\tsuccess: function(result) {
\t\t\t\t\t\t\talert(result.msg);
\t\t\t\t\t\t\tlocation.href = '/api/articles';
\t\t\t\t\t\t}
\t\t\t\t\t});
\t\t\t\t});
\t\t\t});
\t\t</script>
\t</head>
\t<body>
\t\t<form id="articleForm">
\t\t\t<table cellpadding="0" cellspacing="0">\t
\t\t\t\t<tr><td class="leftlable">标题</td><td><input type="text" name="title" id="title"/></td></tr>
\t\t\t\t<tr><td class="leftlable">作者</td><td><input type="text" name="author" id="author"/></td></tr>
\t\t\t\t<tr><td class="leftlable">来源</td><td><input type="text" name="source" id="source"/></td></tr>
\t\t\t\t<tr><td class="leftlable">内容</td><td><textarea name="content" id="content" rows="5" cols="20"></textarea></td></tr>
\t\t\t\t<tr><td class="leftlable">&nbsp;</td><td><input type="button" id="btnSave" value="发布"/></td></tr>
\t\t\t</table>
\t\t</form>
\t</body>
</html>
`;

$('.text82 code').text(text82);

let text83 = `// public/articles/view.html

<!DOCTYPE html>
<html>
\t<head>
\t\t<meta charset="UTF-8">
\t\t<title>文章详情</title>
\t\t<script type="text/javascript" src="/javascripts/jquery-1.11.3.min.js"></script>
\t\t<style type="text/css">
\t\t\tbody{
\t\t\t\tfont-size: 14px;
\t\t\t}
\t\t\t#wrapper{
\t\t\t\twidth: 1000px;
\t\t\t\tline-height: 24px;
\t\t\t\tmargin: 0 auto;
\t\t\t}
\t\t\t#wrapper h1{
\t\t\t\tline-height: 35px;
\t\t\t\ttext-align: center;
\t\t\t\tborder-bottom: dashed 1px #eee;
\t\t\t\tpadding-bottom: 10px;
\t\t\t}
\t\t\t#wrapper p{
\t\t\t\tline-height: 35px;
\t\t\t\ttext-align: center;
\t\t\t}
\t\t</style>
\t\t<script>
\t\t\t$(function(){
\t\t\t\tvar href = location.href;
\t\t\t\tvar param = href.split('?')[1];
\t\t\t\tvar id = param.split('=')[1];
\t\t\t\t$.ajax({
\t\t\t\t\turl : '/api/articles/' + id,
\t\t\t\t\ttype : 'GET',
\t\t\t\t\tdata : param,
\t\t\t\t\tsuccess: function(result) {
\t\t\t\t\t\t$('#title').html(result.title);
\t\t\t\t\t\t$('#author').html(result.author);
\t\t\t\t\t\t$('#source').html(result.source);
\t\t\t\t\t\t$('#createTime').html(result.createTime);
\t\t\t\t\t\t$('#content').html(result.content);
\t\t\t\t\t}
\t\t\t\t});
\t\t\t});
\t\t</script>
\t</head>
\t<body>
\t\t<div id="wrapper">
\t\t\t<h1 id="title"></h1>
\t\t\t<p>作者：<span id="author"></span> 来源：<span id="source"></span> 发布时间：<span id="createTime"></span></p>
\t\t\t<div id="content"></div>\t
\t\t</div>
\t</body>
</html>`;

$('.text83 code').text(text83);

let text84 = `// public/articles/edit.html

<!DOCTYPE html>
<html>
\t<head>
\t\t<meta charset="UTF-8">
\t\t<title>文章修改</title>
\t\t<script type="text/javascript" src="/javascripts/jquery-1.11.3.min.js"></script>
\t\t<style type="text/css">
\t\t\ttable{
\t\t\t\twidth: 100%;
\t\t\t\tborder-collapse: collapse;
\t\t\t\tfont-size: 14px;
\t\t\t}
\t\t\t
\t\t\ttable td{
\t\t\t\tborder: solid 1px #eee;
\t\t\t\tpadding-right: 5px;
\t\t\t\theight: 30px;
\t\t\t\tfont-family: "微软雅黑";
\t\t\t}
\t\t\t
\t\t\ttable td.leftlable{
\t\t\t\twidth: 100px;
\t\t\t\ttext-align: right;
\t\t\t}
\t\t\t
\t\t\ttable td input{
\t\t\t\twidth: 200px;
\t\t\t\tborder: solid 1px #eee;
\t\t\t\tmargin-left: 5px;
\t\t\t\theight:20px;
\t\t\t}
\t\t\t
\t\t\ttable td textarea{
\t\t\t\twidth: 500px;
\t\t\t\theight:200px;
\t\t\t\tborder: solid 1px #eee;
\t\t\t\tmargin: 5px;\t\t
\t\t\t}
\t\t\t
\t\t\t#btnUpdate{
\t\t\t\twidth: 80px;
\t\t\t\tbackground-color: darkorange;
\t\t\t\tcolor: white;
\t\t\t\tborder:solid 1px #FF8C00;
\t\t\t\theight: 20px;
\t\t\t}
\t\t</style>
\t\t<script>
\t\t\t$(function(){
\t\t\t\tvar href = location.href;
\t\t\t\tvar param = href.split('?')[1];
\t\t\t\tvar id = param.split('=')[1];
\t\t\t\t$.ajax({
\t\t\t\t\turl : '/api/articles/' + id,
\t\t\t\t\ttype : 'GET',
\t\t\t\t\tdata : param,
\t\t\t\t\tsuccess: function(result) {
\t\t\t\t\t\t$('#title').val(result.title);
\t\t\t\t\t\t$('#author').val(result.author);
\t\t\t\t\t\t$('#source').val(result.source);
\t\t\t\t\t\t$('#content').val(result.content);
\t\t\t\t\t}
\t\t\t\t});

\t\t\t\t$('#btnUpdate').click(function(){
\t\t\t\t\t$.ajax({
\t\t\t\t\t\turl: '/api/articles/' + id,
\t\t\t\t\t\ttype: 'PUT',
\t\t\t\t\t\tdata : $('#articleForm').serialize(),
\t\t\t\t\t\tsuccess: function(result) {
\t\t\t\t\t\t\talert(result.msg);
\t\t\t\t\t\t\tlocation.href = '/api/articles';
\t\t\t\t\t\t}
\t\t\t\t\t});
\t\t\t\t});
\t\t\t});
\t\t</script>
\t</head>
\t<body>
\t\t<form id="articleForm">
\t\t\t<table cellpadding="0" cellspacing="0">
\t\t\t\t<tr><td class="leftlable">标题</td><td><input type="text" name="title" id="title"/></td></tr>
\t\t\t\t<tr><td class="leftlable">作者</td><td><input type="text" name="author" id="author"/></td></tr>
\t\t\t\t<tr><td class="leftlable">来源</td><td><input type="text" name="source" id="source"/></td></tr>
\t\t\t\t<tr><td class="leftlable">内容</td><td><textarea name="content" id="content" rows="5" cols="20"></textarea></td></tr>
\t\t\t\t<tr><td class="leftlable">&nbsp;</td><td><input type="button" id="btnUpdate" value="发布"/></td></tr>
\t\t\t</table>\t
\t\t</form>
\t</body>
</html>
`;

$('.text84 code').text(text84);








/*
$(function () {
    $('.tapMain .tapMain').each(function (index,ele) {
        $(ele).css({
            height:$(ele).children().eq(0).height()+30
        });
    });

    $('.tapMain').each(function (index,ele) {
        $(ele).css({
            height:$(ele).children().eq(0).height()+30
        });
    });
    $('.bntTap').next('.tapNav').hide();
    $('.bntTap').next('.tapNav').next('.tapMain').hide();
    //====================================
    $('.btncode').next().next().hide();
    $('.btncode').click(function () {
        $(this).next().next().slideToggle();
    });

});*/
