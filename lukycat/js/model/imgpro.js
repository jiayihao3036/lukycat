//define(["jquery"],function(){
////	function creatImg(select,index){
////		var img = new Image();
////		img.src = "img/altimg.png";
////	    $(select).find(`a:eq(${index})`).find("div").append(img);
////		this.setSrc = function(url){
////			img.src = url;
////			console.log(img.src);
////		}
////	}
////	function proxy(select,index){
////		this.init(select,index);
////	}
////	proxy.prototype={		
////		init(select,index){
////			var cah = new Image();
////			var aaa = new creatImg(select,index);
////			this.setUrl = function(url){
////				this.url = url;
////				cah.src = url;
////			}.bind(this);
////			cah.onload = function(){
////				console.log(aaa);
////				aaa.setSrc(this.url)
////			}.bind(this);
////		}
////	}
//	//1.加载图片;
//	
//	//2.图片预加载结束; 对图片进行预加载操作;
//	
//	
////	new proxy(img,src);	
//	function Proxy(src,index){
//		var img = new Image();
//		var item = new Image();
//		$("#data1").find("a").eq(index).find("div").append(img)		
//		img.src = "img/altimg.png";
////		$("#data1").find("img").append(img);	
//		img.onload = function(){
//			item.src = src;
//			$("#data1").find("a").eq(index).find("div").append(item)
//			for(var i = 0;i <$("#data1").find("a").length;i++){	
//				 var a = $("#data1").find("a").eq(i).find("div").find("img").first();
//				a.remove()
//			}			
//			//img.remove();
//		}
//	}	
//	return Proxy; 
//})

define(function(){

    function LoadImg(img,src){
        var cache = new Image();
        cache.src = src;
//      console.log(cache)

        cache.onload = function(){
            img.src = src;        
        }
    }
    return LoadImg;
})
