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

    var text12 = `{
"type":"tap",  // 事件类型
"timeStamp":895, //时间戳
"target": {    //发生点击事件的目标（事件源）
  "id": "myView1",   //组件的id
  "dataset":  {  
    "msg":"xmg"   //组件data-xxx绑定的数据
  }
},
"currentTarget":  {  //当前 设计了监听事件 的目标
  "id": "myview1",  //组件的id
  "dataset": {
    "msg":"xmg"   //组件data-xxx绑定的数据
  }
},
"detail": {   //点击的 x y 轴坐标
  "x":53,
  "y":14
},
"touches":[{   //点击的坐标
  "identifier":0,
  "pageX":53,
  "pageY":14,
  "clientX":53,
  "clientY":14
}],
"changedTouches":[{   //点击的坐标
  "identifier":0,
  "pageX":53,
  "pageY":14,
  "clientX":53,
  "clientY":14
}]
}`;

    xk$('.text12 code').innerHTML = zy(text12);

var text13 = `<!-- 1.在wxs中定义变量 -->
<wxs module="msg">

  var message1 = '我是在wxs中定义的变量message1';
  var message2 = '我是在wxs中定义的变量message2';


  //module.exports.message1=message1;
  //module.exports.message2=message2;

  <!-- 导出定义的变量 -->
  module.exports = {
    message1:message1, //这里不能简写
    message2:message2
  }

</wxs>

<!-- 2.使用data定义的变量 -->
<view>{{value}}</view>

<!-- 3.使用wxs中定义的变量 -->
<view>{{msg.message1}}</view>
<view>{{msg.message2}}</view>

-------------------------------------
<!-- 1.在wxs中定义变量 -->
<wxs module="msg">
  
  var formTime = function(time){
    //1.查看数据类型的api, 注意获取date不是通过new Date()
    var date=getDate(time) //只接受number类型
    var formTime = date.getFullYear() +'-'+ ( date.getMonth()+1 ) +'-'+date.getDate();
    return formTime;
  }

  module.exports = {
    formTime:formTime  //这里不能简写
  }

</wxs>

<!-- 3.使用wxs中定义的变量 -->
<view>{{ msg.formTime(time) }}</view>`;

    xk$('.text13 code').innerHTML = zy(text13);

    var text14 = `<view>
  <view>我是自定义my-view组件</view>
  <!-- 我是组件中的插槽 -->
  <slot name="content"></slot>
  <slot name="footer"></slot>

</view>


<my-view>
    <text slot="content">content布局</text>
    <text slot="footer">footer布局</text>
</my-view>`;

    xk$('.text14 code').innerHTML = zy(text14);

    var text15 = `<view class="my-view">
  <!-- 1.我是自定义组件 -->\t
  <view class="title">我是自定义my-view组件</view>
  <!-- 2.我是组件中的插槽 -->
  <slot name="content"></slot>
  <slot name="footer"></slot>

  <!-- 3.我是组件中的样式 -->
  <view class="my-view-class">我使用的是外部传递进来的样式类</view>
  <view class="{{ true ? 'my-view-active-class' : '' }}">我使用的是外部传递进来的样式类</view>


</view>`;

    xk$('.text15 code').innerHTML = zy(text15);

    var text16 = `//use-components.wxml布局：
<!-- 使用自定义组件，这里将 my-view 类传递给my-view-class ; ... -->
<my-view my-view-class="my-view" my-view-active-class="my-view-active">
   
   <text slot="content">content布局\\n</text>
   <text slot="footer">footer布局</text>
   

</my-view>

//use-components.wxss 样式：
/* pages/02-use-components/use-components.wxss */
.my-view{
  color: white;
  background: red;
}

.my-view-active{
  color: white;
  font-size: 50rpx;
  background: pink;
}`;

    xk$('.text16 code').innerHTML = zy(text16);

   var text17 = `<!-- 使用自定义组件 -->
<my-view my-view-class="my-view" my-view-active-class="my-view-active"
  arrs-pramas = "{{ [1,2,3,4] }}"
  str-pramas = "liujun"
  num-pramas = "12"
>
   
   <text slot="content">content布局\\n</text>
   <text slot="footer">footer布局</text>
   

</my-view>

//组件定义接收外部数据
Component({ 
  
  /**
   * 组件的属性列表
   */
  properties: {
    
    arrsPramas:{
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: [0,0,0,0], // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
    
    strPramas: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    
    numPramas: Number // 简化的定义方式
    //...
  },
})`;

    xk$('.text17 code').innerHTML = zy(text17);

    var text18 = `<!-- 点击跳转到组件页面 -->
<navigator url="../../components/home-page/home-page?name=jack&age=13">
  <button>点击跳转到组件页面</button>
</navigator>

// components/home-page/home-page.js
Component({
  /**
   * 组件的属性列表
   * 1.定义接收上一个页面传递过来的name/age参数
   * 
   * （ 可以直接拿到wxml中用 ）
   */
  properties: {
    name: String,
    age: Number,
  },
  /**
   * 组件的初始数据
   */
  data: {
   
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
    onLoad(options){
      //2.接收上一个页面传递过来的name/age参数 【 非页面组件(普通组件)不能这样接收外部传递的数据 】
      console.log(this.data.name);
      console.log(this.data.age);
      //3.或者直接在options里面接收,不需要在properties里定义name/age参数
      console.log(options)
    }
  }
})

<!--components/home-page/home-page.wxml-->
<text>components/home-page/home-page.wxml</text>
<view>{{name}}-{{age}}</view>`;

    xk$('.text18 code').innerHTML = zy(text18);

    var text19 = `// components/my-view/my-view.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  
  // 1.定义该组件可以接收的外部样式类
  externalClasses: ['my-view-class','my-view-active-class'],

  /*组件的属性列表*/
  properties: {
    arrsPramas:{
      type:Array,
      value:[0,0,0,],
    },
    strPramas:{
      type:String,
      value:''
    },
    numPramas:Number
  },

  /* 组件的初始数据*/
  data: {

  },

  /* 组件的方法列表*/
  methods: { 
  },

  lifetimes: {
    created() {
      //在组件实例刚刚被创建时执行
      console.log('1.在组件实例刚刚被创建时执行')
    },

    attached() {
      // 在组件实例进入页面节点树时执行
      console.log('2.在组件实例进入页面节点树时执行')
    },

    ready() {
      // 在组件在视图层布局完成后执行
      console.log('3.在组件在视图层布局完成后执行')
    },

    detached() {
      // 在组件实例被从页面节点树移除时执行
      console.log('4.在组件实例被从页面节点树移除时执行')
    },
    //....
  },

  //2.组件所在页面的生命周期
  pageLifetimes: {
    show() {
      // 组件所在的页面被展示时执行( 回到前台 )
      console.log('1.页面被展示')
    },
    hide() {
      // 组件所在的页面被隐藏时执行（ 例如切换到后台 ）
      console.log('2.页面被隐藏')
    },
    resize(size) {
      // 组件所在的页面尺寸变化时执行
      console.log('3.页面尺寸变化')
    }
  }


})`;
    xk$('.text19 code').innerHTML = zy(text19);

var text20 = `//my-view.wxml
<view class="my-view">
  ....
  <view>========4.组件内部触发事件========</view>
  <button bindtap="onbindtap">组件内部触发事件</button>
</view>

//my-view.js
 /*组件的方法列表*/
  methods: {
    //1.监听组件内部的点击事件
    onbindtap(event){
      console.log('1.onbindtap')
      const myEventDetail = {des:'这个对象会赋值给detail对象'} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      //2.组件内部触发事件，外部可以监听 bindbtnclick 事件
      this.triggerEvent('btnclick', myEventDetail, myEventOption)
    }
  },
`;
    xk$('.text20 code').innerHTML = zy(text20);

    var text21 = `  /* 组件的方法列表*/
  methods: {
    
    //1.监听组件内部的点击事件
    onbindtap(event){
      console.log('1.onbindtap')
      const myEventDetail = {des:'这个对象会赋值给detail对象'} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      //2.组件内部触发事件，外部可以监听 bindbtnclick 事件
      this.triggerEvent('btnclick', myEventDetail, myEventOption)
      
\t  //3.调用内部方法语法：this.showText('haha'); 
    },

    //2.在组件内部定义一个内部的方法共外部调用（ 只能在methods方法中定义 ）
    showText(value){
      console.log('value='+value)
    }
  },`;
    xk$('.text21 code').innerHTML = zy(text21);

    var  text22 = `  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    // 1.获取组件对象(只能获取自定义组件的对象)
    let myView = this.selectComponent('#my-view'); // myView 等于组件的 this
    myView.showText('haha')
    
    console.log(myView.data.name)
    console.log(myView)
  },`;
    xk$('.text22 code').innerHTML = zy(text22);

    var text23 = `module.exports = Behavior({

  //1.引入外部的behavior
  behaviors: [],

  //2.定义属性，该属性将会合并到使用该behavior的组件中
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  //2.定义data,该data将会合并到使用该behavior的组件中
  data: {
    myBehaviorData: {
      name:'KDL'
    }
  },

  //3.定义生命周期函数，当和组件的attached合并后，这个会比组件的attached先执行
  attached() {
    console.log('myBehaviorData -> attached')
  },

  // add  lifetimes
  lifetimes: {
    //定义生命周期函数，当和组件的attached合并后，这个会比组件的attached先执行
    ready() {
      console.log('myBehaviorData -> ready')
    },
  },


  //4.定义方法,该方法将会合并到使用该behavior的组件中
  methods: {
    myBehaviorMethod() { 
      console.log("---myBehaviorMethod---")
    }

  }
})`;
    xk$('.text23 code').innerHTML = zy(text23);

var text24 = `// components/my-view/my-view.js
// 1.引入这个myBehavior
const myBehavior = require('../../behavior/my-behavior');
Component({
  behaviors: [myBehavior],  // 2.引入这个myBehavior, 它的属性、数据和方法会被合并到组件中
  ....
  ....
  ....
  lifetimes: {
    created() {
      //3.调用behavior合并过来的方法
      this.myBehaviorMethod();
    },
  }，
})`;

    xk$('.text24 code').innerHTML = zy(text24);

    var text25 = `  //1.保存数据到本地
  onBindTap1:function(){
    //1.保存普通的字符串
     wx.setStorage({
       key: 'username',
       data: 'xiaomage',
     }) 
    //2.保存json字符窜
     wx.setStorage({
       key: 'userInfo',
       data: '{"name":"xmg","age":"3"}',
     }) 
     //3.保存一个json对象
     var objs={
       name:'lulu',
       sex:'男'
     }
     wx.setStorage({
       key: 'userObj',
       data: objs,
     }) 
  },`;

    xk$('.text25 code').innerHTML = zy(text25);

    var text26 = `  //2.获取指定key的本地的数据
  onBindTap2: function () { 
     //1.获取普通字符串
      wx.getStorage({
        key: 'username',
        success: function(res) {
          console.log(res.data);
        },
      })
      //2.获取json字符串
      wx.getStorage({
        key: 'userInfo',
        success: function (res) {
          //JSON.parse ： 将一个json字符串解析成json对象
          console.log(JSON.parse(res.data).name);
        },
      })
      //3.获取json对象
      wx.getStorage({
        key: 'userObj',
        success: function (res) {
          console.log(res.data.sex);
        },
      })
  },`;

    xk$('.text26 code').innerHTML = zy(text26);

    var text27 = `wx.getStorageInfo({
      success: function (res) {
        var keys = res.keys;
        for(let i=0;i<keys.length;i++){
          wx.getStorage({
            key: keys[i],
            success: function(res) {
              console.log(res.data)
            },
          })
        }
      },
    })`;
    xk$('.text27 code').innerHTML = zy(text27);

    var text28 = ` wx.removeStorage({
      key: 'username',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })`;
    xk$('.text28 code').innerHTML = zy(text28);

    var text29 = `  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.修改导航栏的标题
    wx.setNavigationBarTitle({
      title: "导航栏",
    })
    
    //2.修改导航栏的背景颜色( 仅支持 #ffffff 和 #000000 )
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#FF6802',
    })
    
    //3.显示加载的进度
    wx.showNavigationBarLoading();
  },`;
    xk$('.text29 code').innerHTML = zy(text29);

    var text30 = `wx.showActionSheet({
      itemList: ['八块', '八万'],
      itemColor: '',
      success: function (res) { 
      },
      fail: function (res) { },
      complete: function (res) { },
    })`;

    xk$('.text30 code').innerHTML = zy(text30);

    var text31 = `<button open-type="getUserInfo" bindgetuserinfo='getUserInfo'>获取用户信息</button>
<button open-type="openSetting">1</button>
<button bindtap="changeAddress">1</button>
<button bindtap="getWeRunData">1</button>

// pages/05-authorize/05-authorize.js
Page({

  /**
   * 1.需要授权后才能调用（ 不会弹出授权窗口 ）
   */
  getUserInfo:function(event){
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },

  /**2.打开授权页面（ 可以管理授权信息  ） */
  openSetting:function(event){
    wx.openSetting();
  },

  /**3.如果没有授权 会自定弹出授权窗口，如果授权过了就不会弹出授权窗口（ 仅授权该接口 ） */
  changeAddress:function(event){
    wx.chooseAddress({
      success:function(result){
        console.log(result)
      }
    })
  },

  /**
   * 4.需要授权后才能调用（ 会弹出授权窗口, 仅授权该接口 ）
   */
  getWeRunData:function(event){
    wx.getWeRunData({
      success:function(res){
        console.log(res)
      }
    })  
  },


})`;

    xk$('.text31 code').innerHTML = zy(text31);

    var text32 = `//抽离的behavior
 module.exports = Behavior({
  methods: {
    // 获取token方法
    getToken() {
      const _this = this;
      // 允许
      // 1.wx.login => code
      wx.login({
        success(res) {
          if (res.code) {
            // 2. 发请求给后端
            wx.request({
              url: 'http://localhost:8888/wx/login?code=' + res.code,
              success(res) {
                console.log(res)
                const result = res.data;
                if (result.code === 0) {
                  // 3.缓存到本地token
                  wx.setStorageSync('token', result.data.token);
                  // _this.setData({
                  //   isAuth: true
                  // })
                  _this.triggerEvent('setlogin', {
                    isAuth: true
                  });
                } else {
                  wx.showToast({
                    title: result.msg || '请求失败',
                    icon: 'none',
                    duration: 2000,
                    mask: true
                  })
                }
              },
              fail(err) {
                console.log(err)
              }
            })
          }
        }
      })
    }
  },
  // 监听所在页面的声明周期、
  pageLifetimes: {
    // page里面onshow方法
    show() {
      console.log('behavior show')
      
      const _this = this;
      //
      console.log('show')
      // session-key 有没有过期，token存不存在，有没有用户授权过

      // 1. 检查session-key
      wx.checkSession({
        success: function(res) {
          // getSetting()拿用户的授权
          wx.getSetting({
            success: function(res) {
              if (res.authSetting['scope.userInfo']) {
                // seesionkey没有过期，并且授权过
                if (wx.getStorageSync('token')) {
                  // seesionkey没有过期，并且授权过，还有token
                  // _this.setData({
                  //   isAuth: true
                  // });
                  // 子传父
                  _this.triggerEvent('setlogin', {
                    isAuth: true
                  });
                } else {
                  // seesionkey没有过期，并且授权过，但是没有token
                  _this.getToken();
                }
              } else {
                // seesionkey没有过期，没有授权过
                // 显示授权页面
                // _this.setData({
                //   isAuth: false
                // })
                _this.triggerEvent('setlogin', {
                  isAuth: false
                });
              }
            }
          })
        },
        fail: function(res) {
          // session-key过期
          // 1.如果没有授权过
          wx.getSetting({
            success: function(res) {
              console.log(res)
              if (res.authSetting['scope.userInfo']) {
                // 授权
                // wx.login => code =>后端返回token
                _this.getToken();
              } else {
                // 没有授权,显示授权页面给用户
                // _this.setData({
                //   isAuth: false
                // })
                _this.triggerEvent('setlogin', {
                  isAuth: false
                });
              }
            }
          })
        }
      })
    },
    hide() {
      this.triggerEvent('setlogin', {
        isAuth: null
      });
    }
  }
})
//login组件
// component/login/login.js
const loginBehavior = require('../../behavior/login-behavior.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  // 使用
  behaviors: [loginBehavior],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  pageLifetimes:{
    // 组件所在页面的onShow声明周期
    show() {
      
    },
  }
})
//页面引用组件
// pages/me/me.js
Page({

  /*页面的初始数据*/
  data: {
    isAuth: null
  },
  setLogin(data) {
    console.log(data)
    this.setData(data.detail)
  },
  
  // 用来接收getuserinfo(拒绝、允许)
  getUser(event) {
    console.log(event);
    if (event.detail.userInfo) {
      // this.getToken();
      this.selectComponent('.login').getToken();
    }
  },
})
//页面wxml
<view class="auth-wrapper" wx:if="{{isAuth === false}}">
  <!-- 不需要授权就可以显示用户开放信息 -->
  <open-data class="auth-avatar" type="userAvatarUrl"></open-data>
  <view class="auth-txt">该小程序由小米商城开发，请提供一下授权，即可继续操作</view>
  <view class="auth-txt1">获得你的公开信息(昵称、头像等)</view>
  <button class="auth-btn" open-type="getUserInfo" bindgetuserinfo="getUser">确认授权</button>
</view>

<view class="me-wrapper" wx:if="{{isAuth === true}}">
  <!-- 个人信息 -->
  <view class="me-header">
    <open-data class="me-avatar" type="userAvatarUrl"></open-data>
    <view class="me-txtcontent">
      <open-data class="me-nickname" type="userNickName"></open-data>
      <view class="me-account">小米账号：11111111111</view>
    </view>
    <view class="me-zcode">
      <image src="../../images/z-code.png"></image>
    </view>
  </view>
  <!--  -->
</view>
<login class="login" bindsetlogin="setLogin"></login>`;

    xk$('.text32 code').innerHTML = zy(text32);

    var text33 = `<input type="number" oninput="checkTextLength(this ,10)">
functioncheckTextLength(obj, length) {
   if( obj.value.length > length) {
      obj.value = obj.value.substr(0, length);
   }
}`;
    xk$('.text33 code').innerHTML = zy(text33);

    let text34 = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta name="viewport"\n' +
        '          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
        '    <title>Title</title>\n' +
        '    <style>\n' +
        '        div{\n' +
        '            width: 100px;\n' +
        '            height: 100px;\n' +
        '            background-color: red;\n' +
        '\n' +
        '            position: absolute;\n' +
        '            left: 30px;\n' +
        '            top: 30px;\n' +
        '        }\n' +
        '        /*清楚系统默认的事件*/\n' +
        '        *{\n' +
        '            touch-action: none;\n' +
        '        }\n' +
        '\n' +
        '    </style>\n' +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '<div class="box"></div>\n' +
        '\n' +
        '<script src="js/zepto.min.js"></script>\n' +
        '<script src="js/touch.js"></script>\n' +
        '<script src="js/fx.js"></script>\n' +
        '<script>\n' +
        '\n' +
        '    $(function () {\n' +
        '\n' +
        '        /**\n' +
        '         *\n' +
        '         $(\'.box\').swipe(function () {\n' +
        '            console.log(\'滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         $(\'.box\').swipeLeft(function () {\n' +
        '            console.log(\'向左滑动了\')\n' +
        '        });\n' +
        '         $(\'.box\').swipeRight(function () {\n' +
        '            console.log(\'向右滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         $(\'.box\').swipeUp(function () {\n' +
        '            console.log(\'向上滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         $(\'.box\').swipeDown(function () {\n' +
        '            console.log(\'向下滑动了\')\n' +
        '        });\n' +
        '\n' +
        '         */\n' +
        '\n' +
        '        $(\'.box\').swipeLeft(function () {\n' +
        '            $(this).animate({\n' +
        '                left:0,\n' +
        '            })\n' +
        '        });\n' +
        '        $(\'.box\').swipeRight(function () {\n' +
        '            $(this).animate({\n' +
        '                left:\'200px\',\n' +
        '            })\n' +
        '        });\n' +
        '\n' +
        '        $(\'.box\').swipeUp(function () {\n' +
        '            $(this).animate({\n' +
        '                top:0,\n' +
        '            })\n' +
        '        });\n' +
        '        $(\'.box\').swipeDown(function () {\n' +
        '            $(this).animate({\n' +
        '                top:\'200px\',\n' +
        '            })\n' +
        '        });\n' +
        '\n' +
        '    })\n' +
        '\n' +
        '</script>\n' +
        '</body>\n' +
        '</html>';

    xk$('.text34 code').innerText=text34;
})();