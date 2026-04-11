let allElem = document.querySelectorAll('.elem');
let allFullElem=document.querySelectorAll('.fullElem');
let obj={
    img1:"https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZjF4cDFpemx6ZW92cnJleTFza2d3NHgxZ283b295cHRxc3dzZXgzNCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/IGL5GFRvVTtK8O9l7h/giphy.webp",
    img2:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHdoNHltMmd4dmo2bW41MzBkNzVtYzBoOHlnd3o1ZWJoZng1NzRqMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iBlgTxSS20NLdCxvDW/giphy.webp",
    img3:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I1d2pqNXlhN3p1bmI2MzltbWViamp4Z3Z4MWQ3MjI1cXpoYWMyOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oxRmvU3GAJay6F60g/giphy.webp",
    img4:"https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXJ1d2xiODgxcjlyZnM2YXNudTQzbmJ2MG5iZzRkam1leXhkOW12ZiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/2DpqiyUXjK8sG45anH/giphy.webp",
    img5:"https://media2.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eWJlZnVxeDVud2hkdjk1b2l3MGg5bWhlYTM2cmFnajhpdHhtYWNiMSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/sWz7nJgmjpUHE61MW8/giphy.webp"
}
let images=Object.values(obj);

allElem.forEach(function(elem,index){
    if(index==2){
        elem.style.backgroundImage=`url(${images[index]})`;
        elem.style.backgroundSize="cover";
    }
    elem.addEventListener('mouseenter',function(){
        elem.style.backgroundImage=`url(${images[index]})`;
        elem.style.backgroundSize="cover";
    })
     elem.addEventListener('mouseleave',function(){
       if(index!==2){
        elem.style.backgroundImage="";
       }
    })
    elem.addEventListener('click',function(){
        allFullElem[elem.id].style.display='block';
    })
})
