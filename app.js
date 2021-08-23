// How to add elements Directly/ dynamically
// Steps:
// createElement("element")
// createTextNode("text content")
// element.appendChild(childElement)

const result = document.querySelector("#result");

//create empty element:
const bodyDiv = document.createElement("div");

//create text node:
const text = document.createTextNode("a simple body div");

//then append the text to the body div.
//but! first need to insert(append) the text into div:
bodyDiv.appendChild(text); // adding the textnode to the body div

//then, append to body element:
document.body.appendChild(bodyDiv); //the bodyDiv gets appended to the body element

//example 2:
const heading = document.createElement("h1");
const textHeading = document.createTextNode("Dynamic Heading");
heading.appendChild(textHeading);
heading.classList.add("red"); //> you can now even add class to the heading as it is on the DOM:
result.appendChild(heading); //adding heading to the body tag

console.log(result.children);
