//Synchronously

// const fs=require('fs')
// fs.mkdirSync('Thapa');
// fs.appendFileSync('/home/navgurukul/Desktop/amol/node/Thapa/bio.txt','My name is Amol')
// fs.appendFileSync('/home/navgurukul/Desktop/amol/node/Thapa/bio.txt','\nfull name is Amol Dimbar Mungusmare');
// fs.appendFileSync('/home/navgurukul/Desktop/amol/node/Thapa/bio.txt','\nHe is from lobhi');
// fs.appendFileSync('/home/navgurukul/Desktop/amol/node/Thapa/bio.txt','\nHe loves priya...');
// const b=fs.readFileSync('/home/navgurukul/Desktop/amol/node/Thapa/bio.txt');
// console.log(b.toString())
// fs.renameSync('/home/navgurukul/Desktop/amol/node/Thapa/bio.txt','/home/navgurukul/Desktop/amol/node/Thapa/mybio.txt');
// fs.unlinkSync('/home/navgurukul/Desktop/amol/node/Thapa/mybio.txt');
// fs.rmdirSync('/home/navgurukul/Desktop/amol/node/Thapa')
// console.log('Done...!')





// Asynchronosly
// const fs=require('fs');
// fs.mkdir('Thapa',(err)=>{console.log('created')});
// fs.writeFile('./Thapa/bio.txt','My name is Amol..',(err)=>{console.log('created')})
// fs.appendFile('./Thapa/bio.txt','\nHis full name is Amol Digambar Mungusmare',(err)=>{console.log('created')});
// fs.appendFile('./Thapa/bio.txt','\nHe is from Lobhi',(err)=>{console.log('appended')});
// fs.appendFile('./Thapa/bio.txt','\nHe loves priya',(err)=>{console.log('appended')});
// fs.rename('.Thapa/bio.txt','mybio.txt',(err)=>{console.log('done')})
// const as=fs.readFile('.Thapa/mybio.txt',(err,f)=>{console.log(f)})