// JavaScript Document
	var write = document.getElementById("write");
	var diary = document.getElementById("diary");
	var mask = document.getElementById("mask");
	var close = document.getElementById("close");
	var submit = document.getElementById("submit");

	//点击写日记按钮弹框和背景图片出现
	write.onclick = function(){
		diary.style.display = "block";
		mask.style.display="block";
		addjustPosition( diary );
		maskPosition();
		
	}

	//触发滚动条和改变窗口大小黑色背景依旧全覆盖
	window.onscroll = function(){
		if( diary.style.display=='none' ){ return; }
		maskPosition();
			
	}
	window.onresize = function(){
		if( diary.style.display=='none' ){ return; }
		addjustPosition( diary );
		if(mask.style.display=='none'){ return; }
		maskPosition();
	}

	//点击关闭或者发表按钮弹框和背景图片消失
	close.onclick = function(){
		hide( diary );
		hide( mask );
	}
	submit.onclick = function(){
		hide( diary );
		hide( mask );
	}

	//弹框调整位置
	function addjustPosition( obj ){
		var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		obj.style.left = ( document.documentElement.clientWidth-obj.offsetWidth )/2+obj.scrollLeft+"px";
		obj.style.top = ( document.documentElement.clientHeight-obj.offsetHeight )/2+obj.scrollTop+100+"px";
	}
	//黑色背景定位
	function maskPosition(){
		var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		mask.style.width=Math.max(document.body.offsetWidth,document.documentElement.clientWidth)+'px';
		mask.style.height=Math.max(document.body.offsetHeight,document.documentElement.clientHeight)+scrollTop+'px';
	}

