const stamp = [
  [1, 1, 1, 2], // [0,1,2,1]
  [2, 0, 0, 0], // [0,1,0,1]
  [1, 1, 1, 1], // [0,1,0,1]
  [0, 0, 0, 0], // [0,1,0,2]
];

// 1. 이 문제를 보고 어떻게 이 솔루션을 떠올렸지?
// 2차원 정사각형 배열이니까 90도 회전을 하면 인덱스끼리의 위치가 변경이 됨을 인지함
// 0으로 채워진 배열을 하나 만들어서
// 새로운 배열에 이중for문을 돌면서 기존배열값을 대입하는 방식
// 새로운배열 00 => 기존 03

// 다른 풀이를 보니까
// 새로운배열 03 => 기존 00 이런식도 괜찮은듯하다.
// 그래도 위에 방식을 떠올렸다는 것에 만족

//  2. 이것보다 더 좋은 방법은 없을까?
// 다회전시키는 함수를 만드는 것을 생각하다가 막혔다.
// solution 함수에서 for문으로 rotate의 return값(새로운배열)을 result에 대입시키면서
// 회전한 것을 회전하는 방식

// -------------- 내 코드 ---------
const n = 4;
const result = [];
for (let i = 0; i < n; i++) {
  const x = [];
  for (let j = 0; j < n; j++) {
    x.push(0);
  }
  result.push(x);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 00 => stamp[3][0] ,
    // 01 => stamp[2][0]
    // 02 => stamp[1][0]
    // 03 => stamp[0][0]
    result[i][j] = stamp[n - 1 - j][i];
  }
}

// --------- 정리본 ---------

function solution(stamp, n) {
  const N = stamp.length;
  // 0으로 만들어진 배열 생성
  let p = [];
  for (let i = 0; i < N; i++) {
    p.push(Array(N).fill(0));
  }
  for (let i = 0; i < n; i++) {
    stamp = rotate(stamp);
    // p = sum_matrix(p, stamp);
  }

  return stamp;
}

function rotate(stamp) {
  const N = stamp.length;
  let rot = [];
  for (let i = 0; i < N; i++) {
    rot.push(Array(N).fill(0));
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      rot[j][N - 1 - i] = stamp[i][j];
    }
  }
  return rot;
}

console.log(solution(stamp, 4));

// 90도 회전
// N * N
/* stamp => result

00 => 03
01 => 13
02 => 23
03 => 33

10 => 02
11 => 12
12 => 22
13 => 32

20 => 01
21 => 11
22 => 21
23 => 31

30 => 00
31 => 10
32 => 20
33 => 30

*/

/* result에 stamp값 대입시키기
30 => 00
20 => 01
10 => 02
00 => 03

31 => 10
21 => 11
11 => 12
01 => 13

*/
