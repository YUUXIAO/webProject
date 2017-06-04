$(function(){


	//右边菜单
	function menuShow(){

		$(document).scroll(function(){

			var height = $("#header").height();

			if( $(document).scrollTop()>height ){

				$("#rightMenu").fadeIn(500);
			}else{
				$("#rightMenu").fadeOut(500);
			}

		});
	}
	menuShow();

	$(".contact").click(function(){

		var top =  $("#contact").offset().top;
		$("html,body").animate({"scrollTop":top},500);

	});

	$(".more").click(function(){
		
		var top =  $("#skill").offset().top;
		$("html,body").animate({"scrollTop":top},500);

	});

	$(".send").click(function(){
		alert("建设中！")

	});

	//动态记录页面滚动
	function scrollPostion(){

		$(document).scroll(function(){

			var introduceTop =  $("#introduce").offset().top;
			var skillTop =  $("#skill").offset().top;
			var eductionTop =  $("#eduction").offset().top;
			var productionTop =  $("#production").offset().top;
			var contactTop =  $("#contact").offset().top;

			if($(document).scrollTop()>introduceTop){$("#rightMenu li").eq(1).addClass("sec").siblings().removeClass("sec")}
			if($(document).scrollTop()>skillTop ){ $("#rightMenu li").eq(2).addClass("sec").siblings().removeClass("sec");}
			if($(document).scrollTop()>eductionTop ){$("#rightMenu li").eq(3).addClass("sec").siblings().removeClass("sec")}
	   		if($(document).scrollTop()>productionTop){$("#rightMenu li").eq(4).addClass("sec").siblings().removeClass("sec")}
			if($(document).scrollTop()>contactTop ){$("#rightMenu li").eq(5).addClass("sec").siblings().removeClass("sec")}

		});
	}
	scrollPostion();

	//点出右边按钮
	function clickLink(){

		$("#rightMenu li a").click(function(){

			var atr= $(this).attr('href');
			var t=$(atr).offset().top;

			$("html,body").animate({"scrollTop":t},500);

			return false;
		});
	}
	clickLink();

	//作品展示
	function production(){

		$("#production li").click(function(){

			$(this).find('a').addClass("active").parent().siblings().find("a").removeClass("active");

			$(".images").eq($(this).index()).fadeIn(300).siblings().fadeOut(300);

			return false;
		});
	}

	production();


	new WOW().init();
	
});

