// Navigate the DOM - children
//There will be times were you can not directly select an element through the previous selector methods. We will be therefore have to navigate the DOM tree- known as Traverse the DOM tree

// childNodes - returns all childNodes including whitespace which is treated as a text node
// - children - returns actual children
// - firstChild - returns first child HOWEVER with whitespace
// - lastChild - returns last child HOWEVER with whitespace

// Steps:

// 1. Select the highest parent element and then navigate the DOM Tree
// 2. To select the children of the parent you must use the childNodes, firstChild and lastChild or **children**
// 3. Note: childNodes, firstChild and lastChild returns childNodes including whitespace which is treated as a text node

const result = document.getElementById("result");

console.log(result.childNodes); // this returns everything including text whitespace
console.log(result.firstChild); // same here
console.log(result.lastChild); // same here

//better way -- use children property -- return actual chidlren without text whitespace:
console.log(result.children);
