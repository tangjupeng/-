
//定义全局变量
var XMLHttpRequest,
    keysdown={},
    index,
    speed,x,y
    ;
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
 
 
 
var gamebase=function(){
	   addEventListener("keydown",function(e){
	   	keysdown[e.keyCode]=true;
	   	console.log("按键的ASCII:"+e.keyCode);
	   },false);
       addEventListener("keyup",function(e){
       	delete keysdown[e.keyCode];
       },false);
}
 
 
function getStyle(obj,attr){
 
if(obj.currentStyle){return obj.currentStyle[attr];} 
else{
 
return getComputedStyle(obj,false)[attr];
}
}
 
 function startMove(obj,json,time,fn){
 	time=time?time:30;
	obj.timer=setInterval(function(){
		var flag=true;
		for(var attr in json){
		//取当前的值
		var icur=0;
		
		if(attr=='opacity'){
			icur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}
		else{
			icur=parseInt(getStyle(obj,attr));//获取当前属性的数据 每次数据不一样
		}
		//速度
		var speed=(json[attr]-icur)/8;
		
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//检测停止
	
			if(attr=='opacity'){
				obj.style.fliter='opacity:'+icur+speed+'';//火狐浏览器
				obj.style.opacity=(icur+speed)/100; //ie
			}
			else{
				obj.style[attr]=icur+speed+'px';
			}	
		if(icur!=json[attr]){
		flag=false;
		}
	  
	    //console.log(icur+'||'+json[attr]+'||高:'+obj.style.height); debug
		if(flag){
			
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
			}	
		}
	},30)
	
}
function loadXMLDoc(){
	window.XMLHttpRequest?XMLHttpRequest=new XMLHttpRequest:XMLHttpRequest=new ActiveXObject("Microsoft.XMLHttp");
	
}
/*function Ajax(method,url,)
{
	loadXMLDoc();
	XMLHttpRequest.onreadstatechange=function(){
		if(XMLHttpRequest.readyState==4&&XMLHttpRequest.status==200){
			
		}
	}
}*/
//以下是图片变换区
function autoChangeImg(obj,time){
	var len=obj.length;
	time=time?time:1000;
	index=0; 
	   for( var i=0;i<len;i++){
	 obj[i].onmouseout=function(){
	obj.timer=setInterval(
	function(){	
	index++;
	if(index>len||index==len)index=0;
	changeImg(obj,index);
		},time)}  
	   
	   	obj[i].onmouseover=function(){
	   		if(obj.timer)clearInterval(obj.timer);
	   	}
	   } 
	   obj[0].onmouseout();
}
function changeImg(obj,index){
	var len=obj.length;
	for(var i=0;i<len;i++){
		obj[i].style.display='none';
	}
	   obj[index].style.display='block';
}
function mouseMove(event){
	var e = event || window.event;
     console.log(e.clientX);
}
function Totransform(obj,json){
	          obj.style.transform=json;
             obj.style.webkitTransform = json;
            obj.style.MozTransform = json;
            obj.style.msTransform =json;
            obj.style.OTransform = json;
         
 
}
function Totransition(obj,time){
	
	 obj.style.transition=time;
             obj.style.webkitTransition = time;
            obj.style.MozTransition = time;
            obj.style.msTransition =time;
            obj.style.OTransition = time;
          
}
function Totransorigin(obj,str){
	 obj.style.transformOrigin=str;
             obj.style.webkitTransformOrigin = str;
            obj.style.MozTransformOrigin = str;
            obj.style.msTransformOrigin =str;
            obj.style.MozTransformOrigin = str;
}
function Toperspective(obj,str){
	 obj.style.perspective=str;
             obj.style.webkitperspective = str;
            obj.style.Mozperspective = str;
            obj.style.msperspective =str;
            obj.style.Mozperspective = str;
            
}
