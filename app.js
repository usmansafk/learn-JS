//getElementByClassName()
//also 0 index based

const fruitItems = document.getElementsByClassName("fave");
//this is a node-list object;
// console.log(fruitItems);
fruitItems[0].innerHTML = "MANGO";
fruitItems[0].style.color = "orange";
