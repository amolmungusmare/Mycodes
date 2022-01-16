// const a = require("readline-sync");
// var as = a.question("enter your number :- ");
// switch (as) {
//   case "a":
//   case "b":
//     console.log("Priya");
//     break;
//   case "c":
//   case "d":
//     console.log("Amol");
// }

// const ary = [1, 2, 3, 4, 45];
// Object.freeze(ary);
// ary.push("amoll");
// console.log(ary);

// const a = (s, d) => console.log(s * d);
// a(5, 6);

// const ary = [1, 2, 3, 4];
// console.log(Math.max(...ary));

// const user = { amol: "priya", priya: "amol" };
// const { amol, priya } = user;
// console.log(user);

// const [a, , , s] = [1, 2, 3, 4, 5, 6, 7];
// console.log(`This is arry ${s}`);

// class amol {
//   constructor(n, s) {
//     this.name = n;
//     this.surname = s;
//   }
// }
// var a = new amol("Rajkumar", "Gahane");
// console.log(a["name"]);

// class Details {
//   constructor(n, s, p, a) {
//     this.name = n;
//     this.surname = s;
//     this.profesion = p;
//     this.age = a;
//   }
// }
// const akash = new Details("Akash", "Deshmukh", "Students", 20);
// console.log(akash.name);

// const mypromise = new Promise((resolve, reject) => {
//   var assdf = true;
//   if (assdf) {
//     resolve("Fullfilled");
//   } else {
//     reject("Value is false...");
//   }
// });
// mypromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

// const a = new Promise((resolve, reject) => {
//   var as = false;
//   if (as) {
//     resolve("turu...");
//   } else {
//     reject("false");
//   }
// });
// a.then((result) => {
//   console.log(result);
// });
// a.catch((err) => console.log(err));

// var a = "amol";
// a = "suraj";
// var a = "priya";
// console.log(a);

// const http = require("http");
// var server = http.createServer((req, res) => {
//   res.end("hello world..");
// });
// server.listen(2000, "127.0.0.1", () => {
//   console.log("Listening to the port 2000");
// });

// const fs = require("fs");
// fs.writeFileSync("amoll.js", "he is boy.");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/get") {
//     res.end("What do you wants to know about me..");
//     console.log(req);
//   } else if (req.url == "/post") {
//     res.end("What is new.");
//     console.log(req);
//   } else {
//     res.end("Sorry...");
//   }
// });
// server.listen(5000, "127.0.0.1", () => {
//   console.log("Listening to the port 5000...");
// });

// const axios = require("axios");
// const fs = require("fs");
// axios.get("http://api.navgurukul.org/courses").then((res) => {
//   fs.writeFileSync("amol.json", JSON.stringify(res.data));
// });

// const http = require("http");
// const port = 7000;
// const localhost = "127.0.0.1";
// const server = http.createServer((req, res) => {
//   if (req.url == "/get") {
//     res.end("What do you want");
//   } else if (req.url == "/post") {
//     res.end("What is new here...");
//   } else if (req.url == "/about") {
//     res.end(
//       "I am Amol.\nI am from Nagpur(MH).\nright now, I am doing Software Development course."
//     );
//   } else {
//     res.end("sorry...");
//   }
// });
// server.listen(port, localhost, () => {
//   console.log(`Listening to the localhost ${localhost} and port ${port}`);
// });

// const eventEmmiter = require("events");
// const event = new eventEmmiter();
// event.on("Details", (Name, city, age) => {
//   console.log(`My name is ${Name}, I am from ${city} and my age is ${age}.`);
// });
// event.emit("Details", "Amol", "Nagpur", 21);

// const EventEmiter = require("events");
// const events = new EventEmiter();
// events.on("Name", () => {
//   console.log("Say my Name");
// });
// events.emit("Name");

// const EventEmiter = require("events");
// const event = EventEmiter();
// event.on("LoveCalculator", (boy, girl) => {
//   console.log(`${boy} loves ${girl}`);
// });
// event.emit("Lovecalculator", "Amol", "Priya");

// const EventEmiter = require("events");
// const events = new EventEmiter();
// events.on("calculator", (boy, girl) => {
//   console.log(`${boy} loves ${girl}`);
// });
// events.emit("calculator", "Amo", "Priya");

// const fs = require("fs");
// fs.appendFileSync("amol.js", "good boy");

// const fs = require("fs");
// fs.readFile("good.js", (err, data) => {
//   console.log(data);
// });

// var a = 9;
// var b = 1;
// console.log(`sum ${a + b}`);

// const a=require('readline-sync')
// const iput=a.question('enter name ')
// const asfd=''
// for(let i )

// function amol(sd) {
//   const sdf = sd.();
//   if (sdf === sd) {
//     return true;
//   } else {
//     return false;
//   }
// }
// amol("mom");

// reverting to String
// 1)
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

// 2)
let asd = "AmolD";
for (let i = asd.length - 1; i >= 0; i--) {
  console.log(asd[i]);
}
