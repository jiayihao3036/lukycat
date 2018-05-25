define(["jquery"],function(){
	function MagnifierBander(){
		this.init();
	}
	MagnifierBander.prototype={
		constructor:MagnifierBander,
		init(){
			this.url="https://image.xingyunmao.cn/image/37e82c7b-5c05-4a19-a454-f2d91ef8f5b5"
			this.move();
			this.magnifier(this.url);
		},
		magnifier(url){	
				$("#myshopping").on("click",function(){
		//console.log(1)
					window.location.href = "http://localhost:8081/lukyweb/lukycat/index.html";
				})
				$("#mycart").on("click",function(){
					//console.log(1)
					window.location.href = "http://localhost:8081/lukyweb/lukycat/cart.html";
				})
			$(".pictur").on("mouseover",function(){
				$("#picturbig").stop().fadeIn();
				$("#picturbig").css({background:"url("+url+") no-repeat"})
				$(".wrap").on("mousemove",function(e){
					e = e||window.event;
					var left1= e.offsetX-$("#picturbig").width()/2;
					var top1=e.offsetY-$("#picturbig").height()/2;
					var maxwidth = $("#pictur").width()-$("#picturbig").width()-5;
					var maxheight = $("#pictur").height()-$("#picturbig").height()-5;
//					left1 = left1> maxwidth ? maxwidth:left1;
//					left1 = left1 < 0 ? 0 : left1;
//					top1 = top1 > maxheight ? maxheight:top1;
//					top1 = top1 < 0 ? 0 : top1;
					maxtop = -top1*1.666-45;
					maxleft = -left1*1.666-45;
					 $("#picturbig").css({
					 	top:top1,
					 	left:left1,
					 	backgroundPositionY:maxtop,
					 	backgroundPositionX:maxleft
					 })
				})
				$(".wrap").on("mouseout",function(){
					$("#picturbig").stop().fadeOut(200);
				})
			})
		},
		move(){
			$("#div1").on("mouseover",$.proxy(function(){
				this.url = "https://image.xingyunmao.cn/image/37e82c7b-5c05-4a19-a454-f2d91ef8f5b5"
				this.magnifier(this.url)
				//console.log(1)
				$(".picturmin").stop().animate({left:0},500);
				//$(".wrap").css({left:0});
				$("#div1").addClass("divhover");
				$("#div2").removeClass("divhover");
				$("#div3").removeClass("divhover");
				$("#div4").removeClass("divhover");
				$("#div5").removeClass("divhover");
			},this))
			$("#div2").on("mouseover",$.proxy(function(){
				this.url = "https://image.xingyunmao.cn/image/10424434-63d2-412b-b852-5d2fb9956f80"
				this.magnifier(this.url)
				$(".picturmin").stop().animate({left:-480},500)
				//$(".wrap").css({left:480});
				$("#div2").addClass("divhover");
				$("#div1").removeClass("divhover");
				$("#div3").removeClass("divhover");
				$("#div4").removeClass("divhover");
				$("#div5").removeClass("divhover");
			},this))
			$("#div3").on("mouseover",$.proxy(function(){
				this.url ="https://image.xingyunmao.cn/image/73028e17-5c2d-44bf-a7f1-61dc46888e2a"
				this.magnifier(this.url)
				$(".picturmin").stop().animate({left:-480*2},500)
				//$(".wrap").css({left:480*2});
				$("#div3").addClass("divhover");
				$("#div2").removeClass("divhover");
				$("#div1").removeClass("divhover");
				$("#div4").removeClass("divhover");
				$("#div5").removeClass("divhover");
			},this))
			$("#div4").on("mouseover",$.proxy(function(){
				this.url ="https://image.xingyunmao.cn/image/ffca4388-22eb-4e6a-b56a-69099983d435"
				this.magnifier(this.url)
				$(".picturmin").stop().animate({left:-480*3},500)
				//$(".wrap").css({left:480*3});
				$("#div4").addClass("divhover");
				$("#div2").removeClass("divhover");
				$("#div3").removeClass("divhover");
				$("#div1").removeClass("divhover");
				$("#div5").removeClass("divhover");
			},this))
			$("#div5").on("mouseover",$.proxy(function(){
				this.url = "https://image.xingyunmao.cn/image/a1522089-9a86-458d-8245-7cc234d70b80"
				this.magnifier(this.url)
				$(".picturmin").stop().animate({left:-480*4},500)
				//$(".wrap").css({left:480*4});
				$("#div5").addClass("divhover");
				$("#div2").removeClass("divhover");
				$("#div3").removeClass("divhover");
				$("#div4").removeClass("divhover");
				$("#div1").removeClass("divhover");
			},this))
		}
	}
	return new MagnifierBander();
})