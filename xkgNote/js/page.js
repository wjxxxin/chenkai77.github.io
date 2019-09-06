function Note() {
    this.navRightcolor = ['#df5225', '#4597cf', '#b2394c', '#65934a', '#14446a','#f07d17'];
    /*this.animatetimeId = null;
    this.sildertimer = null;*/
    this.af=null;
}
Note.prototype.init=function(){
    var that = this;
    this.rightstyle();
    this.leftstyle();
    this.asideShow();
    this.xiangying();
    this.search();
    this.frameTitle();
    window.onload = function () {
        that.tap();
        that.titleClick();
        that.bntTap();
        that.btns();
    };
};
Note.prototype.rightstyle = function(){
    var url = window.location.href;
    var arr = ['<li><a href="html.html">HTML</a></li>','<li><a href="css.html">CSS</a></li>','<li><a href="js.html">JS</a></li>','<li><a href="vue.html">框架、工具</a></li>','<li><a href="node.js.html">前后端</a></li>','<li><a href="mobile.html">移动端</a></li>'];
    if(url.indexOf('/js.html')!==-1){
        arr[2] = '<li><a href="es6.html">ES6</a></li>';
        console.log(arr);
    }
    var str = arr.join('');
    document.querySelector('.navRight').innerHTML = str;
    var that = this;
    var rightlis = document.querySelectorAll('.navRight li');
    rightlis.forEach(function (ele, index) {
        ele.style.backgroundColor = that.navRightcolor[index];
    })
};
Note.prototype.leftstyle=function(){
    var that = this;
    var h3s = document.querySelectorAll('.item h3');
    var str = '';
    var num;
    var index = 0;
    if (h3s.length <= 16) {
        var ul1 = document.createElement("ul");
        document.querySelector('.navLeft').appendChild(ul1);
        h3s.forEach(function (ele) {
            str += '<li>' + ele.innerText + '</li>';
        });
        document.querySelector('.navLeft').children[0].innerHTML = str;
    } else if (h3s.length > 16) {
        document.querySelector('.navLeft').style.height= window.screen.availHeight*0.75+'px';
        num = Math.ceil(h3s.length / 14);
        h3s.forEach(function (ele) {
            str += '<li>' + ele.innerText + '</li>*';
        });
        var arr = str.split('*');
        for (var i = 0; i < num; i++) {
            var ul2 = document.createElement("ul");
            document.querySelector('.navLeft').appendChild(ul2);
            document.querySelector('.navLeft').children[i].innerHTML = arr.slice(i * 14, (i + 1) * 14).join('');
            if (i > 0) {
                document.querySelector('.navLeft').children[i].className = 'activation'
            }
        }
        var newa = document.createElement("a");
        newa.innerText = '换页';
        document.querySelector('.navLeft').appendChild(newa);
        newa.addEventListener('click', function () {
            var uls = document.querySelector('.navLeft').querySelectorAll('ul');
            index++;
            index=(index+num)%num;
            Array.from(uls).forEach(function (ele) {
               /* if (ele.className.indexOf('activation') !== -1) {
                    ele.className = ''
                } else {
                    ele.className = 'activation'
                }*/
                ele.className = 'activation'
            });
            uls[index].className=''
        })
    }
    var leftlis = document.querySelectorAll('.navLeft li');
    leftlis.forEach(function (ele, index) {
        //ele.innerText = h3s[index].innerText;
        var num = index;
        ele.addEventListener('click', function () {
            var h3top = h3s[num];
            that.windowScroll(h3top)
        })
    });
};
Note.prototype.asideShow = function(){
    var left = document.querySelector('.navLeft');
    var right = document.querySelector('.navRight');
    var htmlw = document.body.offsetWidth;
    // if(htmlw>640){
        window.onmousemove = function (e) {
            if (e.pageX < 120) {
                left.style.left = 0;
            } else {
                left.style.left = '-120px';
            }
            if (e.pageX > (htmlw - 50)) {
                right.style.right = '-15px';
            } else {
                right.style.right = '-65px';
            }
        };

};
Note.prototype.windowScroll = function(target){
    //var that = this;
    //clearInterval(that.animatetimeId);
    var oldcur = document.documentElement.scrollTop || document.body.scrollTop;
    var oldtop = target.offsetTop;
    var oheight = document.body.offsetHeight;
    var aheight = window.screen.availHeight;
    var rAF = window.requestAnimationFrame;
    var af;
    
    if (oldtop < oheight - aheight) {
        function Fn() {
            var cur = document.documentElement.scrollTop || document.body.scrollTop;
            var top = target.offsetTop;
            var step = Math.abs(oldcur - oldtop) / 30;
            if (step < 1) {
                step = 1
            }
            if (cur > top) {
                step = -Math.abs(step);
            }
            if (Math.abs(cur - top) <= Math.abs(step)) {
                cancelAnimationFrame(af);
                var bw = document.documentElement.clientWidth || document.body.clientWidth;
                if(bw<640){
                    document.body.scrollTop = top-40;
                    document.documentElement.scrollTop = top-40;
                }else{
                    document.body.scrollTop = top;
                    document.documentElement.scrollTop = top;
                }
                return;
            }
            cur += step;
            document.documentElement.scrollTop = cur;
            document.body.scrollTop = cur;
            af=rAF(Fn)
        }
        af=rAF(Fn)
        /*this.animatetimeId = setInterval(function () {
            var cur = document.documentElement.scrollTop || document.body.scrollTop;
            var top = target.offsetTop;
            var step = Math.abs(oldcur - oldtop) / 30;
            if (step < 1) {
                step = 1
            }
            if (cur > top) {
                step = -Math.abs(step);
            }
            if (Math.abs(cur - top) <= Math.abs(step)) {
                clearInterval(that.animatetimeId);
                var bw = document.documentElement.clientWidth || document.body.clientWidth;
                if(bw<640){
                    document.body.scrollTop = top-40;
                    document.documentElement.scrollTop = top-40;
                }else{
                    document.body.scrollTop = top;
                    document.documentElement.scrollTop = top;
                }
                return;
            }
            cur += step;
            document.documentElement.scrollTop = cur;
            document.body.scrollTop = cur;
        }, 10);*/
    } else {
        document.documentElement.scrollTop = oldtop;
        document.body.scrollTop = oldtop;
    }
};
Note.prototype.titleClick = function(){
    var h3s = document.querySelectorAll('h3');
    Array.from(h3s).forEach(function (ele) {
        var eleNext = ele.nextElementSibling;
        ele.onclick = function () {
            if (eleNext.offsetHeight !== 0) {
                eleNext.style.cssText = ';height:0;display:none;';
            } else if (eleNext.offsetHeight === 0) {
                eleNext.style.cssText = ';height:auto;display:block;';
            }
        }
    })
};
Note.prototype.xiangying = function(){
    document.querySelector('.navLeft').classList.add('phone-hide');
    document.querySelector('.search').classList.add('phone-hide');
    var navRight = document.querySelector('.navRight');
    var alltitle = document.querySelector('.titleNav .alltitle');
    alltitle.addEventListener('touchend', function () {
        window.onmousemove=null;
        navRight.style.right = '0.37rem';
        var h3s = document.querySelectorAll('h3');
        Array.from(h3s).forEach(function (ele) {
            var eleNext = ele.nextElementSibling;
            eleNext.style.height = 0;
            eleNext.style.display = 'none';
        })
    });
    document.body.ontouchend=function (e) {
        if(e.target!==alltitle){
            navRight.style.right = '-2rem';
        }
    };
    var that = this;
    var ssArr = [];
    var ssIndex = 0;
    var newssArr = [];
    var sss = document.querySelector('.titleNav .ss');
    var ssinp = document.querySelector('.titleNav input');
    var ok = document.querySelector('.ok');
    var sd = document.querySelector('.sd');
    sss.onclick = function () {
        ssArr.forEach(function (ele) {
            ele.style.backgroundColor = '';
        });
        ssArr = [];
        newssArr = [];
        ssIndex = 0;
        var val = ssinp.value;
        Array.from(document.querySelectorAll('article h3,article h4,article li,p')).forEach(function (ele) {
            if (ele.innerText.indexOf(val) !== -1) {
                ele.style.backgroundColor = 'rgba(252,157,154,0.7)';
                ssArr.push(ele);
                if (ele.offsetTop >= 40) {
                    newssArr.push(ele)
                }
            }
        });
        if(newssArr[0]){
            that.windowScroll(newssArr[0]);
        }
        ssinp.value = ''
    };
    ok.onclick = function () {
        ssArr.forEach(function (ele) {
            ele.style.backgroundColor = '';
        });
        ssArr = [];
        newssArr = [];
        ssIndex = 0;
        ssinp.value = ''
    };
    sd.onclick = function () {
        ssIndex++;
        ssIndex = ssIndex > newssArr.length - 1 ? newssArr.length - 1 : ssIndex;
        that.windowScroll(newssArr[ssIndex]);
    };
};
Note.prototype.slideup = function(ele, height){
    //clearInterval(this.sildertimer);
    cancelAnimationFrame(this.af);
    ele.style.cssText = ';height:'+height+';overflow:hidden;';
    var that = this;
    var step = height / 20;
    var rAF = window.requestAnimationFrame;
    //var af;
    function Fn() {
        height = height - step;
        ele.style.height = height + 'px';
        if (height <= 0) {
            ele.style.cssText = ';display:none;height:0;overflow:visible;';
            cancelAnimationFrame(that.af);
        }
        that.af=rAF(Fn)
    }
    that.af=rAF(Fn);
    /*this.sildertimer = setInterval(function () {
        height = height - step;
        ele.style.height = height + 'px';
        if (height <= 0) {
            clearInterval(that.sildertimer);
            ele.style.cssText = ';display:none;height:0;overflow:visible;';
        }
    }, 10)*/
};
Note.prototype.slidedown = function(ele, height){
    //clearInterval(this.sildertimer);
    cancelAnimationFrame(this.af);
    ele.style.height = 0;
    var zero = 0;
    var that = this;
    var step = height / 20;
    var bw = document.documentElement.clientWidth || document.body.clientWidth;
    if ((ele.className.indexOf('code') !== -1 &&bw>700)|| ele.className.indexOf('tapNav') !== -1) {
        ele.style.display = 'flex';
    } else {
        ele.style.display = 'block';
    }
    ele.style.overflow = 'hidden';
    var rAF = window.requestAnimationFrame;
    //var af;
    function Fn() {
        zero = zero + step;
        ele.style.height = zero + 'px';
        if (zero >= height) {
            if(ele.className.indexOf('tap')!==-1){
                ele.style.height = height + 'px'
            }else {
                ele.style.height = 'auto';
            }
            ele.style.overflow = 'visible';
            cancelAnimationFrame(that.af);
        }
        that.af=rAF(Fn)
    }
    that.af=rAF(Fn);
    /*this.sildertimer = setInterval(function () {
        zero = zero + step;
        ele.style.height = zero + 'px';
        if (zero >= height) {
            clearInterval(that.sildertimer);
            if(ele.className.indexOf('tap')!==-1){
                ele.style.height = height + 'px'
            }else {
                ele.style.height = 'auto';
            }
            ele.style.overflow = 'visible';
        }
    }, 10)*/
};
Note.prototype.btns = function(){
    var that = this;
    var btnss = document.querySelectorAll('.btns');
    Array.from(btnss).forEach(function (ele) {
        var eleNext = ele.nextElementSibling;
        var hh = eleNext.offsetHeight+20;
        eleNext.style.display = 'none';
        ele.onclick = function () {
            if (eleNext.offsetHeight !== 0) {
                that.slideup(eleNext, hh)
            } else if (eleNext.offsetHeight === 0) {
                that.slidedown(eleNext, hh)
            }
        }
    })
};
Note.prototype.bntTap = function(){
    var that = this;
    var bntTaps = document.querySelectorAll('.bntTap');
    Array.from(bntTaps).forEach(function (ele) {
        var target = 0;
        var eleNext = ele.nextElementSibling;
        var eleNn = eleNext.nextElementSibling;
        //var hh = eleNext.offsetHeight;
        var hh2 = eleNn.offsetHeight;
        eleNext.style.display = 'none';
        eleNn.style.display = 'none';
        ele.onclick = function () {
            if (target) {
                eleNext.style.display='none';
                //that.slideup(eleNext, hh);
             /*   var time1 = setInterval(function () {
                    if (eleNext.offsetHeight <= 0) {
                        clearInterval(time1);
                        time1 = null;
                        that.slideup(eleNn, hh2);
                    }
                }, 20);*/
                that.slideup(eleNn, hh2);
                target = !target;
            }else if (!target) {
                //eleNext.style.display='none';
                /*that.slidedown(eleNext, hh);
                var time2 = setInterval(function () {
                    if (eleNext.offsetHeight >= hh) {
                        clearInterval(time2);
                        time2 = null;
                        that.slidedown(eleNn, hh2);
                    }
                }, 20);*/
                var bw = document.documentElement.clientWidth || document.body.clientWidth;
                if ((eleNext.className.indexOf('code') !== -1 &&bw>700)|| eleNext.className.indexOf('tapNav') !== -1) {
                    eleNext.style.display = 'flex';
                } else {
                    eleNext.style.display = 'block';
                }
                that.slidedown(eleNn, hh2);
                target = !target;
            }
        }
    })
};
Note.prototype.tap = function(){
    var that = this;
    var tapMainli = document.querySelectorAll('.tapMain .tapMain');
    Array.from(tapMainli).forEach(function (ele) {
        var mainh = ele.children[0].offsetHeight + 30;
        ele.style.height = mainh + 'px';
    });
    var tapMains = document.querySelectorAll('.tapMain');
    Array.from(tapMains).forEach(function (ele) {
        var mainh = ele.children[0].offsetHeight + 30;
        ele.style.height = mainh + 'px';
    });
    var tapNavs = document.querySelectorAll('.tapNav');
    Array.from(tapNavs).forEach(function (ele) {

        var tapTops = ele.children;
        var main = ele.nextElementSibling;
        var secs = main.children;
        Array.from(tapTops).forEach(function (ele, index) {
            ele.setAttribute('index', index);
            ele.onclick = function () {
                for (var j = 0; j < tapTops.length; j++) {
                    tapTops[j].classList.remove('cur');
                }
                for (var i = 0; i < secs.length; i++) {
                    secs[i].style.display = 'none';
                }
                cancelAnimationFrame(that.af);
                this.classList.add('cur');
                var index = this.getAttribute('index');
                secs[index].style.display = 'block';
                main.style.height = secs[index].offsetHeight + 20 + 'px'
            }
        });
    });
};
Note.prototype.search = function(){
    var that = this;
    let searchtrue = false;
    var searchArr = [];
    var searchIndex = 0;
    var newsearchArr = [];
    var searchBut = document.querySelector('.searchBut');
    var searchinp = document.querySelector('.search input');
    var searchup = document.querySelector('.searchup');
    var searchdown = document.querySelector('.searchdown');
    var target = true;
    searchBut.onclick = function () {
        if (searchinp.value !== '') {
            var val = searchinp.value;
            searchArr.forEach(function (ele) {
                ele.style.backgroundColor = '';
            });
            searchArr = [];
            newsearchArr = [];
            searchIndex = 0;
            Array.from(document.querySelectorAll('article h3,article h4,article li,p')).forEach(function (ele) {
                if (ele.innerText.indexOf(val) !== -1) {
                    ele.style.backgroundColor = 'rgba(252,157,154,0.7)';
                    searchArr.push(ele);
                    if (ele.offsetTop >= 70) {
                        newsearchArr.push(ele)
                    }
                    target = false;
                }
            });
            if(target){
                searchinp.value = '';
                alert('搜索不到');
                return ;
            }
            that.windowScroll(newsearchArr[0]);
            searchinp.value = ''
        } else {
            if (searchtrue === false) {
                this.style.cssText += ';transform:translateX(0);background : #ccc ;';
                searchinp.style.cssText += ';display:block;width:180px;';
                searchup.style.cssText += ';opacity:1;transform:rotateZ(720deg);left:210px;';
                searchdown.style.cssText += ';opacity:1;transform:rotateZ(720deg);left:250px;';
                searchtrue = true;
            } else {
                this.style.cssText += ';transform:translateX(-77px);backgroundColor:deepskyblue;';
                searchinp.style.cssText += ';display:none;width:0;';
                searchup.style.cssText += ';opacity:0;transform:rotateZ(0deg);left:80px;';
                searchdown.style.cssText += ';opacity:1;transform:rotateZ(0deg);left:80px;';
                searchArr.forEach(function (ele) {
                    ele.style.backgroundColor = ''
                });
                searchArr = [];
                newsearchArr = [];
                searchIndex = 0;
                searchtrue = false;
            }
        }
    };
    searchup.onclick = function () {
        if(!newsearchArr.length){
            return;
        }
        searchIndex--;
        searchIndex = searchIndex < 0 ? 0 : searchIndex;
        that.windowScroll(newsearchArr[searchIndex]);
    };
    searchdown.onclick = function () {
        if(!newsearchArr.length){
            return;
        }
        searchIndex++;
        searchIndex = searchIndex > newsearchArr.length - 1 ? newsearchArr.length - 1 : searchIndex;
        that.windowScroll(newsearchArr[searchIndex]);
    };
};
Note.prototype.frameTitle = function () {
    var titles = document.querySelectorAll('.frameTitle .frameItem');
    var arr1 = ['jquery.html','vue.html','react.html','tool.html'];
    var arr2 = ['http://jquery.cuishifeng.cn/','https://cn.vuejs.org/v2/guide/','https://zh-hans.reactjs.org/','https://www.webpackjs.com/'];
    var url = window.location.href;
    [...titles].forEach(function (ele,index) {
        ele.onclick = function () {
            if(url.indexOf(arr1[index])!==-1){
                window.open(arr2[index]);
            }else{
                document.location = arr1[index];
            }
        }
    })
};
var note = new Note();
note.init();
function xk$(ele) {
    return document.querySelector(ele)
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



