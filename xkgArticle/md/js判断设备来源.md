
# 利用js判断设备来源

```js
function  deviceType(){

		var ua = navigator.userAgent;

		var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];    
		for(var i=0; i<len,len = agent.length; i++){

		if(ua.indexOf(agent[i])>0){
            	break;
            }
        }
    }
    deviceType();
    window.addEventListener('resize', function(){
        deviceType();
    })
```

