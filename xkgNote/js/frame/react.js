(function (){
    var text1 = `<p title="段落">这是p标签 <span>这是span标签</span> </p>
{
  name:'p',
  props:{
    title:"段落"
  },
  children:['这是p标签',
            {
              name:'span',
              props:null,
              children:[’这是span标签‘]
            }
  ]
}`;
    xk$('.text1 code').innerHTML = zy(text1);

    var text2 = `var num = 1;
var myDiv = <div title="this is div" id="mydiv" className="abc">
    这是一个div
    {
        //这是注释
    }
    {/*这是注释*/}
    {num}
    <label htmlFor="box">label</label>
    <h1>这是一个大大的H1</h1>
</div>
ReactDOM.render(myDiv, document.getElementById('app'))`;

    xk$('.text2 code').innerHTML = zy(text2);

    var text3 = `function Hello() {
  return <div>
    这是一个div
    <h1>这是一个大大的h1</h1>
  </div>;
}
ReactDOM.render(<Hello></Hello>, document.getElementById('app'))`;

    xk$('.text3 code').innerHTML = zy(text3);

    var text4 = `class Hi extends React.Component{
     通过报错提示得知：在class创建的组件中，必须定义一个render函数
    render(){
        在render函数中，必须返回一个null或者符合规范的虚拟DOM元素
        return <div>
            <h1>这是用 class 关键字创建的组件！</h1>
        </div>;
    }
}`;

    xk$('.text4 code').innerHTML = zy(text4);

    var text5 = `function Hello(props) {
  console.log(props);
  return <div>
    这是一个div{name}
    <h1>这是一个大大的h1</h1>
  </div>;
}
ReactDOM.render(<Hello name='小黑'></Hello>, document.getElementById('app'))


可以通过属性扩散的形式传递
var cat = {
    name:'小黑',
    price:'10'
}

ReactDOM.render(<Hello {...cat}></Hello>, document.getElementById('app'))`;

    xk$('.text5 code').innerHTML = zy(text5);

    var text6 = `class Hi extends React.Component{
    constructor(props){
        super(props);       //super写在构造函数的第一行 
    }
    render() {
        return(
            <div>你好{this.props.name}年龄是{this.props.age}
            </div>
        );
    }
}`;
    xk$('.text6 code').innerHTML = zy(text6);

    var text7 = `import React, {Component} from 'react'
class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '你好'
        }
    }
    render() {
        return (
          <div>{this.props.name}  <span>{this.state.msg}</span></div>
        )
    }
}`;

    xk$('.text7 code').innerHTML = zy(text7);

    var text8 = `render() {
    return (
        <Fragment>
            <div style={{background :"red" ,textAlign:'center'}} className="title">评论组件标题</div>
            <ul>
                {this.renderList()}
            </ul>
        </Fragment>
    )
}`;
    xk$('.text8 code').innerHTML = zy(text8);

    var text9 = `render() {
    var style = {background:'red',textAlign:'center'};
    return (
        <Fragment>
            <div style={style} className="title">评论组件标题</div>
            <ul style={style}>
                {this.renderList()}
            </ul>
        </Fragment>
    )
}`;
    xk$('.text9 code').innerHTML = zy(text9);

    var text10 = `import React, {Component} from "react";
import LifeCircle from "./LifeCircle";
import ReactDOM from "react-dom";

export default class Life extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 10
    }
  }

  mount(){
    ReactDOM.render(<LifeCircle num={this.state.num}/>,document.getElementById('box'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('box'))
  }
  updatePropsNum(){
    this.setState({
      num:50
    },()=>{
      this.mount()
    })
  }
  render() {
    return <div>
      <button onClick={this.mount.bind(this)}>加载</button>
      <button onClick={this.unmount.bind(this)}>卸载</button>
      <button onClick={this.updatePropsNum.bind(this)}>更新props</button>
      <div id="box"></div>
    </div>;
  }
}`;
    xk$('.text10 code').innerHTML = zy(text10);

    var text11 = `import React, {Component} from "react";

export default class LifeCircle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,  //和下面的代码是一模一样的
      // num:props.num
    };
    console.log('constructor  1');
  }

  componentWillMount() {
    console.log('componentWillMount  2')
  }
  updateNum(){
    this.setState({
      num:20
    })
  }
  render() {
    console.log('render  3/7')
    return <div>
      LifeCircle {this.props.num} -----{this.state.num}
      <br/>
      <button onClick={this.updateNum.bind(this)}>更新state</button>
    </div>;
  }

  componentDidMount() {
    console.log('componentDidMount 4')
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps 10')
    this.setState(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate 5')
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate 6')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate 8')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 9')
  }

}`;
    xk$('.text11 code').innerHTML = zy(text11);

    var text12 = ` <input ref="input" type="text" defaultValue={this.state.msg} onChange={this.changeValue.bind(this)} />
    changeValue(event){
        this.setState(()=>{
            return {
                msg:this.refs.input.value
            }
        })
   }`;
    xk$('.text12 code').innerHTML = zy(text12);

    var text13 = `import React, {Component} from 'react';

export default class Commet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      list: []
    }
  }

  changeUser() {
    this.setState((state, props) => {
      return {
        user: this.refs.my.value
      }
    })
  }

  addList(e) {
    if (e.keyCode === 13) {
      this.setState((state, props) => {
        console.log(state, props)
        var newarr = JSON.parse(JSON.stringify(state.list))
        newarr.unshift(state.user)
        return {
          list: newarr,
          user: ''
        }
      })
    }
  }

  removeItem(index) {
    console.log(index)
    this.setState((state,props)=>{
      var newarr = JSON.parse(JSON.stringify(state.list))
      newarr.splice(index,1)
      return {
        list:newarr
      }
    })
  }

  renderList() {
  return this.state.list.map((item, index) => {
    return (
      <Item rem={this.removeItem.bind(this)} key={index} item={item} index={index}/>
    )
  })
  }

  render() {
    return (
      <div className={'container'} style={{marginTop: 100}}>
        <div className="form-group">
          <input ref="my"
                 value={this.state.user}
                 onChange={this.changeUser.bind(this)}
                 onKeyDown={this.addList.bind(this)}
                 type="text" className="form-control"/>
        </div>
        <div className="list-group">
          {this.renderList()}
        </div>
        <div className="text-center bg-success">共有条评论</div>
      </div>
    );
  }
}`;
    xk$('.text13 code').innerHTML = zy(text13);

    var text14 = `import React, {Component} from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  removeItem(index) {
    this.state.rem(index)
  }

  render() {
    return (
      <li className="list-group-item">
        {this.state.item}
        <span className="close" onClick={this.removeItem.bind(this, this.props.index)}>&times;</span>
      </li>
    );
  }
}`;

    xk$('.text14 code').innerHTML = zy(text14);

    var text15 = `import React,{Component} from "react";
import ReactProps from "prop-types";

export default class Text extends Component{
    static defaultProps={
         num:10,
        str:'a',
        arr:[6,6]
    };
    static propTypes={
        num:ReactProps.number,
        str:ReactProps.string,
        arr:ReactProps.array,
    };
    constructor(props){
        super(props)
    }
    render() {
        return <div>
            {this.props.num}-----{this.props.str}-----{this.props.arr}
        </div>;
    }
}`;
    xk$('.text15 code').innerHTML = zy(text15);

    var text16 = `import React, {Component,PropTypes} from 'react'
import ReactDom from 'react-dom'
//1.导入
import {EventEmitter2} from 'eventemitter2' 
//2.生成实例
var emitter = new EventEmitter2()

class First extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: 'init First'
        }
        //监听
        emitter.on('changeFirstText', this.changeText.bind(this))
    }
    changeText( msg ){
        this.setState({
            data: 'First change success: origin ' + msg
        })
    }
    render (){
        return <div>
            <h1>{this.state.data}</h1>
        </div>
    }
}
class Second extends Component {
    handleClick(){
        //4.触发
        emitter.emit('changeFirstText', 'Second')
    }
    render (){
        return <div onClick= {this.handleClick.bind(this)}>
            <button>点击修改 First 组件内容</button>
        </div>
    }
}`;

    xk$('.text16 code').innerHTML = zy(text16);

    var text17 = `import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";

ReactDom.render(
  // 开启路由世界的大门 路由的根地址，只能拥有一次
  <HashRouter>
    {/*导航  Link Vue的用法很相似 注意这里是大写*/}
    <Link to={"/home"}>首页</Link>
    <Link to={"/about"}>关于</Link>
    <Link to={"/news"}>新闻</Link>
    <hr/>
    {/*路由指向哪个页面  （组件）有两个意义 定义路由指向  在哪个位置显示页面*/}
    <Route path={'/home'} component={Home}/>
    <Route path={'/about'} component={About}/>
    <Route path={'/news'} component={News}/>
  </HashRouter>
  , document.getElementById('root'))`;

    xk$('.text17 code').innerHTML = zy(text17);

    var text18 = `<HashRouter>
    {/*导航  Link Vue的用法很相似 注意这里是大写*/}
    <Link to={"/home"}>首页</Link>
    <Link to={"/about"}>关于</Link>
    <Link to={"/news"}>新闻中心</Link>
    <Link to={"/news/1"}>新闻1</Link>
    <hr/>
    {/*路由指向哪个页面  （组件）有两个意义 定义路由指向  在哪个位置显示页面*/}
    <Route path={'/home'} component={Home}/>
    <Route path={'/about'} component={About}/>
    <Route path={'/news'} component={NewsCenter} exact/>
    <Route path={'/news/:id'} component={News} exact/>
  </HashRouter>`;

    xk$('.text18 code').innerHTML = zy(text18);

    var text19 = `import React,{Component} from 'react'
export  default class News extends Component{
    constructor(props){
        super(props)
        this.state={}
        console.log(this)
    }
    render() {
        return <div>这是News组件ID为{this.props.match.params.id}</div>
    }
}`;
    xk$('.text19 code').innerHTML = zy(text19);

    var text20 = `//app.css
.active{
     background: pink;
 }
 
 //App.js
 
 import React, {Component, Fragment} from 'react'
import {Link, Route} from "react-router-dom";
import Home from "./pages/Home";
import NewsCenter from "./pages/NewsCenter";
import News from "./pages/News";
import About from "./pages/About";

import style from './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log(this);
  }

  render() {
    let {pathname} = this.props.location
    return (
      <Fragment>
        {/*导航  Link vue的用法很相似*/}
        <Link to={"/home"} className={pathname == '/home' ? style.active: ''}>首页</Link>
        <Link to={"/news/1"} className={pathname == '/news/1' ? style.active : ''}>新闻</Link>
        <Link to={"/news"} className={pathname == '/news' ?  style.active : ''}>新闻中心</Link>
        <Link to={"/about"} className={pathname == '/about' ?  style.active : ''}>关于</Link>
        {/*路由指向到哪个页面 指的是组件*/}
          <Route path={'/home'} component={Home}/>
          <Route path={'/news'} component={NewsCenter} exact/>
          <Route path={'/news/:id'} component={News} exact/>
          <Route path={'/about'} component={About}/>
      </Fragment>
    )
  }
}`;

    xk$('.text20 code').innerHTML = zy(text20);

    var text21 = `<NavLink activeClassName={style.active} exact  to={"/home"}>首页</NavLink>
<NavLink activeClassName={style.active} exact to={"/news/1"} >新闻</NavLink>
<NavLink activeClassName={style.active} exact to={"/news"}>新闻中心</NavLink>
<NavLink activeClassName={style.active} exact to={"/about"}>关于</NavLink>`;

    xk$('.text21 code').innerHTML = zy(text21);

    var text22 = `<Switch>
      <Route path={'/home'} component={Home}/>
      <Route path={'/news'} component={NewsCenter} exact/>
      <Route path={'/news/:id'} component={News} exact/>
      <Route path={'/about'} component={About}/>
      <Redirect to={'/home'} />
</Switch>`;

    xk$('.text22 code').innerHTML = zy(text22);

})();