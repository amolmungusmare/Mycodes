// Q1
// a = {'a': 100, 'b': 200, 'c':300}
// b = {'a': 300, 'b': 200, 'c':400}
// nw={}
// for(i in a) {
//     nw[i]=a[i]+b[i]
// }
// console.log(nw)


// // Q2
// obj={}
// for(var a=1;a<11;a++){
//     obj[a]=a*a
// }
// console.log(obj)


// // Q3
// var b={name:'amol',marks:56};
// const sd=require('readline-sync');
// let ds=sd.question(':- ')
// let a=b.hasOwnProperty(ds)
// if (a==true){
//     console.log('Exist')
// } else {
//     console.log('Not_Exist')
// }



// //Q4
// let my_dict = {data1:100,data2:-54,data3:247}
// var sum=0;
// for(i in my_dict){
//     sum+=my_dict[i]
// }
// console.log(sum)



// //Q5
// myDict= { 1: 'NAVGURUKUL', 2: 'IN',
// 3:{A : 'WELCOME', B : 'To', C : 'DHARAMSALA' } }
// delete myDict[3]['A']
// console.log(myDict)



// //Q6
// var list1=['one','two','three','four','five']
// var list2=[1,2,3,4,5,]
// s={}
// for(i in list1){
//     s[list1[i]]=list2[i]
// }
// console.log(s)


// //Q7
// var a=[{first:1},{second:2},{third:1},{four:5},{five:5},{six:9},{seven:7},{ten:9}]
// var sd=[]
// for(i of a){
//     for(j in i){
//         if(! sd.includes(i[j])){
//             sd.push(i[j])
//         }
//     }
// }
// console.log(sd)



// //Q8
// var sd={}
// for(var i=0;i<10;i++){
//     const a=require('readline-sync');
//     var b=a.question("enter student's name:- ")
//     var c=a.questionInt("enter student's marks:- ")
//     sd[b]=c
// }
// console.log(sd)

// //Q9
// var a="MISSISSIPPI"
// var sdd={}
// for(i of a){
//     var sa=0
//     for(j of a){
//         if(i==j){
//             sa++
//         }
//     } sdd[i]=sa
// }
// console.log(sdd)


// // Q10
// var dict = {Alex:['subj1','subj2','subj3'],David:['subj1','subj2']}
// let c=0
// for(i in dict){
//     for(j of dict[i]){
//         c+=1
//     }
// }
// console.log(c)


// //Q11
// class ClassName{
//     constructor(name,age){
//         this.name='amol';
//         this.age=21
//     }
// }
// let a=new ClassName('nasir')



// const a=new Object();
// a.name='Amol';
// a.last_n='Mungusmare';
// a.age=21;
// console.log(a)
// console.log(Object.keys(a))
// console.log(Object.values(a))


// const a={name:'amol',
// last_n:'Mungusmare',
// all:function(){
//     return `my name is ${a.name} and my surname is ${a.all}`
// }};
// console.log(a.all())oiu