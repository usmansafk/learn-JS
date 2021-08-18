// querySelector() and querySelectorAll()
// querySelector('any css') - selects single
// querySelectorAll('any css') - selects all - can also use forEach()
// you MUST pass in either . for class or # for id or any CSS selection

//JSYK, you can do this also simply by getElementById()
const result = document.querySelector("#result");
result.style.backgroundColor = "silver";

const item = document.querySelector(".special");
console.log(item);
//you would think this would print ALL the special classed items, however no!
//querySelector() only returns the first instance
//you must use querySelectorAll() if you want to return the whole list

const lastItem = document.querySelector("li:last-child"); // you can access via very specific css like so
console.log(lastItem);

const specialList = document.querySelectorAll(".special");
console.log(specialList);
//from here you can use forEach() even though it is a node-list object
//this is because it uses the querySelectorAll() method

specialList.forEach(function (item) {
  console.log(item);
  item.style.color = "blue";
  item.style.fontSize = "25px";
});

//Summary --
//Therefore, technically you may replace any previous selector so that you do not have the need to change the node-list to array-list
