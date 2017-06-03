//判断元素是否有class
function hasClass( ele, clas ){
	return ele.className.match(new RegExp("(\\s|^)" + clas + "(\\s|$)"));
}
//为指定的元素添加class
function addClass(ele, clas) {
    if (!this.hasClass(ele, clas)) ele.className += " " + clas;
}
//删除指定元素的class
function removeClass(ele, clas) {
    if (hasClass(ele, clas)) {
        var reg = new RegExp("(\\s|^)" + clas + "(\\s|$)");
        ele.className = ele.className.replace(reg, " ");
    }
}
//如果存在(不存在)，就删除(添加)一个class
function toggleClass(ele,clas){ 
    if(hasClass(ele,clas)){ 
        removeClass(ele, clas); 
    }else{ 
        addClass(ele, clas); 
    } 
}
/*弹出框*/
function popAlert( obj,head ){
    //判断浏览器类型是否为IE
    var isIE = (document.all) ? true : false;
    var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
    //获取弹窗主体
    obj.style.position = !isIE6 ? "fixed" : "absolute";
    obj.style.zIndex = "999999";
    obj.style.display = "block";
    obj.style.left = obj.style.top = "50%";
    obj.style.marginTop = -obj.offsetHeight/2 + "px";
    obj.style.marginLeft = -obj.offsetWidth/2 + "px";
    //创建灰色背景遮罩层
    var layer = document.createElement("div");
    layer.id = "layer";
    layer.style.width = layer.style.height = "100%";
    layer.style.position = !isIE6 ? "fixed" : "absolute";
    layer.style.top = layer.style.left = 0;
    layer.style.backgroundColor = "#888";
    layer.style.zIndex = "999998";
    layer.style.opacity = "0.6";
    document.body.appendChild( layer );
    //鼠标按住可移动
    alertMove( head );
    //弹窗主体在IE下的样式布局
    function alertIestyle(){
        obj.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) +
            "px";
        obj.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) +
            "px";
    }
    //灰色遮罩在IE下的样式布局
    function layerIestyle(){
        layer.style.marginTop = document.documentElement.scrollTop - layer.offsetHeight / 2 + "px";
        layer.style.marginLeft = document.documentElement.scrollLeft - layer.offsetWidth / 2 + "px";
    }
    if (isIE) {
        layer.style.filter = "alpha(opacity=60)";
    }
    if (isIE6) {
        layerIestyle()
        alertIestyle();
        window.attachEvent("onscroll", alertIestyle);
        window.attachEvent("onresize", layerIestyle );
    }
    //鼠标按住可移动
    function alertMove( obj ){

        var onOff = false;
        var l= 0; t= 0; x= 0; y= 0;
        var parent = obj.parentNode;
        //按下鼠标
        obj.onmousedown = function( event ){

            var ev = event || window.event;
            x = ev.clientX;
            y = ev.clientY;
            l = parseInt( parent.offsetLeft );
            t = parseInt( parent.offsetTop );

            onOff = true;
            obj.style.cursor = "move";
            //移动鼠标
            document.onmousemove = function( event ){
                if( onOff ){
                    var ev = event || window.event;
                    parent.style.left = l - ( x-ev.clientX ) + "px";
                    parent.style.top = t - ( y-ev.clientY ) +"px";
                    parent.style.marginTop = "";
                    parent.style.marginLeft ="";
                }
            }
            //抬起鼠标
            document.onmouseup = function(){
                if( onOff ){
                    onOff = false;
                }
            }

        }
    }
}

