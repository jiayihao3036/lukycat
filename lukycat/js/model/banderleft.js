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
					$(this.ele).css({marginLeft:0});
				}
				this.start_bander()
			}.bind(this),2000)
			
		},
		start_bander(){
			$(this.ele).stop().animate({
				marginLeft:"-=1100px"
			},500)
		}
	}
	return new bandertop();
})