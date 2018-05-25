define(["jquery"],function(){
	function bandertop(){
		
	}
	bandertop.prototype = {
		constructor:bandertop,
		init(select){
			this.index = 4;
			this.ele = $(select);
			this.start_bander();
			var timer = setInterval(function(){
				this.index--
				if(this.index==0)
				{
					this.index=4;
					$(this.ele).css({marginTop:0});
				}
				this.start_bander()
			}.bind(this),1500)
			
		},
		start_bander(){
			$(this.ele).stop().animate({
				marginTop:"-=65px"
			},500)
		}
	}
	return new bandertop();
})