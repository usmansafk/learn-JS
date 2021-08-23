//Change CSS with style property
// - Up until now to make changes we have been using CSS property to showcase the changes we are making via JS.
// - We would select element and use style property to make changes
// - Although theres nothing wrong with this property - there is another better approach
// - There are downsides to CSS property - whereas classList would be a better option

const random = document.querySelector(".random");
console.log(random.style); //can see all the CSS style properties that you can do
//the down size to this approach, you have to add a property one by one:
// random.style.background = "blue";
// random.style.color = "white";
// random.style.fontSize = "3rem";
// random.style.textTransform = "capitalize";
//this is too long winded

//therefore use, classList approach:
random.classList.add("title");
//this has 2 benefits.:
//Separated the CSS to the proper area.
//You can access it in one line
