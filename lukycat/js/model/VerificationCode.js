define(["jquery"],function(){
	function VCode(){
		this.init()	
	};
	VCode.prototype = {
		constructor:VCode,
		init(){
			  this.fun();
			  $("#yannum").on("click",$.proxy(function(){
			  	this.fun();
			  	// console.log(this.num)
			  },this))
			  //console.log(this.num)
		},
		fun(){			
			 this.four = parseInt(Math.random()*10);
			 this.three = parseInt(Math.random()*10);
			 this.two = parseInt(Math.random()*10);
			 this.one = parseInt(Math.random()*10);
			 this.num = this.four*1000+this.three*100+this.two*10+this.one
			  $("#yannum").html(this.num);
			 
		}
	}
	return new VCode()
})