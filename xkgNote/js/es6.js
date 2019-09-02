(function () {
    let text1 = `function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

var f = fib(5);//直接调用一个generator和调用函数不一样，fib(5)仅仅是创建了一个generator对象，还没有去执行它。
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: false}
f.next(); // {value: undefined, done: true}`;
    xk$('.text1 code').innerHTML=zy(text1);

    var text2 = `Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

//for in 会继承
for (let i in iterable) {
  console.log(i); // logs: 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs: 3, 5, 7 
}
`;
    xk$('.text2 code').innerHTML=zy(text2);


    let text3 = `fetch('https://api-to-call.com/endpoint').then(response => {
 if(response.ok){
     return response.json();
 }
 throw new Error('Request failed!');
 } , networkError => console.log(networkError.message)
 ).then(jsonResponse => jsonResponse)
    
var url = 'https://example.com/profile';
var data = {username: 'example'};


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be \`string\` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));`;

    xk$('.text3 code').innerHTML=zy(text3);

    var text4 = `function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    } )
}

async function testResult() {
    let first = await doubleAfter2seconds(30);
    // 遇到await，代码就暂停执行了，等待doubleAfter2seconds(30) 执行完毕，
    //doubleAfter2seconds(30) 返回的promise 开始执行，2秒 之后，promise resolve 了， 并返回了值为60， 
    //这时await 才拿到返回值60， 然后赋值给result， 暂停结束，代码才开始继续执行(后面代码同理)
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(30);
    console.log(first + second + third);
}
//6秒后，控制台输出220
`;
    xk$('.text4 code').innerHTML=zy(text4);

    let text37 = '/*\n' +
        '之前对多个变量赋值\n' +
        'let a = 1;\n' +
        'let b = 2;\n' +
        'let c = 3;\n' +
        '*/\n' +
        'let [a, b, c] = [1, 2, 3];\n' +
        'console.log(a, b, c);\n' +
        'let [d, e, f] = [, 2, ];\n' +
        'console.log(d, e, f);\n' +
        '\n' +
        '==============================\n' +
        'let [x = 1] = [undefined];\n' +
        'let [y = 2] = [null];\n' +
        'let [z = 3] = [\'\'];\n' +
        'console.log(x, y, z);\n' +
        '\n' +
        'function func() {\n' +
        '    return 1;\n' +
        '}  \n' +
        'let [i = func()] = []; // 当没有解构出值的时候，才会执行函数 func\n' +
        'console.log(i);';

    xk$('.tapSection .text37 code').innerHTML=zy(text37);

    let text38 = 'let {a, b, c} = {a : "aaa", b : "bbb"};\n' +
        'console.log(a, b, c);\n' +
        '\n' +
        '// 当前变量名与对象的属性不一致的时候，可以起别名，比如下面给变量 f 起别名为 e\n' +
        'let {e : f} = {e : "eee"};\n' +
        'console.log(f);\n' +
        '\n' +
        '// 指定默认值 \n' +
        'let {x, y = 5} = {x : 1};\n' +
        'console.log(x, y);\n' +
        '\n' +
        '// 方便地将现有对象的方法，赋值到某个变量\n' +
        'let {random} = Math;\n' +
        'console.log(random);';

    xk$('.tapSection .text38 code').innerHTML=zy(text38);

    let text39 = 'let a = \'Hello World!\';\n' +
        'console.log(a.startsWith(\'Hello\'));     // true\n' +
        'console.log(a.endsWith(\'!\'));           // true\n' +
        'console.log(a.includes(\'o\'));           // true\n' +
        '\n' +
        '\n' +
        'let b = \'Hello World!\';\n' +
        'console.log(b.startsWith(\'world\', 6));  // true\n' +
        'console.log(b.endsWith(\'Hello\', 5));    // true\n' +
        'console.log(b.includes(\'Hello\', 6));    // false';

    xk$('.text39 code').innerHTML=zy(text39);

    let text40 = '// ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法\n' +
        'function func(x){\n' +
        '    x = x || 1;\n' +
        '    console.log(x);\n' +
        '}\n' +
        'func();\n' +
        '\n' +
        '\n' +
        '// ES6 做法，代码简洁易阅读\n' +
        'function func(x = 1){ // 注意当 x 为 undefined 时 x 赋值为 1\n' +
        '    console.log(x);\n' +
        '}\n' +
        'func();\n' +
        '\n' +
        'function fun(name = \'xx\', age = \'18\'){\n' +
        '    console.log(name, age);\n' +
        '}\n' +
        'fun();';

    xk$('.text40 code').innerHTML=zy(text40);


    let text41 = 'function func({name, age}){ \n' +
        '    console.log(name, age);\n' +
        '}\n' +
        'func();      // 因为你传递的实参是 undefined，所以抛出 TypeError: Cannot destructure property `name` of \'undefined\' or \'null\'.\n' +
        'func({});    // 这调用不会报错 \n' +
        '\n' +
        '\n' +
        'function func({name, age} = {}){    // 給函数参数设置默认值\n' +
        '    console.log(name, age);        \n' +
        '}\n' +
        'func();                             // 这里就可以省略不传\n' +
        'func({name : \'xx\', age : 18});';

    xk$('.text41 code').innerHTML=zy(text41);

    let text42 = 'function func(a, b, c) {\n' +
        '    console.log(a + b + c);\n' +
        '}\n' +
        'let arr = [1, 2, 3];\n' +
        'func.apply(null, arr);  // 以前的做法\n' +
        'func(...arr);           // ES6 的做法\n' +
        '\n' +
        '\n' +
        'let arr1 = [1, 2, 3];\n' +
        'let arr2 = [3, 4, 5];\n' +
        'let arr3 = [...arr1, ...arr2];\n' +
        'console.log(arr3);';

    xk$('.text42 code').innerHTML=zy(text42);

    let text43 = 'function func() {\n' +
        '    setTimeout(() => {\n' +
        '        console.log(\'id:\', this.id); // this 与外部的函数 func 的 this 是一样的\n' +
        '    }, 100);\n' +
        '}\n' +
        '\n' +
        'var id = 21;\n' +
        'func.call({ id: 42 });\n' +
        '\n' +
        '\n' +
        'let func = () => { this.a = 123 };\n' +
        'new func(); // 运行会报错 TypeError: func is not a constructor\n' +
        '\n' +
        '\n' +
        'let func = (a, b) => {\n' +
        '    console.log(a, b);\n' +
        '    console.log(arguments); // 这种方式获取不到实参列表\n' +
        '}\n' +
        'func(1, 2);\n' +
        '\n' +
        'let fun = (...params) => {  // 使用 rest 参数代替\n' +
        '    console.log(params);\n' +
        '}\n' +
        'fun(1, 2);';
    xk$('.text43 code').innerHTML=zy(text43);

    let text53 = 'class Person{\n' +
        'constructor(name,age){\n' +
        'this.name = name;\n' +
        'this.age = age;\n' +
        '}\n' +
        'doWork(){\n' +
        'console.log("E6中在原型对象上添加方法");\n' +
        '}\n' +
        'static doWork2(){\n' +
        'console.log("静态方法");\n' +
        '}\n' +
        '}\n' +
        'var p = new Person("Neld",10);\n' +
        'console.log(p);';

    xk$('.text53 code').innerHTML=zy(text53);

    let text54 = 'class Animal {\n' +
        'constructor(name, age){\n' +
        'this.name = name;\n' +
        'this.age = age;\n' +
        '}\n' +
        'eat(){\n' +
        'console.log("吃饭");\n' +
        '}\n' +
        'sleep(){\n' +
        'console.log("睡觉");\n' +
        '}\n' +
        '}\n' +
        'class Person extends Animal{\n' +
        'constructor(name,age){\n' +
        'super(name,age);//①\n' +
        '}\n' +
        'play(){\n' +
        'console.log("打豆豆");\n' +
        '}\n' +
        '}\n' +
        'console.log(new Person("Neld", 10));';

    xk$('.text54 code').innerHTML=zy(text54);

    let text97 = `var isMomHappy = false;
// Promise 容器一旦创建，就开始执行里面的代码
var p = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            //容器中的任务成功了
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };           
            resolve(phone); //把容器的Pending状态改为Resolved
            //这里调用的resolve方法实际上就是then方法传递的那个function
        } else {
            //容器中的任务失败了
            var reason = new Error('妈妈不开心');
            reject(reason); // 把容器的Pending状态改为Rejected
            //这里调用的reject方法实际上就是catch方法传递的那个function
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
    });

//由于isMomHappy = false; 所以这里打印结果是'妈妈不开心' 
    `;
    xk$('.text97 code').innerHTML = zy(text97);

    let text98 = `var fs =  require('fs')
    var p1 = new Promise(function(resolve,reject){
        fs.readFile('./data/a.txt','utf8',function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
    
    var p2 = new Promise(function(resolve,reject){
        fs.readFile('./data/a.txt','utf8',function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
    
    p1.then(function(data){
        console.log(data)
        return p2 //当前函数中return 的结果可以在后面的then中function接收到，没有return则后面then接收到的是undefined
        //当return的是一个Promise对象的时候，后续的then中的方法的第一个参数会作为p2的resolve;后续的catch中的方法的第一个参数会作为p2的reject
    }).catch(function(err){
        console.log('文件读取失败'，err)
        return p2 //同理
    }).then(function(data){
        console.log(data)
    }).catch(function(err){
        console.log(err)
    })
    `;
    xk$('.text98 code').innerHTML = zy(text98);
})();