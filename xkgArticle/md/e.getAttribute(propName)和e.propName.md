
# DOM元素的e的e.getAttribute(propName)和e.propName有什么区别和联系?

- e.getAttribute()是标准DOM操作文档元素属性的方法,具有通用性可在任意文档上使用，返回元素在源文件中设置的属性
- e.propName通常是在HTML文档中访问特定元素的特性，浏览器解析元素后生产对应对象，这些对象的特性会根据特定规则结合属性设置得到，对于没有对应特性的属性，只能使用getAttribute进行访问
- e.getAttribute（）返回值是源文件中设置的值，类型是字符串或者是null
- e.propName返回值可能是字符串、布尔值、对象、undefined等
- 大部分attribute与property是一一对应关系，修改其中一个会影响另外一个，如id、title等属性
- 一些布尔属性<input hidden/>的检测设置需要hasAttribute和removeAttribute来完成,或者设置对应的property
- 像<a href="../index.html">link</a>中的href属性，转换成property的时候需要通过转换得到完整的url
- 一些attribute和property不是一一对应，如：form控件中&lt;input value="hello"/>对应的是defaultValue，修改或设置value property修改的是控件当前值，setattribute修改value属性不会改变value property

