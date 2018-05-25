define(["select","jquery","sever"],function(select){
		$.ajax({
		type:"post",
		url:"http://localhost:8081/lukyweb/lukycatphp/cartshop.php",
		datatype:"jsonp",
		data:{type:"erg"},
		success:function(res){
			var num = 0;
			var sum = 0;
			var allgoods = document.getElementById("allgoods");
			var res = JSON.parse(res)
		//	console.log(res)
		for(var i = 0;i < res.length;i++){
			var str = `<div class="mygoods">
					<input type="checkbox" class="checkbox"  id="checkbox"/>
					<div class="myimg" >				
						<img width="80px" width="80px" src="${res[i].imgsrc}"/>		
					</div>
					<div class="maxname">
					<p class="name">${res[i].name}</p>
					</div>
					<p><img src="img/cath3.png"/>
					<span class="aaa">7天无理由退换</span></p>			
					<span class="delete">删除</span>
					<span class="summoney" id="summoney">¥
					<span style="font-size: 16px;">${res[i].mouney}</span></span>				
					<div class="num">
						<div class="numgoods">
							<span>+</span>
							<input type="text" name="btu" id="btu" value="1" />
							<span>-</span>
						</div>
					</div>
					<span class="money">¥<span id="moneynum">${res[i].mouney}</span></span>
				</div>`
			allgoods.innerHTML+=str
		}
		
			var arrgoods =  $(".allgoods").children(".mygoods");
			arrgoods.each(function(index){
				//删除
				arrgoods.eq(index).find(".delete").on("click",function(){
					arrgoods.eq(index).remove()
					$.ajax({
						type:"post",
						url:"http://localhost:8081/lukyweb/lukycatphp/cartshop.php",
						data:{type:"del",id:res[index].id},
						datatype:"jsonp",
						success:function(res){
							
						},
						error:function(){
							
						}
					});
				})
				var add = arrgoods.eq(index).find(".numgoods").children("span").first();
				var inp = arrgoods.eq(index).find(".numgoods").children("span").eq(1);				
				add.on("click",function(){					
					$(this).parents().eq(2).children("input")[0].checked=true;
					$(this).parents().eq(2).children("input").attr("checked","checked");
					arrgoods.eq(index).css({
								backgroundColor:"rgb(255,244,232)"
					})
					var val = parseInt($(this).next().val()) +1;
					$(this).next().val(val)
					var danjia =parseInt($(this).parents().find(".money").eq(index).find("span").html()) 
					var html = parseInt($(this).next().val())*danjia
					$(this).parents(".mygoods").find("#summoney").find("span").html(html)
					
				})
				inp.on("click",function(){					
					var val = parseInt($(this).prev().val()) -1;
					
					if(val<1){
						return
					}else{
						$(this).prev().val(val)
					}		
					var danjia =parseInt($(this).parents().find(".money").eq(index).find("span").html()) 
					var html = parseInt($(this).prev().val())*danjia
					$(this).parents(".mygoods").find("#summoney").find("span").html(html)
						//$("#selectnum").html(num)
				})
			})
			var allcheckbox = $(".checkbox");
			var allmygoods = $(".mygoods");
			for(let i = 0;i < allcheckbox.length;i++){		
				$(allcheckbox[i]).on("click",function(){					
					if(allcheckbox[i].checked==true){
						$(allmygoods[i]).css({
							backgroundColor:"rgb(255,244,232)"
						})
						num+=parseInt($("#btu").val()) 
						sum+=parseInt($(allmygoods[i]).find("span").eq(2).find("span").html()) ; 
					}else{
						$(allmygoods[i]).css({
							backgroundColor:"rgb(255,255,255)"
						})

				
				num-=parseInt($("#btu").val()) 
				sum -= parseInt($(allmygoods[i]).find("span").eq(2).find("span").html()) ;
			}
			if(num<=0){
				$("#selectnum").html(0)
				
			}else{
				$("#selectnum").html(num)
			}
			if(sum<0){
				$("#sum").html(0)
				sum=0
			}else{
				$("#sum").html(sum)
			}
			
		})
	}
	if(res.length==0){
		$(".empty").css({
			display:"block"
		})
	}else{
		$(".empty").css({
			display:"none"
		})
	}
		},
		error:function(){
			alert("获取失败")
		}
		
	});
	
	
})