// const fs = require('fs');
// fs.writeFileSync('files_system.js',"i love priya/n");   // here create file...
// fs.appendFileSync('files_system.js','I will marry with her/n');
// fs.appendFileSync('files_system.js',"i want to go home..");
// const a=fs.readFileSync('files_system.js')
// org=a.toString()
// console.log(org)

// file creating

// const fs=require('fs');
// fs.writeFile('amol.js','const a=0', function(err){           // file created
//     if(err) throw err;
//     console.log('done...!');
// });

//  file reading

// const a=fs.readFileSync('amol.js');
// console.log(a.toString())             ////here we have to parse in string

// fs.appendFileSync('amol.js','amol is a good coder..');   // appending file

// fs.writeFileSync('amol.js','nasir is my friend..')       // writing file

// fs.writeFileSync("ankit.txt","abcdefghijklmnopqrstuvwxyz")

// fs.readFile("ankit.txt",(err,data)=>{
//     if (err) throw err
//     console.log(data.toString());        //asyncronously
// })

// fs.renameSync('ankit.txt','priya.txt')        //renaming

// fs.unlinkSync('priya.txt')           // deleting file

// const fs=require('fs');
// a.writeFileSync('amol.txt','amol is good boy...');
// a.appendFileSync('amol.txt','\nhe will take job...')

// const fs=require('fs');
// fs.writeFile('amol.js','amol is a good boy',(err)=>{
//     console.log('dnoe')
// });

// fs.appendFile('amol.js','\nrealy he is good boy...',(err)=>{
//     console.log('appended..')
// })

// for avoiding buffer data

// fs.readFile('amol.js','utf-8',(err,file)=>{
//     console.log(file);
// });

// Asynchronous and Synchronous

// const a=fs.readFileSync('amol.js','utf-8')
// console.log(a)
// console.log('bhopu is bhopu...')

// const b=fs.readFile('amol.js','utf-8',(err,file)=>{
//     console.log(file);
// })
// console.log('bhopu is bhopu...')

// JSON...

// const fs = require("fs");
// const as = { name: "Amol", surname: "Mungusmare", age: 21 };
// const sa = JSON.stringify(as);
// fs.writeFileSync("amol.json", sa);
// console.log("done...!");

// const a = fs.readFileSync("amol.json", "utf-8");
// const b = JSON.parse(a);
// console.log(b);

// console.log("all is done....");
