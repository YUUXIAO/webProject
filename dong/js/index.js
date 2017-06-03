$(function(){

		//右浮动列表回到顶部
		$('.top').click(function(){
			
			$("html,body").animate({"scrollTop":"0px"},200);

		});

		/* 左边浮动定位列表 */
		$(document).scroll(function(){
			//滚动时上边固定列表 
			var kill = $("#secKill").offset().top;
			$(document).scrollTop()>kill?$("#topFixed").slideDown(300):$("#topFixed").slideUp(300);
			//滚动时左边固定列表
			var leftTop= $('#enjoy').offset().top-100;
			$(document).scrollTop()>leftTop?$("#leftFixed").show():$("#leftFixed").hide();
			
			var life =  $('#life').offset().top-200;
			var phone =  $('#phone').offset().top-200;
			var computer =  $('#computer').offset().top-200;
			var sport =  $('#sport').offset().top-200;
			var eat =  $('#eat').offset().top-200;
			var mom =  $('#mom').offset().top-200;
			var book =  $('#book').offset().top-200;
			var virtual =  $('#virtual').offset().top-200;
			var enough =  $('#enough').offset().top-200;

			if( $(document).scrollTop()>life ){ $("#leftFixed li").eq(1).addClass('active').siblings().removeClass('active'); }
			if( $(document).scrollTop()>phone ){ $("#leftFixed li").eq(2).addClass('active').siblings().removeClass('active'); }
			if( $(document).scrollTop()>computer){$("#leftFixed li").eq(3).addClass('active').siblings().removeClass('active'); }
			if( $(document).scrollTop()>sport ){ $("#leftFixed li").eq(4).addClass('active').siblings().removeClass('active'); }
			if( $(document).scrollTop()>eat ){ $("#leftFixed li").eq(5).addClass('active').siblings().removeClass('active'); }
			if( $(document).scrollTop()>mom ){ $("#leftFixed li").eq(6).addClass('active').siblings().removeClass('active'); }
			if( $(document).scrollTop()>book ){ $("#leftFixed li").eq(7).addClass('active').siblings().removeClass('active'); }
			if( $(document).scrollTop()>virtual ){ $("#leftFixed li").eq(8).addClass('active').siblings().removeClass('active');}
			if( $(document).scrollTop()>enough ){ $("#leftFixed li").eq(9).addClass('active').siblings().removeClass('active'); }	
				
		});
		//点击相应按钮跳转到相应模块
		$('#leftFixed li a').click(function(){

			var atr= $(this).attr('href');
			var t=$(atr).offset().top-50;

			$("html,body").animate({"scrollTop":t},500);
			return false;
			
		});


		//main_ads_right
		$(".line li a").hover(function(){
			var index = $(this).parents('li').index();
			$(this).next('div').addClass('show').parent().siblings().children('.show').removeClass('show');
			$('.redLine').animate({'left':index*20},50)
		});


		//广告图片轮播
		var cur = 0;
		var timer = null;
		// 遍历所有圆点导航实现划过切换至对应的图片
		$('.doll li').click(function(){
			clearInterval( timer );
			cur= $(this).index();
			$(this).addClass('sec').siblings().removeClass('sec');
			$('.ads img').eq(cur).fadeIn(200).siblings().fadeOut(200);

		});
		
		//鼠标滑过容器停止播放
		$('.carouselBox').hover(function(){
			clearInterval( timer );
		},function(){
			showImg();
		});

		//定义图片切换函数
		function showImg(){

			timer = setInterval(function(){
				cur++;
				if(cur>5){
					cur = 0;
				}
				$('.ads img').eq(cur).fadeIn(200).siblings().fadeOut(200);
				$('.doll li').eq(cur).addClass('sec').siblings().removeClass('sec');
			},2000);
		}

		showImg();


		//秒杀图片滚动
		var kill_num = $('.secBody .images dl').length;
		var kill_len = 0;
		var click_num  = 0;

		if(kill_num/5>parseInt(kill_num/5)){
			kill_len = parseInt(kill_num/5);
		}else{
			kill_len = parseInt(kill_num/5-1);
		}
		
		$('.secBody .dirl').click(function(){
			click_num++;
			if(click_num<=kill_len){
				$('.scrollImg .images').animate({'left':-click_num*1000},300);
			}else{
				click_num = kill_len;
			}
		});
		$('.secBody .dirr').click(function(){
			click_num--;
			if(click_num>=0){
				$('.scrollImg .images').animate({'left':-click_num*1000},300);
			}else{
				click_num = 0;
			}
		});

		/*秒杀倒计时*/
		function countDown(years,months,days,hours,minutes){
		  var dateFinal = new Date(years,months,days,hours,minutes);  //设置倒计时到达时间
		  var dateNow = new Date();  //获取系统当前时间
		  var dateSub = dateFinal - dateNow;  //计算差值，单位毫秒
		  var day = hour = minute = second = dayBase = hourBase = minuteBase = secondBase = 0;  //初始化各个数值
		  
		  dayBase = 24 * 60 * 60 * 1000;  //计算天数的基数，单位毫秒。
		  hourBase = 60 * 60 * 1000;  //计算小时的基数，单位毫秒。
		  minuteBase = 60 * 1000;  //计算分钟的基数，单位毫秒。
		  secondBase = 1000;  //计算秒钟的基数，单位毫秒。
		  day = Math.floor(dateSub / dayBase);  //计算天数，并取下限值。
		  hour = Math.floor(dateSub % dayBase / hourBase);  //计算小时，并取下限值。
		  minute = Math.floor(dateSub % dayBase % hourBase / minuteBase);  //计算分钟，并取下限值。
		  second = Math.floor(dateSub % dayBase % hourBase % minuteBase / secondBase);  //计算秒钟，并取下限值.
		  $('.secHead .hour').text(toDouble(hour));
		  $('.secHead .min').text(toDouble(minute));
		  $('.secHead .sec').text(toDouble(second));
		 
		}
		//当小时，分钟和秒钟小于 10 的时候会显示为个位数，在前面加 0。
		function toDouble(num){
		  if(num < 10){
		    return '0'+ num;
		  }else{
		    return '' + num;
		  }
		}
		setInterval(function(){
		  countDown(2017,9,1,10,0);
		},1000);

		/*优选专辑图片*/
		var bet_cur=0;
		var bet_timer= null;

		$('.body .betDoll li').hover(function(){
			clearInterval(bet_timer);
			bet_cur= $(this).index();
			$(this).addClass('sec').siblings().removeClass('sec');
			$('.betterImages').eq(bet_cur).fadeIn(200).siblings('.betterImages').fadeOut(200);
		},function(){
			betImg();
		});

		$('.bet').hover(function(){
			clearInterval(bet_timer);
		},function(){
			betImg();
		});

		function betImg(){
			bet_timer = setInterval(function(){
				bet_cur++;
				if(bet_cur>2){
					bet_cur=0;
				}
				$('.betterImages').eq(bet_cur).fadeIn(200).siblings('.betterImages').fadeOut(200);
				$('.betDoll li').eq(bet_cur).addClass('sec').siblings().removeClass('sec');
			},2000);
		}
		betImg();


		/* 排行榜*/
		$('.ranking .body>ul>li').hover(function(){
			var ranking_index = $(this).index();
			$(this).parent().siblings().eq(ranking_index).addClass('show').siblings().removeClass('show');
			$('.bar').stop().animate({"left":ranking_index*75},100);
		},function(){
			$('.bar').stop().animate({"left":ranking_index*75},100);
		});
});
