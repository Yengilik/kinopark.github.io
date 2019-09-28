function my(){
	alert("DGBGWHb");
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
   alert("onclick Event triggered!");
}
function my(){
	alert("DGBGWHb");
}
document.getElementById('d').onclick = function() {
   alert("button was clicked");
}​;​

var header = document.getElementById("droptd");
var btns = header.getElementsByClassName("city");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

 

