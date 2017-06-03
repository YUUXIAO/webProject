$(function(){
	//放大镜效果
	$('.normal').hover(function(){
		
		//鼠标移入"显示"方块
		$('.box').show();
		$(".bigImg").show();
		$(".normal").mousemove(function(e){
			
			var l = e.pageX-$(this).offset().left-$(".box").width()/2,
				t = e.pageY-$(this).offset().top-$(".box").height()/2,
				maxL = $(this).width()-$(".box").width(),
				maxT = $(this).height()-$(".box").height(),
				multipleL = $(".bigImg img").width()/$(this).width();
				multipleT = $(".bigImg img").height()/$(this).height();
			//防止方块移出图片内容
			if(l>maxL){
				l=maxL;
			}else if( l<0 ){
				l=0;
			}
			if(t>maxT){
				t=maxT;
			}else if( t<0 ){
				t=0;
			}

			//鼠标移动方块随着移动
			$(".box").css({ left:l,top:t} );
			//在大容器显示放大图片
			$(".bigImg img").css({ left:-multipleL*l, top:-multipleT*t });
			
		});
		
	},function(){
		$(".box").hide();
		$(".bigImg").hide();
	});
	//规格
	$(".choose,.suit").click(function(){
		$(this).css("border","1px solid #e3393c").siblings().css("border","1px solid #ccc");
	});
	//图片切换
	$(".imgList li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var src = $(this).find("img").attr("src");
		$(".images").find("img").attr( "src",src );
	});
	//购物车计数
	var num = $(".add span").text();
	$(".add button").eq(0).click(function(){
		num++;
		$(".add span").text(num);
	});
	$(".add button").eq(1).click(function(){
		
		if( num<=1 ){
			num = 1;
		}else{
			num--;
		}
		$(".add span").text(num);
	});
	//店内分类
	$(".shopsList>li>a>span").click(function(){
		$(this).text("-");
		$(this).parents("li").find(".showList").slideToggle("slow");
	})
	//右边商品介绍
	$(".introduce_right .topTitle>ul>li>a").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
		var info = $(this).attr("data-info");
		var t = $("#"+info).offset().top;
		$("html,body").animate({"scrollTop":t},500);
	});
	$(".hot h4").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".hotConent ul").eq( index ).show().siblings().hide();
	});
});
