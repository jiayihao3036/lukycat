define(["jquery"],function(){
 	function mybander(){		  	
			  	this.bander = document.getElementById("bander");
			  	this.banderleft = document.getElementById("banderleft");
			  	this.banderright = document.getElementById("banderright");
			  	this.bandernav = document.getElementById("bandernav");
			  	
			  }
			  mybander.prototype = {
			  	constructor:mybander,
			  	init(select){	
			  		this.ele = document.querySelector(select);
			  		this.index =4;
			  		this.banderleft.onclick=function(){
			  			this.clear_bandernav();
			  			if(this.index==1){	
			  				$("#bander1").stop().animate({opacity:1},500)
			  				this.index=4
			  				$("#index4").stop().animate({opacity:1},500,function(){
			  					for(var i = 1;i < 4;i++){
			  					myindex = document.getElementById("index"+i);
			  					myindex.style.opacity = 1;
			  				}
			  				})
			  			}else{
			  				var mybandernav = "#bander"+this.index;
			  				var myindex = "#index"+this.index;
			  				console.log(mybandernav);
			  				$(myindex).stop().animate({opacity:0},500);
			  				$(mybandernav).stop().animate({opacity:1},500);
			  				this.index--;
	
			  			}
			  			
			  		}.bind(this);
			  		this.banderright.onclick=function(){	
			  			this.clear_bandernav();
			  			if(this.index==4){
			  				$("#bander4").css({opacity:1});
			  				this.index=1;
			  				for(var i = 3;i > 1;i--){
			  					myindex = document.getElementById("index"+i);
			  					myindex.style.opacity = 0;
			  				}
			  				$("#index4").stop().animate({opacity:0},500)
			  			}else{		
			  				var mybandernav = "#bander"+this.index;
			  				$(mybandernav).stop().animate({opacity:1},500);
			  				this.index++;		
			  				var myindex = "#index"+this.index;			  				
			  				$(myindex).stop().animate({opacity:1},500);			  				
			  			}
			  		}.bind(this);
			  		this.start_timer();
			  		this.concrol_timer();
			  		 
			  	},
			  	start_timer(){
			  		this.timer = setInterval(function(){
			  			this.clear_bandernav();
			  				if(this.index==4){			  				
			  				this.index=1
			  				$("#bander1").css({opacity:1});
			  				for(var i = 3;i > 1;i--){
			  					myindex = document.getElementById("index"+i);
			  					myindex.style.opacity = 0;
			  				}
			  				$("#index4").stop().animate({opacity:0},2000)
			  			}else{
			  				this.index++;
			  				var myindex = "#index"+this.index
			  				var mybandernav = "#bander"+this.index;
			  				$(mybandernav).css({opacity:1});
			  				$(myindex).stop().animate({opacity:1},2000)
			  			}
			  		}.bind(this),4000)
			  	},
			  	concrol_timer(){
			  		console.log(this.bander);
			  		this.bander.onmouseover=function(){
			 			clearInterval(this.timer);
				 		}.bind(this);
					 this.bander.onmouseout = function(){
			 			this.start_timer();
			 		}.bind(this)
			  	},
			  	clear_bandernav(){
			  		for(var i = 1;i <= this.bandernav.children.length;i++){
			  				var mynav = "#bander"+i;
			  				$(mynav).css({opacity:0.5});
			  			}
			  	}
			  }
			  return new mybander();
 })
 