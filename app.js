//remove
//removeChild

//Now that we have covered multiple ways how to add elements to the DOM, lets now see how to remove elements from the DOMNow that we have covered multiple ways how to add elements to the DOM, lets now see how to remove elements from the DOM
// Will also learn how to use selector methods (querySelector/getElementById etc) on node object that we are getting back from our selection

// const result = document.querySelector("#result")
const result = document.getElementById("result");
// result.remove(); // removed!

//remove second heading via removeChild()
const heading = result.querySelector("h1");
result.removeChild(heading); //removed!
console.log(heading);
