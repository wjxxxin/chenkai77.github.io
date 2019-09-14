const path = require('path');
const fs = require('fs');

var originalStr;
var text = '';
var idArr = ["\n# ","\n## ","\n###",'```','\n- '];

var str1;
var Label1;
var enterIndex;
var lang;

var signI;

function judgeStr(str) {
    var copyStr = str.split('\n');
    copyStr = copyStr.join('');
    return copyStr.trim();
}

function zy(str) {
    var s = "";
    if (str.length === 0) {
        return "";
    }
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    return s;
}

function getStr(sign) {
    enterIndex = originalStr.indexOf("\n",sign+3);
    str1=originalStr.slice(sign+3,enterIndex);
}

function getP(index1,index2){
    var str;
    str=originalStr.slice(index1,index2);
    var strArr = str.split('\n');
    strArr.forEach((ele) => {
        if(judgeStr(ele)!==''){
            text+=`<p>${ele}</p>`
        }
    });
}

var changeObj = {
    "\n# ":function (sign,sign2,sign3) {
        getStr(sign);
        Label1 = `<h3>${str1}</h3>`;
        text += Label1;
        getP(enterIndex,sign2);
    },
    '\n※ ':function (sign,sign2,sign3) {
        getStr(sign);
        Label1 = `<h4>${str1}</h4>`;
        text += Label1;
        getP(enterIndex,sign2);
    },
    "\n★ " : function (sign,sign2,sign3) {
        getStr(sign);
        Label1 = `<h5 class="subtitle">${str1}</h5>`;
        text += Label1;
        getP(enterIndex,sign2);
    },
    '\n- ' : function (sign,sign2,sign3) {
        getStr(sign);
        Label1 = `<p class="itemLi">${str1}</p>`;
        text += Label1;
        getP(enterIndex,sign2);
    },
    '```' : function (sign,sign2,sign3) {
        enterIndex = originalStr.indexOf("\n",sign);
        lang = originalStr.slice(sign+3,enterIndex);
        str1=zy(originalStr.slice(sign+3+lang.length,sign2));
        Label1 = `<pre><code class="${lang}">${str1}</code></pre>`;
        text += Label1;
        signI++;
        getP(sign2+3,sign3);
    }
};

async function compile(){
    var signArr = await new Promise((resolve,reject)=>{
        var signArr = [];
        var originalIndex;
        console.log(__dirname);
        fs.readFile(path.join(__dirname, '../md/函数柯里化.md'), 'utf8', (err, data) => {
            originalStr = data;
            for (var i = 0; i < idArr.length; i++) {
                do{
                    originalIndex=originalStr.indexOf(idArr[i],originalIndex+1);
                    if(originalIndex!==-1){
                        signArr.push(originalIndex);
                        if(idArr[i]==="\n## "){
                            originalStr = originalStr.replace(idArr[i],'\n※  ');
                        }
                        if(idArr[i]==='\n###'){
                            originalStr = originalStr.replace(idArr[i],'\n★  ');
                        }
                    }
                }while (originalIndex!==-1);
            }
            signArr.sort(function (a,b) {
                return a-b
            });
            resolve(signArr)
        });
    });
    var outText = await new Promise((resolve,reject)=>{
        for (signI = 0; signI < signArr.length; signI++) {
            changeObj[originalStr.substr(signArr[signI],3)](signArr[signI],(signArr[signI+1]||signArr.length-1),signArr[signI+2])
        }
        var html = `<div class="article">${text}
</div>
<div id="replace"></div>`;
        resolve(html);
    });
    var write = await new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname, '../article.html'),'utf8',  (err, data) => {
            var ss = data.replace('<div id="replace"></div>',outText);
            fs.writeFile(path.join(__dirname, '../article.html'), ss, 'utf8', (err) => {
                if(!err){
                    resolve('文件写入成功');
                }
            });
        });
    });
    console.log(write);
}
compile();


