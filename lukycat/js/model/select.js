define(["jquery"],function(){
	function colorgood(){		
		this.add = $(".numgoods span").first();
		console.log(this.add);
		this.sub =  $(".numgoods span").eq(1);
		this.inp = $(".numgoods input")
		this.init();
	}
	colorgood.prototype={
		constructor:colorgood,
		init(){
			this.selectcolor();
			this.caqlat()
		},
	selectcolor(){
		this.flag = 0
			$(".colorgoods").on("click",$.proxy(function(){
				if(this.flag == 0){
					$(".colorgoods").css({border:"1px solid rgb(236,54,64)"});
					this.flag = 1;
				}else{
					$(".colorgoods").css({border:"1px solid rgb(229,229,229)"});
					this.flag = 0;
				}
			},this))
		},
		caqlat(){
//			this.add = $(".numgoods span").eq(0);
			//console.log(this.add)
			$(this.add).on("click",$.proxy(function(){
				//console.log(this.inp.val())
				this.num = this.inp.val();
				this.num++;
				this.inp.val(this.num);
			},this))
			$(this.sub).on("click",$.proxy(function(){
				//console.log(this.inp.val())
				this.num = this.inp.val();
				if(this.num==1)return
				this.num--;
				this.inp.val(this.num);
			},this))
		}
	}
	
	return new colorgood()
	
})