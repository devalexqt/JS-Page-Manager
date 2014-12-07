JS Page Manager

Simple but powerful script wath work in all modern desctop and mobile browser and allow to create page managment in webview. This script will be ideal for mobile application that using HTML5 code.

#Install

Just simple include *page-manager.js* script in to head section of html page.

``` html
<script type="text/javascript" src="js/page-manager.js"></script>
```

#Usage

Its very simple to initialize PageManager object, just do this:

``` javascript
  PageManager=new _PageManager("page-display-id","page-stack-id",function(e){
    if(e.err){console.log("err: "+e.err);return}
    //console.dir(e.obj)
    PageManager.showPage('page-main-id',null)
  })
```
