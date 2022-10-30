  var elements = document.querySelectorAll(".dd");
  for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function(){
    const boom = document.getElementById("myDIV");
    var color  = ['red','black'];
    if (boom.style.background != color[0]){
        boom.style.background = color[0];
    }
    else{
        boom.style.background = color[1];
    }
  }
 }


 var exx = document.querySelectorAll(".ex");
 for (var i = 0; i < exx.length; i++) {
    exx[i].onclick = function(){
      const goom = document.getElementById("XX");
      var color  = ['blue','black'];
    if (goom.style.background != color[0]){
        goom.style.background = color[0];
    }
    else{
        goom.style.background = color[1];
    }
    }
   }


var ele = document.querySelectorAll(".fo");
  for (var i = 0; i < ele.length; i++) {
  ele[i].onclick = function(){
    const toom = document.getElementById("Ffirst");
    var color  = ['yellow','black'];
    if (toom.style.background != color[0]){
        toom.style.background = color[0];
    }
    else{
        toom.style.background = color[1];
    }
  }
 }