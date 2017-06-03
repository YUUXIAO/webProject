// JavaScript Document
window.onload=function(){
		
		/*轮播图*/
		var ads = document.getElementById("ads");
		var imgs = ads.getElementsByTagName("img");
		var lits = ads.getElementsByTagName("li");
		var timer = null;
		var cur = 0;
		var len = lits.length;

		 // 定义并调用自动播放函数
		timer = setInterval( autoPlay,4000 );

		//鼠标滑过容器停止播放
		ads.onmouseover = function(){
			clearInterval( timer );
		}
		// 鼠标离开容器时继续播放下一张
		ads.onmouseout = function(){
			timer = setInterval( autoPlay,5000 );
		}
		// 遍历所有圆点导航实现划过切换至对应的图片
		for( var i =0; i<len; i++ ){
			(function(j){
				lits[j].onclick = function(){
					changePic(j);
					cur = j;
				}
			})(i);
		}


		function autoPlay(){
			cur++;
			if( cur>=len ){ cur = 0 }
			changePic( cur );
		}
		// 定义图片切换函数
		function changePic( curIndex ){
			for( var i= 0;i<len;i++ ){
				imgs[i].className = "unshow";
				lits[i].className="";
			}
			imgs[curIndex].className = "show";
			lits[curIndex].className = "active";
			
		}

		/*轮播图结束*/
		
		
		var mus=document.getElementById("musical");
		var fash=document.getElementById("fash1");
		var quik=document.getElementById("quik1");
		var tab=mus.getElementsByTagName("div");
		
		fash.onclick=function(){
			quik.className="";
			this.className="show1";
			tab[1].className="";
			tab[0].className="show";
		}
		quik.onclick=function(){
			fash.className="";
			this.className="show1";
			tab[0].className="";
			tab[1].className="show";
			
			
		}
		
		//推荐
		var sen2=document.getElementById("sen2");
		var sen3=document.getElementById("sen3");
		var but1=document.getElementById("but1");
		var but2=document.getElementById("but2");
		but1.onclick=function(){
			this.style.background="#80cfbb";
			but2.style.background="#23ab88";
			sen3.className="";
			sen2.className="show";
		}
		but2.onclick=function(){
			this.style.background="#80cfbb";
			but1.style.background="#23ab88";
			sen2.className="";
			sen3.className="show";
		}
		
		//hot列表
		var li=document.getElementById("hot").getElementsByTagName("a");
		var lis=document.getElementById("hot-lis").getElementsByTagName("ul");
		
		for(var m=0;m<lis.length;m++){
			li[m].index=m;
			li[m].onclick=function(){
				for(var n=0;n<lis.length;n++){
					li[n].className="";
					lis[n].className="";
				}
				this.className="sec";
				lis[this.index].className="sec";
			}
		}
}


