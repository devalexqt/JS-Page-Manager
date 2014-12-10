var PageManager=null

function initPage(){
	console.log("initPage..")

	  PageManager=new _PageManager("page-display-id","page-stack-id","main-menu-id",function(err,obj){
       if(err){console.log("err: "+err);return}

    obj.showPage('page-main-id',function(err,page){
    
    })

  })//PageManager

}//initPage