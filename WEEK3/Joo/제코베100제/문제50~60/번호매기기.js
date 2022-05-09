const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];

const result = students.sort();
// for (let i = 0; i < result.length; i++) {
//   console.log(`번호: ${i + 1}, 이름: ${result[i]}`);
// }

for (let key in result) {
  console.log(`번호: ${Number(key) + 1}, 이름: ${result[key]}`);
}
// console.log(result);
