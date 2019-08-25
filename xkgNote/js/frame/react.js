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
    xk$('.text1 code').innerText = text1;

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

    xk$('.text2 code').innerText = text2;

    var text3 = `function Hello() {
  return <div>
    这是一个div
    <h1>这是一个大大的h1</h1>
  </div>;
}
ReactDOM.render(<Hello></Hello>, document.getElementById('app'))`;

    xk$('.text3 code').innerText = text3;

    var text4 = `class Hi extends React.Component{
     通过报错提示得知：在class创建的组件中，必须定义一个render函数
    render(){
        在render函数中，必须返回一个null或者符合规范的虚拟DOM元素
        return <div>
            <h1>这是用 class 关键字创建的组件！</h1>
        </div>;
    }
}`;

    xk$('.text4 code').innerText = text4;

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

    xk$('.text5 code').innerText = text5;

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
    xk$('.text6 code').innerHTML = text6;

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

    xk$('.text7 code').innerHTML = text7;

})();