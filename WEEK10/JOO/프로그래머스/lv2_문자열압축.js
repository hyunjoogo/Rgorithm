// https://programmers.co.kr/learn/courses/30/lessons/60057

// "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)
// 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return

// 몇개 단위로 자를지를 고민해야한다.
// 1~? 단위로 자른 것중에 문자열의 length가 제일 짧은 것을 리턴해줘야한다.


// 먼저 n개 단위로 자른 것부터 해보자

function solution(s) {
  let answer = 0;

  // for루프를 돌면서 n개 단위로 잘랐을 때의 길이를 리턴받는다.
  // n =1부터 s의 length 길이까지
  for (let i = 1; i <= s.length; i++) {

    if (i === 1) {
      answer = calculateStrLength(i, s);
    } else {
      answer = Math.min(answer, calculateStrLength(i, s));
    }

  }


  return answer;
}


function calculateStrLength(n, s) {
  if (n === s.length) {
    return s.length;
  }
  let list = [];
  // 슬라이스하는 포인터를 0번째 인덱스로 설정한다.
  // 포인터의 인덱스값이 문자열의 길이보다 작은 동안
  // 1. 문자열을 n개만큼 잘라서 list에 넣어준다.
  let slicePointer = 0;
  while (slicePointer < s.length) {
    let sliceStr = s.slice(slicePointer, slicePointer + n);
    list.push(sliceStr);
    slicePointer += n;
  }


  // !! 현재 에러나는 것
  // ['a', 'b']
  // 값이 두개일 때 처음부터 달라버리면...?


  // !!! 투포인터?
  // 2. 포인터1과 포인터2를 각각 0번째 인덱스와 1번째 인덱스값으로 설정한다.
  // 카운터를 0으로 설정한다. // 반복값을 정리한 str를 만든다.
  let pointer1 = 0;
  let pointer2 = 1;
  let count = 1;
  let str = "";
  // 포인터2의 인덱스값이 list의 길이보다 작은동안
  while (pointer2 < list.length) {
    // 2.1 포인터1의 값과 포인터2의 값이 다르면
    if (list[pointer1] !== list[pointer2]) {
      // 현재 카운터값과 포인터1의 값을 str에 할당한다.
      str += count + list[pointer1];
      // 카운터값을 초기화해준다.
      count = 1;
      // 포인터1을 현재 인덱스보다 앞으로 이동하고
      pointer1++;
      // // 그 인덱스에 포인터2 값을 할당한다.
      // list[pointer1] = list[pointer2];
      // // 그리고 포인터2의 인덱스를 다음 인덱스로 이동시킨다.
      // console.log(list[pointer2]);
      // pointer2++;
      // // 만약 포인터2의 인덱스가 list의 길이와 같다면 종료
      //
      // if (pointer2 === list.length) {
      //   str += count + list[pointer1];
      //   break;
      // }

      if (pointer2 + 1 === list.length) {
        str += count + list[pointer2];
        break;
      } else {
        // 그 인덱스에 포인터2 값을 할당한다.
        list[pointer1] = list[pointer2];
        // 그리고 포인터2의 인덱스를 다음 인덱스로 이동시킨다.
        // console.log(list[pointer2]);
        pointer2++;
        // 만약 포인터2의 인덱스가 list의 길이와 같다면 종료
      }
    }
    // 2.2 포인터1의 값과 포인터2의 값이 같으면
    if (list[pointer1] === list[pointer2]) {
      // 카운터를 업해준다.
      count++;
      // 그리고 포인터2의 인덱스를 다음 인덱스로 이동시킨다.
      pointer2++;
      if (pointer2 === list.length) {
        str += count + list[pointer1];
        break;
      }
    }
  }

  console.log(str, str.split('1').join(''));
  return str.split('1').join('').trim().length;
}


const test = ["aabbaccc", "ababcdcdababcdcd", "abcabcdede", "abcabcabcabcdededededede", "xababcdcdababcdcd"
, "abcasdaaa"];

console.log('정답', solution(test[5]));

// 실패 74.0 / 100.0
// https://programmers.co.kr/questions/27672
