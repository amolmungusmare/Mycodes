const axios = require("axios");
const fs = require("fs");
const a = require("readline-sync");
const [sr, c_name, id] = [[], [], []];
// axios
//   .get("http://saral.navgurukul.org/api/courses")
//   .then((res) => {
//     const ds = fs.writeFileSync("courses.json", JSON.stringify(res.data));
// const sd = JSON.parse(
//   fs.readFileSync("/home/navgurukul/Desktop/amol/node/courses.json", "utf-8")
// );
// for (i in sd["availableCourses"]) {
//   console.log(
//     i,
//     sd["availableCourses"][i]["name"],
//     ":- ",
//     sd["availableCourses"][i]["id"]
//   );
//   sr.push(i),
//     c_name.push(sd["availableCourses"][i]["name"]),
//     id.push(sd["availableCourses"][i]["id"]);
// }
// })
// .catch((error) => {
//   console.log(error);
// });
// var iput = a.questionInt("choose course sr_no...");
// console.log(`Your chose course is ${c_name[iput]}`);
// axios
//   .get(`http://saral.navgurukul.org/api/courses/${id[iput]}/exercises`)
//   .then((res) => {
//     const ls = fs.writeFileSync("courses_1.json", JSON.stringify(res.data));
const [no, name, slug] = [[], [], []];
const asd = JSON.parse(
  fs.readFileSync("/home/navgurukul/Desktop/amol/node/courses_1.json", "utf-8")
);
for (j in asd["data"]) {
  console.log(j, asd["data"][j]["name"]);
  no.push(j),
    name.push(asd["data"][j]["name"]),
    slug.push(asd["data"][j]["slug"]);
}
// })
// .catch((err) => {
//   console.log(err);
// });
var pt = a.questionInt("Enter Exercise number:- ");
console.log(`Your chose exercise is ${name[pt]}`);
axios
  .get(
    "http://saral.navgurukul.org/api/courses/158/exercise/getBySlug?slug=js-intro_json__What-is-javascript?_json"
  )
  .then((response) => {
    fs.writeFileSync("courses_2.json", JSON.stringify(response.data));
    const data = JSON.parse(
      fs.readFileSync(
        "/home/navgurukul/Desktop/amol/node/courses_2.json",
        "utf-8"
      )
    );
    const c_data = data["content"];
    for (x of c_data) {
      for (y of x) {
        console.log(x["value"]);
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });
