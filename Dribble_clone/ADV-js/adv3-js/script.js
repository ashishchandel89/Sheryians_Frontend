// // Synchronous JavaScript

// console.log("Hello1");
// console.log("Hello2");
// console.log("Hello3");
// console.log("Hello4");

// // Ans :- Line by Line execution




// // Asynchronous JavaScript

// console.log("Hey1");
// setTimeout(()=>{
//     console.log("Hey2");
// },2000);
// console.log("Hey3");

// // Ans :- These task donot block the main thread



// // Callback Function

// function FetchDetails(name,func){
//     console.log(name);
//     func();
// }
// FetchDetails("Ashish",function(){
//     console.log("He is an Engineer");
// })

// // Ans :- Passed an argument to another function



// //Callback Hell

// function FetchInstaData(username,func){
//     console.log(username);
//     func({follower:"134k",following:600,reach:"90k"});
// }
// FetchInstaData("@the_ashish_chandel",function(details){
//     console.log(details);
// })


// function abcd(func1){
//     func1(function(func3){
//         func3(function(func5){
//             func5(function(){
//                 console.log("func6");
//             });
//             console.log("func4");
//         });
//         console.log("func2");
//     });
// }
// abcd(function(func2){
//     func2(function(func4){
//         func4(function(){
//             console.log("func5");
//         });
//         console.log("func3");
//     });
//     console.log("func1");
// });


// Exercise :- 1

function AfterDelay(time,func){
    setTimeout(()=>{
        func();
    },time)
}
AfterDelay(500,function(){
    console.log("CallBack Executed")
});

// Exercise :- 2

function GetUser(username,func){
    console.log("Fetching User's details....")
    setTimeout(()=>{
        func({id:1145,username});
    },1500);
}
function GetUserPosts(id,func2){
    setTimeout(()=>{
        func2(["Jai Maa Naina Devi","Jai Maa Chintpurni","Jai Maa Jawala Devui","Jai Maa Kangra Rani"]);
    },2500)
}
GetUser("Ashish",function(detail){
     console.log("User:", detail.username);

    GetUserPosts(detail.id,function(posts){
        console.log("Posts: "+posts);
    });
});