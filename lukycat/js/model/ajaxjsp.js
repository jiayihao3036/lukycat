define(["jquery","sever"],function(){
	$.ajax({
		type:"get",
		url:"http://localhost:8081/lukyweb/data/luky.php",
		datatype:"jsonp",
		jsonpCallback:"cb",
		timeout:5000,
		success:function(data){			
			var data = JSON.parse(data);
			var html = document.getElementById("content1");
			var html2 = document.getElementById("content2");
			var html3 = document.getElementById("content3");
			var html4 = document.getElementById("content4");
			var html5 = document.getElementById("content5");
			for(let i = 0;i < 14;i++){
				var str = `<a class="json" href="goods.html"><div></div><img width="72%" height="72%"  src="${data[i].imgsrc}"/>							
							<nav>
							<p>${data[i].name}</p>
							<span >¥</span><span class="price">${data[i].mouney}</span></nav></a>`
				html.innerHTML+=str;

			}
			for(var i = 14;i < 28;i++){
				var str = `	<a class="json" href="goods.html"><div></div><img width="72%" height="72%"  src="${data[i].imgsrc}"/>							
							<nav>
							<p>${data[i].name}</p>
							<span >¥</span><span class="price">${data[i].mouney}</span></nav></a>`
				html2.innerHTML+=str;	
			}
			for(var i = 29;i < 43;i++){
				var str = `	<a class="json" href="goods.html"><div></div><img width="72%" height="72%"  src="${data[i].imgsrc}"/>							
							<nav>
							<p>${data[i].name}</p>
							<span >¥</span><span class="price">${data[i].mouney}</span></nav></a>`
				html3.innerHTML+=str;	
			}
			for(var i = 43;i < 57;i++){
				var str = `	<a class="json" href="goods.html"><div></div><img width="72%" height="72%"  src="${data[i].imgsrc}"/>							
							<nav>
							<p>${data[i].name}</p>
							<span >¥</span><span class="price">${data[i].mouney}</span></nav></a>`
				html4.innerHTML+=str;	
			}
			for(var i = 57;i < 71;i++){
				var str = `	<a class="json" href="goods.html"><div></div><img width="72%" height="72%"  src="${data[i].imgsrc}"/>							
							<nav>
							<p>${data[i].name}</p>
							<span >¥</span><span class="price">${data[i].mouney}</span></nav></a>`
				html5.innerHTML+=str;	
			}
			$(".json").each(function(index){
				$(".json").eq(index).on("click",function(){
					var imgsrc = data[index].imgsrc;
					var name = data[index].name;
					var mouney = data[index].mouney;
					$.ajax({
						type:"post",
						url:"http://localhost:8081/lukyweb/lukycatphp/cartshop.php",
						data:{imgsrc:imgsrc,name:name,mouney:mouney,type:"add"},
						datatype:"jsonp",
						success:function(res){
							alert("已添加到购物车");
							window.location.href = "http://localhost:8081/lukyweb/lukycat/goods.html";	
						},
						error:function(){
							alert("添加失败")
						}
					});
					return false
				})
			})
			
			
		},
		error:function(){
			alert("服务器请求超时")
		}
	});
})
