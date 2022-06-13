const [lottos, win_nums] = [
  [44, 1, 0, 0, 31, 25],
  [31, 10, 45, 1, 6, 19],
];

const rule = {
  // 일치갯수 : 순위
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
  1: 6,
  0: 6,
};

function solution(lottos, win_nums) {
  var answer = [];
  let removedNumberCount = 0;
  for (let i of lottos) {
    if (i === 0) {
      removedNumberCount++;
    }
  }
  const myWin_nums = new Set(
    lottos.filter((v) => new Set([...win_nums]).has(v))
  );
  answer.push(
    rule[removedNumberCount + myWin_nums.size],
    rule[myWin_nums.size]
  );

  return answer;
}

solution(lottos, win_nums);

// 1. 내 번호에서 지워진 번호의 갯수 찾기
// 2. 내 번호와 당첨번호의 교집합 찾기
// 3. 1번 + 2번 => 최고 순위
// 4. 2번 => 최저 순위
