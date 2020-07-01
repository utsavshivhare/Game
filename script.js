var char=document.getElementById("char");
var block=document.getElementById("block");

function jump(){

	char.classList.add("animate");
	setTimeout(function(){
		char.classList.remove("animate");
	}, 500);
}
var checkDead=setInterval(function (){
    var chartop=parseInt(window.getComputedStyle(char).getPropertyValue("top"));
	var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockleft<20 && blockleft>0 && chartop>=130){
		block.style.animation="none";
		block.style.display="none";	
		alert("tmse na ho payega");
		}
	},10);