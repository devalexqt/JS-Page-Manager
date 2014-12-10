
#Description
PageManager it's Javascript page system management in browser. Simple but powerful script wath work in all modern desktop and mobile browser and allow to create page management in webview. This script will be ideal for mobile application that using HTML5 code. With PageManager You can create amazing mobile application just in seconds! In other word it's quick start to create **cordova** html 5 application!

#Demo

[![PageManager Demo](/demo/Demo_video1.jpg)](https://www.youtube.com/watch?v=wZtH5ZydCso)

#FAST USAGE
* Clone project to new folder and install simple server dependencies.

```
git clone https://github.com/devalexqt/JS-Page-Manager.git
cd js-page-manager/
npm install
```

* Run Node.js simple server that using [Less](http://lesscss.org/) as pre-processor for css file and [SWIG](http://paularmstrong.github.io/swig/) as html template engine.
```
node server.js
```
* Now visit to http://127.0.0.1/index.html

* **After You finishing development then You need to generate .css and .html file using Less and SWIG commands**


#Usage

Just simple include *page-manager.js* script and base css style file in to head section of html page.

``` html
<link rel="stylesheet/css" type="text/css" href="css/page-manager.css" />
<script type="text/javascript" src="js/page-manager.js"></script>
```

Include into body of HTML page next two elements:

``` html
 	<div id="page-display-id"></div><!-- all pages will be displayed here -->

 	<div id="page-stack-id"></div>><!-- hidden pages container/template stack -->
```

Now, include in to *"page-stack-id"* element same number of page or page template. Use the base *page* class (*class="page"*) and specify an page ID (*id="my-first-page-id"*). And include menu container element!

``` html
<div id="page-stack-id">
	<div class="page" id="page-main-id">Same page code here.</div>
	<div class="page" id="page-about-id">Same page code here.</div>
	.....	
	<div class="page" id="page-purchase-id">Same page code here.</div>
	<!--MENU-->
	<div class="page" id="main-menu-id" data-animation="default_menu" onclick="PageManager.hideMenu()">
          <div class="menu-container">
          	......
        </div><!--menu-container-->          
 	 </div><!--main-menu-id-->    	
</div>><!-- hidden pages container/template stack -->

```

Next step, its initialize PageManager object an passed containers ID and same callback.

``` javascript
  PageManager=new _PageManager("page-display-id","page-stack-id","main-menu-id",function(err,obj){
    if(err){console.log("err: "+err);return}
    console.log("PageManager object is ready!")
  })
```

After PageManager object will be ready then You can show any page from stack container to display container.

``` javascript
	PageManager.showPage('page-main-id',function(err,page){
	console.log("Now animation end and page is in display container.")
	})
```

In same cases You need to add or remove display overlay, this means that user can't click inside the display container. For example if You need to show menu.

``` javascript
var menu_overlay=document.createElement("div")
    menu_overlay.className="menu-page-overlay"
    menu_overlay.onclick=hideMenu

    PageManager.display.overlay=menu_overlay //add overlay to display
    ....
    PageManager.display.overlay=null // remove overlay from display
```
And finally if You want do hide last one page from display container then:

``` javascript
	PageManager.hidePage()
```

#API

 **Init Object**

``` javascript
	new _PageManager(display_id,stack_id,callback)
```
- *display_id* - [String|Object] an visible element container for display pages on the screen.
- *stack_id* - [String|Object] an hidden element container for page or page template.
- *callback(err,obj)* - this callback fired then object will be ready.
``` javascript
	PageManager=new _PageManager("page-display-id","page-stack-id",function(err,obj){})
	//or
    PageManager=new _PageManager(document.getElementById("page-display-id"),"page-stack-id",function(err,obj){})
    //or
      PageManager=new _PageManager(document.getElementById("page-display-id"),document.getElementById("page-stack-id"),function(err,obj){
    if(err){console.log("err: "+err);return}
    console.dir(obj)
    ....
  })
```  

**Show Page**

``` javascript
	PageManager.showPage(page,callback)
```
- page - [String|Object] id of page or page object that to be showed.
- callback(err,page_new) -  this callback will be fired then show animation ended and return new page object.

``` javascript
	PageManager.showPage('page-main-id',function(err,page){
	console.dir(page)
	})
	//or
	var new_page=PageManager.getPage("page-about-id")    
    PageManager.showPage(new_page,function(err,page){
      console.dir(page)
    })
```

**Hide Page**
Hide last page from display container.

``` javascript
	PageManager.hidePage(callback)
```
- callback(err,page_new,page_old) - this callback will befired then hide animation ended and return new and old page object.

``` javascript
	PageManager.hidePage(function(err,page_new,page_old){
	console.dir(page_new)
	})
```
**Show Menu**
``` javascript
	PageManager.showPage(page,callback)//like show page...
```
**Hide Menu**
``` javascript
	PageManager.hidePage(callback)//like hide page...
```

**Get top one page from display container**

``` javascript
	var page=PageManager.display.lastPage
```
return the latest page from display container.

**Push new page to stack object**
``` javascript
	var page=document.createElement("div")
		....
	PageManager.stack.push(page)
```
* return new page

**Remove page from stack object**
``` javascript
	var page=PageManager.getPage("page-about-id") 
		....
	PageManager.stack.pop(page)
```
* return removed page.

**Get or set display overlay**

set overlay:

``` javascript
	  var menu_overlay=document.createElement("div")
      	menu_overlay.className="menu-page-overlay"
      	menu_overlay.onclick=hideMenu
      PageManager.display.overlay=menu_overlay//add menu overlay to display
```

remove overlay:

``` javascript
	PageManager.display.overlay=null
```

#All API function

Print to console all debug info:
``` javascript
PageManager.debug=tru|false
```
Animation object for page transition:
``` javascript
PageManager.animation.my_custom={}
```
Get or set stack object:
``` javascript
PageManager.stack
```
Get or set display object:
``` javascript
PageManager.display
```
Get first page from display container:
``` javascript
PageManager.display.firstPage
```
Get last page from display container:
``` javascript
PageManager.display.lastPage
```
Get before last page from display container:
``` javascript
PageManager.display.beforeLastPage
```
Push new page to display container:
``` javascript
PageManager.display.push(page)
```
Pop page from display container:
``` javascript
PageManager.display.pop(page|null)
```
Append overlay to display container:
``` javascript
PageManager.display.overlay
```
Push new page to stack container:
``` javascript
PageManager.stack.push(page)
```
Get page from stack container:
``` javascript
PageManager.getPage(page)
```
Show page in display container:
``` javascript
PageManager.showPage(page,callback)
```
Hide page from container:
``` javascript
PageManager.hidePage(page,callback)
```

#Transition Animation
Just use default animation or specify own animation for page. Simple include *data-animation="default"* in to page declaration.

``` html
<div id="page-stack-id">
	<div class="page" id="page-main-id" data-animation="default">Same page code here.</div>
	<div class="page" id="page-about-id" data-animation="my_custom1">Same page code here.</div>
	.....	
	<div class="page" id="page-purchase-id"  data-animation="my_custom_cool">Same page code here.</div>
</div>><!-- hidden pages container/template stack -->
```
And define this animation with PageManager object.
``` javascript
PageManager.animation.my_custom1={
		          show:{
		            page_new:"show-page 0.250s linear forwards",
		            page_old:"show-page-back 0.250s linear forwards"
		            },
		          hide:{
		            page_new:"hide-page-back 0.250s linear forwards",
		            page_old:"hide-page 0.250s linear forwards"
		            },
		          }//my_custom1 animation
```
And then define all animation transition inside .css file, for example: 

``` css
/*show new page animation*/
@keyframes show-page {
  0%   { transform: translate3d(100%,0,0);opacity: 0.8;}
  //50%   { transform: translate3d(50%,0,0);}
  100% { transform: translate3d(0%,0,0);opacity: 1.0;}
}
@-webkit-keyframes show-page {
  0%   { -webkit-transform: translate3d(100%,0,0);opacity: 0.8; }
  //50%   { -webkit-transform: translate3d(50%,0,0); }
  100% { -webkit-transform: translate3d(0%,0,0);opacity: 1.0; }
}
@-ms-keyframes show-page {
  0%   { -ms-transform: translate3d(100%,0,0); opacity: 0.8;}
  //50%   { -ms-transform: translate3d(50%,0,0); }
  100% { -ms-transform: translate3d(0%,0,0);opacity: 1.0; }
}

@keyframes show-page-back {
  0%   { transform: translate3d(0%,0,0);}
  10%   { transform: translate3d(0%,0,0);}
  100% { transform: translate3d(-40%,0,0);}
}
@-webkit-keyframes show-page-back {
  0%   { -webkit-transform: translate3d(0%,0,0); }
  10%   { -webkit-transform: translate3d(0%,0,0); }
  100% { -webkit-transform: translate3d(-40%,0,0); }
}
@-ms-keyframes show-page-back {
  0%   { -ms-transform: translate3d(0%,0,0); }
  10%   { -ms-transform: translate3d(0%,0,0); }
  100% { -ms-transform: translate3d(-40%,0,0); }
}

@keyframes hide-page {
  0%   { transform: translate3d(0%,0,0);}
  100% { transform: translate3d(110%,0,0);}
}
@-webkit-keyframes hide-page {
  0%   { -webkit-transform: translate3d(0%,0,0); }
  100% { -webkit-transform: translate3d(110%,0,0); }
}
@-ms-keyframes hide-page {
  0%   { -ms-transform: translate3d(0%,0,0); }
  100% { -ms-transform: translate3d(110%,0,0); }
}

@keyframes hide-page-back {
  0%   { transform: translate3d(-40%,0,0);opacity: 1.0;}
  100% { transform: translate3d(0%,0,0);opacity: 1.0;}
}
@-webkit-keyframes hide-page-back {
  0%   { -webkit-transform: translate3d(-40%,0,0);}
  100% { -webkit-transform: translate3d(0%,0,0); }
}
@-ms-keyframes hide-page-back {
  0%   { -ms-transform: translate3d(-40%,0,0); }
  100% { -ms-transform: translate3d(0%,0,0); }
}
```


