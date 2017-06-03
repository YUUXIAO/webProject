window.onload = function(){
	var activity = document.getElementById("activity");
	var top = activity.offsetTop+150;
	
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;

		if( scrollTop>=top ){
			activity.className += " "+"fixed";
		}else {
			activity.className = "";
		}
	}
	
}

