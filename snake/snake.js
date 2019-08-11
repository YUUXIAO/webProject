var map = {"width":1000,"height":500}
var box = {"width":50,"height":50}
var snake = []
var other = []
var vnum = map.height / box.height
var hnum = map.width / box.width
var move_dir = 1
var paused = false
window.onload = function(){
  initMap()
  setfood()
  game = setInterval(snakemove,100)
  document.onkeydown = function(){
    console.log(event.keyCode)
    switch(event.keyCode){
      case 37: {if (move_dir!=1){move_dir = 3;break}break}
      case 38: {if (move_dir!=2){move_dir = 4;break}break}
      case 39: {if (move_dir!=3){move_dir = 1;break}break}
      case 40: {if (move_dir!=4){move_dir = 2;break}break}
      case 32: {if (paused){paused = false;break}else{paused=true;break;}}
    }
  }
}

function initMap(){
	var map_target=document.getElementById("map");
	map_target.style.width=map.width+"px";
	map_target.style.height=map.height+"px";
	var newSpan=null;
	for(var i=1;i<=hnum*vnum;i++){
		newSpan = document.createElement("span");
		newSpan.style.width = box.width+"px";
		newSpan.style.height = box.height+"px";
		newSpan.id=i;
		map_target.appendChild(newSpan);
		if(i<=5){
			newSpan.className="snake";
			snake.push(newSpan);
		}
    else {
      other.push(newSpan.id)
    }
	}
  headId = 5
  tailId = 1
}

function  setfood(){
  idx = other[Math.floor(Math.random()*other.length)]
  document.getElementById(idx).className = "food";
}

function snakemove(){
  if (paused){
    return
  }
switch (move_dir) {
  case 1: // right
  headId += 1;
  if (headId%hnum == 1 ){headId -= hnum};
  break;
  case 2: // down
  headId += hnum;
  if (headId > hnum*vnum){headId -= vnum*hnum};
  break;
  case 3: // left
  headId -= 1;
  if (headId%hnum == 0 ){headId += hnum};
  break;
  case 4: // up
  headId -= hnum;
  if (headId < 1){headId += vnum*hnum};
  break;
}
snake.push(document.getElementById(headId));
var rm_idx = other.indexOf(headId.toString())
other.splice(rm_idx,1)
if (document.getElementById(headId).className == "food"){
  document.getElementById(headId).className = "snake"
  setfood()
}
else if (document.getElementById(headId).className == "snake"){
  clearInterval(game)
  alert("You have lost, press F5 for a new game")
}
else{
  document.getElementById(headId).className = "snake";
  document.getElementById(tailId).className = "";
  snake.shift();
  other.push(tailId)
}
tailId = snake[0].id
}
