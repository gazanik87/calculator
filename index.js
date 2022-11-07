const table=document.getElementById("table");
// const bajan=document.getElementById("bajan");
// const angam=document.getElementById("angam");
// const gumar=document.getElementById("gumar");
const ket=document.getElementById("ket");
const del=document.getElementById("del");
// const hanum=document.getElementById("hanum");
const havasar=document.getElementById("havasar");
const number=document.getElementsByClassName("number");
const gorc=document.getElementsByClassName("gorc");
let a=0;
let b=0;
let gorcox=0;
let sum=0;
let verjin=0;

for(let i=0;i<number.length;i++){
number[i].onclick=function(){
  if(table.innerHTML==0){
    table.innerHTML="";
    table.innerHTML+=number[i].innerHTML;
  }
  else{
  table.innerHTML+=number[i].innerHTML;
  }
}
}
function gorcoxutyun(a,b,nshan){
  switch(nshan){
    case "+":
    return  a+b;
    break;
    case "-":
      return a-b;
      break;
      case "/":
        return a/b;
        break;
        case "X":
          return a*b;
          break;
  }
}
for(let i=0;i<gorc.length;i++){
  gorc[i].onclick=function(){
    if(a==0){
      a=+table.innerHTML;
      gorcox=gorc[i].innerHTML;
      table.innerHTML="";
    }
    else{
      b=+table.innerHTML;
      sum=gorcoxutyun(a,b,gorcox);
      a=sum;
      gorcox=gorc[i].innerHTML;
      b=0;
      table.innerHTML="";
    }
  }
}
havasar.onclick=function(){
  b=+table.innerHTML;
  sum=gorcoxutyun(a,b,gorcox);
  table.innerHTML=sum;
}
del.onclick=function(){
  table.innerHTML=Math.floor(table.innerHTML/10);
}