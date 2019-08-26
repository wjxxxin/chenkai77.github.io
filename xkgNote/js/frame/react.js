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


})();