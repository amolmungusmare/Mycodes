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



//  collecting the num from a that contain 2
// var a=[12,345,234,42,56,424,65];
// var n_array=[];
// for(j of a){
//     var b=j;
//     var d=b.toString()
//     for(i of d){
//         if(i==2){
//             n_array.push(j)
//         }
//     }
// }
// console.log(n_array)




//  collecting vowels from list
// var c=[]
// var a=["a","b","c","d","e","f","i","o","u"]
// for (var i=0;i<=a.length-1;i++){
//     b=a[i]
//     if(b=="a"||b=="e" || b=="i" ||b=="o" || b=="u"){
//         c.push(b)
        
//     }
// }
// console.log(c);




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


//  length without length function
// var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var le=0;
// for(i of a){
//     le++
// }
// console.log(le)


//  max
// var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max=0
// for(i of a){
//     if(i>max){
//         max=i
//     }
// }
// console.log(max)



//   reversing to array
// var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var re=[];
// for(let i=a.length-1;i>=0;i--){
//     re.push(a[i])
// }
// console.log(re)



// const a=require('readline-sync');
// var b=a.question('enter name: ')
// let lis=b.reverse()
// if(lis===b){
//     console.log('Palindrome')
// } else{
    // console.log('Not palindarome')
// }


//   factorial
// const a=require('readline-sync');
// let b=a.questionInt('enter number')
// fct=1
// for(var i=1;i<b+1;i++){
//     fct*=i
// }
// console.log('factorial of',b,'is',fct)



//  sum of array
// var marks = [ [78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49] ]
// ttl=0
// for(i of marks){
//     for(j of i){
//         ttl+=j
//     }
// }
// console.log(ttl)



//  collecting elements with pairs of sum of 30
// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// var v=[]
// for(i of n){
//     let li=[]
//     for(j of n){
//         if(i+j===30){
//             li.push(j),li.push(i)
//         }
//     } v.push(li)
// }
// console.log(v)


//   collecting odd even of array
// var e = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var odd=[]
// var even=[]
// for(i of e){
//     if(i%2==0){
//         even.push(i)
//     } else{
//         odd.push(i)
//     }
// }
// console.log('list of odd numbers is',odd)
// console.log('list of even number is',even)




// consoling sum of odd and evn
// var e = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var odsum=0
// var evnsum=0
// for(i of e){
//     if(i%2==0){
//         evnsum+=i
//     } else{
//         odsum+=i
//     }
// }
// console.log('sum of evn num is',evnsum)
// console.log('sum of od num is',odsum)



// Pratik' s reciept question
// var arr=[]
// const a=require('readline-sync')
// while(true){
//     var b=a.question('enter reciept: ')
//     if(! arr.includes(b)){
//         arr.push(b)
//         console.log(b)
//     } else{
//         var indre=0
//         for(i of arr){
//             if(i===b){
//                 indre++
//             }
//         } console.log(b+'_'+indre)
//         arr.push(b)
//     }
// }




// var i=1
// while(true){
//     console.log('i love you_'+i)
//     i++
// }



