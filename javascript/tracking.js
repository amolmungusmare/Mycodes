//   couting cosonenst and vowels and converting into object
// var a=['my name is amol','this is my favourite movie',"Vishal"];
// asd={}
// var vowels=0
// var costant=0
// for(i of a){
//     for(j of i){
//         var b=j
//         if(b=="a"||b=="e" || b=="i" ||b=="o" || b=="u"){
//             vowels+=1
//         } else if(i != ' '){
//             costant+=1
//         }
//     } asd['vowels']=vowels,asd['consonets']=costant
// }
// console.log(asd)

//   consoling length of string
// var a=['my name is amol','this is my favourite movie',"Vishal"];
// for(j in a){
//     var sf=a[j]
//     var le=0
//     for(i of sf){
//         if(i != ' '){
//             le++
//         }
//         //d=(sf[i])
//         //le+=(d.length)
//     }console.log(le)
// }

// iterating array without use loop
// var a=[1,2,3,4,5,6,7];
// let b=a.map(amol);
// function amol(num) {
//     return num
// }
// console.log(b)

//   30-10
// let a={students:[{f_name:'amol',last:'Mungusmare'},{f_name:'Akash',last:'deshmukh'},{f_name:'rahul',last:'saryam'},{f_name:'kiran',last:'borkar'}]}
// let b=a.students.map((v,i)=>{
//     console.log(a.students[i].f_name,a.students[i].last)
// })

// var a= [4, 9, 16, 25];
// const b=a.map(amol)
// function amol(i){
//     console.log(i)
// }

// var a = [1, 1, 1, 2, 2, 3, 3, 4, 4];
// for (j of a) var as = 0;
// for (i in a) {
//   if (a[i] == a[i + 1]) {
//     as++;
//   }
// }
// if (j > 1) {
//   a.pop(j);
// }
// console.log(a);

// const as = require("readline-sync");
// var b = as.question("");
// var c = as.question("");
// var d = as.question("");
// var list = [];
// list[0] = b;
// list[1] = c;
// list[2] = d;
// var b = list.reduce(amol);
// console.log(b);
// function amol(num, a) {
//   return num * a;
// }

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if ((req.url = "/")) {
//     res.end("Hello world...");
//   } else if ((req.url = "/?")) {
//     ("Amol is here");
//   } else if ((req.url = "/about")) {
//     ("Hello...\n I am Amol.\n I am from Nagpur Maharashtra.\n There are five in menters in my family.\n The newest member of My family is Priyansh");
//   }
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to the port");
// });

// var obj = {};
// let asd = ["dog", "green", "yellow", "pink", "dog", "green", "yellow"];
// const asdf = asd.map((i) => {
//   var Cnt = 0;
//   var objCount = asd.map((j) => {
//     if ((i = j)) {
//       Cnt++;
//     }
//   });
//   obj[i] = Cnt;
// });
// console.log(obj);

// let arrObj = [
//   { Name: "nasir", grade: 50 },
//   { Name: "amit", grade: 53 },
//   { Name: "satish", grade: 40 },
//   { Name: "prathmesh", grade: 60 },
//   { Name: "akash", grade: 48 },
// ];
// const arr = [];
// const asdf = arrObj.map((i) => {
//   if (i["grade"] >= 50) {
//     arr.push(i["Name"]);
//   }
// });
// console.log(arr);
