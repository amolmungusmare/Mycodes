// var a = 1;
// while(a <= 100){
//    console.log(a)
//    a +=1
// }


// var cars = ["Maruti", "Mercedes", "BMW"];
// for (i in cars){
//    console.log(cars[i])
// }


//          palindrome//////
// let readlineSync = require("readline-sync");
// var a= readlineSync.question("Enter name: ")
// const f=a;
// var b=''
// for(let i=a.length-1;i>=0;i--){
//     b+=a[i]
// }
// if(b===f){
//     console.log('palindrome')
// } else{
//     console.log('not_palindrome')
// }



// const n=require("readline-sync");
// var name=n.question("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
//    string=string+name[i]
// }
// if (store===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }


/////// Prime    ////
// const n=require("readline-sync");
// var as=n.question("enter name: ")
// a=0
// for(var i=0;i<(as);i++){
//     if(as%(i+1)==0){
//         a+=1
//     }
// }
// if (a==2){
//     console.log(as,'is a prime number')
// } else {
//     console.log(as,'is not_prime number')
// }


// table of input
// const a=require('readline-sync');
// var n=a.questionInt('enter number: ')
// for(let i=1;i<11;i++){
//     console.log(n*i)
// }


// consoling number upto
// const a=require('readline-sync');
// let n=a.questionInt('enter number: ')
// for(var j=1;j<(n+1);j++){
//     console.log(j)
// }


// Devisible by 7
// for(var k=1;k<100+1;k++){
//     if(k%7==0){
//         console.log(k)
//     }
// }




// sum of 1 to 100
// sum=0
// for(var a=1;a<101;a++){
//     sum+=a
// }
// console.log(sum)



//    sum of input
// sum=0
// for(var a=1;a<11;a++){
//     const b=require('readline-sync');
//     var c=b.questionInt('enter number')
//     sum+=c
// }
// console.log(sum)



//  consoling one negative and one positive
// for(var i=1;i<101;i++){
//     if(i%2==0){
//         console.log(-i)
//     } else{
//         console.log('',i)
//     }
// }



// for(var i = 1;i<101;i++){
//     if(i%3==0 && i%7==0){
//         console.log('NavGurukul')
//     } else if (i%3==0){
//         console.log('Nav')
//     } else if (i%7==0){
//         console.log('Gurukul')
//     } else{
//         console.log(i)
//     }
// }





// for(var i=5;i>0;i--){
//     console.log(toString(i)*5)     pending
// }


////  Debuging
// let n=require("readline-sync");
// let choose_ascii=n.questionInt("enter number: ");
// for(var i=65;i<(65+choose_ascii);i++){
//     console.log(String.fromCharCode(i))
// }



// guessing game
// var a=Math.floor(Math.random()*(10-1+1))+1
// for(var i=0;i<3;i++){
//     var sd=require('readline-sync')
//     var s=sd.questionInt('enter your guess: ')
//     if(a==s){
//         console.log('you are right')
//         break
//     } else{
//         console.log('you are wrong')
//     }
// }









// var c=[]
// var a=["a","b","c","d","e","f","i","o","u"]
// for (var i=0;i<=a.length-1;i++){
//     b=a[i]
//     if(b=="a"||b=="e" || b=="i" ||b=="o" || b=="u"){
//         c.push(b)
        
//     }
// }
// console.log(c);


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



// var a={}
// var b=['my name is amol','this is my favourite movie'];
// for(j of b){
//     le=0
//     for (i of j){
//         if(i=="a"||i=="e" || i=="i" ||i=="o" || i=="u"){
//             le++
//         } console.log(le)
//     }
// }



