function Note() {
    this.navRightcolor = ['#df5225', '#4597cf', '#b2394c', '#65934a', '#14446a'];
    this.animatetimeId = null;
    this.sildertimer = null;
}

Note.prototype = {
    init: function () {
        this.rightstyle();
        this.leftstyle();
        this.asideShow();
        this.xiangying();
        //this.titleClick();
    },
    rightstyle: function () {
        var str = '<li><a href="html.html">HTML</a></li>\n' +
            '    <li><a href="css.html">CSS</a></li>\n' +
            '    <li><a href="js.html">JS</a></li>\n' +
            '    <li><a href="frame.html">框架、工具</a></li>\n' +
            '    <li><a href="node.js.html">前后端</a></li>';
        document.querySelector('.navRight').innerHTML = str;
        var that = this;
        var rightlis = document.querySelectorAll('.navRight li');
        rightlis.forEach(function (ele, index) {
            ele.style.backgroundColor = that.navRightcolor[index];
        })
    },
    leftstyle: function () {
        var that = this;
        var h3s = document.querySelectorAll('.item h3');
        var str = '';
        if (h3s.length <= 16) {
            var ul1 = document.createElement("ul");
            document.querySelector('.navLeft').appendChild(ul1);
            h3s.forEach(function (ele) {
                str += '<li>' + ele.innerText + '</li>';
            });
            document.querySelector('.navLeft').children[0].innerHTML = str;
        } else if (h3s.length > 16) {
            var num = Math.ceil(h3s.length / 14);
            h3s.forEach(function (ele) {
                str += '<li>' + ele.innerText + '</li> ';
            });
            var arr = str.split(' ');
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
    },
    asideShow: function () {
        var left = document.querySelector('.navLeft');
        var right = document.querySelector('.navRight');
        var htmlw = document.body.offsetWidth;
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
    },
    windowScroll: function (target) {
        var that = this;
        clearInterval(that.animatetimeId);
        var oldcur = document.documentElement.scrollTop || document.body.scrollTop;
        var oldtop = target.offsetTop;
        var oheight = document.body.offsetHeight;
        var aheight = window.screen.availHeight;
        if(oldtop<oheight-aheight) {
            this.animatetimeId = setInterval(function () {
                var cur = document.documentElement.scrollTop || document.body.scrollTop;
                var top = target.offsetTop;
                var step = Math.abs(oldcur - oldtop) / 100;
                if (cur > top) {
                    step = -Math.abs(step);
                }
                if (Math.abs(cur - top) <= Math.abs(step)) {
                    clearInterval(that.animatetimeId);
                    document.body.scrollTop = top;
                    document.documentElement.scrollTop = top;
                    return;
                }
                cur += step;
                document.documentElement.scrollTop = cur;
                document.body.scrollTop = cur;
            }, 1);
        }else{
            document.documentElement.scrollTop = oldtop;
            document.body.scrollTop = oldtop;
        }
    },
    titleClick: function () {
        var hh = 0;
        var h3s = document.querySelectorAll('h3');
        var that = this;
        h3s.forEach(function (ele) {
            ele.onclick = function () {
                var eleNext = ele.nextElementSibling;
                if (eleNext.offsetHeight !== 0) {
                    hh = eleNext.offsetHeight;
                    eleNext.style.overflow = 'hidden';
                    that.slideup(eleNext,hh)
                }else if(eleNext.offsetHeight === 0) {
                    eleNext.style.overflow = 'hidden';
                    that.slidedown(eleNext,0,hh)
                }
            }
        })
    },
    xiangying: function () {
        document.querySelector('.navLeft').classList.add('phone-hide');
        document.querySelector('.search').classList.add('phone-hide');
        document.querySelector('.titleNav .alltitle').addEventListener('touchend', function () {
            $('h3').siblings().hide()
        });
        var ssArr = [];
        var ssIndex = 0;
        var newssArr = [];
        $('.titleNav .ss').click(function () {
                ssArr = [];
                newssArr = [];
                ssIndex = 0;
                let val = $('.titleNav input').val();
                ssArr.forEach(function (ele) {
                    $(ele).css({
                        backgroundColor: ''
                    });
                });
                $('article h3,article h4,article li,p').each(function (index, ele) {
                    if ($(ele).text().indexOf(val) !== -1) {
                        $(ele).css({
                            backgroundColor: 'rgba(252,157,154,0.7)'
                        });
                        ssArr.push($(ele));
                        if ($(ele).offset().top != 0) {
                            newssArr.push($(ele))
                        }
                    }
                });
                $('html,body').animate({
                    'scrollTop': newssArr[0].offset().top,
                });
                $('.search input').val('');
            }
        );
        $('.ok').click(function () {
            ssArr.forEach(function (ele) {
                $(ele).css({
                    backgroundColor: ''
                });
            });
            ssArr = [];
            newssArr = [];
            ssIndex = 0;
            $('.titleNav input').val('');
        });
        $('.sd').click(function () {
            ssIndex++;
            ssIndex = ssIndex > newssArr.length - 1 ? newssArr.length - 1 : ssIndex;
            $('html,body').stop(true, true).animate({
                'scrollTop': newssArr[ssIndex].offset().top,
            });
        });
    },
    slideup:function (ele,height) {
        var that = this;
        this.sildertimer = setInterval(function () {
            height = height - 50;
            ele.style.height = height+'px';
            if(height<=0){
                clearInterval(that.sildertimer);
                ele.style.display = 'none';
                ele.style.height = 0;
                ele.style.overflow = 'visible';
            }
        },1)
    },
    slidedown:function (ele,zero,height) {
        var that = this;
        this.sildertimer = setInterval(function () {
            zero = zero + 50;
            ele.style.height = zero+'px';
            if(height>=height){
                clearInterval(that.sildertimer);
                ele.style.display = 'none';
                ele.style.height = height + 'px';
                ele.style.overflow = 'visible';
            }
        },1)
    }
};
var note = new Note();
note.init();

/*var navRightcolor = ['#df5225', '#4597cf', '#b2394c','#65934a','#14446a'];

$('.navRight li').each(function (index, ele) {
    $(ele).css({
        backgroundColor: navRightcolor[index]
    })
});

$('.navLeft li').each(function (index, ele){
    var text = $('.item h3').eq(index).text();
    $(ele).text(text)
});

//侧边栏===================================
$(window).mousemove(function (event) {
    if (event.pageX < 120) {
        $('.navLeft').stop(true).css({
            left: 0
        }, 'fast')
    } else {
        $('.navLeft').stop(true).css({
            left: -120
        }, 'fast')
    }

    var htmlw = $(window).width();
    if (event.pageX > (htmlw - 50)) {
        $('.navRight').stop(true).css({
            right: '-15px'
        }, 'fast')
    } else {
        $('.navRight').stop(true).css({
            right: -65
        }, 'fast')
    }
});

$('.navLeft li').click(function () {
    var index;
    if($(this).parent().index()==0){
        index = $(this).index();
    }else{
        index = $(this).index()+14;
    }
    $('html,body').animate({
        'scrollTop': $('.item h3').eq(index).offset().top
    });
});*/


//主体内容区块=======================================
//$('h3').siblings().hide();
$('h3').click(function () {
    $(this).siblings().slideToggle()
});


//添加内容

//左边代码节点==========================================================================
/*
var oDiv = $('<div class="other"><pre><code class="language-html"></code></pre></div>');
var oDivcss = $('<div class="other"><pre><code class="language-css"></code></pre></div>');
var oDivjs = $('<div class="other"><pre><code class="language-js"></code></pre></div>');
var oa = $('<a class="bnt" href="javascript:;">代码</a>');
$('section.add').append(oDiv);
$('section.add .main,section.js .main,.item .wrap .neirong').append(oa);
$('.item .wrap.add2').append(oDivcss);
$('.item .wrap.js,section.js').append(oDivjs);
*/


/*
$('.item').on('click', '.bnt', (function () {
    var mainw = $(this).parent().parent().width() * 0.6;
    if ($(this).parent().width() > mainw) {
        $(this).parent().animate({
            width: '50%'
        });
        $(this).parent().siblings('.other').show().animate({
            width: '50%'
        });
    } else {
        $(this).parent().animate({
            width: '100%'
        });
        $(this).parent().siblings('.other').animate({
            width: 0
        }, function () {
            $(this).hide()
        });
    }
}));
*/


//下方代码按钮
$('.btns').next().hide();
$('.btns').click(function () {
    $(this).next().slideToggle();
});


//tap内容

$('.tapNav .tapTop').click(function () {
    var par = $(this).parent().next('.tapMain');
    var hei = par.children('.tapSection').eq($(this).index()).height();
    par.animate({
        height: hei + 20,
    });
    par.children('.tapSection').eq($(this).index()).hide().fadeIn().siblings().fadeOut();
    $(this).addClass('cur').siblings().removeClass('cur')
});
$('.bntTap').click(function () {
    $(this).next().slideToggle();
    $(this).next().next().slideToggle();
});

$('.btnAll').click(function () {
    $(this).next().slideToggle();
    $(this).next().next().slideToggle();
    $(this).next().next().next().slideToggle();
});


//===========================
$(function () {
    $('.navLeft a').click(function () {
        $('.navLeft ul').each(function (index, ele) {
            $(ele).toggleClass('activation')
        })
    });
    $('.tapMain .tapMain').each(function (index, ele) {
        $(ele).css({
            height: $(ele).children().eq(0).height() + 30
        });
    });
    $('.tapMain').each(function (index, ele) {
        $(ele).css({
            height: $(ele).children().eq(0).height() + 30
        });
    });
    $('.bntTap').next().hide();
    $('.bntTap').next().next().hide();

    $('.btnAll').next().hide();
    $('.btnAll').next().next().hide();
    $('.btnAll').next().next().next().hide();

    $('.btncode').next().next().hide();
    $('.btncode').click(function () {
        $(this).next().next().slideToggle();
    });
});


//搜索====================================================
let searchtrue = false;
var searchArr = [];
var searchIndex = 0;
var newsearchArr = [];
$('.searchBut').click(function () {
    if ($('.search input').val() !== '') {
        let val = $('.search input').val();
        searchArr.forEach(function (ele) {
            $(ele).css({
                backgroundColor: ''
            });
        });
        searchArr = [];
        newsearchArr = [];
        searchIndex = 0;
        $('article h3,article h4,article li,p').each(function (index, ele) {
            if ($(ele).text().indexOf(val) !== -1) {
                $(ele).css({
                    backgroundColor: 'rgba(252,157,154,0.7)'
                });
                searchArr.push($(ele));
                if ($(ele).offset().top != 0) {
                    newsearchArr.push($(ele))
                }
            }
        });
        /* newsearchArr = searchArr.map(function (ele) {
             var index = newsearchArr.indexOf(ele);
             if(ele.offset().top==0){
                index =
             }
         });
 */
        $('html,body').animate({
            'scrollTop': newsearchArr[0].offset().top,
        });
        $('.search input').val('');
    } else {
        if (searchtrue === false) {
            $(this).css({
                transform: 'translateX(0)',
                backgroundColor: '#ccc',
            });
            $('.search input').fadeIn().css({
                width: 180,
            });
            $('.searchup').fadeIn().css({
                transform: 'rotateZ(720deg)',
                left: 210
            });
            $('.searchdown').fadeIn().css({
                transform: 'rotateZ(720deg)',
                left: 250
            });
            searchtrue = true;
        } else {
            $(this).css({
                transform: 'translateX(-77px)',
                backgroundColor: 'deepskyblue',
            });
            $('.search input').fadeOut().css({
                width: 0,
            });
            $('.searchup,.searchdown').fadeOut().css({
                transform: 'rotateZ(0deg)',
                left: 80,
            });
            searchArr.forEach(function (ele) {
                $(ele).css({
                    backgroundColor: ''
                });
            });
            searchArr = [];
            newsearchArr = [];
            searchIndex = 0;
            searchtrue = false;
        }
    }
});
$('.searchup').click(function () {
    searchIndex--;
    searchIndex = searchIndex < 0 ? 0 : searchIndex;
    $('html,body').stop(true, true).animate({
        'scrollTop': newsearchArr[searchIndex].offset().top,
    });
});
$('.searchdown').click(function () {
    searchIndex++;
    searchIndex = searchIndex > newsearchArr.length - 1 ? newsearchArr.length - 1 : searchIndex;
    $('html,body').stop(true, true).animate({
        'scrollTop': newsearchArr[searchIndex].offset().top,
    });
});



