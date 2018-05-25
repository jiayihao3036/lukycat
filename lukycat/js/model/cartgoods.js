define(["select","jquery","sever"],function(){
	var num = 0;
	var sum = 0;
	$("#myshopping").on("click",function(){
		//console.log(1)
		window.location.href = "http://localhost:8081/lukyweb/lukycat/index.html";
	})
	$("#mycart").on("click",function(){
		//console.log(1)
		window.location.href = "http://localhost:8081/lukyweb/lukycat/cart.html";
	})
	$("#allselect").on("click",function(){
		num=$(".allgoods .mygoods").length
		$("#selectnum").html(num)
		var $check = $(".checkbox")
		var $allbtn = $("#allselect");		
		if($allbtn[0].checked){
			//选中;
			for(let i = 0;i < $check.length;i++){
				$check.attr("checked","checked");
				$check[i].checked = true;
				$(".mygoods").css({
					backgroundColor:"rgb(255,244,232)"
				})				
			}
		}else{
			for(var i = 0;i < $check.length;i++){
				$check[i].checked = false;
				$check.removeAttr("checked");
				num=0
				$("#selectnum").html(num)
				$(".mygoods").css({
					backgroundColor:"rgb(255,255,255)"
				})
			}
					
		}		
	})
	$("#allselectfoot").on("click",function(){
	num=$(".allgoods .mygoods").length
		$("#selectnum").html(num)
		var $check = $(".checkbox")
		var $allbtn = $("#allselectfoot");		
		if($allbtn[0].checked){
			//选中;
			for(var i = 0;i < $check.length;i++){
				$check.attr("checked","checked");
				$check[i].checked = true;	
				$(".mygoods").css({
					backgroundColor:"rgb(255,244,232)"
				})
			}	
		}else{
			for(var i = 0;i < $check.length;i++){
				$check[i].checked = false;
				$check.removeAttr("checked");
				num=0
				$("#selectnum").html(num);
				$(".mygoods").css({
					backgroundColor:"rgb(255,255,255)"
				})
			}
		}		
	})
	$("#alldelete").on("click",function(){
		$.ajax({
			type:"post",
			url:"http://localhost:8081/lukyweb/lukycatphp/cartshop.php",
			datatype:"jsonp",
			data:{type:"alldel"},
			success:function(res){
				alert("已清空购物车");
				window.location.href="http://localhost:8081/lukyweb/lukycat/cart.html"
			},
			error:function(){
				alert("清空失败");
			}
		});
	})
	
	
})