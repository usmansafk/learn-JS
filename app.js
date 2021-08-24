// - Web Storage API - provided by Browser
// - session Storage, local Storage
// - setItem, getItem, removeItem, clear

// The are essentially the same except, sessionStorage() store data during opening/closing of tabs whilst localStorage() stores data during opening/closing of browser
// Both of them store data with key - value pairs and have same methoods

// localStorage.setItem("name", "john");
// sessionStorage.setItem("name", "john");

localStorage.setItem("name", "john");
localStorage.setItem("name", "peter"); // overrides
localStorage.setItem("job", "Software Engineer");
localStorage.setItem("address", "121 Utah");

// GET - localStorage.getItem(key)
const name = localStorage.getItem("name");
console.log(name);

//REMOVE - localStorage.removeItem(key)
localStorage.removeItem("name");

const anotherName = localStorage.getItem("name");
console.log(anotherName); // null as we removed "name" in line 21

//REMOVE ALL (Clear) - localStorage.clear()
localStorage.clear();
