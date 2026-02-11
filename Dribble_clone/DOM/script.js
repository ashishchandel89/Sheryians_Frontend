let count=document.querySelector("h1");
let button1=document.querySelector("#btn1");
let button2=document.querySelector("#btn2");

let counter=0;
button1.addEventListener("click",function(){
    counter++;
    count.innerHTML=counter;
})

button2.addEventListener("click",function(){
    counter--;
    count.innerHTML=counter;
})

