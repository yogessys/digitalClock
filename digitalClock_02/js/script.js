const hours=document.querySelector(".clock");
 
function runTime(){
var time=new Date();
var hrs=time.getHours();
var min=time.getMinutes();
var sec=time.getSeconds();
var txt="AM";

if (hrs>12) {
    hrs=hrs-12;
    txt="PM"
}
else if(hrs==0){
    hrs=hrs-12;
}

hrs=hrs<10?"0"+hrs:hrs;
min=min<10?"0"+min:min;
sec=sec<10?"0"+sec:sec;

hours.innerHTML=`${hrs} :${min} :${sec} :${txt}`;
}
setInterval(runTime,1000);