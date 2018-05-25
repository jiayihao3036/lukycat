define(["VerificationCode","jquery","sever"],function(VC){
	$(".leftlogin").on("click",function(){
		$(".leftlogintext").css({
			borderBottom: "2px solid rgb(255,103,0)",
			color: "rgb(255,103,0)",	
		})
		$(".rightlogintext").css({
			borderBottom: "none",
			color: "gray",	
		}),
		$(".lefttext").css({
			display:"block"
		})
		$(".righttext").css({
			display:"none"
		})
	})
		$(".rightlogin").on("click",function(){
		$(".rightlogintext").css({
			borderBottom: "2px solid rgb(255,103,0)",
			color: "rgb(255,103,0)",	
		}),
		$(".leftlogintext").css({
			borderBottom: "none",
			color: "gray",	
		}),
		$(".righttext").css({
			display:"block"
		}),
		$(".lefttext").css({
			display:"none"
		})
	})
		$("#check").on("click",function(){
			if(check.checked){
	   			$("#zhucebtu").css({
	   				backgroundColor:"rgb(255,103,0)"
	   			})
	   		}else{
	   			$("#zhucebtu").css({
	   				backgroundColor:"rgb(180,180,180)"
	   			})
	   		}
		})
	   $("#zhucebtu").on("click",function(){
	   		var check = document.getElementById("check");
	   		if(check.checked){
//	   			$.ajax()
				var yan = $("#yanzhengma").val()
				console.log(parseInt(yan));
				if(VC.num==parseInt(yan)){
					var username = $("#zhuceuser").val();
					var pwd = $("#zhucepwd").val();
					console.log(username)
					if(username==""||pwd==""){
						alert("用户名密码不能为空")	
					}else{
						$.ajax({
						url:"http://localhost:8081/lukyweb/lukycatphp/user.php",
						datatype:"jsonp",
						type:"POST",
						data:{username:username,password:pwd,type:"register"},					
						success:function (data) {//请求成功后调用的函数
				            alert("注册成功")
				            window.location.reload() 
				        },
				        error:function () {//请求失败后调用的函数
				            alert("fail");
				        }
					})
					}
					
				}else{
					alert("验证码错误");
					
				}
	   		}else{
	   			alert("请先同意幸运猫用户协议")
	   			
	   		}
	   		return false;
	   })
	   $("#btu").on("click",function(){
	   		//console.log(userphp)
	   		var username = $("#user").val();
			var pwd = $("#pws").val();
			if(username==""||pwd==""){
				alert("用户名密码不能为空")
			}else{
				$.ajax({
					type:"post",
					url:"http://localhost:8081/lukyweb/lukycatphp/user.php",
					data:{username:username,password:pwd,type:"login"},
					datatype:"jsonp",
					success:function(data){
						//console.log(1)
						//console.log(data)
						if(data==0){
							alert("账号或密码错误")
						}
						else{
							window.location.href="http://localhost:8081/lukyweb/lukycat/index.html"
						}
					},
					error:function(){
						alert("登录失败")
					}
					
				});
			}
			return false;
	   })
})