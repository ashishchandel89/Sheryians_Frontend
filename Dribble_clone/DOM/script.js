let congratulation = document.querySelector("h3");
let count = document.querySelector("h1");
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");

let counter = 0;
let target = 108;

button1.addEventListener("click", function () {

    counter++;
    count.innerHTML = counter;

    // show message at target
    if (counter === target) {
        congratulation.innerHTML ="Congratulations! You've reached " + target + " clicks!";
        congratulation.style.color = "white";
        target += 108;   
    }

    // clear message on next click
    if (counter === target - 108 + 1) {
        congratulation.innerHTML = "";
        congratulation.style.color = "black";
    }
});

button2.addEventListener("click", function () {

    counter--;
    if (counter < 0) counter = 0;
    count.innerHTML = counter;
});
