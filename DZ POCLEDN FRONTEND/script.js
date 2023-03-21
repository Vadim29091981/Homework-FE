const button1 = document.querySelector(".button1");
const square1 = document.querySelector(".button-box1");
const button2 = document.querySelector(".button2");
const square2 = document.querySelector(".button-box2");
const button3 = document.querySelector(".button3");
const square3 = document.querySelector(".button-box3");
const button4 = document.querySelector(".button4");
const square4 = document.querySelector(".root");
const button5 = document.querySelector(".button5");
const square5 = document.querySelector(".root1");

let pColor = 'blue';

button1.addEventListener("click", function () {
  square1.style.backgroundColor = "green";
  square1.style.width = "100px";
  square1.style.height = "100px";
});

button2.addEventListener("click", function () {
    const color = (square2.style.backgroundColor = "blue");
    console.log(color);
});

button3.addEventListener("click", function () {
    square3.style.width = square3.clientWidth + 20 + "px";
    square3.style.height = square3.clientHeight + 20 + "px";
});

button4.addEventListener("click", function () {
    const p = document.createElement("p");
    p.style.color = "blue";
    p.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus iure corporis possimus quas quam ullam maxime qui laudantium nihil.";
    square4.append(p);
});

button5.addEventListener("click", function () {
    const p = document.createElement('p');
    p.style.color = pColor;
    pColor =='blue' ? pColor='green' : pColor='blue';
    p.innerText = 'Lorem ipsum dolor sit amet.';
    square5.appendChild(p);
});
