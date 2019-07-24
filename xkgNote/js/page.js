var navRightcolor = ['#df5225', '#4597cf', '#b2394c','#65934a','#14446a'];

$('.navRight li').each(function (index, ele) {
    $(ele).css({
        backgroundColor: navRightcolor[index]
    })
});

$('.navLeft li').each(function (index, ele) {
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
});


//主体内容区块=======================================
/*$('h3').siblings().hide();*/
$('h3').click(function () {
    $(this).siblings().slideToggle()
});


//添加内容

//左边代码节点==========================================================================
var oDiv = $('<div class="other"><pre><code class="language-html"></code></pre></div>');
var oDivcss = $('<div class="other"><pre><code class="language-css"></code></pre></div>');
var oDivjs = $('<div class="other"><pre><code class="language-js"></code></pre></div>');
var oa = $('<a class="bnt" href="javascript:;">代码</a>');
$('section.add').append(oDiv);
$('section.add .main,section.js .main,.item .wrap .neirong').append(oa);
$('.item .wrap.add2').append(oDivcss);
$('.item .wrap.js,section.js').append(oDivjs);



$('.item').on('click','.bnt', (function () {
    var mainw = $(this).parent().parent().width()* 0.6;
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



//下方代码按钮
$('.btns').next().hide();
$('.btns').click(function () {
    $(this).next().slideToggle();
});


//tap内容

$('.tapNav .tapTop').click(function () {
    var par =  $(this).parent().next('.tapMain');
    var hei = par.children('.tapSection').eq($(this).index()).height();
    par.animate({
        height:hei+20,
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

    $('.zhuanhuan').click(function () {
        $('.navLeft ul').each(function (index,ele) {
            $(ele).toggleClass('activation')
        })
    });

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
    if($('.search input').val()!==''){
        let val = $('.search input').val();
        searchArr.forEach(function (ele) {
            $(ele).css({
                backgroundColor : ''
            });
        });
        searchArr = [];
        newsearchArr = [];
        searchIndex = 0;
        $('article h3,article h4,article li,p').each(function (index,ele){
            if($(ele).text().indexOf(val)!==-1){
                $(ele).css({
                    backgroundColor: 'rgba(252,157,154,0.7)'
                });
                searchArr.push($(ele));
                if($(ele).offset().top!=0){
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
            'scrollTop':newsearchArr[0].offset().top,
        });
        $('.search input').val('');
    }else {
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
                    backgroundColor : ''
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
    searchIndex = searchIndex<0?0:searchIndex;
    $('html,body').stop(true,true).animate({
        'scrollTop':newsearchArr[searchIndex].offset().top,
    });
});
$('.searchdown').click(function () {
    searchIndex++;
    searchIndex = searchIndex>newsearchArr.length-1?newsearchArr.length-1:searchIndex;
    $('html,body').stop(true,true).animate({
        'scrollTop':newsearchArr[searchIndex].offset().top,
    });
});