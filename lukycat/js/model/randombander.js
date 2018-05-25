define(["jquery"],function(){
	function random(){
		this.num = null;
		//this.randomheight =  -35*parseInt(Math.random()*maxnum);
		this.init();
	}
	random.prototype = {
		constructor:random,
		
		init(){
			this.timer = setInterval(function(){
				var a = this.move("#bailong",3);
				var b = this.move("#shilong",10);
				var c = this.move("#gelong",10);
				this.sum = -(a*100+b*10+c)/35;
				$("#zhekou").html(parseInt(this.sum*100/298)/10); 
			}.bind(this) ,1000);
			
		},
		move(ele,maxnum){		
			this.randomheight = -35*parseInt(Math.random()*maxnum);
			$(ele).animate({top:this.randomheight},200);			
			return this.randomheight;
		}
	}
	return new random();
})