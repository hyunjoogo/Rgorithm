function solution(land) {
  const new_list = [];
  for (let i = 0; i < land.length; i++) {
    const row = [];

    for (let j = 0; j < land[i].length; j++) {
      row.push({ value: land[i][j], idx: j });
    }
    row.sort((a, b) => a.value - b.value);
    new_list.push(row);
  }

  let result = 0;
  for (let i = 0; i < new_list.length; i++) {
    if (i === 0) {
      result += new_list[i][3].value;
    } else {
      if (new_list[i][3].idx === new_list[i - 1][3].idx) {
        result += new_list[i][2].value;
      } else {
        result += new_list[i][3].value;
      }
    }
  }

  return result;
}

// -------------------- Good Code
function sol(land) {
  for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
    // 본인 열을 제외한 나머지 열의 최댓값을 본인의 열에 더하여 누적한다.
    // 나의 열을 뺀 나머지중 최댓값을 더한다?
    for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
      land[rowIndex][colIndex] += Math.max(
        ...land[rowIndex - 1].slice(0, colIndex),
        ...land[rowIndex - 1].slice(colIndex + 1)
      );
    }
  }
  return Math.max(...land[land.length - 1]);
}

sol([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]);
// console.log(...[1, 2, 3, 5].slice(0, 1), ...[1, 2, 3, 5].slice(2));

// console.log([1, 2, 3, 5].splice(1, 1));

function sol1(land) {
  for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
    console.log("for문 start", land[rowIndex]);
    for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
      // for문 분석 -1
      const temp = [...land[rowIndex - 1]];
      temp.splice(colIndex, 1);
      land[rowIndex][colIndex] += Math.max(...temp);
    }
    console.log(land[rowIndex]);
  }
  return Math.max(...land[land.length - 1]);
}

console.log(
  sol1([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);

// for문 분석 -1
// 이전 행 중에 나와 같은 열을 제외한 나머지 값 중 큰 값을 더하기
// 현재 행 : [5,6,7,8]
// 이전 행 : [1,2,3,5]

// 0번째 열의 경우
// 이전 행의 0번째를 제외한 [2,3,5] 중 제일 큰 수는 5
// 그래서 현재 행의 0번째 열에 자기 자신에 제일 큰 수를 더한다.
// [10,6,7,8]
// 1번째 열의 경우
// 이전 행의 1번째를 제외한 [1,3,5] 중 제일 큰 수는 5
// 그래서 현재 행의 1번째 열을 자신 + 큰 수 (5)로 바꾼다.
// [10,11,7,8]
// 2번째 열 => [10,11,12,8]
// 3번째 열의 경우
// 이전 행의 3번째를 제외한 [1,2,3] 중 제일 큰 수는 3
// 그래서 현재 행의 1번째 열을 자신 + 큰 수 (3)로 바꾼다.
// [10,11,12,11]

// 이전 행의 n번째를 제외한 [a,b,c] 중 제일 큰 수 구하기
// splice 사용하기 arr.splice(시작, 갯수)
// - arr를 변경하므로 복사한 arr를 하나 만든다.
// - arr.splice(n, 1) => 해당 숫자를 리턴하므로 [a,b,c]는 아니다
// - Math.math(...arr)를 해야 한다.

// slice 사용하기 arr.slice(시작, 끝(본인은 미포함))
// - arr는 변경 안됨. 시작부터 끝까지에 대한 새로운 배열을 반환함
// - 두 가지를 구해야함
// - 본인보다 앞에 (없으면 알아서 [] 반환) , 본인보다 뒤에 (없으면 알아서 [] 반환)
// - arr.slice(0, colIndex) ,  arr.slice(colIndex + 1)
// -  Math.math(...arr.slice(0, colIndex), ...arr.slice(colIndex + 1))

// for문이 반복 될 수록 자신의 열을 제외한 이전 행의 값중에 최대값이 본인에게 더해진다.

// for 문이 종료되면 마지막 행의 조건을 만족시키는 최대값이 된다.
