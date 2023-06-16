var hr=0;
var min=0;
var secs=0;
var count=0;

var timer=false;

function start(){
    timer=true;
    stopwatch()
}
function stop(){
    timer=false;
}
function reset(){
   timer=false;

    var hr=0;
    var min=0;
    var secs=0;
    var count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("secs").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
function stopwatch(){
   if(timer==true){
    count=count+1;
    if(count==100){
        secs=secs+1;
        count=0;
    }
    if(secs==60){
        min=min+1;
        secs=0;
    }
    if(min==60){
        hr=hr+1;
        min=0;
    }
      document.getElementById("hr").innerHTML=hr;
      document.getElementById("min").innerHTML=min;
      document.getElementById("secs").innerHTML=secs;
      document.getElementById("count").innerHTML=count;
      setTimeout("stopwatch()", 10)
   }
}