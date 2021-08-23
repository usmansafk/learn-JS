// 1. select element
// 2. addEventListener() - has two params:
// 3. what event, callback function (what to do)

//The reason for callback functions as we do not want the function to run right away, but instead when an event occurs
//you can either pass in an anonymous function OR create a function and reference it

//Click Event:
const btn = document.querySelector(".btn"); //select button, returns the nodeObject
const heading = document.querySelector("h1"); //note - sometimes you may have to select the element within the callback function
//the nodeObject has a method known as addEventListener().
btn.addEventListener("click", function () {
  //Note: In the first param(what event?)- There are many other events methods! Secondly, here we are simply creating an anonymous function for the second param

  console.log("Hey punk! You clicked me!");

  heading.classList.add("red");
});
