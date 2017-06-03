var lineChartData = {
	//X坐标数据
	labels : ["2","4","6","8","10","12","14","16","18","20","22","24"],
	datasets : [
		{	
			//统计表的背景颜色
			fillColor : "rgba(255,255,255,0)",
			//统计表画笔颜色
			strokeColor : "rgba(0, 0,0, 1)",
			//点的颜色
			pointColor : "rgba(155, 39, 39, 1);",
			//点边框的颜色
			pointStrokeColor : "#fff",
			//鼠标触发时点的颜色
			pointHighlightFill : "#fff",
			//鼠标触发时点边框的颜色
			pointHighlightStroke : "rgba(220,220,220,1)",
			//Y坐标数据
			data : [1,2,3,4,5,5,6,7,8,8,9,9]
		},
		{
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "rgba(92, 184, 92, 1)",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [2,2,1,4,2,4,5,7,8,8,4,3]
		}
	]

}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}