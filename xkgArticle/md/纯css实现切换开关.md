

# 纯css实现切换开关

```html
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>5.8lx</title>
  <style>
    div{
      width: 100px;
      margin: 200px auto;
      font-size:50px;
    }
    input{
      opacity: 0;
    }
    label{
      display: block;
      width: 2em;
      height: 1em;
      cursor: pointer;
      border-radius: 50px;
      position: relative;
    }
    label::before{
      content: "";
      width: 2em;
      height: 1em;
      background: gray;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50px;
      transition: background 0.5s ease;
    }
    label::after{
      content:"";
      width: 1.1em;
      height: 1.1em;
      background:white;
      position: absolute;
      left: -0.1em;
      top:-0.05em;
      box-shadow:0 2px 5px 0 rgba(0,0,0,0.6);
      border-radius: 50px;
      z-index: 2;
    }
    input:checked+label::after{
      animation:lx 0.2s ease-out;
      left: 1.1em;
    }
    input:not(:checked)+label::after{
      animation:xl 0.2s ease-out;
      left: -0.1em;
    }
    input:checked+label::before{
      background:deepskyblue;
    }
    @keyframes lx {
      0% {
        left: -0.1em;
        transform: scale(1, 1);
      }
      50% {
        left: 0.5em;
        transform: scale(1, 1.3);
      }
      100% {
        left: 1.1em;
        transform: scale(1, 1);
      }
    }
    @keyframes xl {
      0%{
        left: 1.1em;
        transform:scale(1,1);
      }
      50%{
        left: 0.5em;
        transform:scale(1,1.3);
      }
      100%{
        left: -0.1em;
        transform:scale(1,1);
      }
    }
  </style>
</head>
<body>
<div>
  <input type="checkbox" id="k">
  <label for="k"></label>
</div>
</body>
</html>

```

