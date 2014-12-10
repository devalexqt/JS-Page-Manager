var PageManager=null

function initPage(){
	console.log("initPage..")
	setTimeout(function(){//if using less css parser...
	  PageManager=new _PageManager("page-display-id","page-stack-id","main-menu-id",function(err,obj){
       if(err){console.log("err: "+err);return}

    obj.showPage('page-main-id',function(err,page){
    
    })

  })//PageManager

	  },3000)
}//initPage