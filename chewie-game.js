var box1=document.getElementById("box-1");
var box2=document.getElementById("box-2");
var box3=document.getElementById("box-3");
var box4=document.getElementById("box-4");
var box5=document.getElementById("box-5");
var box6=document.getElementById("box-6");
var box7=document.getElementById("box-7");
var box8=document.getElementById("box-8");
var box9=document.getElementById("box-9");

  var boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9 ]
var randomNumber = Math.floor(Math.random() * boxArray.length);
for (let i=0; i<boxArray.length+1; i++)
  {if (randomNumber===i) {
    boxArray[i].onclick=function(){
      alert("wrong box")
    }
  }}
var randomBox= document.getElementById(`box-${randomNumber}`);
randomBox.onclick=function(event){
  event.target.innerText="";
  event.target.style.backgroundImage= "url('./chewie.jpg')";
  event.target.style.backgroundSize= "cover";
}