const prm=new Promise((resolve,reject)=>{
    let num=Math.floor(Math.random()*10);
    console.log(`Generating number....`);
    setTimeout(()=>{
        if(num%2==0){
            resolve(num);
        }
        else{
            reject(num);
        }
    },1000);
});
prm
.then(num=>{
    console.log(`The number ${num} is even`);
})
.catch(num=>{
       console.log(`The number ${num} is odd`);
});