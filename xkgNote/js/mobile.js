(function f() {
    var text1 = `<view hover-class='hover-class-style'>
\t我是一个view
</view>

.hover-class-style{
  opacity:0.7
}`;

    xk$('.text1 code').innerHTML = zy(text1);

    var text2 = ` //buttton.wxml布局 
 <form bindsubmit="obBindSubmit">
    <input placeholder='请求用户名' name="username"></input>
    <input placeholder='密码' password name="password"></input>
    <button form-type='submit'>点击提交表单</button>
  </form>
  // buttton.js
  obBindSubmit:function(e){
    console.log(e.detail.value)  //{username: "xxxx", password: "xxxxx"}
  }`;

    xk$('.text2 code').innerHTML = zy(text2);

    var text3 = `<!-- 1.定义模板 -->
<template name="tempName">
  <view> 
      <text>我是一个模板</text>
  </view>
</template>

<!-- 2.使用模板 -->
<template is="tempName"/>`;

    xk$('.text3 code').innerHTML = zy(text3);

    var text4 = `<!-- 1.定义模板 -->
<template name="tempName1">
  <view> 
      <text>我是第1个模板</text>
  </view>
</template>

<template name="tempName2">
  <view> 
      <text>我是第2个模板</text>
  </view>
</template>

<!-- 2.使用模板 -->
<template is="{{2>4?'tempName1':'tempName2'}}"/>`;

    xk$('.text4 code').innerHTML = zy(text4);

    var text5 = `//布局代码
    <!-- 1.定义模板 -->
<template name="tempName1">
  <view> 
      <text>我是第1个模板\\n</text>
      <!-- 3.接收参数  -->
      <text>{{msg}}-->{{time}}</text>
  </view>
</template>

<template name="tempName2">
  <view> 
      <text>我是第2个模板\\n</text>
    \t<!-- 3.接收参数  -->
      <text>{{msg}}-->{{time}}</text>
  </view>
</template>

<!-- 2.使用模板 data传递参数  -->
<template is="{{2>4?'tempName1':'tempName2'}}" data="{{...item}}"/>

//js代码
 /**
   * 页面的初始数据
   * 可以在item中定义一个事件的名称传递到模版中 
   */
  data: {
    item: {
      msg: 'this is a template',
      time: '2018-12-16'
    }
  },`;

    xk$('.text5 code').innerHTML = zy(text5);

    var text6 = `/**定义一个字符串模板*/
const htmlSnip =
  \`<div class="div-class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
  <img class="img" src="https://www.baidu.com/img/bd_logo1.png?where=super"/>
  <a href="https://www.baidu.com">A Link</a>
</div>
\`

//对应的rich-text.wxml布局：
<view>1.渲染html字符串</view>

<rich-text nodes="{{htmlSnip}}"></rich-text>

//对应的rich-text.wxss样式：
.div-class{
  background: skyblue;
}

.p{
  color: green;
}

/* 选择器不能使用 img */
.img{
  width: 200rpx;
  height: 100rpx;
}`;

    xk$('.text6 code').innerHTML = zy(text6);

    var text7 = `nodes: [{
      name: 'div',
      attrs: {
        class: 'div-class',
        style: 'line-height: 60px; color: #1AAD19;'
      },
      children: [
        {
        \ttype: 'text',
        \ttext: 'You never know what you\\'re gonna get.'
      \t}
      ]
    }]
    
    //上面代码相当于<div>  You never know what you\\'re gonna get.   </div> 
    
    //渲染节点
    <view>1.渲染html字符串</view>
    <rich-text nodes="{{htmlSnip}}"></rich-text>

    <view>2.使用节点渲染</view>
    <rich-text nodes="{{nodes}}"></rich-text>
`;

    xk$('.text7 code').innerHTML = zy(text7);

    var text8 = `{
    type: 'text',
    text: 'You never know what you\\'re gonna get.'
}`;

    xk$('.text8 code').innerHTML = zy(text8);

    var text9 = `//wxml代码：
<checkbox-group bindchange="onbindchange">
  <checkbox value="玩游戏" checked="{{false}}" color="red">玩游戏</checkbox>
  <checkbox value="看电影" checked="{{false}}" color="red">看电影</checkbox>
</checkbox-group>

//js代码：
   /**
   * 页面的初始数据
   */
  data: {

  },

  onbindchange:function(event){

    console.log(event.detail)

  },`;

    xk$('.text9 code').innerHTML = zy(text9);

    var text10 = `<checkbox-group bindchange="onbindchange">    <checkbox id='check1' value="玩游戏" checked="{{false}}" color="red"></checkbox>  <label for='check1'><text>玩游戏</text></label>​  <checkbox value="看电影" checked="{{false}}" color="red"></checkbox>  <label for='check1'><text>看电影</text></label>​</checkbox-group>


<view>3.label内部有多个控件也没有指定for属性的时候，默认选中第一个</view>

<view>
 <!--label内部有多个控件也没有指定for属性的时候，默认选中第一个-->\t
  <label>
      <checkbox value="玩游戏" checked="{{false}}" color="red"></checkbox><text>玩游戏</text>
      <checkbox value="看电影" checked="{{false}}" color="red"></checkbox><text>看电影</text>
      <checkbox value="看电影" checked="{{false}}" color="red"></checkbox><text>看书</text>
  </label>

</view>

<view>

  <!--label内部有多个控件有指定for属性的时候，默认选中指定那个-->\t
  <label for='check2'>
      <checkbox value="玩游戏" checked="{{false}}" color="red"></checkbox><text>玩游戏</text>
      <checkbox id='check2' value="看电影" checked="{{false}}" color="red"></checkbox><text>看电影</text>
      <checkbox value="看电影" checked="{{false}}" color="red"></checkbox><text>看书</text>
  </label>

</view>`;

    xk$('.text10 code').innerHTML = zy(text10);

    var text11 = `<picker-view
    indicator-style="height: 50px;"
    value="{{value}}"
    style="width: 100%; height: 300px;background:orange;"
    bindchange="bindChange"
  >
    <picker-view-column>
      <view wx:for="{{years}}" style="line-height: 50px;text-align:center">{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view wx:for="{{months}}" style="line-height: 50px;text-align:center">{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
        <view wx:for="{{days}}" style="line-height: 50px;text-align:center">{{item}}月</view>
    </picker-view-column>

    <picker-view-column>
        <view style="line-height: 50px;text-align:center">上午</view>
        <view style="line-height: 50px;text-align:center">下午</view>
    </picker-view-column>

</picker-view>`;

    xk$('.text11 code').innerHTML = zy(text11);

})();