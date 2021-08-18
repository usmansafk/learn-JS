//getElementById()
// Select the element or group of elements, the ones we want
// Decide the effect we want to apply to the selection

// getElementById("element");

//change the colour of the title text using getElementById()
//method 1 - directly changing it
document.getElementById("title").style.color = "green";

//method 2 (preferred) - using a variable
const heading = document.getElementById("title");
heading.style.color = "red";

//now, change the bgc and color of the button using method 2
const clickMeBtn = document.getElementById("btn");
clickMeBtn.style.backgroundColor = "pink";
clickMeBtn.style.color = "red";
