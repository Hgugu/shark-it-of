/**
 * Created by babby on 2016/8/12.
 */
var hoursNode=document.querySelector("#clock .hours");
var minutesNode=document.querySelector("#clock .minutes");
var secondsNode=document.querySelector("#clock .seconds");
function timeGo(){
    var nowTime = new Date();//得到打开页面瞬间的电脑本地时间
    var hours = nowTime.getHours();//小时
    var minutes = nowTime.getMinutes();//分
    var seconds = nowTime.getSeconds();//秒
    if(hours>12){hours=hours-12;}
    console.log(nowTime,hours,minutes,seconds);
    hoursNode.style.transform="rotate("+(hours+minutes/60)*30+"deg)";
    minutesNode.style.transform="rotate("+minutes*6+"deg)";
    secondsNode.style.transform="rotate("+(seconds*6)+"deg)";
}
timeGo();//一打开页面先执行一次
window.setInterval(function(){timeGo()},1000);//第一个参数是函数名，第二个参数是时间单位是毫秒