define(["jquery"],function(){
		function retop(){
			
		}
		retop.prototype = {
			constructor:retop,
			init(flog){
				//返回顶部
				//console.log(111)
				$("#fixdnav3slid").on("click",function(){
					console.log(111)
					$("body,html").animate({
						scrollTop:0
					},500)
				})
				$(".fixdnav1slid").on("click",function(){
					window.location.href = "http://localhost:8081/lukyweb/lukycat/cart.html";
				})
				$("#cart").on("click",function(){
					window.location.href = "http://localhost:8081/lukyweb/lukycat/cart.html";
				})
				var divli = $(".navli");
					$(".divleft").on("mouseover",function(){
						$("#posleft").css({"display":"block"});
					})
					$(".divleft").on("mouseout",function(){				
						$("#posleft").css({"display":"none"});
					})
					$(".divright").on("mouseover",function(){
						$("#posright").css({"display":"block"});
					})
					$(".divright").on("mouseout",function(){				
						$("#posright").css({"display":"none"});
					})
					//var flog = 1;					
					$("#navul li").css({display:"block"});
					$("#navul a").css({height:"49px"});
					var navli = $("#navul").children("li");
					//console.log(navli);
					for(var i = 0;i < navli.length;i++){
						$(navli[i]).on("mouseover",function(){
							$(this).children("nav").css({display:"block"})
						})
						$(navli[i]).on("mouseout",function(){
							$(this).children("nav").css({display:"none"})
						})
					}
					var navli = $("#navul").children(".navulbot").children("li");
					//console.log(navli);
					for(var i = 0;i < navli.length;i++){
						$(navli[i]).on("mouseover",function(){
							$(this).children("nav").css({display:"block"})
						})
						$(navli[i]).on("mouseout",function(){
							$(this).children("nav").css({display:"none"})
						})
					}
					var fixd = $("#fixdnav").children("div")					
					for(let i = 0; i<fixd.length;i++){
						$(fixd[i]).on("mouseover",function(){
							$(fixd[i]).children("div").first().stop().animate({marginTop:0},200)
						})
						$(fixd[i]).on("mouseout",function(){
							$(fixd[i]).children("div:first-child").stop().animate({marginTop:"38px"},200)
						})
					}					
					$("#lukyball").on("mouseover",function(){
						clearInterval(lukyballtimer);
					})
					$("#lukyball").on("mouseout",function(){
						lukyballtimer= setInterval(lukytimer,2000);
					})
					var lukyballtimer = setInterval(lukytimer,2000);
					function lukytimer(){
						$("#lukyballmax").animate({paddingBottom:"10px"},1000);
						$("#lukyballmax").animate({paddingBottom:"0px"},1000);
					}	
					var flag = flog;
					//console.log(flag)
					$("#allnav").trigger("click")
					$("#allnav").on("click",function(){
						//console.log(flog)
						if(flag == 0){
							flag = 1;
							$("#navul li").css({display:"block"})
							$("#navul a").stop();
							$("#navul a").animate({
								height:"49px"
								},200);							
						}else{
							flag = 0;
							$("#navul a").stop();
							$("#navul a").animate({
								height:"0px"
								},200,function(){
									$("#navul li").css({display: "none"})
								});						
						}
		
					})
			}
		}
		return  new retop();						
})