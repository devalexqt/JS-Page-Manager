

PageManager it's Javascript page system managment in browser. Simple but powerful script wath work in all modern desktop and mobile browser and allow to create page managment in webview. This script will be ideal for mobile application that using HTML5 code.

#Demo

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/2VQfRn1H8HE/0.jpg)](http://www.youtube.com/watch?v=2VQfRn1H8HE)

#Usage

Just simple include *page-manager.js* script and base css style file in to head section of html page.

``` html
<link rel="stylesheet/css" type="text/css" href="css/style.css" />
<script type="text/javascript" src="js/page-manager.js"></script>
```

Include in to body of HTML page next two elements:

``` html
 	<div id="page-display-id"></div><!-- all pages will be displayed here -->

 	<div id="page-stack-id"></div>><!-- hidden pages container/templete stack -->
```

Now, include in to *"page-stack-id"* element same number of page or page templete. Use the base *page* class (*class="page"*) and specify an page ID (*id="my-first-page-id"*).

``` html
<div id="page-stack-id">
	<div class="page" id="page-main-id">Same page code here.</div>
	<div class="page" id="page-about-id">Same page code here.</div>
	.....	
	<div class="page" id="page-purchase-id">Same page code here.</div>
</div>><!-- hidden pages container/templete stack -->

```

Next step, its initialize PageManager object an passed containers ID and same callback.

``` javascript
  PageManager=new _PageManager("page-display-id","page-stack-id",function(e){
    if(e.err){console.log("err: "+e.err);return}
    console.log("PageManager object is ready!")
  })
```

After PageManager object will be ready than You can show any page from stack container to display container.

``` javascript
	PageManager.showPage('page-main-id',function(e){
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
And finaly if You want do hide last one page from display container then:

``` javascript
	PageManager.hidePage()
```

#API

 **Init Object**

``` javascript
	new _PageManager(display_id,stack_id,callback)
```
- *display_id* - an visible element container for display pages on the screen.
- *stack_id* - an hidden element container for page or page templete.
- *callback* - this callback fired then object will be ready.

**Show Page**

``` javascript
	PageManager.showPage(page,callback)
```
- page - the page to be showed.
- callback - this callback will befired then show animation ended.

**Hide Page**

``` javascript
	PageManager.hidePage(page,callback)
```
- page - the page what need to hide.
- callback - this callback will befired then hide animation ended.

**Get top one page from display container**

``` javascript
	PageManager.display.lastPage
```
return the latest page from display container.

**Get or set display overlay**

set overlay:

``` javascript
	PageManager.display.overlay=Object
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

Set default page class for pages inside stack container:
``` javascript
PageManager.pageClass="page"
```

Animation object for page transition:
``` javascript
PageManager.animation.my_custom={}
```

Get or set stack object:
``` javascript
PageManager.stack
```


<ul>
<ol><b>PageManager.stack</b> - get/set stack object.</ol>
<ol><b>PageManager.display</b> - get/set display object.</ol>
<ol><b>PageManager.display.lastPage</b> - get/set last page inside display object.</ol>
<ol><b>PageManager.display.firstPage</b> - get first page from display object.</ol>
<ol><b>PageManager.display.beforeLastPage</b> - get before last page inside display object.</ol>
<ol><b>PageManager.display.push(page)</b> - push page to display object.</ol>
<ol><b>PageManager.display.pop(page|null)</b> - pop page|lastPage from display object.</ol>
<ol><b>PageManager.display.overlay</b> - get/set overlay object of display object.</ol>
<ol><b>PageManager.stack.push(page)</b> - push page to stack object.</ol>
<ol><b>PageManager.initStack(pages)</b> - init stack, push pages DOM collection to stack.pages array.</ol>
<ol><b>PageManager.init()</b> - Default init function that use default parameters from constructor.</ol>
<ol><b>PageManager.getPage(page_id)</b> - Retrun page object from stack by page ID parameter.</ol>
<ol><b>PageManager.showPage(page_id,callback)</b> - Show new page on the display.</ol>
<ol><b>PageManager.hidePage(page_id,callback)</b> - Hide exitings page from the display.</ol>
</ul>








#Transition Animation
Jus use defaul animation or specify own animation for page. Simple include *data-animation="default"* in to page declaration.

``` html
<div id="page-stack-id">
	<div class="page" id="page-main-id" data-animation="default">Same page code here.</div>
	<div class="page" id="page-about-id" data-animation="my_custom1">Same page code here.</div>
	.....	
	<div class="page" id="page-purchase-id"  data-animation="my_custom_cool">Same page code here.</div>
</div>><!-- hidden pages container/templete stack -->
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
And then defne all animation transition inside .css file, for example: 

``` css
//show new page animation
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


