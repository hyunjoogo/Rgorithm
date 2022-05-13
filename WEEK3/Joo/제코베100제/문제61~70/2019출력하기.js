const s = "aacddddddddd";

console.log(s.match(/a/g).length);
console.log(Number(s.match(/b/g)));
console.log(s.match(/c/g).length);
console.log(s.match(/d/g).length);
