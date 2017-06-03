/* 
	Xie Kai's JavaScript Document.
	After Miaowei Classroom learning, completely write their own code library.
*/



/*---------$()使用  开始---------*/

function $( v ){
	if( typeof v === 'function' ){	//如果等于函数，就在页面加载完之后执行代码
		window.onload = v;
	} else if ( typeof v === 'string' ) {	//如果等于字符串，那么就查找id
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {	//如果等于对象，就直接返回对象
		return v;
	}
}

/*---------$()使用  结束---------*/




/*---------getStyle()，盒子计算后显示结果  开始---------*/

//获取计算后的盒子样式，obj填写盒子，attr填写宽或者高，包括透明度等等
function getStyle( obj, attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}

/*---------getStyle()，盒子计算后显示结果  结束---------*/





/*---------doMove()，可以动的盒子  开始---------*/

//obj是盒子  attr是要走的宽或者高  dir是步长，target是到达的位置，endfn是可以继续执行的函数
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 30);
}

/*---------doMove()，可以动的盒子  结束--------*/






/*---------shake()，可以抖动的盒子  开始---------*/

//抖函数，obj是盒子，attr是top或者left，endFn是可以执行另外的函数 shake( this, 'left');
function shake ( obj, attr, endFn ) {
	var pos = parseInt( getStyle(obj, attr) );
	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
	var timer = null;
		
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
	if(obj.onOff !== true ){	//开关如果不等于true，就执行下面的代码 注：避免重复使用抖
		clearInterval( obj.shake );
		obj.shake = setInterval(function (){
			obj.onOff = true;	//开始执行的时候，一直为true，但是这里的true是关闭
			obj.style[attr] = pos + arr[num] + 'px';
			num++;
			if ( num === arr.length ) {
				clearInterval( obj.shake );
				endFn && endFn();
				obj.onOff = false;	//执行完之后，就变成flase，然后又可以开始点击
			}
		}, 50);
	}
}

/*---------shake()，可以抖动的盒子  结束---------*/


/*---------hide()，渐隐 obj是盒子，sec是渐隐时间，endFn是继续执行的函数---------*/
function hide(obj,cy,sec,endFn){
	var timer = null;
	var fadeNum = Number(getStyle( obj, 'opacity' )*100);
	var fadeNum1 = Number(getStyle( obj, 'opacity' ));
	
	timer = setInterval(function(){
		fadeNum -= 10;
		fadeNum1 -=0.1;
		obj.style.filter="alpha(opacity="+fadeNum+")";  
		obj.style['-moz-opacity'] =fadeNum1;  
		obj.style['-khtml-opacity']=fadeNum1;  
		obj.style.opacity = fadeNum1;
		if(fadeNum==cy*100 || fadeNum1==cy){
			clearInterval( timer );
			endFn && endFn();
		}
	},sec);
}

/*---------hide()，渐隐---------*/



/*---------out()，渐出 obj是盒子，sec是渐出时间，endFn是继续执行的函数---------*/
function out(obj,cy,sec,endFn){
	var timer = null;
	var fadeNum = Number(getStyle( obj, 'opacity' )*100);
	var fadeNum1 = Number(getStyle( obj, 'opacity' ));
	timer = setInterval(function(){
		fadeNum += 10;
		fadeNum1 +=0.1;
		obj.style.filter="alpha(opacity="+fadeNum+")";  
		obj.style['-moz-opacity'] =fadeNum1;  
		obj.style['-khtml-opacity']=fadeNum1;  
		obj.style.opacity = fadeNum1;
		if(fadeNum==cy*100 || fadeNum1==cy){
			clearInterval( timer );
			endFn && endFn();
		}
	},sec);
}

/*---------out()，渐出---------*/