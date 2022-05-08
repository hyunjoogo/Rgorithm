const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

let mySet = new Set();
for (const key in people) {
  mySet.add(people[key]);
}
console.log(mySet, mySet.size);
