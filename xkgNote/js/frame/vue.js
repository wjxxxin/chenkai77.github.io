(function f() {
    var text1 = `let vm = new Vue({
el:"#app",
data:{},
router,
watch:{
$router(to,from){
console.log(to.path);
}
}
})`;

    xk$('.text1 code').innerHTML=zy(text1);

    var text12 = `<script>
var vm = new Vue({
    el:"绑定的元素"//（例如：通过el:"#app" 和html绑定关系 ，最终实现数据呈现。）,
    data:{
        //数据
    },
    watch :{
        //watch是时监听data中的数据Key,可以深度监测
        '要监听的数据':{
            handler(){
                //数据发生变化时将变化后的数据处理
            },
            deep:true //  /false(是否深监听)
        }
    }
    computed : {
        //computed一般是计算一个值,变成实例的属性,值就是函数执行的结果,网页发布时会自动触发一次。
        //函数默认执行，相当于将返回结果给到 data 中
        //如果数据发生改变，会重新执行并且再次保存最新结果
        '值' : {
            get(){
                return //输出的值 
            },
            set(newval){
                值状态改变时触发的函数
            }
            
        },
    }
    methods:{
        //函数
    },
    mounted(){
        //将要执行的函数放这里
        //数据和模板编译完成，并且已经把编译后的html显示到网页中，
        // 相当于 window.onload = function(){ }  $(function(){})  网页加载完执行
    }
})
</script>`;

    xk$('.text12 code').innerHTML=zy(text12);

    let text13 = `<div id="app">
<p v-for="(value,key,index) in people">
{{key}}---{{value}}
</p>
</div>
<script>
var vm = new Vue({
el: '#app',
data: {
people: {
    name: "小李",
    age: 18,
    sex: "男"
    }
  }
})
</script>`;
    xk$('.text13 code').innerHTML=zy(text13);

    let text14 = `// 注册一个全局自定义指令 \`v-focus\`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})`;
    xk$('.text14 code').innerHTML=zy(text14);

    let text15 = `directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}`;

    xk$('.text15 code').innerHTML=zy(text15);

    let text16 = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="css/todo_base.css">
    <link rel="stylesheet" href="css/todo_index.css">
</head>

<body class="learn-bar">
<section id="todoapp">
    <header id="header">
        <h1>todos</h1>
        <input v-model.trim="user"
               @keydown.enter="add()"
               id="new-todo" placeholder="来添加一些大事件?" autofocus="autofocus">
    </header>
    <section id="main">
        <input id="toggle-all" type="checkbox" v-model="toggleall">
        <label for="toggle-all">选中全部</label>
        <ul id="todo-list">
            <li v-for="(item,index) in curlist" :class="{editing:order==index,completed:item.status}">
                <div class="view">
                    <input v-model="item.status" type="checkbox" class="toggle">
                    <label @dblclick="edit(index)">{{item.title}}</label>
                    <button class="destroy" @click="remove(item)"></button>
                </div>
                <input v-focus="order==index"
                       v-model="item.title"
                       @keydown.enter="edit(-1)"
                       @blur="edit(-1)" class="edit">
            </li>
        </ul>
    </section>
    <footer id="footer"><span id="todo-count"><strong>{{left}}</strong>进行中</span>
        <ul id="filters">
            <li>
                <a :class="{selected:sign=='all'}" href="#all">全部</a>
            </li>
            <li>
                <a :class="{selected:sign=='activing'}" href="#activing">进行中</a>
            </li>
            <li>
                <a :class="{selected:sign=='completed'}" href="#completed">已完成</a>
            </li>
        </ul>
        <button id="clear-completed" v-show="com" @click="removeall()">删除完成</button>
    </footer>
</section>
<script src="js/vue.js"></script>
<script>
    //2.封装本地存储
    var local = {
        getStorage() {
            return JSON.parse(localStorage.getItem('todos')) || []
        },
        setStorage(newval) {
            localStorage.setItem('todos', JSON.stringify(newval))
        }
    };

    Vue.directive('focus', {
        update(el, binding) {
            //当v-focus=值为true，将元素聚焦
            if (binding.value) {
                el.focus()
            }
        }
    });

    var filter = {
        all(data){
            return data
        },
        activing(data){
            return data.filter(item=>item.status==false)
        },
        completed(data){
            return data.filter(item=>item.status==true)
        }
    };
    
    var vm = new Vue({
        el: '#todoapp',
        data: {
            sign: 'all',//标识底栏
            order: -1,
            user: '',
            list: local.getStorage(),
            curlist:[]
        },
        watch: {
            //1.监测list数据发生变化时，更新本地存储
            list: {
                handler() {
                    local.setStorage(this.list);
                    this.curlist = filter[this.sign](this.list);//添加或者删除curlist的值，一定要重新从list中获取
                },
                deep: true//深度检测
            }
        },
        computed : {
            toggleall : {
                get(){
                    return this.list.length&&this.list.length === filter.completed(this.list).length
                },
                set(newval){
                    this.list.forEach(function (ele) {
                        ele.status = newval
                    })
                }
            },
            left(){
                return filter.activing(this.list).length
            },
            com(){
                return filter.completed(this.list).length
            }
        },
        methods: {
            add() {
                if (this.user == '') {
                    alert('请输入内容');
                    return;
                }
                this.list.unshift({status: false, title: this.user});
                this.user = ''
            },
            remove(item) { //改为根据内容找到该索引删除，因为如果根据索引的话用的是curlist的索引，
                // 用curlist的索引来list找到对应的内容，导致出现删除错误的现象。curlist和list数组里的项都是对象，所以都是堆存储
                var index = this.list.indexOf(item);
                this.list.splice(index, 1)
            },
            edit(index) {
                this.order = index;
            },
            cahngeSign(sign){
                this.sign = sign;
                this.curlist = filter[this.sign](this.list);//选中当前需要展示的数据
            },
            removeall(){
                this.list = filter.activing(this.list)
            }
        }
    });
    
    window.onhashchange = hashChange;
    hashChange();
    function hashChange() {
        var hash = location.hash.split('#')[1]||'all';
        vm.cahngeSign(hash);
    }
    
</script>
</body>`;

    xk$('.text16 code').innerHTML=zy(text16);

    let text17 = `<div id="app">
<my-article></my-article>
</div>
<script src="js/vue.js"></script>
<script>
    Vue.component('my-article',{
        template:\`<div>
            <h3>这是标题</h3>
            <p>段落</p>
            </div>\`
    })
    var vm = new Vue({
        el:"#app"
    })
</script>`;

    xk$('.text17 code').innerHTML=zy(text17);

    let text18 = `<div id="app">
<my-article></my-article>
</div>
<template id="myarticle">
    <div>
        <h3>这是标题</h3>
        <p>段落</p>
    </div>
</template>
<script>
    Vue.component('my-artilce',{
        template:'#myarticle'
    })
    var vm = new Vue({
        el:'#app'
    })
</script>`;

    xk$('.text18 code').innerHTML=zy(text18);

    var text19 =  `1.通过普通的 JavaScript 对象来定义组件：
var ComponentA = { /* ... */ }

var ComponentB = { /* ... */ }

2.在 components 选项中注册你想要使用的组件：

new Vue({
  el: '#app',
  components: {
    ComponentA,
    ComponentB
  }
})

3.使用注意注册在哪里，那么这个组件就只能这里使用

<component-a></component-a>
<component-b></component-b>

另一种写法：
   <script>
        //1.创建一个对象
        var MyComp = {
            template:\`<div>这是局部组件</div>\`
        }
        //2.把这个对象注册到实例或者组件上成为组件使用  通过组件或者实例的 components这个选项上，以key值为组件名称。
        //3.使用这个实例或者组件的环境中（template中）就可以使用这个组件
        var vm = new Vue({
            components:{
                MyComp
            },
            template: \`<my-comp></my-comp>\`
        }).$mount('#app')

    </script>
`;

    xk$('.text19 code').innerHTML = zy(text19);

    var text20 = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>05组件私有化数据</title>
</head>
<body>
    <div id="app">
        {{msg}}
        <btn></btn>
        <btn></btn>
        <btn></btn>
    </div>
    <script src="js/vue.js"></script>
    <script>

        Vue.component('btn',{
            data(){
                return {
                    num:0
                }
            },
            template:\`<button @click="add()">{{num}}</button>\`,
            methods:{
                add(){
                    this.num++;
                }
            }
        })
        var vue = new Vue({
            el:'#app',
            data:{
                msg:1
            }
        })
    </script>
</body>
</html>`;

    xk$('.text20 code').innerHTML = zy(text20);

    var text21 = `<div id="app" class="container">
    <ym-alert a="asdfasdf"></ym-alert>
</div>

<template id="box">
    <div class="alert" :class="'alert-'+cn">
    这是警示框{{a}} {{typeof close}}
    <span v-show="close" class="close">&times;</span>
</div>
</template>
<script src="vue.js"></script>
<script>
    Vue.component('ym-alert', {
        template: '#box',
        /*数组是仅接收不验证
         props: ['a', 'cn', 'close']
        对象的简单验证方式*/
        props:{
            a:String,
            cn:String,
            close:Boolean
        }
        /*既验证又有默认值，而且还可以必须传递*/
        props:{
            a:{
                type:String, /*类型 的值是 内置构造函数*/
                default:'',   /*默认值*/
                required:true   /*必须传递 默认值是false*/
            },
            cn:{
                type: String,
                default:'warning'
            },
            close:{
                type:Boolean,
                default:true
            }
        }
    });

    var vm = new Vue({
        el: "#app",
        data: {

        }
    })
</script>`;

    xk$('.text21 code').innerHTML = zy(text21);

    var text22 =  `<div id="app">
    <ym-btn @parqie="parChange" :show="show"></ym-btn>
    <!--第一步：在父组件上指定自定义事件并且指定函数名称。注意绑定事件对应的函数名称不可以加括号-->
    <p v-show="show"></p>
</div>
<script src="js/vue.js"></script>
<script>
    Vue.component('ym-btn',{
      props:['show'],
      template:\`<button @click="change">按钮{{show}}</button>\`,
           /*第三步：在子组件中正常绑定事件。并且在当前组件环境的methods下定义该功能change。*/
      methods:{
        change(){
          this.$emit('parqie',!this.show);
          /*第四步：对应的功能如何才能将父组件中的自定义事件对应的函数功能触发，通过this.$emit('自定义事件名称',参数)*/
        }
      }
    });
    var vm = new Vue({
      el:'#app',
      data:{
        show:true
      },
      methods:{
      /*第二步：指定的函数名称书写在对应的组件环境的methods下。并且定义该功能时，一般都要传参。*/
        parChange(value){
          this.show = value;
        }
      }
    })
</script>`;
    xk$('.text22 code').innerHTML = zy(text22);

    var text23 = `<div id="app">
    <my-com></my-com>
    <my-com>你好</my-com>
    <my-com>
        <h2>插槽</h2>
        <p>果然好用</p>
    </my-com>
</div>
<template id="myCom">
    <div>
        <slot>我是默认值</slot>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    Vue.component('my-com',{
        template:'#myCom'
    })
    var vm = new Vue({
        el:'#app'
    })
</script>

结果：我是默认值
     你好
     插槽
     果然好用
`;
    xk$('.text23 code').innerHTML = zy(text23);

    var text24 = `<div id="app">
    <my-com></my-com>
    <hr>
    <my-com>
        <span slot="center">叩丁狼</span>
    </my-com>
    <hr>
    <my-com>
        <span slot="left">返回</span>
        <span slot="center">叩丁狼</span>
        <span slot="left">菜单</span>
    </my-com>
</div>
<template id="myCom">
    <div>
        <slot name="left">默认左侧</slot>
        <slot name="center">默认中间</slot>
        <slot name="right">默认右侧</slot>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    Vue.component('my-com',{
        template:'#myCom'
    })
    var vm = new Vue({
        el:'#app'
    })
</script>
结果: 默认左侧
      默认中间
      默认右侧
      
      默认左侧
      叩丁狼
      默认右侧
      
      返回
      菜单
      叩丁狼
      默认右侧
`;
    xk$('.text24 code').innerHTML = zy(text24);

    var text25 = `<div id="app">
    <my-com>
        <template slot-scope="abc" slot="left">
            <ul>        //给插槽标签写成template标签写法。并且添加slot-scope属性，
                          并且书写一个自定义的固定值（xxx）。在template标签中间添加
                          {{xxx，绑定数据的key值}}
                <li v-for="(item,index) in abc.data">{{item}}</li>
            </ul>
        </template>
    </my-com>
</div>
<script src="js/vue.js"></script>
<script>
  Vue.component('my-com', {
    template: \` <div>
        <slot :data="language" name="left"></slot>
    </div>\`,      //插槽绑定数据
    data() {
      return {
        language: ['H5学科', 'Java学科', 'UI学科']
      }
    }
  });
  var vm = new Vue({
    el: '#app',
  });
</script>`;
    xk$('.text25 code').innerHTML = zy(text25);

    var text30 = `module.exports = {
  lintOnSave: false
}
const path = require('path')
function resolve(dir) {
  return path.join(__dirname,dir)
}

module.exports = {
  //1.基础的配置方式
  configureWebpack:{
    resolve:{
      alias:{
        'components':'@/components',
        'pages':'@/pages'
      }
    }
  },
  //2.利用webpack4的webpack-chain来配置
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',resolve('src'))
      .set('components',resolve('src/components'))
  }
}`;
    xk$('.text30 code').innerHTML = zy(text30);

    var text31 = `var router = new VueRouter({
    routes:[
        { 
            path:'/home',
            component:组件名称
        }，
        { 
            path:'/about',
            component:组件名称
        }
    ……
    ]
})`;
    xk$('.text31 code').innerHTML = zy(text31);

    var text32 = `<template>
    <div>
      <p @click="qie('home')">首页</p>
      <p @click="qie('about')">关于</p>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        methods : {
            qie(url){
              this.$router.push(url);
            }
        },
    }
</script>
`;
    xk$('.text32 code').innerHTML = zy(text32);

    var text33 = `{
      path: '/home', name: 'home', component: Home,
      children: [
        {
        path: 'message', name: 'message', component: () => {
          return import('../pages/home/Message')
        }
      },
        {
        path: 'user', name: 'user', component: () => {
          return import('../pages/home/User')
        }
      }
      ]
    },
    
    <div>
        Home
      <router-link to="/home/message">message</router-link>
      |
      <router-link to="/home/user">user</router-link>
      <router-view></router-view>
    </div>
    `;

    xk$('.text33 code').innerHTML = zy(text33);

    var text34 = `var routers = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path:'/cate/home',name:'home',meta:{title:'首页',login:false},/*component:Home*/ components:{default:Home,xxx:JdTabber}},
        {path:'/cate',name:'cate',meta:{title:'分类',login:false},components:{default:Cate,xxx:JdTabber}},
        {path:'/spell',name:'spell',meta:{title:'拼购',login:false},components:{default:Spell,xxx:JdTabber}},
        {path:'/cart',name:'cart',meta:{title:'购物车',login:true},components:{default:Cart,xxx:JdTabber}},
        {path:'/user',name:'user',meta:{title:'用户',login:true},components:{default:User,xxx:JdTabber}},
        {path:'/list',name:'list',components:{default:List,xxx:JdTabber}},
        {path:'/login',name:'login',components:{default:Login,xxx:JdTabber}},
    ],
    linkExactActiveClass:'exact-active',
    linkActiveClass:'active',
});
var user = false;

routers.beforeEach((to,from,next)=>{
  if(!to.meta.login){
    next()
  }else{
    if(user){
      next()
    }else{
      next('/home')
    }
  }
  document.title = to.meta.title;
});`;

    xk$('.text34 code').innerHTML = zy(text34);

    var text35 = `const Foo = {
  template: \`...\`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 \`this\`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 \`this\`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 \`this\`
  }
}`;

    xk$('.text35 code').innerHTML = zy(text35);

    var text36 = `<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <router-view>
    <!---------所有路径匹配到的视图组件都会被缓存--------------->
  </router-view>
</keep-alive>


<!-- 数组 (使用 \`v-bind\`) -->
<keep-alive :include="['a', 'b']">
  <router-view>
    <!---------所有路径匹配到的视图组件都会被缓存--------------->
  </router-view>
</keep-alive>
`;

    xk$('.text36 code').innerHTML = zy(text36);

    var text37 = `<template>
    <div>
        <router-view name="default"></router-view>
        <router-view name="xxx"></router-view>
    </div>
</template>


var routers = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path:'/cate/home',name:'home',meta:{title:'首页',login:false},/*component:Home*/ components:{default:Home,xxx:JdTabber}},
        {path:'/cate',name:'cate',meta:{title:'分类',login:false},components:{default:Cate,xxx:JdTabber}},
        {path:'/spell',name:'spell',meta:{title:'拼购',login:false},components:{default:Spell,xxx:JdTabber}},
        {path:'/cart',name:'cart',meta:{title:'购物车',login:true},components:{default:Cart,xxx:JdTabber}},
        {path:'/user',name:'user',meta:{title:'用户',login:true},components:{default:User,xxx:JdTabber}},
        {path:'/list',name:'list',components:{default:List,xxx:JdTabber}},
        {path:'/login',name:'login',components:{default:Login,xxx:JdTabber}},
    ],
    linkExactActiveClass:'exact-active',
    linkActiveClass:'active',
});`;

    xk$('.text37 code').innerHTML = zy(text37);

    var text38 = `      <router-link to="/home">home</router-link>
      
      <router-link to="/home/（id）">home</router-link>
      
      <router-link :to="{name:'about'}">about</router-link>
      
      <router-link :to="{name:'news',params:{id:7272}}">news</router-link>
      
      <router-link to="/home?(query)">home</router-link>  
`;
    xk$('.text38 code').innerHTML = zy(text38);

    var text39 = `//单击 组件1按钮 ，操作组件按钮2的功能触发。

<div class="container" id="app">
    <com1></com1>
    <com2></com2>
</div>
<script src="js/vue.js"></script>
<script>
    //中央数据总线
    //vue-bus
    var bus = new Vue();
    var com1 = {
        template:\`<button @click="myalert()">组件1</button>\`,
        methods:{
            myalert(){
                bus.$emit('xxx');
            }
        }
    }
    var com2 = {
        template:\`<button>组件2</button>\`,
        mounted(){
            bus.$on('xxx',function () {
                alert(1)
            })
        }
    }

    var vm = new Vue({
        el:"#app",
        components: {
            com1,
            com2
        }
    })
</script>`;

    xk$('.text39 code').innerHTML = zy(text39);

    var text40 = `//plugin文件夹里的VueBus.js文件，
    //插件原型方法
    //1，书写对象，
    var VueBus = {}，
    
    //2，给对象添加install
    VueBus.install = function(Vue){
        Vue.prototype.bus = new Vue();//原型方法
        Vue.a = 'a';//静态属性
        
        Vue.component('MyHeader',{
            //template:....
            render(h){
                // h 参数：标签名称 子节点数组（文本也是节点，文本节点，标签属性也是节点）
                return h('div',['全局组件',h('p',['p标签'])])
            } 
        })
    }   
    
   //main.js文件
    import Vue from "vue";
    import App from "./App";
    import VueBus from './plugin/VueBus'；
    
    Vue.use(VueBus);
    
    new Vue({
        render:h => h(App),
    }).$mount('#app')
    `;

    xk$('.text40 code').innerHTML = zy(text40);

    var text41 = `module.exports = {
    devServer: {
        proxy: {\t
            '/api': {  //代理地址
                target: 'http://192.168.113.117:8080',  //需要代理的地址
                changeOrigin: true,  //是否跨域
                pathRewrite: {     
                    '^/api/coding/': '/'  //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
                secure:true  //允许https
            }
        }
    }
}`;

    xk$('.text41 code').innerHTML = zy(text41);

    var text42 = `const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 \`props\` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})`;

    xk$('.text42 code').innerHTML = zy(text42);

    var text43 = `<template>
<div>todo
  <router-view></router-view>
</div>
</template>

<script>
     export default {
          name: "todo",
       props:['id'],
       mounted () {
           console.log(this.$route.params.id);
            console.log(this.id)
       }

     }
</script>`;

    xk$('.text43 code').innerHTML = zy(text43);

    var text44 = `<template>
    <div>
        Name
    </div>
</template>

<script>
    export default {
        name: 'Name',
    }
</script>

<style scoped> //scope属性 让CSS只在当前组件中起作用

</style>`;

    xk$('.text44 code').innerHTML = zy(text44);

    var text45 = `//简单使用
const myMixin = {
    created () {
        console.log(\`来自Mixins中的消息\`)
    }
}
let app = new Vue({
    el: '#app',
    mixins: [myMixin]
})

//导入使用

// src/mixins/mixins.js
export const myMixin = {
    created() {
        console.log(\`来自Mixins中的消息\`);
    }
};

// HelloWorld.vue
<script>
import { myMixin, myMixin2 } from "../mixins/mixins.js";
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "From Vue Component"
        };
    },
    mixins: [myMixin]
};
</script>`;

    xk$('.text45 code').innerHTML = zy(text45);

})();