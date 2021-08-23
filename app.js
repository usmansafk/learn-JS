//.insertBefore()

// (How to add elements directly/ dynamically
// Steps:
//createElement("element")
//createTextNode("text content")

// element.appendChild(childElement) ---> note: they are other methods besides appendChild to place elements, like:
// .insertBefore("element", "location")

const result = document.querySelector("#result");

const first = document.querySelector(".blue");

const bodyDiv = document.createElement("div"); //create empty element:
const text = document.createTextNode("a simple body div"); //create text node:
bodyDiv.appendChild(text); // adding the textnode to the body div
//INSTEAD USE .insertBefore() here:
document.body.insertBefore(bodyDiv, result);

//example 2:
const heading = document.createElement("h1");
const textHeading = document.createTextNode("Dynamic Heading");
heading.appendChild(textHeading);
heading.classList.add("red"); //> you can now even add class to the heading as it is on the DOM:

//INSTEAD USE .insertBefore() here:
result.insertBefore(heading, first);

console.log(result.children);
