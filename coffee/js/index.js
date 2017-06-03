
$(function(){
	//页面加载时刷新当前页面
	$(window).resize(function() {
	 	refresh();
	});
	function refresh(){
	    window.location.reload();
	}
	//导航切换
	$("#navbar .nav>li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

	/*平滑切换*/
	$(".nav").singlePageNav({
		offset: 70
	});
	/*小屏幕导航点击关闭*/
	$(".navbar-collapse a").click(function(){
		$(".navbar-collapse").collapse("hide");
	});

	//轮播图
	$("#carousel").carousel({interval: 3000});

	//咖啡机器
	var cur = 0;
	var imgLen = $(".machineImg li").length;

	$(".dirl").click(function(e){
		$(this).addClass("checked").css("textDecoration"," none").siblings().removeClass("checked");
		if(cur==imgLen-1){return false;}else{ cur++; }
		change();
		e.preventDefault();

	});
	$(".dirr").click(function(e){
		$(this).addClass("checked").css("textDecoration"," none").siblings().removeClass("checked");
		if(cur<=0){return false;}else{ cur--; }
		change();
		e.preventDefault();
			
	});

	function change(){
		var imgLength = $(".machineImg li").outerWidth();
		$(".machineImg").animate({"left":-imgLength*cur},300);
		var text = $(".machineImg img").eq(cur).attr("alt");
		$(".machineText span").text(text);
	}
	//hot
	var hotHeight = $(".hotImg").height();
	$(".recommend").height(hotHeight);
	//门店分布
	$("#address .col-md-3").hover(function(){
		$(this).addClass("show").siblings().removeClass("show");
	});
	//about
	var aboutHeight = $(".aboutText").outerHeight();
	$("#about").height(aboutHeight);

});
