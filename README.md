JS Page Manager

Simple but powerful script wath work in all modern desctop and mobile browser and allow to create page managment in webview. This script will be ideal for mobile application that using HTML5 code.

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