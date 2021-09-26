
//function dates(){
//var date=new Date();
//document.getElementById("date").innerHTML= date;
//var myDate = new Date();
//document.write(myDate.get;
//}
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh);
    }
    
function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
     }

function home(x){
    var v=document.getElementById("home").innerHTML;
    document.getElementById("choose").innerHTML=v;
    x.style.background="pink";
}

function about(y){
    var b=document.getElementById("about").innerHTML;
    document.getElementById("choose").innerHTML=b;
    y.style.background="pink";
}
function education(q){
    var c=document.getElementById("education").innerHTML;
    document.getElementById("choose").innerHTML=c;
    q.style.background="pink";
}
function contact(z){
    var d=document.getElementById("contact").innerHTML;
    document.getElementById("choose").innerHTML=d;
    z.style.background="pink";
}
function projects(u){
    var e=document.getElementById("projects").innerHTML;
    document.getElementById("choose").innerHTML=e;
    u.style.background="pink";
}
function start(){
    display_ct();
    home();
}