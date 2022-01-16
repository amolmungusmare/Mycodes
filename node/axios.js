//  axios with callbacks

// const axios = require("axios");
// const fs = require("fs");
// axios.get("http://api.navgurukul.org/courses").then((resp) => {
//   var sf = resp.data;
//   var sa = JSON.stringify(sf);
//   const as = fs.writeFileSync("amol.json", sa);
// });

//  axios with asyncs - awaits

// const axios = require("axios");
// const fs = require("fs");
// async function amol() {
//   let sd = await axios.get("http://api.navgurukul.org/courses");
//   var a = JSON.stringify(sd.data);
//   const as = fs.writeFileSync("amol.json", a);
// }
// amol();

//  axios with  promises

// const axios = require("axios");
// const fs = require("fs");
// const promise = new Promise((resolve, reject) => {
//   axios.get("http://api.navgurukul.org/courses").then((res) => {
//     var as = res.status;
//     if (as === 200) {
//       resolve;
//       var sa = JSON.stringify(res.data);
//       const asdf = fs.writeFileSync("amol.json", sa);
//     } else {
//       reject("Sorry...");
//     }
//   });
// })
//   .then(() => {
//     console.log("resolve");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
