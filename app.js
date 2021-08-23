// 1. select element
// 2. addEventListener() - has two params:
// 3. what event, callback function (what to do)

//The reason for callback functions as we do not want the function to run right away, but instead when an event occurs
//you can either pass in an anonymous function OR create a function and reference it

//Function Expression:

const btn = document.querySelector(".btn");
const heading = document.querySelector("h1");

//Task
//Using function expression,
//add some logic: when button is clicked check if class is there. If yes, then remove class. If not, add the class.

function changeColours() {
  const hasClass = heading.classList.contains("red");

  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
  //voila! you have just made a toggle!
}

btn.addEventListener("click", changeColours); // do NOT invoke it right away with ()
