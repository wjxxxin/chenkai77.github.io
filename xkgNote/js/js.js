(function () {
    var text1 = '//交换两个变量的值,方式一\n' +
        '//定义变量\n' +
        'var num01 = 5;\n' +
        'var num02 = 6;\n' +
        ' \n' +
        'console.log(num01, num02);\n' +
        'var temp = num01;\n' +
        'num01 = num02;\n' +
        'num02 = temp;\n' +
        'console.log(num01, num02);\n' +
        '                            \n' +
        '                            \n' +
        '//不适用辅助变量，交换两个变量的值,方式二\n' +
        'var num01 = 5;\n' +
        'var num02 = 6;\n' +
        '\n' +
        'num01 = num01 + num02;//num01 = 11;\n' +
        'num02 = num01 - num02;//11 - 6 = 5;\n' +
        'num01 = num01 - num02;//11 - 5 = 6;';
    $('.js.text1  .other code').text(text1);

    let text2 = '<script>\n' +
        'console.log(typeof 123);//number\n' +
        'console.log(typeof \'123\');//string\n' +
        'console.log(typeof true);//boolean\n' +
        'console.log(typeof undefined);//undefined\n' +
        'console.log(typeof null);//object,对象\n' +
        '\n' +
        'var str = typeof 123;\n' +
        'console.log(typeof str);//string\n' +
        '</script>\n' +
        '\n' +
        '=====================================\n' +
        'var d;\n' +
        '    if(d == undefined){\n' +
        '        console.log("大家早上好01");//显示\n' +
        '    }\n' +
        '    if(typeof d == undefined){\n' +
        '        console.log("大家早上好02");//不显示\n' +
        '    }\n' +
        '\tif(typeof d == \'undefined\'){\n' +
        '        console.log("大家早上好02");//显示\n' +
        '    }\n' +
        '    var nul = null;\n' +
        '    console.log(typeof nul);//JS的历史遗留问题 返回Object\n' +
        '\n' +
        '\n' +
        '\n' +
        '//复合数据类型\n' +
        '    var arr1 = [1,2,3];\n' +
        '    var arr2 = [1,2,3];\n' +
        '    console.log(arr1 == arr2);//false\n' +
        '    //引用数据类型存储是地址，共享同一块内存空间\n' +
        '    console.log(arr1 === arr2);';

    $('.js.text2  .other code').text(text2);

    let text3 = 'switch（expression）{\n' +
        '\tcase 常量1：\n' +
        '\t\t\t语句；\n' +
        '\t\t\tbreak；\n' +
        '\tcase常量2；\n' +
        '\t\t\t 语句；\n' +
        '\t\t\t break；\n' +
        '\tcase常量3；\n' +
        '\t\t\t 语句；\n' +
        '\t\t\t break；\n' +
        '\t...\n' +
        '\tcase常量n；\n' +
        '\t\t\t 语句；\n' +
        '\t\t\t break；\n' +
        '\tdefault：\n' +
        '\t\t\t 语句；\n' +
        '\t\t\t break；\n' +
        '}\n';
    $('.tapSection .text3 code').text(text3);

    let text4 = '<script>\n' +
        '//求一组数中的最大值和最小值，以及所在位置\n' +
        '//最大最小值，位置\n' +
        'var numbers = [6, 13, 8, 2, 21, 134, 5];\n' +
        '//假设最大最小值\n' +
        'var max = numbers[0];\n' +
        'var min = numbers[0];\n' +
        '//同时记录最大最小值下标（位置）\n' +
        'var maxIndex = 0;\n' +
        'var minIndex = 0;\n' +
        'for (var i = 1; i <= numbers.length; i++) {\n' +
        '    if (max < numbers[i]) {\n' +
        '        max = numbers[i];\n' +
        '        maxIndex = i;\n' +
        '    }\n' +
        '    if (min > numbers[i]) {\n' +
        '        min = numbers[i];\n' +
        '        minIndex = i;\n' +
        '    }\n' +
        '}\n' +
        'console.log(\'最小值：\'+min, minIndex);\n' +
        'console.log(\'最大值：\'+max, maxIndex);\n' +
        '</script>    ';

    $('.tapSection .text4 code').text(text4);

    let text5 = '<script>\n' +
        '//将字符串数组用|或其他符号分割成一个字符串\n' +
        'var names = [\'孙悟空\', \'比克大魔王\', \'天津饭\', \'克林\', \'布尔玛\'];\n' +
        'var str = \'\';\n' +
        'for (var i = 0; i < names.length; i++) {\n' +
        '    //names[i] = names[i] + separator;\n' +
        '    str += names[i] + \'|\';\n' +
        '}\n' +
        'console.log(names);\n' +
        'console.log(str);\n' +
        '\n' +
        '//解决两个小问题：（1）分隔符写死的问题；（2）最后一项有多余分隔符的问题\n' +
        'var names = [\'孙悟空\', \'比克大魔王\', \'天津饭\', \'克林\', \'布尔玛\'];\n' +
        'var separator = \'|\';\n' +
        'var str = names[0];\n' +
        'for (var i = 1; i < names.length; i++) {\n' +
        '    //names[i] = names[i] + separator;\n' +
        '    str += separator + names[i];\n' +
        '}\n' +
        'console.log(names);\n' +
        'console.log(str);\n' +
        '</script>  ';

    $('.tapSection .text5 code').text(text5);

    let text6 = '<script>\n' +
        '// 翻转数组\n' +
        'var names = [\'孙悟空\', \'琪琪\', \'克林\', \'龟仙人\'];\n' +
        'var reverse = [];\n' +
        'for (var i = names.length-1; i >=0; i--) {\n' +
        '    reverse[reverse.length] = names[i];\n' +
        '}\n' +
        'console.log(reverse);\n' +
        '</script>';

    $('.tapSection .text6 code').text(text6);

    let text7 = '<script>\n' +
        '//优化：解决已经排序好但还继续循环比较的问题\n' +
        'var arr = [86, 57, 61, 18, 40, 34];\n' +
        '\n' +
        'var conut = 0;\n' +
        '//外层循环：控制比较的趟数\n' +
        'for (var i = 0; i < arr.length - 1; i++) {\n' +
        '    //假设已经排序完成\n' +
        '    var isOver = true;\n' +
        '    //内层循环：控制每一趟的比较次数，判断元素大小，交换元素位置\n' +
        '    for (var j = 0; j < arr.length - 1 - i; j++) {\n' +
        '        //判断元素大小\n' +
        '        if (arr[j] > arr[j + 1]) {\n' +
        '            //还未排序完成\n' +
        '            isOver = false;\n' +
        '            //交换元素位置\n' +
        '            var temp = arr[j];\n' +
        '            arr[j] = arr[j + 1];\n' +
        '            arr[j + 1] = temp;\n' +
        '        }\n' +
        '    }\n' +
        '    if (isOver) {\n' +
        '        break;\n' +
        '    }\n' +
        '\n' +
        '}\n' +
        'console.log(arr);\n' +
        'console.log(conut);\n' +
        '</script>';

    $('.tapSection .text7 code').text(text7);

    let text8 = '<script>\n' +
        '// 素数（质数）：只能被1和自己整除的数\n' +
        'function isPrimeNum(num) {\n' +
        '    var isPrime = true;\n' +
        '    //遍历2-n之间的数\n' +
        '    for(var i = 2; i< num; i++){\n' +
        '        //判断num是否是质数\n' +
        '        if (num % i === 0) {\n' +
        '            //不是质数\n' +
        '            isPrime = false;\n' +
        '            break;\n' +
        '        }\n' +
        '    }\n' +
        '    if (isPrime) {\n' +
        '        console.log(num+\'是素数\');\n' +
        '    }else {\n' +
        '        console.log(num+\'不是素数\');\n' +
        '    }\n' +
        '}\n' +
        '//调用函数\n' +
        'isPrimeNum(101);\n' +
        '</script>';
    $('.text8 code').text(text8);


    let text9 = '<script>\n' +
        'function getMax() {\n' +
        '    //获取arguments中的第一个元素\n' +
        '    var max = arguments[0];\n' +
        '    for (var i = 1; i < arguments.length; i++) {\n' +
        '        if (max < arguments[i]) {\n' +
        '            max = arguments[i];\n' +
        '        }\n' +
        '    }\n' +
        '    return max;\n' +
        '}\n' +
        '\n' +
        'var max = getMax(3, 5, 2, 11, 8, 1, 0);\n' +
        'console.log(max);\n' +
        '</script>';
    $('.text9 code').text(text9);

    let text10 = '<script>\n' +
        'f1();\n' +
        '    console.log(c);\n' +
        '    console.log(b);\n' +
        '    console.log(a);\n' +
        '    function f1() {\n' +
        '        //同时给多个变量赋值\n' +
        '        var a = b = c = 9;\n' +
        '        console.log(a);\n' +
        '        console.log(b);\n' +
        '        console.log(c);\n' +
        '\n' +
        '\n' +
        '//解析后\n' +
        'function f1() {\n' +
        '        //同时给多个变量赋值\n' +
        '        var a;\n' +
        '        a = 9;\n' +
        '        b = 9;\n' +
        '        c = 9;\n' +
        '        console.log(a);\n' +
        '        console.log(b);\n' +
        '        console.log(c);\n' +
        '    }\n' +
        '    f1();\n' +
        '    console.log(c);\n' +
        '    console.log(b);\n' +
        '    console.log(a);//局部变量\n' +
        '    // 注意：没有使用var关键字声明的变量，会自动成为全局变量\n' +
        '</script>';
    $('.tapSection .text10 code').text(text10);

    let text11 = '<script>\n' +
        'var hero = {\n' +
        '    name: \'孙尚香\',\n' +
        '    weapon: \'弩炮\',\n' +
        '    equipment: [\'急速战靴\', \'宗师之力\', \'无尽战刃\', \'泣血之刃\', \'闪电匕首\', \'破晓\'],\n' +
        '    attach: function () {\n' +
        '        console.log(this.name + \':收割人头\');\n' +
        '    },\n' +
        '    run: function () {\n' +
        '        console.log(this.name + \':加速奔跑\');\n' +
        '    }\n' +
        '}\n' +
        'console.log(hero.name);\n' +
        'console.log(hero.weapon);\n' +
        'console.log(hero.equipment);\n' +
        'hero.attach();\n' +
        'hero.run();\n' +
        '</script>';
    $('.tapSection .text11 code').text(text11);

    let text12 = '<script>\n' +
        '//使用new关键字来调用Object()构造函数，创建出一个空的对象\n' +
        'var obj = new Object();\n' +
        'console.log(obj);\n' +
        '//动态地给对象设置属性和方法\n' +
        'obj.name = \'孙尚香\';\n' +
        'obj.gender = false;\n' +
        'obj.weapon = \'弩炮\';\n' +
        'obj.equipment = [\'急速战靴\', \'宗师之力\', \'无尽战刃\', \'泣血之刃\', \'闪电匕首\', \'破晓\'];\n' +
        'obj.attach = function () {\n' +
        '    console.log(this.name + \':收割人头\');\n' +
        '}\n' +
        'obj.run = function () {\n' +
        '    console.log(this.name + \':加速奔跑\');\n' +
        '}\n' +
        'console.log(obj.name);\n' +
        'console.log(obj.equipment);\n' +
        'obj.attach();\n' +
        'obj.run();\n' +
        '</script>';
    $('.tapSection .text12 code').text(text12);

    let text13 = '<script>\n' +
        '//定义一个用于创建对象的工厂函数\n' +
        'function createHero(name, gender, weapon, equipment, blood) {\n' +
        '    var hero = new Object();\n' +
        '    //设置属性\n' +
        '    hero.name = name;\n' +
        '    hero.gender = gender;\n' +
        '    hero.weapon = weapon;\n' +
        '    hero.equipment = equipment;\n' +
        '    hero.blood = blood;\n' +
        '\t//设置方法\n' +
        '    hero.attach = function () {\n' +
        '        console.log(this.name + \':收割人头\');\n' +
        '    }\n' +
        '    hero.run = function () {\n' +
        '        console.log(this.name + \':加速奔跑\');\n' +
        '    }\n' +
        '    return hero;\n' +
        '}\n' +
        '//使用工厂函数\n' +
        'var hero1 = createHero(\'孙尚香\', false, \'弩炮\', [\'急速战靴\', \'宗师之力\', \'无尽战刃\', \'泣血之刃\', \'闪电匕首\', \'破晓\'], 100);\n' +
        'var hero2 = createHero(\'刘备\', true, \'剑\', [\'头盔\', \'铠甲\'], 100);\n' +
        'console.log(hero1, hero2);\n' +
        '</script>';

    $('.tapSection .text13 code').text(text13);

    let text14 = '<script>\n' +
        '//定义一个构造函数，帕斯卡命名：所有单词首字母都大写。\n' +
        'function Hero(name, gender, weapon, equipment, blood) {\n' +
        '    //this  表示当前构造函数创建的对象\n' +
        '    //this  用来设置对象的属性和方法\n' +
        '    this.name = name;\n' +
        '    this.gender = gender;\n' +
        '    this.weapon = weapon;\n' +
        '    this.equipment = equipment;\n' +
        '    this.blood = blood;\n' +
        '\n' +
        '    this.attach = function () {\n' +
        '        console.log(this.name + \':收割人头\');\n' +
        '    }\n' +
        '    this.run = function () {\n' +
        '        console.log(this.name + \':加速奔跑\');\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'var hero1 = new Hero(\'孙尚香\', false, \'弩炮\', [\'急速战靴\', \'宗师之力\', \'无尽战刃\', \'泣血之刃\', \'闪电匕首\', \'破晓\'], 100);\n' +
        'var hero2 = new Hero(\'刘备\', true, \'剑\', [\'头盔\', \'铠甲\'], 100);\n' +
        'console.log(hero1, hero2);\n' +
        '</script>';

    $('.tapSection .text14 code').text(text14);

    let text15 = '<script>\n' +
        'function Person(name, age) {\n' +
        '    //属性\n' +
        '    this.name = name;\n' +
        '    this.age = age;\n' +
        '    //方法\n' +
        '    this.sayHello = function () {\n' +
        '        console.log(\'Hello\');\n' +
        '    }\n' +
        '}\n' +
        'var p = new Person(\'诸葛亮\', 22);\n' +
        'function fn(person) {\n' +
        '    person.name=\'孙尚香\';\n' +
        '    person = new Person(\'庞统\', 25);\n' +
        '    console.log(person.name);//\'庞统\'\n' +
        '}\n' +
        'fn(p);\n' +
        'console.log(p.name);//\'孙尚香\'\n' +
        'console.log(p.age);//22\n' +
        '</script>';

    $('.text15 code').text(text15);


    var text16 = '<script>\n' +
        'function formatDate(date) {\n' +
        '//判断用户传进来的类型是不是日期类型，不是则返回\n' +
        '//instanceof    instance 实例（对象）    of  的\n' +
        'if (!(date instanceof Date)) {\n' +
        '    console.error(\'date不是日期类型！\');\n' +
        '    return;\n' +
        '}\n' +
        '//将时间分成各个部分\n' +
        'var year = date.getFullYear(),\n' +
        '    month = date.getMonth() + 1,\n' +
        '    day = date.getDate(),\n' +
        '    hour = date.getHours(),\n' +
        '    minutes = date.getMinutes(),\n' +
        '    seconds = date.getSeconds();\n' +
        '/*if (month < 10) {\n' +
        '    month = \'0\' + month;\n' +
        '  }*/\n' +
        'var month = month < 10 ? \'0\' + month : month;\n' +
        'var day = day < 10 ? \'0\' + day : day;\n' +
        'var hour = hour < 10 ? \'0\' + hour : hour;\n' +
        'var minutes = minutes < 10 ? \'0\' + minutes : minutes;\n' +
        'var seconds = seconds < 10 ? \'0\' + seconds : seconds;\n' +
        'return year + \'-\' + month + \'-\' + day + \' \' + hour + \':\' + minutes + \':\' + seconds;\n' +
        '}\n' +
        'var d = new Date();\n' +
        'var dateStr = formatDate(d);\n' +
        'console.log(dateStr);\n' +
        '</script>';

    $('.tapSection .text16 code').text(text16);

    let text17 = '<script>\n' +
        'function getIntervalTime(start, end) {\n' +
        '    //定义时间差对象相关变量\n' +
        '    var day, hour, minutes, seconds;\n' +
        '    //获取总毫秒数\n' +
        '    var intervalTime = start - end;\n' +
        '    //将毫秒转换成对应的天、时、分、秒\n' +
        '    day = Math.floor(intervalTime / 1000 / 60 / 60 / 24);//获取天数\n' +
        '    hour = Math.floor(intervalTime / 1000 / 60 / 60 % 24);//获取除天数外的小时数\n' +
        '    minutes = Math.floor(intervalTime / 1000 / 60 % 60);//获取除小时数外的分钟数\n' +
        '    seconds = Math.round(intervalTime / 1000 % 60);//获取除分钟数外的秒数\n' +
        '\n' +
        '    //将天、时、分、秒封装到对象中并返回\n' +
        '    return {\n' +
        '        day: day,\n' +
        '        hour: hour,\n' +
        '        minutes: minutes,\n' +
        '        seconds: seconds\n' +
        '    }\n' +
        '}\n' +
        'var d1 = new Date();\n' +
        'var d2 = new Date(2019, 1, 6, 11, 45, 20);\n' +
        'var obj = getIntervalTime(d1, d2);\n' +
        'console.log(obj);\n' +
        'console.log(obj.day + \'天\' + obj.hour + \'小时\' + obj.minutes + \'分\' + obj.seconds + \'秒\');\n' +
        '</script>';

    $('.tapSection .text17 code').text(text17);

    let text18 = '<script>\n' +
        '//使用自定义的sort方法\n' +
        'function compareFunction(a, b) {\n' +
        '        return a - b;\n' +
        '        //比较规律：大于0，a在前；小于0，b在前；等于0，不变\n' +
        '    }\n' +
        '    array.sort(compareFunction);\n' +
        '    console.log(array);\n' +
        '//另一种写法\n' +
        'array.sort(function (a, b) {\n' +
        '    return a - b;\n' +
        '    //比较规律：大于0，a在前；小于0，b在前；等于0，不变\n' +
        '})\n' +
        'console.log(array);\n' +
        '</script>';

    $('.tapSection .text18 code').text(text18);

    let text19 = '// 对数组排序，从小到大   冒泡排序\n' +
        'function sort(array, compareFun) {\n' +
        '    //外循环控制遍历趟数\n' +
        '    for (var i = 0; i < array.length - 1; i++) {\n' +
        '        //假设已经排好\n' +
        '        var isSort = true;\n' +
        '        //内循环作比较，控制遍历次数\n' +
        '        for (var j = 0; j < array.length - 1 - i; j++) {\n' +
        '            // var bool = function (){return array[j] - array[j+1];}\n' +
        '            if (compareFun(array[j], array[j + 1]) > 0) {//要求compareFun函数返回一个数值\n' +
        '                //未排序好\n' +
        '                isSort = false;\n' +
        '                //交换元素位置\n' +
        '                var temp = array[j];\n' +
        '                array[j] = array[j + 1];\n' +
        '                array[j + 1] = temp;\n' +
        '            }\n' +
        '        }\n' +
        '        if (isSort) {\n' +
        '            break;\n' +
        '        }\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'var arr = [1, 5, 8, 3, 95, 22, 44, 7];\n' +
        '// sort(arr)\n' +
        '// console.log(arr);\n' +
        'sort(arr, function (a, b) {\n' +
        '    return a - b;\n' +
        '})\n' +
        'console.log(arr);';

    $('.tapSection .text19 code').text(text19);

    let text20 = 'ar array = new Array("c", "a", "z", "a", "x", "x", "a");\n' +
        'console.log(array.indexOf(\'a\')); //如果没有找到该元素，则返回-1\n' +
        'console.log(array.indexOf(\'a\', 0)); //指定从哪个位置（下标）开始找\n' +
        '\n' +
        '//定义去重方法\n' +
        'function unique(array) {\n' +
        '//定义临时数组\n' +
        '\tvar tempArr = new Array();\n' +
        'for (var i = 0; i < array.length; i++) {\n' +
        '        //如果临时数组中不存在当前遍历到的元素，则将该元素添加到临时数组中\n' +
        '    if (tempArr.indexOf(array[i]) === -1) {\n' +
        '            tempArr.push(array[i]);\n' +
        '        }\n' +
        '    }\n' +
        '}\n' +
        'unique(array);\n' +
        'console.log(tempArr);';

    $('.text20 code').text(text20);

    let text21 = '将一个字符串数组的元素的顺序进行反转。["a", "b", "c", "d"] -> [ "d","c","b","a"]。使用两种方式实现。\n' +
        '//方式一\n' +
        'var array1 = new Array(\'a\', \'b\', \'c\', \'d\',\'u\');\n' +
        'array1.reverse()\n' +
        'console.log(array1);\n' +
        '\n' +
        '//方式二\n' +
        'function reverseArr(arr) {\n' +
        'console.log(Math.floor(arr.length / 2));\n' +
        'for (var i = 0; i < Math.floor(arr.length/2); i++) {\n' +
        'var temp = arr[i];\n' +
        'arr[i] = arr[arr.length - i - 1];\n' +
        'arr[arr.length - i - 1] = temp;\n' +
        '}\n' +
        '}\n' +
        'reverseArr(array1);\n' +
        'console.log(array1);';

    $('.text21 code').text(text21);

    let text22 = '//把字符串中所有的o替换成 !\n' +
        'var str3 = \'abcoefoxyozzopp\';\n' +
        'var index = -1;\n' +
        'do{\n' +
        'index = str3.indexOf(\'o\', index+1);\n' +
        'if (index !== -1) {//index !== -1 表示字符串中存在 o\n' +
        '//替换\n' +
        'str3 = str3.replace(\'o\',\'!\');\n' +
        '}\n' +
        '}while (index !== -1);\n' +
        'console.log(str3);';

    $('.text22 code').text(text22);

    let text23 = '//把字符串中所有空白去掉 \'  abc   ddd  fff  999  \' \n' +
        'var str = \'  abc   ddd  fff  999  \';\n' +
        '//使用trim方法\n' +
        'var s = str.trim();//去除字符串的前后空格\n' +
        'console.log(\'===\'+s+\'===\');\n' +
        '//思路一：使用replace方法替换\n' +
        '//思路二：使用split()方法\n' +
        '//split()：根据指定的字符切割字符串,返回字符串数组\n' +
        'var strArr = str.split(\' \');\n' +
        '//根据空字符串拼接字符串数组\n' +
        'var s = strArr.join(\'\');\n' +
        'console.log(s);';

    $('.text23 code').text(text23);

    let text24 = '//判断一个字符串中出现次数最多的字符，并统计该字符出现的次数\n' +
        '//统计每一个字符出现的次数\n' +
        'var str = \'abcoefoxyozzopp\';\n' +
        '//字符：次数  -> 对象\n' +
        'var o = {};\n' +
        'for (var i = 0; i < str.length; i++) {\n' +
        '    var item = str.charAt(i);\n' +
        '    //o[item] 动态获取属性名为变量item的值，判断对象中是否存在该字符串\n' +
        '    if (o[item]) {//存在\n' +
        '        o[item]++;\n' +
        '    } else {//不存在\n' +
        '        o[item] = 1;\n' +
        '    }\n' +
        '}\n' +
        'console.log(o);\n' +
        '\n' +
        '//求最大值\n' +
        'var max = 1;\n' +
        'var ch = \'\';\n' +
        'for (var key in o) {\n' +
        '    if (max < o[key]) {\n' +
        '        max = o[key]; //记录最大数值\n' +
        '        ch = key; //记录最大数值的字符\n' +
        '    }\n' +
        '}\n' +
        'console.log(max, ch);';

    $('.tapSection .text24 code').text(text24);

    let text25 = '// 获取URL中的参数  http://www.wolfcode.cn/index.html?name=zs&age=ls&gender=true\n' +
        'var url = \'http://www.wolfcode.cn/index.html?name=zs&age=18&gender=true\';\n' +
        '//解析成对象\n' +
        '/*{\n' +
        'name:\'zs\',\n' +
        'age:18,\n' +
        'gender:true\n' +
        '}*/\n' +
        'var obj = {};\n' +
        'function getParams(url) {\n' +
        '    var index = url.indexOf(\'?\') + 1;\n' +
        '    var s = url.substr(index);\n' +
        '    var param = s.split(\'&\');\n' +
        '    //console.log(param);\n' +
        '    //遍历数组\n' +
        '    for (var i = 0; i < param.length; i++) {\n' +
        '        //根据等号切割字符串，得到元素格式为 key = value\n' +
        '        var arr = param[i].split(\'=\');\n' +
        '        var key = arr[0]; //第一个元素是对象的key\n' +
        '        var value = arr[1]; //第二个元素是对象的value\n' +
        '        obj[key] = value;//封装参数到对象中\n' +
        '    }\n' +
        '    return obj ;\n' +
        '}\n' +
        'var result = getParams(url);\n' +
        'console.log(result);';

    $('.tapSection .text25 code').text(text25);

    let text26 = '<input type="text"/><br>\n' +
        '<input type="text"/><br>\n' +
        '<input type="text"/><br>\n' +
        '<input type="text"/><br>\n' +
        '<input type="text"/><br>\t\n' +
        '<input type="text"/><br>\n' +
        '<input type="text"/><br>\n' +
        '<input type="text"/><br>\n' +
        '<input type="text"/><br>\n' +
        '<input type="text"/><br>\n' +
        '\n' +
        '<input type="button" id="btn" value="获取文本框的值"/><br>';

    $('.text26 code').text(text26);

    let text27 = '// 1、给文本框赋值\n' +
        '//获取所有input元素\n' +
        'var inputs = document.getElementsByTagName(\'input\');\n' +
        '//遍历input元素\n' +
        'for (var i = 0; i < inputs.length; i++) {\n' +
        '    var input = inputs[i];\n' +
        '    //判断，如果类型为text，则设置值\n' +
        '    if (input.type === \'text\') {\n' +
        '        input.value = i;\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '// 2、点击按钮获取文本框的值并按指定格式（| 分割）输出\n' +
        'var bnt = document.getElementById(\'bnt\');\n' +
        'var str = \'\'\n' +
        'bnt.onclick=function () {\n' +
        '    for (var i = 0; i < inputs.length; i++) {\n' +
        '        //字符串拼接\n' +
        '        var input = inputs[i];\n' +
        '        if (input.type === \'text\') {\n' +
        '            str += input.value + \'|\';\n' +
        '        }\n' +
        '\n' +
        '    }\n' +
        '    //使用substr截取掉最后一个 | \n' +
        '    str = str.substr(0,str.length-1);\n' +
        '    console.log(str);\n' +
        '}';

    $('.tapSection .text27 code').text(text27);

    let text28 = '//使用数组的方式（效率较高，推荐使用）\n' +
        'var bnt = document.getElementById(\'bnt\');\n' +
        'var array = [];\n' +
        'bnt.onclick=function () {\n' +
        '    for (var i = 0; i < inputs.length; i++) {\n' +
        '        //字符串拼接\n' +
        '        var input = inputs[i];\n' +
        '        if (input.type === \'text\') {\n' +
        '            array.push(input.value);\n' +
        '        }\n' +
        '    }\n' +
        '    var str = array.join(\'|\');\n' +
        '    console.log(str);\n' +
        '}';

    $('.tapSection .text28 code').text(text28);

    let text29 = `<div>
    <ul id="list">
        <li>西施</li>
        <li>昭君</li>
        <li>貂蝉</li>
        <li>玉环</li>
        <li>芙蓉姐姐</li>
    </ul>
</div>

// 1、以前的方式
// var list = document.getElementsByTagName('li');

// 2、现在的方式
//通过子节点完成隔行变色，获取元素的子节点：
// 方式一：childNodes   动态集合
// 方式二：children     动态集合
var list = document.getElementById('list');
list.children;
// 判断是否有子节点（hasChildNodes()），遍历子元素节点，隔行变色
if (list.hasChildNodes()) {
    for (var i = 0; i < list.children.length; i++) {
        var li = list.children[i];
        if (i % 2 === 0) {//奇数行
            li.style.backgroundColor='lightblue';
        }else { //偶数行
            li.style.backgroundColor='lightyellow'

        }
    }
}`

    $('.wrap.text29 .other pre code').text(text29);

    let text30 = '<style>\n' +
        '    select {\n' +
        '        width: 200px;\n' +
        '        height: 200px;\n' +
        '        background-color: lightblue;\n' +
        '        font-size: 20px;\n' +
        '    }\n' +
        '</style>\n' +
        '\n' +
        '<select id="leftSelect" multiple="multiple">\n' +
        '    <option>苹果</option>\n' +
        '    <option>橘子</option>\n' +
        '    <option>梨</option>\n' +
        '    <option>西瓜</option>\n' +
        '    <option>水蜜桃</option>\n' +
        '</select>\n' +
        '\n' +
        '<input type="button" value=">>" id="btn1">\n' +
        '<input type="button" value="<<" id="btn2">\n' +
        '<input type="button" value=">" id="btn3">\n' +
        '<input type="button" value="<" id="btn4">\n' +
        '\n' +
        '<select id="rightSelect" multiple="multiple">\n' +
        '\n' +
        '</select>\n' +
        '\n' +
        ' var leftSelect = my$(\'leftSelect\');\n' +
        '    var rightSelect = my$(\'rightSelect\');\n' +
        '    my$(\'btn1\').onclick = function () {\n' +
        '        var options = leftSelect.getElementsByTagName(\'option\');\n' +
        '        var len = options.length;\n' +
        '        for (var i = 0; i < len; i++) {\n' +
        '            rightSelect.appendChild(options[0]);\n' +
        '            options[0].selected=false;\n' +
        '        }\n' +
        '    };\n' +
        '\n' +
        '    my$(\'btn2\').onclick = function () {\n' +
        '        var options = rightSelect.children;\n' +
        '        var len = options.length;\n' +
        '        for (var i = 0; i < len; i++) {\n' +
        '            leftSelect.appendChild(options[0]);\n' +
        '            options[0].selected=false;\n' +
        '        }\n' +
        '    };\n' +
        '\n' +
        '    my$(\'btn3\').onclick = function () {\n' +
        '        var arr = new Array();\n' +
        '        var options = leftSelect.getElementsByTagName(\'option\');\n' +
        '        for (var i = 0; i <options.length ; i++) {\n' +
        '            if (options[i].selected){\n' +
        '                arr.push(options[i]);\n' +
        '                options[i].selected=false;\n' +
        '            }\n' +
        '        }\n' +
        '        for (var j = 0; j <arr.length; j++) {\n' +
        '            rightSelect.appendChild(arr[j]);\n' +
        '        }\n' +
        '\n' +
        '    };\n' +
        '\n' +
        '\n' +
        '    my$(\'btn4\').onclick = function () {\n' +
        '        var arr = new Array();\n' +
        '        var options= rightSelect.children;\n' +
        '        for (var i = 0; i <options.length ; i++) {\n' +
        '            if (options[i].selected){\n' +
        '                arr.push(options[i]);\n' +
        '                options[i].selected=false;\n' +
        '            }\n' +
        '        }\n' +
        '        for (var j = 0; j <arr.length ; j++) {\n' +
        '            leftSelect.appendChild(arr[j]);\n' +
        '        }\n' +
        '    };';

    $('.text30 code').text(text30);

    let text31 = '年龄：<input type="text" name="userAge" id="tx"/>\n' +
        '        }\n' +
        'my$(\'tx\').onkeydown = function (e) {\n' +
        '    //处理事件对象的浏览器兼容性问题\n' +
        '    e = e || window.event;\n' +
        '    // e.keyCode: 键盘码， 在[48, 57]区间内的键盘码，对应着是个数值\n' +
        '    // console.log(e.keyCode);\n' +
        '    if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode !== 8) {\n' +
        '        //取消键盘输出的默认行为的执行\n' +
        '        // return false;\n' +
        '        e.preventDefault();\n' +
        '    }\n' +
        '}';

    $('.text31 code').text(text31);

    let text32 = '<style>\n' +
        '    body {\n' +
        '        margin: 0;\n' +
        '    }\n' +
        '\n' +
        '    #box {\n' +
        '        margin: 100px;\n' +
        '        width: 200px;\n' +
        '        height: 200px;\n' +
        '        background-color: blue;\n' +
        '    }\n' +
        '</style>\n' +
        '<script src="common.js"></script>\n' +
        '\n' +
        '<div id="box"></div>\n' +
        '\n' +
        '//event.type：获取事件名称。\n' +
        'my$(\'box\').onmouseover = function (e) {\n' +
        '    e = e || window.event;\n' +
        '    console.log(e.type);\n' +
        '}\n' +
        '\n' +
        'my$(\'box\').onclick = fn;\n' +
        'my$(\'box\').onmouseover = fn;\n' +
        'my$(\'box\').onmouseout = fn;\n' +
        '\n' +
        '//当多个（种）事件使用同一个事件处理函数时，可以使用e.type获取到当前发生的事件的名称\n' +
        '//多个事件只使用了一个函数，减少内存的消耗\n' +
        '\n' +
        'function fn(e) {\n' +
        '    e = e || window.event;\n' +
        '    //根据事件名称，执行不同的业务代码\n' +
        '    switch (e.type) {\n' +
        '        case \'click\':\n' +
        '            console.log(\'click事件\');\n' +
        '            break;\n' +
        '        case \'mouseover\':\n' +
        '            console.log(\'鼠标移入\');\n' +
        '            break;\n' +
        '        case \'mouseout\':\n' +
        '            console.log(\'鼠标移出\');\n' +
        '            break;\n' +
        '    }\n' +
        '}';

    $('.text32 code').text(text32);

    let text33 = 'function getScroll(){\n' +
        '    var scrolLeft = document.body.scrollLeft || document.documentElement.scrollLeft;\n' +
        '    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;\n' +
        '\n' +
        '    return{\n' +
        '        scrolLeft:scrolLeft,\n' +
        '        scrollTop:scrolLeft\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'function getPage(e) {\n' +
        '    var pageX = e.pageX || e.clientX + getScroll().scrolLeft;\n' +
        '    var pageY = e.pageY || e.clientY + getScroll().scrollTop;\n' +
        '    return{\n' +
        '        pageX:pageX,\n' +
        '        pageY:pageY\n' +
        '    }\n' +
        '}';

    $('.text33 code').text(text33);

    let text34 = 'var obj = {\n' +
        'name:"zs",\n' +
        'age:10\n' +
        '};\n' +
        'console.log("name" in obj);//true\n' +
        'var a = "name";\n' +
        'console.log(a in obj);//true';

    $('.wrap.text34 .other pre code').text(text34);

    let text35 = 'var obj = {\n' +
        'name : "zs",\n' +
        'age : 20\n' +
        '};\n' +
        'console.log(obj.name);// zs\n' +
        'console.log(delete obj.name); // true\n' +
        'console.log(obj.name);// undefined\n' +
        '//2、删除未使用var声明的变量,未使用var定义的变量是全局变量，自动成为window的属性\n' +
        'test = "这是一个未使用var定义的变量";\n' +
        'console.log(test);\n' +
        'console.log(delete test);\n' +
        '//console.log(test);//报错\n' +
        '//3、是否能够删除使用var定义的变量？ 不能\n' +
        'var str = "demo";\n' +
        'console.log(delete str);//false\n' +
        'console.log(str);//demo\n' +
        '//4、可以删除直接定义在window上的属性\n' +
        'window.demo2 = "demo001";\n' +
        'console.log(delete window.demo2);//true\n' +
        'console.log(window.demo2);//undefined';

    $('.text35 code').text(text35);

    let text36 = 'var a = 123;\n' +
        '  try{\n' +
        '    console.log(a);\n' +
        '    console.log(b);\n' +
        ' }catch(e){\n' +
        '    //throw "这是一个错误信息";\n' +
        '    //throw "错误信息"+e;\n' +
        '    //以上都是抛出字符串，公司里面规范写法是抛出一个对象，写法如下\n' +
        '    throw {\n' +
        '      errorMsg:e,//具体的错误信息\n' +
        '      errorCode:10001 //错误码\n' +
        '   }\n' +
        ' }finally{//加上finally是一个完整的结构\n' +
        '    // 不管前面的代码有没有出错,都会执行这个代码块中的代码\n' +
        '    // 一般在前端中开发不会使用,多用于后端开发中(Node.js),用来释放一些资源\n' +
        '    console.log("不管前面的代码有没有出错,都会执行这个代码块中的代码");\n' +
        ' }';

    $('.text36 code').text(text36);

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

    $('.tapSection .text37 code').text(text37);

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

    $('.tapSection .text38 code').text(text38);

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

    $('.text39 code').text(text39);

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

    $('.text40 code').text(text40);


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

    $('.text41 code').text(text41);

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

    $('.text42 code').text(text42);

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
    $('.text43 code').text(text43);

    var text44 = '//混入式继承（拷贝）\n' +
        '//obj2继承到obj1中的成员，可以直接将obj1中的成员拷贝到obj2中即可\n' +
        'var obj1 = {name:"zs",age:10};\n' +
        'var obj2 = {};\n' +
        '// 将obj1中的成员拷贝到obj2中\n' +
        'for (var key in obj1) {\n' +
        'obj2[key] = obj1[key];\n' +
        '}\n' +
        'console.log(obj1);\n' +
        'console.log(obj2);';

    $('.tapSection .text44 code').text(text44);

    let text45 = 'function Animal() {\n' +
        '}\n' +
        'Animal.prototype.name="animal";\n' +
        'function Person() {\n' +
        '}\n' +
        '//修改Person的原型对象\n' +
        'Person.prototype= Animal.prototype;\n' +
        'Person.prototype.useTool = function () {\n' +
        'console.log("use fire");\n' +
        '}\n' +
        'var p = new Person();\n' +
        'console.log(p);\n' +
        'var ani = new Animal();\n' +
        'console.log(ani);';

    $('.tapSection .text45 code').text(text45);

    let text46 = ' function Animal(name, weight) {\n' +
        '        this.name = name;\n' +
        '        this.weight = weight;\n' +
        '    }\n' +
        '\n' +
        '    Animal.prototype = {\n' +
        '        constructor: Animal,\n' +
        '        eat: function () {\n' +
        '            console.log(\'吃东西\');\n' +
        '        }\n' +
        '    };\n' +
        '\n' +
        '    function Dog(color) {\n' +
        '        this.color = color;\n' +
        '    }\n' +
        '\n' +
        '    Dog.prototype = new Animal(\'小卡\', \'50斤\');\n' +
        '    Dog.prototype.bite = function () {\n' +
        '        console.log(\'咬人\');\n' +
        '    };\n' +
        '\n' +
        '    function Huskie(sex) {\n' +
        '        this.sex=sex;\n' +
        '    }\n' +
        '\n' +
        '    Huskie.prototype = new Dog(\'灰色\');\n' +
        '    Huskie.prototype.play = function () {\n' +
        '        console.log(\'逗主人开心\');\n' +
        '    };\n' +
        '    var hashiqi = new Huskie(\'公\');\n' +
        '    console.log(hashiqi);\n' +
        '    console.log(hashiqi.name);\n' +
        '    console.log(hashiqi.weight);\n' +
        '    console.log(hashiqi.color);\n' +
        '    console.log(hashiqi.sex);\n' +
        '    hashiqi.play();\n' +
        '    hashiqi.eat();\n' +
        '    hashiqi.bite()';

    $('.tapSection .text46 code').text(text46);

    let text47 = '//所谓借用构造函数，就是在子构造函数中调用父构造函数，达到继承并向父构造函数传参的目的。\n' +
        ' //原型链继承/Peson 姓名、性别、年龄、体重、吃、喝...\n' +
        '    //          Student 姓名、性别、年龄、体重.吃、喝、学习\n' +
        '    function Person(name,age,sex,weight) {//创建构造函数\n' +
        '        this.name = name;\n' +
        '        this.age = age;\n' +
        '        this.sex = sex;\n' +
        '        this.weight = weight;\n' +
        '    }\n' +
        '    Person.prototype.eat= function () {\n' +
        '        console.log("我刚吃完");\n' +
        '    };\n' +
        '    //学生的构造函数\n' +
        '    function Student(name,age,sex,weight,score) {\n' +
        '        this.score= score;\n' +
        '        Person.call(this,name,age,sex,weight);//window.Person.call(this)\n' +
        '    }\n' +
        '    //实例化对象\n' +
        '    var stu1 = new Student("小丽",18,"女","200kg","100分");\n' +
        '    console.log(stu1.name, stu1.age, stu1.sex, stu1.weight, stu1.score);\n' +
        '    //stu1.eat();\n' +
        '    var stu2 = new Student("小花",18,"女","100kg","120分");\n' +
        '    console.log(stu2.name, stu2.age, stu2.sex, stu2.weight, stu2.score);\n' +
        '    //stu2.eat();\n' +
        '    var stu3 = new Student("小苍",18,"男","100kg","10分");\n' +
        '    console.log(stu3.name, stu3.age, stu3.sex, stu3.weight, stu3.score);';

    $('.tapSection .text47 code').text(text47);

    let text48 = 'function SubClass(color, name, age) {\n' +
        '//SuperClass.call(this,name,age);\n' +
        'SuperClass.apply(this,[name,age]);//继承构造函数中的成员\n' +
        'this.color = color;\n' +
        '}\n' +
        'SubClass.prototype = new SuperClass();//继承原型链上的成员';

    $('.tapSection .text48 code').text(text48);

    let text49 = 'var obj1 = {\n' +
        'name:"Neld",\n' +
        'age:10,\n' +
        'add : function (a, b) {\n' +
        'return a + b;\n' +
        '}\n' +
        '}\n' +
        'var obj2 = {\n' +
        'name:"Lily",\n' +
        'age:12\n' +
        '}\n' +
        'console.log(obj1.add.call(obj2, 1, 2));//3\n' +
        '//console.log(obj1.add.apply(obj2, 1, 2));//CreateListFromArrayLike called on\n' +
        'non-object\n' +
        'console.log(obj1.add.apply(obj2, [2, 2]));//4';

    $('.text49 code').text(text49);


    let text50 = '// 方式一：\n' +
        'var str1 = new String("string1");\n' +
        'var num1 = new Number(123);\n' +
        'var bool1 = new Boolean(true);\n' +
        'console.log(str1);\n' +
        'console.log(num1);\n' +
        'console.log(bool1);\n' +
        '// 方式二\n' +
        'var str2 = new Object("string2");\n' +
        'var num2 = new Object(456);\n' +
        'var bool2 = new Object(false);\n' +
        'console.log(str2);\n' +
        'console.log(num2);\n' +
        'console.log(bool2);';

    $('.text50 code').text(text50);

    let text51 = 'function Person(name, age) {\n' +
        '  var className = "H5";\n' +
        '  this.name = name;\n' +
        '  this.age = age;\n' +
        '  this.showName = function () {\n' +
        '    console.log(this.name);\n' +
        ' }\n' +
        '  function getClassName() {\n' +
        '    return className;\n' +
        ' }\n' +
        '  this.showClass = function () {\n' +
        '    console.log("姓名：",this.name,"班级：",getClassName());\n' +
        ' }\n' +
        '}\n' +
        'Person.prototype.des = "H5-JS面向对象";\n' +
        'Person.info = "H5 Information";';

    $('.text51 code').text(text51);

    let text52 = 'console.log("abc".toString());//"abc"\n' +
        'console.log((123).toString());//"123"\n' +
        'console.log((100).toString(2));//1100100\n' +
        'console.log((100).toString(16));//64\n' +
        'console.log(true.toString());//"true"\n' +
        'function Person(name) {\n' +
        'this.name = name;\n' +
        '}\n' +
        'var p = new Person("Neld");\n' +
        'console.log(p.toString());//"[object Object]"\n' +
        'var arr = [1,2,"A",false];\n' +
        'console.log(arr.toString());//"1,2,A,false"\n' +
        'console.log(Object.prototype.toString.call(arr));//"[object Array]"';

    $('.text52 code').text(text52);

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

    $('.text53 code').text(text53);

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

    $('.text54 code').text(text54);

    let text55 = 'function Person(name,age) {\n' +
        '        /*if(this == window){\n' +
        '           throw "你给我好好看看，是不是没有加new，回去抄100遍";\n' +
        '        }else{\n' +
        '            this.name = name;\n' +
        '            this.age = age;\n' +
        '        }*/\n' +
        '        //但是在ES6中，这种方式存在一定的问题，此时的this不一定是指向window，原因我们后面再说。此时我们换种思路来解决。\n' +
        '        /*if(!(this instanceof Person)){\n' +
        '            throw "你给我好好看看，是不是没有加new，回去抄100遍";\n' +
        '        }else{\n' +
        '            this.name = name;\n' +
        '            this.age = age;\n' +
        '        }*/\n' +
        '//在ES6中，为new引入了一个target属性，如果没有使用new调用构造函数，那么在该构造函数中new.target为undefined，反之为当前的构造函数。\n' +
        '        if(!new.target){\n' +
        '            throw "你给我好好看看，是不是没有加new，回去抄100遍";\n' +
        '        }else{\n' +
        '            this.name = name;\n' +
        '            this.age = age;\n' +
        '        }\n' +
        '\n' +
        '    }';

    $('.text55 code').text(text55);


    let text56 = 'var p1 = {\n' +
        '    name:"zs",\n' +
        '    age:10,\n' +
        '    favs:["H5","Java","C"],\n' +
        '    wife:{\n' +
        '        name:"lily",\n' +
        '        age:8\n' +
        '    }\n' +
        '}\n' +
        'var p2 = {};\n' +
        'for(var key in p1){\n' +
        '    p2[key] = p1[key];\n' +
        '}\n' +
        'console.log(p2);';

    $('.text56 code').text(text56);

    let text57 = 'function deepCopy(source,target) {\n' +
        '    for(var key in source){\n' +
        '        if(source.hasOwnProperty(key)){//只拷贝当前对象的属性\n' +
        '            if(typeof source[key] == "object"){//如果属性是引用类型的对象\n' +
        '                // //根据原属性的类型决定是数组还是普通对象\n' +
        '                target[key] = Array.isArray(source[key]) ? [] : {};\n' +
        '                deepCopy(source[key],target[key]);//递归调用，完成所有层次的拷贝\n' +
        '            }else{\n' +
        '                target[key] = source[key];\n' +
        '            }\n' +
        '        }\n' +
        '    }\n' +
        '}\n' +
        'deepCopy(p1,p2);'

    $('.text57 code').text(text57);

    let text58 = '//方式一：最普通的语法结构创建函数\n' +
        'function f1() {\n' +
        '}\n' +
        '//方式二：创建一个匿名函数，并将该函数赋值给一个变量\n' +
        'var f2 = function () {\n' +
        '}\n' +
        '//方式三：创建一个命名函数，需要注意的是，此时只能使用f3调用函数，f4不行，f4这个名称只能在函数内部使用\n' +
        'var f3 = function f4() {\n' +
        '}\n' +
        '//方式四：使用指定的模板创建函数\n' +
        'var f5 = new Function();\n' +
        '\n' +
        'console.log(f1.name);//f1\n' +
        'console.log(f2.name);//f2\n' +
        'console.log(f3.name);//f4\n' +
        'console.log(f5.name);//anonymous匿名函数';

    $('.text58 code').text(text58);

    let text59 = '(function () {\n' +
        '    console.log("方式一");\n' +
        '})();\n' +
        '(function () {\n' +
        '    console.log("方式二");\n' +
        '}());\n' +
        '!function () {\n' +
        '    console.log("方式三");\n' +
        '}();\n' +
        '+function () {\n' +
        '    console.log("方式四");\n' +
        '}();\n' +
        '-function () {\n' +
        '    console.log("方式五");\n' +
        '}();\n' +
        '~function () {\n' +
        '    console.log("方式六");\n' +
        '}();';

    $('.text59 code').text(text59);

    let text60 = 'function foo() {\n' +
        '    console.log("初始化操作");\n' +
        '    foo = function () {\n' +
        '        console.log("真正的业务逻辑处理");\n' +
        '    }\n' +
        '}\n' +
        'foo();//初始化操作\n' +
        'foo();//真正的业务逻辑处理\n' +
        'foo();//真正的业务逻辑处理';

    $('.text60 code').text(text60);

    let text61 = 'function foo() {\n' +
        '    console.log("初始化操作");\n' +
        '    foo = function () {\n' +
        '        console.log("真正的业务逻辑处理");\n' +
        '    }\n' +
        '}\n' +
        'var f = foo;\n' +
        'f();//初始化操作\n' +
        'f();//初始化操作\n' +
        'f();//初始化操作';

    $('.text61 code').text(text61);


    let text62 = 'var a = {\n' +
        '  name:"zs",\t\n' +
        '  b:{\n' +
        '    age:10,\n' +
        '    c:{\n' +
        '      color:"red",\n' +
        '      des:"description"\n' +
        '   }\n' +
        ' }\n' +
        '}\n' +
        'console.log(a.b.c.color);\n' +
        'console.log(a.b.c.des);\n' +
        'with(a.b.c){\n' +
        '  console.log(color);\n' +
        '  console.log(des);\n' +
        '}';

    $('.text62 code').text(text62);

    let text63 = 'console.log(a, b, c);// undefined undefined undefined\n' +
        'var a=10,b=20,c=30;\n' +
        'function f(a) {\n' +
        'console.log(a, b, c);// 10 undefined 30\n' +
        'var b=a=c=100;\n' +
        'console.log(a, b, c);//100 100 100\n' +
        '}\n' +
        'f(10,20);\n' +
        'console.log(a, b, c);// 10,20,100';

    $('.tapSection .text63 code').text(text63);

    let text64 = 'function fun() {\n' +
        '\tvar a = 123;\n' +
        '\t\tfunction fun2() {\n' +
        '\t\t\treturn a;\n' +
        '\t\t}\n' +
        '\treturn fun2;\n' +
        '}\n' +
        'var fun3 = fun();\n' +
        'console.log(fun3());//123';

    $('.tapSection .text64 code').text(text64);

    let text65 = 'for (var i = 0; i < 10; i++) {\n' +
        '\tfunction fun(){\n' +
        '\t\treturn function (i) {\n' +
        '\t\tconsole.log(i);\n' +
        '\t\t}\n' +
        '\t}\n' +
        '   setTimeout(fun(),1000,i);\n' +
        '}';

    $('.tapSection .text65 code').text(text65);

    let text66 = '<body>\n' +
        '<div>我是div1</div>\n' +
        '<div>我是div2</div>\n' +
        '<div>我是div3</div>\n' +
        '<div>我是div4</div>\n' +
        '<div>我是div5</div>\n' +
        '<div>我是div6</div>\n' +
        '<div>我是div7</div>\n' +
        '<div>我是div8</div>\n' +
        '<div>我是div9</div>\n' +
        '<div>我是div10</div>\n' +
        '</body>\n' +
        '</html>\n' +
        '<script>\n' +
        '    //需求:获取到10个div元素,为每个元素绑定一个点击事件,在点击对应元素的时候,打印:我是第 N 个 DIV元素\n' +
        '    var divs = document.getElementsByTagName("div");\n' +
        '    for(var i =0; i< divs.length; i ++){\n' +
        '\n' +
        '        divs[i].onclick = (function (j) {\n' +
        '            return function(){\n' +
        '                console.log("我是第" + (j+1) + "div");\n' +
        '            }\n' +
        '\n' +
        '        })(i);\n' +
        '    }\n' +
        '</script>';

    $('.tapSection .text66 code').text(text66);

    let text67 = 'var obj = {\n' +
        'name:\'默认\',\n' +
        'age:"默认",\n' +
        'showName:function () {\n' +
        'console.log("姓名:" + this.name);\n' +
        '},\n' +
        'showAge:function () {\n' +
        'console.log("年龄:" + this.age);\n' +
        '},\n' +
        'init:function (name,age) {\n' +
        'this.name = name;\n' +
        'this.age = age;\n' +
        '}\n' +
        '};\n' +
        'obj.init("zs",19);//给init传值\n' +
        'console.log(obj.name);//zs\n' +
        'console.log(obj.age);//19';

    $('.text67 code').text(text67);

    let text68 = '({\n' +
        'name:\'默认\',\n' +
        'age:"默认",\n' +
        'showName:function () {\n' +
        'console.log("姓名:" + this.name);\n' +
        '},\n' +
        'showAge:function () {\n' +
        'console.log("年龄:" + this.age);\n' +
        '},\n' +
        'init:function (name,age) {\n' +
        'this.name = name;\n' +
        'this.age = age;\n' +
        'this.showName();\n' +
        'this.showAge();\n' +
        '}\n' +
        '}).init("lw",19);';

    $('.text68 code').text(text68);

    let text69 = 'var _instance;//一般不修改的变量前面加个下划线\n' +
        'function Person() {\n' +
        'if(_instance){\n' +
        'console.log(\'之前已经创建过,直接返回之前创建的对象\');\n' +
        'return _instance;\n' +
        '}\n' +
        '_instance = this;\n' +
        'console.log("创建了对象");//第一次new会打印这句话\n' +
        '}\n' +
        'var p1 = new Person();\n' +
        'var p2 = new Person();\n' +
        'console.log(p1 == p2); // true，他俩是同一个对象';

    $('.tapSection .text69 code').text(text69);

    let text70 = 'function Person() {\n' +
        'if(Person._instance){\n' +
        'console.log(\'之前已经创建过,直接返回之前创建的对象\');\n' +
        'return Person._instance;\n' +
        '}\n' +
        'Person._instance = this;\n' +
        'console.log("创建了对象");\n' +
        '}\n' +
        'var p1 = new Person();\n' +
        'var p2 = new Person();\n' +
        'console.log(p1 == p2); // true，他俩是同一个对象';

    $('.tapSection .text70 code').text(text70);

    let text71 = 'function MakePhone() {}\n' +
        'MakePhone.prototype = {\n' +
        'constructor:MakePhone,\n' +
        'logDes:function () {\n' +
        'console.log("广告语:" + this.des);\n' +
        '},\n' +
        'callPhone:function () {\n' +
        'console.log("打电话");\n' +
        '}\n' +
        '};\n' +
        'MakePhone.factory = function (type) {\n' +
        'MakePhone[type].prototype = MakePhone.prototype;\n' +
        'var obj = new MakePhone[type]();\n' +
        'return obj;\n' +
        '};\n' +
        'MakePhone.iphone = function () {\n' +
        'this.des = "最贵的手机，最垃圾的系统!";\n' +
        '};\n' +
        'MakePhone.oppo = function () {\n' +
        'this.des = "充电两小时，通话五分钟";\n' +
        '};\n' +
        'MakePhone.xiaoMi = function () {\n' +
        'this.des ="小米可以吃，不像锤子";\n' +
        '};\n' +
        'var iphone1 = MakePhone.factory("iphone");\n' +
        'var iphone2 = MakePhone.factory("iphone");\n' +
        'var oppo1 = MakePhone.factory("oppo");\n' +
        'iphone1.callPhone();\n' +
        'iphone2.callPhone();\n' +
        'oppo1.callPhone();\n' +
        'iphone1.logDes();\n' +
        'oppo1.logDes();';

    $('.tapSection .text71 code').text(text71);

    let text72 = 'var Rose = {\n' +
        '   eat:function () {\n' +
        '     console.log("我肚子好饿啊---Rose");\n' +
        '     Jack.jack_eat();//3、注册订阅者\n' +
        '     Tom.tom_eat();//第二步：注册订阅者\n' +
        '   }\n' +
        ' };\n' +
        ' var Jack = {\n' +
        '   jack_eat:function () {\n' +
        '     console.log(\'邀请女神吃大餐!--jack\');\n' +
        '   }\n' +
        ' };\n' +
        ' var Tom = {//第一步：多加一个订阅者\n' +
        '   tom_eat:function () {\n' +
        '     console.log(\'邀请女神吃麻辣烫!--tom\');\n' +
        '   }\n' +
        ' };\n' +
        ' Rose.eat();//可以调用看看';

    $('.tapSection .text72 code').text(text72);


    let text73 = 'function getFirstElementChild(element) {\n' +
        '    var node, nodes = element.childNodes, i = 0;\n' +
        '    //获取子节点中的一个节点，赋值给node变量\n' +
        '    while (node = nodes[i++]) {\n' +
        '        //判断是否是子元素节点\n' +
        '        if (node.nodeType === 1) {\n' +
        '            return node;\n' +
        '        }\n' +
        '    }\n' +
        '    return null;\n' +
        '}';

    $('.text73 code').text(text73);


    let text74 = 'function getLastElementChild(element) {\n' +
        '    var node, nodes = element.childNodes;\n' +
        '    var i=nodes.length-1;\n' +
        '    while(node=nodes[i--]){\n' +
        '        if(node.nodeType===1){\n' +
        '            return node;\n' +
        '        }\n' +
        '    }\n' +
        '    return null;\n' +
        '}';

    $('.text74 code').text(text74);


    let text75 = 'function getNextElementSibling(element) {\n' +
        '    var el = element;\n' +
        '    while (el = el.nextSibling) {\n' +
        '        if (el.nodeType === 1) {\n' +
        '            return el;\n' +
        '        }\n' +
        '    }\n' +
        '    return null;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '\n' +
        'function getPreviousElementSibling(element) {\n' +
        '    var el=element;\n' +
        '    while(el=el.previousSibling){\n' +
        '        if(el.nodeType===1){\n' +
        '            return el;\n' +
        '        }\n' +
        '    }\n' +
        '    return null;\n' +
        '}';

    $('.text75 code').text(text75);

    let text76 = 'function setInnerText(element, content) {\n' +
        '    //判断当前浏览器中的element元素是否存在innerText属性\n' +
        '    if (typeof element.innerText === \'string\') {\n' +
        '        element.innerText = content;\n' +
        '    } else {\n' +
        '        element.textContent = content;\n' +
        '    }\n' +
        '}';
    $('.text76 code').text(text76);

    let text77 = 'function addEventListener(element, type, fn) {\n' +
        '    if (element.addEventListener) {\n' +
        '        element.addEventListener(type, fn);\n' +
        '    }else if (element.attachEvent) {\n' +
        '        //处理IE9之前的版本\n' +
        '        element.attachEvent(\'on\'+type, fn);\n' +
        '    }else {\n' +
        '        // 相当于element.onclick = fn\n' +
        '        element[\'on\'+type]=fn;\n' +
        '    }\n' +
        '}';

    $('.text77 code').text(text77);

    let text78 = 'function removeEventListener(element,type,fn) {\n' +
        '    if (element.removeEventListener){\n' +
        '        element.removeEventListener(type,fn);\n' +
        '    } else if(element.detachEvent){\n' +
        '        element.detachEvent(\'on\'+type,fn);\n' +
        '    } else {\n' +
        '        element[\'on\'+type]=null;\n' +
        '    }\n' +
        '}';

    $('.text78 code').text(text78);

    let text79 = 'function getScroll(){\n' +
        '    var scrolLeft = document.body.scrollLeft || document.documentElement.scrollLeft;\n' +
        '    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;\n' +
        '    return{\n' +
        '        scrolLeft:scrolLeft,\n' +
        '        scrollTop:scrollTop\n' +
        '    }\n' +
        '}';

    $('.text79 code').text(text79);

    let text80 = 'function getPage(e) {\n' +
        '    var pageX = e.pageX || e.clientX + getScroll().scrolLeft;\n' +
        '    var pageY = e.pageY || e.clientY + getScroll().scrollTop;\n' +
        '    return{\n' +
        '        pageX:pageX,\n' +
        '        pageY:pageY\n' +
        '    }\n' +
        '}';

    $('.text80 code').text(text80);


    let text81 = '<style>\n' +
        '    .cls {\n' +
        '        background-color: lightyellow;\n' +
        '    }\n' +
        '</style>\n' +
        '\n' +
        '用户名：<input id="userName" type="text"/><br><br>\n' +
        '密码：<input id="password" type="password"/><br>\n' +
        '<input id="login" type="button" value=" 登 录 "/>\n' +
        '\n' +
        '\n' +
        '<script>\n' +
        '// 1、获取事件源元素\n' +
        '    var login = document.getElementById(\'login\');\n' +
        '    // 2、注册点击事件\n' +
        '    login.onclick = function () {\n' +
        '        // 3、事件处理函数中，检测用户名和密码是否合法\n' +
        '        var userName = document.getElementById(\'userName\');\n' +
        '        console.log(userName.value);\n' +
        '        if (userName.value.length < 3 || userName.value.length > 8) {//非法，高亮显示文本框\n' +
        '            userName.className = \'cls\';\n' +
        '            return;\n' +
        '        } else {//合法\n' +
        '            userName.className = \'\';\n' +
        '        }\n' +
        '        var password = document.getElementById(\'password\');\n' +
        '        if (password.value.length < 6 || password.value.length > 12) {//非法，高亮显示文本框\n' +
        '            password.className = \'cls\';\n' +
        '            return;\n' +
        '        } else {//合法\n' +
        '            password.className = \'\';\n' +
        '        }\n' +
        '        //执行登录\n' +
        '        console.log(\'登录...\');\n' +
        '    }\n' +
        '</script>';

    $('.tapSection .text81 code').text(text81);

    let text82 = '<input type="button" id="btnSet" value="选中"/>\n' +
        '<select id="selectCity">\n' +
        '    <option value="1">北京</option>\n' +
        '    <option value="2">上海</option>\n' +
        '    <option value="3">深圳</option>\n' +
        '    <option value="4">广州</option>\n' +
        '    <option value="5">贵港</option>\n' +
        '</select>\n' +
        '\n' +
        '\n' +
        '\n' +
        '<script>\n' +
        '// 1、注册点击事件\n' +
        'var btnSet = document.getElementById(\'btnSet\');\n' +
        'btnSet.onclick=function () {\n' +
        '    // 2、获取所有的option元素\n' +
        '    var selectCity = document.getElementById(\'selectCity\');\n' +
        '    var options = selectCity.getElementsByTagName(\'option\');\n' +
        '    console.log(selectCity);\n' +
        '    console.log(options);\n' +
        '    // 3、生成option个数之内的随机数 [0, 5)\n' +
        '    // Math.random() [0, 1)\n' +
        '    // Math.random() * 5 [0, 5)\n' +
        '    // Math.random() * options.length  [0, options.length)\n' +
        '    var index = parseInt(Math.random() * options.length);\n' +
        '\n' +
        '    // 4、根据随机数（下标）选中option\n' +
        '    var option = options[index];\n' +
        '    option.selected = true;\n' +
        '}\n' +
        '</script>';

    $('.tapSection .text82 code').text(text82);

    let text83 = '<style>\n' +
        '    * {\n' +
        '        padding: 0;\n' +
        '        margin: 0;\n' +
        '    }\n' +
        '\n' +
        '    .wrap {\n' +
        '        width: 300px;\n' +
        '        margin: 100px auto 0;\n' +
        '    }\n' +
        '\n' +
        '    table {\n' +
        '        border-collapse: collapse;\n' +
        '        border-spacing: 0;\n' +
        '        border: 1px solid #c0c0c0;\n' +
        '        width: 300px;\n' +
        '    }\n' +
        '\n' +
        '    th,\n' +
        '    td {\n' +
        '        border: 1px solid #d0d0d0;\n' +
        '        color: #404060;\n' +
        '        padding: 10px;\n' +
        '    }\n' +
        '\n' +
        '    th {\n' +
        '        background-color: #09c;\n' +
        '        font: bold 16px "微软雅黑";\n' +
        '        color: #fff;\n' +
        '    }\n' +
        '\n' +
        '    td {\n' +
        '        font: 14px "微软雅黑";\n' +
        '    }\n' +
        '\n' +
        '    tbody tr {\n' +
        '        background-color: #f0f0f0;\n' +
        '    }\n' +
        '\n' +
        '    tbody tr:hover {\n' +
        '        cursor: pointer;\n' +
        '        background-color: #fafafa;\n' +
        '    }\n' +
        '</style>\n' +
        '\n' +
        '<div class="wrap">\n' +
        '    <table>\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>\n' +
        '                    <input type="checkbox" id="j_cbAll"/>\n' +
        '                </th>\n' +
        '                <th>商品</th>\n' +
        '                <th>价钱</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tbody id="j_tb">\n' +
        '            <tr>\n' +
        '                <td>\n' +
        '                    <input type="checkbox"/>\n' +
        '                </td>\n' +
        '                <td>小米Mix2s</td>\n' +
        '                <td>3000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>\n' +
        '                    <input type="checkbox"/>\n' +
        '                </td>\n' +
        '                <td>华为P30</td>\n' +
        '                <td>3800</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>\n' +
        '                    <input type="checkbox"/>\n' +
        '                </td>\n' +
        '                <td>iPad Air</td>\n' +
        '                <td>2000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>\n' +
        '                    <input type="checkbox"/>\n' +
        '                </td>\n' +
        '                <td>小米手环</td>\n' +
        '                <td>200</td>\n' +
        '            </tr>\n' +
        '\n' +
        '        </tbody>\n' +
        '    </table>\n' +
        '    <input type="button" value="  反 选  " id="btn">\n' +
        '</div>\n' +
        '\n' +
        '\n' +
        '\n' +
        '<script>\n' +
        'var j_tb = document.getElementById(\'j_tb\');\n' +
        'var inputs = j_tb.getElementsByTagName(\'input\');\n' +
        'var j_cbAll = document.getElementById(\'j_cbAll\');\n' +
        '// 1、全选\n' +
        '// 父checkbox,子checkbox\n' +
        '// 1.1 获取父checkbox，注册点击事件\n' +
        'var j_cbAll = document.getElementById(\'j_cbAll\');\n' +
        'j_cbAll.onclick = function () {\n' +
        '    // 1.2 获取所有的子checkbox，让所有子checkbox的状态跟父checkbox保持一致\n' +
        '\n' +
        '    //遍历，将所有子checkbox状态改为跟父checkbox状态一致\n' +
        '    for (var i = 0; i < inputs.length; i++) {\n' +
        '        var input = inputs[i];\n' +
        '        if (input.type === \'checkbox\') {\n' +
        '            //将子checkbox状态跟父checkbox状态保持一致\n' +
        '            input.checked = this.checked;\n' +
        '        }\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '//1.3 当有一个子checkbox没有被选中时，父checkbox应当不选中，当所有的子checkbox都选中时，应当选中父checkbox\n' +
        '// 给每一个子checkbox注册事件\n' +
        'for (var i = 0; i < inputs.length; i++) {\n' +
        '    var input = inputs[i];\n' +
        '    //如果不是复选框，则不绑定事件\n' +
        '    if (input.type !== \'checkbox\') {\n' +
        '        continue;\n' +
        '    }\n' +
        '    input.onclick = function () {\n' +
        '        checkAllCheckBox();\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '// 2、反选\n' +
        '// 1、给反选按钮注册事件\n' +
        'var btn = document.getElementById(\'btn\');\n' +
        'btn.onclick = function () {\n' +
        '    for (var i = 0; i < inputs.length; i++) {\n' +
        '        var input = inputs[i];\n' +
        '        // 2、判断是否是checkbox\n' +
        '        if (input.type !== \'checkbox\') {\n' +
        '            continue;\n' +
        '        }\n' +
        '        // 3、给所有的子checkbox反选\n' +
        '        input.checked = !input.checked;\n' +
        '    }\n' +
        '\n' +
        '    // 问题：当选中或取消所有子checkbox时，父checkbox没改变状态\n' +
        '    // 4、判断父的checkbox的状态，根据该状态同步父子checkbox状态\n' +
        '    checkAllCheckBox();\n' +
        '\n' +
        '}\n' +
        '\n' +
        '\n' +
        '//封装子checkbox和父checkbox的状态同步功能\n' +
        'function checkAllCheckBox() {\n' +
        '    //假设所有子checkbox都已经选中\n' +
        '    var allChecked = true;\n' +
        '    //判断所有子checkbox是否选中\n' +
        '    for (var j = 0; j < inputs.length; j++) {\n' +
        '        var input = inputs[j];\n' +
        '        //如果不是复选框，则不绑定事件\n' +
        '        if (input.type !== \'checkbox\') {\n' +
        '            continue;\n' +
        '        }\n' +
        '        if (!input.checked) {\n' +
        '            allChecked = false;//如果有没选中的\n' +
        '        }\n' +
        '    }\n' +
        '    //同步父checkbox和子checkbox的状态\n' +
        '    j_cbAll.checked = allChecked;\n' +
        '}\n' +
        '</script>';

    $('.tapSection .text83 code').text(text83);

    let text84 = '<script src="common.js"></script>\n' +
        '<input id="btn" type="button" value="关 灯"/>\n' +
        '\n' +
        '\n' +
        '<script>\n' +
        '//定义标记，录开关灯状态， true为关灯，false 为开灯\n' +
        'var isOpen = true;\n' +
        '//1、注册事件\n' +
        '$my(\'btn\').onclick = function () {\n' +
        '    // 2、控制开关灯\n' +
        '    if (isOpen) {\n' +
        '        //关掉灯（设置body背景为黑色）\n' +
        '        document.body.style.backgroundColor = \'black\';\n' +
        '        $my(\'btn\').value = \'开 灯\';\n' +
        '        isOpen = false;\n' +
        '    }else {\n' +
        '        //开启灯（设置body背景为白色）\n' +
        '        document.body.style.backgroundColor = \'white\';\n' +
        '        $my(\'btn\').value = \'关 灯\';\n' +
        '        isOpen = true;\n' +
        '    }\n' +
        '}\n' +
        '</script>';

    $('.tapSection .text84 code').text(text84);

    let text85 = '<style>\n' +
        '    .nodeSmall {\n' +
        '        width: 50px;\n' +
        '        height: 50px;\n' +
        '        background: url(images/bgs.png) no-repeat -159px -51px;\n' +
        '        position: fixed;\n' +
        '        right: 10px;\n' +
        '        top: 40%;\n' +
        '    }\n' +
        '    .erweima {\n' +
        '        position: absolute;\n' +
        '        top: 0;\n' +
        '        left: -150px;\n' +
        '    }\n' +
        '    .nodeSmall a {\n' +
        '        display: block;\n' +
        '        width: 50px;\n' +
        '        height: 50px;\n' +
        '    }\n' +
        '    .hide {\n' +
        '        display: none;\n' +
        '    }\n' +
        '    .show {\n' +
        '        display: block;\n' +
        '    }\n' +
        '</style>\n' +
        '<script src="common.js"></script>\n' +
        '<div class="nodeSmall" id="node_small">\n' +
        '    <div class="erweima hide" id="er">\n' +
        '        <img src="images/456.png" alt=""/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '\n' +
        '\n' +
        '<script>\n' +
        '// 1、获取所有文本框\n' +
        'var inputs = document.getElementsByTagName(\'input\');\n' +
        '// 2、给所有文本框注册获得焦点事件\n' +
        'for (var i = 0; i < inputs.length; i++) {\n' +
        '    var input = inputs[i];\n' +
        '    if (input.type !== \'text\') {\n' +
        '        continue;\n' +
        '    }\n' +
        '    //注册获得焦点事件\n' +
        '    input.onfocus=function () {\n' +
        '        //先清空所有高亮的文本框\n' +
        '        for (var j = 0; j < inputs.length; j++) {\n' +
        '            var input = inputs[j];\n' +
        '            if (input.type !== \'text\'){\n' +
        '                continue;\n' +
        '            }\n' +
        '            input.style.backgroundColor=\'\';\n' +
        '        }\n' +
        '        // 3、当事件发生时，设置当前事件源背景高亮\n' +
        '        this.style.backgroundColor=\'lightyellow\';\n' +
        '    }\n' +
        '}\n' +
        '</script>';

    $('.tapSection .text85 code').text(text85);


    let text86 = '<style>\n' +
        '    * {margin:0; padding: 0;}\n' +
        '    ul {\n' +
        '        list-style-type: none;\n' +
        '    }\n' +
        '    .box {\n' +
        '        width: 400px;\n' +
        '        height: 300px;\n' +
        '        border: 1px solid #ccc;\n' +
        '        margin: 100px auto;\n' +
        '        overflow: hidden;\n' +
        '    }\n' +
        '    .headDiv {\n' +
        '        height: 45px;\n' +
        '    }\n' +
        '    .headDiv span {\n' +
        '        display:inline-block;\n' +
        '        width: 90px;\n' +
        '        background-color: pink;\n' +
        '        line-height: 45px;\n' +
        '        text-align: center;\n' +
        '        cursor: pointer;\n' +
        '    }\n' +
        '    .headDiv span.current {\n' +
        '        background-color: purple;\n' +
        '    }\n' +
        '    .bodyDiv div {\n' +
        '        height: 255px;\n' +
        '        background-color: purple;\n' +
        '        display: none;\n' +
        '    }\n' +
        '    .bodyDiv div.current {\n' +
        '        display: block;\n' +
        '    }\n' +
        '</style>\n' +
        '\n' +
        '<div class="box">\n' +
        '    <div class="headDiv" id="headDiv">\n' +
        '        <span class="current">体育</span>\n' +
        '        <span>娱乐</span>\n' +
        '        <span>新闻</span>\n' +
        '        <span>综合</span>\n' +
        '    </div>\n' +
        '    <div class="bodyDiv" id="bodyDiv">\n' +
        '        <div class="current">我是体育模块</div>\n' +
        '        <div>我是娱乐模块</div>\n' +
        '        <div>我是新闻模块</div>\n' +
        '        <div>我是综合模块</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script src="common.js"></script>\n' +
        '\n' +
        '\n' +
        '\n' +
        '<script>\n' +
        '// 1、鼠标放到tab栏时，高亮显示，其他栏取消高亮\n' +
        '//获取元素\n' +
        'var headDiv = my$(\'headDiv\');\n' +
        'var spans = headDiv.getElementsByTagName(\'span\');\n' +
        'for (var i = 0; i < spans.length; i++) {\n' +
        '    var span = spans[i];\n' +
        '    //给所有的span标签设置一个标记属性\n' +
        '    span.setAttribute(\'index\', i);\n' +
        '    // 2、注册鼠标经过事件\n' +
        '    span.onmouseover = fn;\n' +
        '}\n' +
        '\n' +
        '//事件处理函数\n' +
        'function fn() {\n' +
        '    // （1）取消所有span的高亮显示\n' +
        '    for (var i = 0; i < spans.length; i++) {\n' +
        '        var span = spans[i];\n' +
        '        //清空样式\n' +
        '        span.className = \'\';\n' +
        '    }\n' +
        '    // （2）设置当前span高亮显示\n' +
        '    this.className = \'current\';\n' +
        '\n' +
        '    // 3、tab栏对应的div显示，其他div隐藏\n' +
        '    var bodyDiv = my$(\'bodyDiv\');\n' +
        '    var divs = bodyDiv.getElementsByTagName(\'div\');\n' +
        '    for (var i = 0; i < divs.length; i++) {\n' +
        '        var div = divs[i];\n' +
        '        div.className = \'\';\n' +
        '    }\n' +
        '    // 使用span的自定义属性index，定位到对应的div\n' +
        '    var index = this.getAttribute(\'index\');\n' +
        '    divs[index].className = \'current\';\n' +
        '}\n' +
        '</script>';

    $('.tapSection .text86 code').text(text86);

    let text87 = '<html>\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>05_轮播图-动态生成序号</title>\n' +
        '    <style type="text/css">\n' +
        '        * {\n' +
        '            padding: 0;\n' +
        '            margin: 0;\n' +
        '            list-style: none;\n' +
        '            border: 0;\n' +
        '        }\n' +
        '\n' +
        '        .all {\n' +
        '            width: 500px;\n' +
        '            height: 200px;\n' +
        '            padding: 7px;\n' +
        '            border: 1px solid #ccc;\n' +
        '            margin: 100px auto;\n' +
        '            position: relative;\n' +
        '        }\n' +
        '\n' +
        '        .screen {\n' +
        '            width: 500px;\n' +
        '            height: 200px;\n' +
        '            overflow: hidden;\n' +
        '            position: relative;\n' +
        '        }\n' +
        '\n' +
        '        .screen li {\n' +
        '            width: 500px;\n' +
        '            height: 200px;\n' +
        '            overflow: hidden;\n' +
        '            float: left;\n' +
        '        }\n' +
        '\n' +
        '        .screen ul {\n' +
        '            position: absolute;\n' +
        '            left: 0;\n' +
        '            top: 0px;\n' +
        '            width: 3000px;\n' +
        '        }\n' +
        '\n' +
        '        .all ol {\n' +
        '            position: absolute;\n' +
        '            right: 10px;\n' +
        '            bottom: 10px;\n' +
        '            line-height: 20px;\n' +
        '            text-align: center;\n' +
        '        }\n' +
        '\n' +
        '        .all ol li {\n' +
        '            float: left;\n' +
        '            width: 20px;\n' +
        '            height: 20px;\n' +
        '            background: #fff;\n' +
        '            border: 1px solid #ccc;\n' +
        '            margin-left: 10px;\n' +
        '            cursor: pointer;\n' +
        '        }\n' +
        '\n' +
        '        .all ol li.current {\n' +
        '            background: yellow;\n' +
        '        }\n' +
        '\n' +
        '        #arr {\n' +
        '            display: none;\n' +
        '            z-index: 1000;\n' +
        '\n' +
        '        }\n' +
        '\n' +
        '        #arr span {\n' +
        '            width: 40px;\n' +
        '            height: 40px;\n' +
        '            position: absolute;\n' +
        '            left: 5px;\n' +
        '            top: 50%;\n' +
        '            margin-top: -20px;\n' +
        '            background: #000;\n' +
        '            cursor: pointer;\n' +
        '            line-height: 40px;\n' +
        '            text-align: center;\n' +
        '            font-weight: bold;\n' +
        '            font-family: \'黑体\';\n' +
        '            font-size: 30px;\n' +
        '            color: #fff;\n' +
        '            opacity: 0.3;\n' +
        '            border: 1px solid #fff;\n' +
        '        }\n' +
        '\n' +
        '        #arr #right {\n' +
        '            right: 5px;\n' +
        '            left: auto;\n' +
        '        }\n' +
        '    </style>\n' +
        '    <script src="common.js"></script>\n' +
        '    <script src="animate.js"></script>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div class="all" id=\'box\'>\n' +
        '    <div class="screen">\n' +
        '        <ul>\n' +
        '            <li><img src="images/wf1.jpg" width="500" height="200"/></li>\n' +
        '            <li><img src="images/wf2.jpg" width="500" height="200"/></li>\n' +
        '            <li><img src="images/wf3.jpg" width="500" height="200"/></li>\n' +
        '            <li><img src="images/wf4.jpg" width="500" height="200"/></li>\n' +
        '            <li><img src="images/wf5.jpg" width="500" height="200"/></li>\n' +
        '        </ul>\n' +
        '        <ol>\n' +
        '        </ol>\n' +
        '    </div>\n' +
        '    <div id="arr"><span id="left">&lt;</span><span id="right">&gt;</span></div>\n' +
        '</div>\n' +
        '\n' +
        '<script>\n' +
        '    \n' +
        '    //获取所需元素\n' +
        '    var box = my$(\'box\');\n' +
        '    //列表\n' +
        '    var screen = box.children[0];\n' +
        '    var ul = screen.children[0];\n' +
        '    var ol = screen.children[1];\n' +
        '\n' +
        '    var ulLen = ul.children.length;\n' +
        '\n' +
        '    //箭头\n' +
        '    var arr = my$(\'arr\');\n' +
        '    var arrLeft = my$(\'left\');\n' +
        '    var arrRight = my$(\'right\');\n' +
        '\n' +
        '\n' +
        '    // 1、显示图片的序号\n' +
        '    for (var i = 0; i < ul.children.length; i++) {\n' +
        '        var li = document.createElement(\'li\');\n' +
        '        //在ol中追加li\n' +
        '        ol.appendChild(li);\n' +
        '        setInnerText(li, i + 1);\n' +
        '\n' +
        '        //给每一个li注册点击事件\n' +
        '        li.onclick = liClick;\n' +
        '\n' +
        '        //设置ol中li的下标\n' +
        '        li.setAttribute(\'index\', i);\n' +
        '\n' +
        '        /*if (i === 0) {\n' +
        '            li.className = \'current\';\n' +
        '        }*/\n' +
        '    }\n' +
        '    //设置序号1为默认高亮\n' +
        '    ol.children[0].className = \'current\';\n' +
        '\n' +
        '    // 2、点击序号时，图片以动画方式切换到相应位置\n' +
        '    // ul的位置 = ol中li的下标 * 图片的宽度\n' +
        '    function liClick() {\n' +
        '\n' +
        '        // 清除所有序号的高亮\n' +
        '        for (var i = 0; i < ol.children.length; i++) {\n' +
        '            var li = ol.children[i];\n' +
        '            li.className = \'\';\n' +
        '        }\n' +
        '        // 设置当前点击的序号为高亮\n' +
        '        this.className = \'current\';\n' +
        '\n' +
        '        // ol中li的下标\n' +
        '        var liClickIndex = this.getAttribute(\'index\');\n' +
        '\n' +
        '        //同步序号的索引\n' +
        '        index = liClickIndex;\n' +
        '        //目标位置\n' +
        '        var target = -index * screen.offsetWidth;\n' +
        '        animate(ul, target, 10, 2);\n' +
        '    }\n' +
        '\n' +
        '\n' +
        '    // 3、鼠标移入/移出图片时，显示/隐藏箭头\n' +
        '    // onmouseover 和 onmouseout 会触发事件冒泡\n' +
        '    box.onmouseover = function () {\n' +
        '        //显示箭头\n' +
        '        arr.style.display = \'block\';\n' +
        '        //清除定时器\n' +
        '        clearInterval(timeId);\n' +
        '        timeId = null;\n' +
        '\n' +
        '    };\n' +
        '    box.onmouseout = function () {\n' +
        '        //隐藏箭头\n' +
        '        arr.style.display = \'none\';\n' +
        '        //重新开启定时器\n' +
        '        timeId = setInterval(function () {\n' +
        '            arrRight.click();\n' +
        '        }, 1000);\n' +
        '    };\n' +
        '\n' +
        '    // 4、点击箭头，切换图片\n' +
        '    var index = 0;\n' +
        '    arrRight.onclick = function () {\n' +
        '        // console.log(ulLen);\n' +
        '        // console.log(index);\n' +
        '\n' +
        '        //判断当前li的index是否是克隆的那个li的index，如果是，设置ul的位置为 0px ，并且设置index为0\n' +
        '        if (index === ulLen) {\n' +
        '            //当前li是克隆的li，切换ul\n' +
        '            ul.style.left = \'0px\';\n' +
        '            index = 0;\n' +
        '        }\n' +
        '\n' +
        '        // 以下报错：当前对象中找不到指定的方法/属性\n' +
        '        // Cannot read property \'click\' of undefined\n' +
        '\n' +
        '        //假设从第一张图开始\n' +
        '        index++;\n' +
        '        if (index < ulLen) {\n' +
        '            //切换图片\n' +
        '            // animate(ul, -index * screen.offsetWidth, 10, 5);\n' +
        '            ol.children[index].click();\n' +
        '        }else {\n' +
        '            //清空所有的ol中的li的高亮\n' +
        '            for (var i = 0; i < ol.children.length; i++) {\n' +
        '                var li = ol.children[i];\n' +
        '                li.className = \'\';\n' +
        '            }\n' +
        '            //设置序号为1的li为高亮\n' +
        '            ol.children[0].className = \'current\';\n' +
        '\n' +
        '            animate(ul, -index * screen.offsetWidth, 10, 2);\n' +
        '        }\n' +
        '    }\n' +
        '\n' +
        '    arrLeft.onclick = function () {\n' +
        '        // 如果当前是第一个li，瞬间将ul的位置设置为显示到克隆的那个li，然后切换到第五个li\n' +
        '        if(index==0){\n' +
        '            // 将ul的位置设置为显示克隆的那个li\n' +
        '            index = ulLen;\n' +
        '            ul.style.left = -index * screen.offsetWidth + \'px\';\n' +
        '        }\n' +
        '        //切换图片\n' +
        '        index--;\n' +
        '        ol.children[index].click();\n' +
        '\n' +
        '        /*console.log(index);\n' +
        '        if (index > 0) {\n' +
        '            index--;\n' +
        '            // animate(ul, -index * screen.offsetWidth, 10, 5);\n' +
        '            ol.children[index].click();\n' +
        '        }*/\n' +
        '    }\n' +
        '\n' +
        '    //无缝滚动使用到了克隆技术\n' +
        '    // cloneNode(boolean)：\n' +
        '    // 参数为true时，克隆元素和内容以及行内事件，默认为false 只克隆元素\n' +
        '    var liNode = ul.children[0].cloneNode(true);\n' +
        '    ul.appendChild(liNode);\n' +
        '    // console.log(ul);\n' +
        '    // console.log(ul.children.length);\n' +
        '\n' +
        '\n' +
        '    // 5、自动切换图片\n' +
        '    var timeId = setInterval(function () {\n' +
        '        arrRight.click();\n' +
        '    }, 1000);\n' +
        '\n' +
        '\n' +
        '\n' +
        '</script>\n' +
        '</body>\n' +
        '</html>';

    $('.tapSection .text87 code').text(text87);

    let text88 = '//获取新闻标题样式\n' +
        'var newsT = document.getElementById(\'newsT\');\n' +
        '//获取红色线条div\n' +
        'var flag = document.getElementById(\'flag\');\n' +
        '//获取新闻详细内容容器\n' +
        'var newsContent = document.getElementById(\'newsContent\');\n' +
        '\n' +
        '// 1、获取a标签并注册鼠标经过事件\n' +
        'for (var i = 0; i < 2; i++) {\n' +
        '    var link = newsT.children[i];\n' +
        '\n' +
        '    //设置a标签的自定义属性，用来记录索引\n' +
        '    link.setAttribute(\'index\', i);\n' +
        '    //注册鼠标经过事件\n' +
        '    link.onmouseover = linkMouseOver;\n' +
        '}\n' +
        '\n' +
        '// 2、当鼠标经过a标签时，显示底部的红色线条，并让红色线条执行动画，并显示对应详细内容\n' +
        'function linkMouseOver() {\n' +
        '    //显示底部的红色线条，并让红色线条执行动画\n' +
        '    var offsetLeft = this.offsetLeft;\n' +
        '    animate(flag, offsetLeft - 3, 30);\n' +
        '\n' +
        '    //并显示对应详细内容\n' +
        '\n' +
        '    //隐藏所有的详细内容\n' +
        '    for (var i = 0, len = newsContent.children.length; i < len; i++) {\n' +
        '        //判断当前元素是否是隐藏状态，如果不是，则设置为隐藏状态\n' +
        '        var div = newsContent.children[i];\n' +
        '        if (div.className.indexOf(\'hide\') === -1) {\n' +
        '            div.className = \'news-b hide\';\n' +
        '        }\n' +
        '    }\n' +
        '\n' +
        '    //获取a标签的自定义属性\n' +
        '    var index = parseInt(this.getAttribute(\'index\'));\n' +
        '    // 显示对应详细内容\n' +
        '    newsContent.children[index].className = \'news-b show\';\n' +
        '\n' +
        '}';

    $('.tapSection .text88 code').text(text88);

    let text89 = '$(window).mousewheel(function (e) {\n' +
        '    clearTimeout(timeId);\n' +
        '    timeId = setTimeout(function () {\n' +
        '        index = index - e.deltaY;\n' +
        '    }, 300)\n' +
        '});';

    $('.text89 code').text(text89);

    var text90 = ` 
 //html : 
 <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="images/home/banners/banner1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/home/banners/banner2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/home/banners/banner3.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination">

        </div>
    </div>
===================================================
 <div class="advertisement">
      <ul>
           <li class="text omg"><span class="red">最新 </span> iPhone XR 疯狂跳水！ 已成真香机，吹牛逼</li>
           <li class="text omg"><span class="red">HOT </span> 不用烤箱，在家就能做的巧克力榛子蛋糕！</li>
      </ul>
</div>
        
<script>
 function Swiper(opt) {
    this.direction = opt.direction || 'X';
    this.pagestag = opt.pagestag;
    this.time = 2000;
    this.timer = null;
    this.num = 1 ;
    this.index = 0;
    this.container = document.querySelector(opt.el);
    this.wrapper = this.container.children[0];
    if(this.pagestag){
        this.spans = this.container.children[1].children;
    }
    this.startX = 0;
    this.startTime = 0;
    this.oldLen = this.wrapper.children.length;
    this.target = true;
}
Swiper.prototype = {
    init : function(){
        if(this.pagestag){
            this.initspages();
            this.finger();
        }
        this.initimg();
        this.autoplay();
        this.end();

    },
    initimg : function(){
      var first = this.wrapper.children[0].cloneNode(true);
      var last = this.wrapper.children[this.wrapper.children.length-1].cloneNode(true);
      this.wrapper.appendChild(first);
      this.wrapper.insertBefore(last,this.wrapper.children[0]);
    },
    initspages : function(){
        var str = '';
        for(var i = 0; i <this.oldLen; i++) {
            if(i==0){
                str+='<span class="active"></span>'
            }else{
                str+='<span></span>'
            }
        }
        this.container.children[1].innerHTML=str;
    },
    indexPlay : function (){
        this.index = (this.index+this.spans.length)%this.spans.length;
        for (var i = 0; i < this.spans.length; i++) {
            this.spans[i].className='';
        }
        this.spans[this.index].className='active';
    },
    numPlay : function (){
        this.target = false;
        this.wrapper.style.transform='translate' + this.direction + '(' + -this.num * 100+ '%)';
        this.wrapper.style.transition='all 0.2s';
    },
    autoplay : function () {
        clearInterval(this.timer);
        var that =this;
        this.timer = setInterval(function () {
            that.num++;
            if(that.pagestag){
            that.index++;
            that.indexPlay();}
            that.numPlay();
        },this.time);
    },
    end : function () {
        var that = this;
        this.wrapper.addEventListener('transitionend',function () {
            that.target = true;
            if(that.num>=that.wrapper.children.length-1){
                that.num=1;
            }
            if(that.num<=0){
                that.num=that.oldLen;
            }
            that.wrapper.style.transform='translate' + that.direction + '(' + -that.num * 100 + '%)';
            that.wrapper.style.transition='';
        });
    },
    finger : function () {
        var that = this;
        that.wrapper.addEventListener('touchstart',function (e) {
            clearInterval(that.timer);
            that.startX = e.changedTouches[0].pageX;
            that.startTime = e.timeStamp;
        });
        that.wrapper.addEventListener('touchmove',function (e) {

        });
        that.wrapper.addEventListener('touchend',function (e) {
            that.autoplay();
            var endX = e.changedTouches[0].pageX;
            var endTime  = e.timeStamp;
            var delX = endX - that.startX;
            var delTime = endTime - that.startTime;
            if(that.target){
            if(Math.abs(delX)>100 || (Math.abs(delX)>10 && delTime<300)){
                if(delX>0){
                    that.num--;
                    that.index--;
                    that.indexPlay();
                    that.numPlay()
                }else{
                    that.num++;
                    that.index++;
                    that.indexPlay();
                    that.numPlay()
                }
            }
          }
        })
    },
};      
//========================================================================
 var swiper = new Swiper({el:'.swiper-container',pagestag:true});
   swiper.init();

   var swiper2 = new Swiper({el:'.advertisement',pagestag:false,direction:'Y'});
   swiper2.init();
     
</script>     
`;
    $('.text90 code').text(text90);

    let text91 = `document.addEventListener('DOMContentLoaded', function () {
  /*
  * 打开分类页面，自动加载数据
  * */
  console.log(ejs)

  var cateHtml = '<% cateList.forEach(function(item){ %>' +
    '<li><a to="<%= item.to %>" href="#"><%= item.name  %></a></li>' +
    '<% }) %>';
  var cateDetailHtml = '<% catedetail.forEach(function(item){ %> \\
    <div class="category-list">\\
                <h4>\\
                    <%= item.title  %>\\
                </h4>\\
                <ul>\\
                   <% item.items.forEach(function(n){ %>\\
                     <li>\\
                        <a href="#">\\
                            <div>\\
                                <img data-src="<%= n.pic %>" alt="">\\
                            </div>\\
                            <p><%= n.name %></p>\\
                        </a>\\
                    </li>\\
                   <% }) %>\\
                </ul>\\
            </div>\\
    <% }) %>';

  axios.get('../data/tuijian.json')
    .then(function (data) {
      var data = data.data.data.result[0];
      var cateList = data.industryList;
      var catedetail = data.moduleList
      if (cateList.length) {
        var rendercateHtml = ejs.render(cateHtml, {cateList: cateList});
        document.querySelector('.aside ul').innerHTML = rendercateHtml;
      }
      document.querySelectorAll('.aside ul li')[0].className = 'active'


      if (catedetail.length) {
        var rendercatedetailHtml = ejs.render(cateDetailHtml, {catedetail: catedetail})
        document.querySelector('.category-detail').innerHTML = rendercatedetailHtml;
        loadimg()
      }
    });


  function loadimg() {
    var height = document.querySelector('.main').offsetHeight;
    document.querySelector('.category-detail').addEventListener('scroll', function () {
      change.call(this, height)
    }, false)
    change.call(document.querySelector('.category-detail'), height);
  }
  function change(height) {
    var list = document.querySelectorAll('.main .category-detail .category-list li');
    var top = this.scrollTop + height;
    list.forEach(function (item) {
      if (item.offsetTop < top) {
        var img = item.getElementsByTagName('img')[0]
        var src = img.getAttribute('data-src')
        if (src) {
          img.src = src;
        }
      }
    })
  }
})`;

$('.text91 code').text(text91);

})();
/*
$('.tapMain').each(function (index,ele) {
    var num=0;
   $(ele).children().each(function (index,ele) {
       if($(ele).height()>num){
           num=$(ele).height();
       }
   });
    $(this).css({
        height:num+20
    })
});*/

$(function () {
    $('.navLeft').css({
        height: $(window).height()*0.85,
    });
});

