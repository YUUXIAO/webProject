$(function(){
	//顶部定位区域
	$('.addressList li').on("click",function(){
		$(this).find('a').addClass('add_checked')
			.end().siblings().find('a').removeClass('add_checked');
		var add = $(this).find('a').text();
		$('.address span').text( add );
	});

	//顶部右边列表“用户”区域
		var unm=$(".dls dl").length;
		/*var len=0;
		if(unm/1>parseInt(unm/1)){len=parseInt(unm/3)}else{len=parseInt(unm/3)-1}*///判断分成几个区块*/
		var click_num=0;
		//向左切换，一次一个
		$(".turnLeft").click(function(){
			click_num++;
			if(click_num<=6){
				$(".dls").animate({left:"-"+click_num*76+"px"},100);
			}else{
				click_num=6; 
			}
		});
		//向右切换,一次一个
		$(".turnRight").click(function(){
			click_num--;
			if(click_num>=0){
				$(".dls").animate({left:"-"+click_num*76+"px"},100);
			}else{click_num=0;}
		});
});