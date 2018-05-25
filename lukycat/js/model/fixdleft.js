define(["jquery"],function(){	
	document.onscroll=function(){
		
//		for(var i = 0;i < $("#fixdleft").children("div").length;i++){
//			$("#fixdleft").children("div")[i].css(backgroundColor:"rgb(255,255,255)")
//		}

//难受啊！！！
		if($(document).scrollTop() >=1200&&$(document).scrollTop()<2300){
		$("#fixdleft").fadeIn();
		$("#fixdleft").children("div").eq(0).css({backgroundColor:"rgb(176,198,98)"});
		$("#mya1").css({color:"rgb(255,255,255)"});
		$("#mya2").css({color:"rgb(155,155,155)"});
		$("#mya3").css({color:"rgb(155,155,155)"});
		$("#mya4").css({color:"rgb(155,155,155)"});
		$("#mya5").css({color:"rgb(155,155,155)"});
		$("#fixdleft").children("div").eq(1).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(2).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(3).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(4).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		}else if($(document).scrollTop() >=2300&&$(document).scrollTop()<3400){
		$("#fixdleft").children("div").eq(1).css({backgroundColor:"#84B6F5"});	
		$("#mya2").css({color:"rgb(255,255,255)"});
		$("#mya1").css({color:"rgb(155,155,155)"});
		$("#mya3").css({color:"rgb(155,155,155)"});
		$("#mya4").css({color:"rgb(155,155,155)"});
		$("#mya5").css({color:"rgb(155,155,155)"});
		$("#fixdleft").children("div").eq(0).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(2).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(3).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(4).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		}else if($(document).scrollTop() >=3400&&$(document).scrollTop()<4400){
		$("#fixdleft").children("div").eq(2).css({backgroundColor:"#C094E3",color:"rgb(255,255,255)"});
		$("#mya3").css({color:"rgb(255,255,255)"});
		$("#mya2").css({color:"rgb(155,155,155)"});
		$("#mya1").css({color:"rgb(155,155,155)"});
		$("#mya4").css({color:"rgb(155,155,155)"});
		$("#mya5").css({color:"rgb(155,155,155)"});
		$("#fixdleft").children("div").eq(0).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(1).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(3).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(4).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		}else if($(document).scrollTop() >=4400&&$(document).scrollTop()<5500){
		$("#fixdleft").children("div").eq(3).css({backgroundColor:"#F29AC0"});	
		$("#mya4").css({color:"rgb(255,255,255)"});
		$("#mya2").css({color:"rgb(155,155,155)"});
		$("#mya3").css({color:"rgb(155,155,155)"});
		$("#mya1").css({color:"rgb(155,155,155)"});
		$("#mya5").css({color:"rgb(155,155,155)"});
		$("#fixdleft").children("div").eq(0).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(1).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(2).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(4).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		}else if($(document).scrollTop() >=5500){
		$("#fixdleft").children("div").eq(4).css({backgroundColor:"#D1BD7E"});	
		$("#mya5").css({color:"rgb(255,255,255)"});
		$("#mya2").css({color:"rgb(155,155,155)"});
		$("#mya3").css({color:"rgb(155,155,155)"});
		$("#mya4").css({color:"rgb(155,155,155)"});
		$("#mya1").css({color:"rgb(155,155,155)"});
		$("#fixdleft").children("div").eq(0).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(1).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(2).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		$("#fixdleft").children("div").eq(3).css({backgroundColor:"rgb(255,255,255)",color:"rgb(153,153,153)"});
		}else{
		$("#fixdleft").fadeOut();
		}
	}
	
})