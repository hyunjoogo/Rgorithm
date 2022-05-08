const word1 = "querty";
// 정규표현식 이용하기
const fixWord1 = word1.replace(/q/g, "e");
console.log(fixWord1);

const word2 = "hqllo my namq is hyqwon";
// replaceAll
const fixWord2 = word2.replaceAll("q", "e");
console.log(fixWord2);

// split 후 join
const fixWord3 = word2.split("q").join("e");
console.log(fixWord3);
