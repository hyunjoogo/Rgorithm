const s1 = "THISISSTRINGS";
const s2 = "TATHISISKKQQAEW";

function sol(string) {
  let result = [];
  for (let i = 1; i < string.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      result.push(string.slice(j, j + string.length + 1 - i));
    }
  }
  return result;
}

const array1 = sol(s1);
const array2 = sol(s2);

const inter = array1.filter((x) => array2.includes(x));

inter.sort((a, b) => {
  return b.length - a.length;
});
console.log(inter[0].length);

// 1. 나는 어떤 생각을 하다가 막혔는지?
// 'abc'를 abc, ab, bc, a, b, c 이렇게 쪼개는 것에서 막힘
// slice로 for문을 돌면서 자를려고 했는데 공백칸도 나오고 겹치는 것이 많이 발생

// 2. 다음에는?
// 저 포문자체를 외워야하는건지... 아니면 반복만이 답인건지..