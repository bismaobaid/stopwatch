


var min=0;
var sec=0;
var hours=0;
var mili=0;

var a=document.getElementById("hours");
var b=document.getElementById("minutes");
var c=document.getElementById("seconds");
var d=document.getElementById("miliseconds");
var interval;

function timer(){
    mili++
    d.innerHTML=mili;

    if(mili>=100){
        sec++
        mili=0;
    }else if(sec>=60){
        min++
        sec=0;

    }
    else if(min>=60){
        hours++
        min=0;
    }
    a.innerHTML=hours;
    b.innerHTML=min;
    c.innerHTML=sec;

}
var b=document.getElementById("start");
function start(){
    b.disabled=true;
    interval=setInterval(timer,1);
}
function stop(){
    b.disabled=false;
    clearInterval(interval,5);

}
function reset(){
    min=0;
    sec=0;
    hours=0;
    mili=0;
    a.innerHTML=hours;
    b.innerHTML=min;
    c.innerHTML=sec;
    d.innerHTML=mili;
    stop();
    
}
function takeshot(){
    var div=document.getElementById("capture");
    html2canvas(div).then(
        function (canvas) {document.getElementById("output").appendChild(canvas)});
}

