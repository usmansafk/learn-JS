// innerHTML and textContent: similarities and differences
// Easiest approach
// using these properties is much more efficient than insert than insertTextNode etc
//Note: there are times where you will use either the innerHTML or textContent, depending on circumstance. If you want to make changes with propper  HTML structure, not just text, then you must use innerHTML -  see Task Example below
const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent); // can see the text inside the div
console.log(list.innerHTML); // can see the whole HTML content, not just the text
console.log(list.textContent); // can see the text inside the list

//Task - create another ul, and grab all the list items - FASTER way!
const ul = document.createElement("ul");
//instead of creating a textNode and then appending the child etc..., simply:
ul.innerHTML = `<li class="item">list item</li><li>list item</li><li>list item</li>`; // we are simply copying and pasting from the HTML!! this is the approach in real life projects
//also make sure to use template strings (back ticks ``) as it will allow you to name your classes and ids etc with "" and also allow you to pass in dynamic values, see below
document.body.appendChild(ul);

const randomVar =
  "random value inserted as item using expression and template strings";

const ol = document.createElement("ol");
ol.innerHTML = `<li class="item">list item</li><li>list item</li><li>${randomVar}</li>`;
document.body.appendChild(ol);
