//Navigate the DOM - parent

//parentElement - same idea as previous childElement

const heading = document.querySelector("h2");
console.log(heading.parentElement.parentElement.parentElement.parentElement);
//as you can see, you can chain the parentElement, until eventually you will reach html element. Beyond that is null.

const parent = heading.parentElement;
parent.style.color = "red";
//styling via parent. The whole div
