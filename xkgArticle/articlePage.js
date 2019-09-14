function Article() {
    this.articles = document.querySelectorAll('.article');
}
Article.prototype.init=function () {
    this.titleShow();
    this.navTap();
    this.articleShow();
    this.navTarget();
};
Article.prototype.navTarget = function(){
    var target = document.querySelector('.navTarget');
    var tar;
    target.onclick = () => {
        var nav = document.querySelector('.nav');
        var aw = document.querySelector('.articleWrapper');
        if(tar){
            nav.style.width = 0;
            aw.style.width = '100%';
            tar = 0;
            target.style.backgroundImage = "url('./images/---.png')"
        }else {
            nav.style.width = '17%';
            aw.style.width = '83%';
            tar = 1;
            target.style.backgroundImage = "url('./images/xxx.png')"
        }
    }
};
Article.prototype.articleShow = function(){
    var hash = location.hash.split('#')[1]||'0';
    [...this.articles][hash].style.display = 'block';
    var lis = document.querySelectorAll('.navListW li');
    lis[hash].classList.add('cur');
    window.onhashchange = ()=>{
        hash = location.hash.split('#')[1]||'0';
        [...this.articles].forEach((ele,index)=>{
            ele.style.display = 'none'
        });
        this.articles[hash].style.display = 'block';
        [...lis].forEach((ele)=>{
            ele.classList.remove('cur');
        });
        lis[hash].classList.add('cur');
    }  
};
Article.prototype.titleShow=function(){
    var that = this;
    var h3s = document.querySelectorAll('.article h3');
    var str = '';
    var num;
    var index = 0;
    var liw;
    if (h3s.length <= 16) {
        var ul1 = document.createElement("ul");
        document.querySelector('.navListW').appendChild(ul1);
        h3s.forEach(function (ele,index) {
            str += '<li>' +(index+1)+'. '+ele.innerText + '</li>';
        });
        document.querySelector('.navListW').children[0].innerHTML = str;
    } else if (h3s.length > 16) {
        // document.querySelector('.navLeft').style.height= window.screen.availHeight*0.75+'px';
        var navLW = document.querySelector('.navListW');
        var navL = document.querySelector('.navList');
        num = Math.ceil(h3s.length / 14);
        navLW.style.width = num*100+'%';
        liw = 100/num;
        h3s.forEach(function (ele,index) {
            str += '<li>' +(index+1)+'. '+ele.innerText + '</li>*';
        });
        var arr = str.split('*');
        for (var i = 0; i < num; i++) {
            var ul2 = document.createElement("ul");
            ul2.style.width = liw+'%';
            navLW.appendChild(ul2);
            navLW.children[i].innerHTML = arr.slice(i * 14, (i + 1) * 14).join('');
        }
        var newa = document.createElement("a");
        var newa2 = document.createElement("a");
        newa.innerText = '<';
        newa2.innerText = '>';
        navL.appendChild(newa);
        navL.appendChild(newa2);
        newa.addEventListener('click', function () {
            index--;
            index = index<0?0:index;
            navLW.style.transform = `translateX(${index*liw}%)`
        });
        newa2.addEventListener('click', function () {
            index++;
            index = index>num-1?num-1:index;
            navLW.style.transform = `translateX(-${index*liw}%)`
        })
    }
    var lis = document.querySelectorAll('.navListW li');
    [...lis].forEach((ele,index)=>{
        ele.onclick = function () {
            window.location.hash = index
        }
    })
};
Article.prototype.navTap = function(){
    var that = this;
    var navTap = document.querySelector('nav .navTitle');
        var tapTops = navTap.children;
        var main = navTap.nextElementSibling;
        Array.from(tapTops).forEach(function (ele, index) {
            ele.onclick = function () {
                for (var j = 0; j < tapTops.length; j++) {
                    tapTops[j].classList.remove('cur');
                }
                cancelAnimationFrame(that.af);
                this.classList.add('cur');
                var num = -100*index;
                main.style.left = num+'%';
            }
        });
};
var article = new Article();
article.init();