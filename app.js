// Date Object

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const date = new Date();
const day = date.getDay();
const todaysDate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

console.log(days[day - 1]);
console.log(todaysDate);
console.log(months[month - 1]);
console.log(year);

const str = `Today is ${days[day - 1]}, ${todaysDate} ${
  months[month - 1]
} ${year}`;

console.log(str);

document.body.innerHTML = str;
