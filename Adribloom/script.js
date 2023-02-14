function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i=0; i<6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    alert(getRandomColor());
    var clickedTime;
    var createdTime;
    var reactionTime;
function makebox() {
var time=Math.random();
time=time*5000;
setTimeout(function() {
document.getElementById("box").style.backgroundColor=
getRandomColor();
document.getElementById("box").style.display="block";
createdTime=Date.now();
}, time);
}
document.getElementById("box").onclick=function() {
clickedTime=Date.now();
reactionTime=(clickedTime-createdTime)/1000;
document.getElementById("time").innerHTML=reactionTime;
this.style.display="none";
makebox();
}
makebox();
function makebox() {
var time=Math.random();
time=time*5000;
setTimeout(function() {
if (Math.random() > 0.5) {
document.getElementById("box").style.borderRadius="100px";
} else {
document.getElementById("box").style.borderRadius="0px";
}
document.getElementById("box").style.backgroundColor=
getRandomColor();
document.getElementById("box").style.display="block";
createdTime=Date.now();
}, time);
}