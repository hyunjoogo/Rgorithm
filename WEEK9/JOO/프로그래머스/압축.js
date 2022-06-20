// 0. 사전을 만든다.
// 0은 쿠션으로 인덱스1~ 26까지 값은 대문자

// 1. 첫번째 글자가 사전에 있는지 확인한다.
// 있어? 다음 문자까지 확인해보자
// 없어?
// 2. 두번째 글자까지 사전에 있는지 확인한다.
// 사전에 없다면 첫번째 글자의 사전색인번호를 출력하고 첫번째+두번째 글자를 사전의 맨 마지막 순서에 넣는다.
// 사전에 있으면 다음 글자까지 사전에 있는지 반복해서 확인한다.
// 2.1. 글자 확인
// 확인하는 중에 없다면 확인전 글자의 사전색인번호를 출력한다.
// 그리고 확인한 글자까지의는 사전에 맨 마지막 순서에 넣고

// 현재 입력문자가
//  - 사전에 있다면 다음글자를 추가하고 다시 반복
//  - 사전에 없다면 이전문자까지의 색인번호를 answer에 추가 => 현재 입력문자를 사전에 추가

// 2.2 마지막 문자
// 해당글자는 있고 다음 글자가 존재하지 않는다면 출력만하고 종료한다.

// 여기서 출력은 answer array에 push하는 형식으로 한다.

function solution(msg) {
  const answer = [];
  const dictionary = {};
  let count = 1;
  for (let i = 1; i <= 26; i++) {
    dictionary[String.fromCharCode(65 + i - 1)] = i;
    count = i;
  }

  let str = "";

  for (let i = 0; i < msg.length; i++) {
    str += msg[i];
    let c = msg[i + 1];
    // 현재입력이 있니?
    // i = 0 => K
    // i = 1 => A
    // i = 2 => K
    // i = 3 => KA
    // i = 4 => O !!! 다음 인덱스가 없어요
    if (i === msg.length - 1) {
      answer.push(dictionary[msg[i]]);
      break;
    }

    if (dictionary[str]) {
      str += c;
      console.log(str, dictionary[str]);
      // 추가했는데 값이 있어
      // i = 2 => KA? str 하나 빼고 i = 3으로 넘어가
      if (dictionary[str]) {
        console.log(str.slice(0, str.length - 1));
        str = str.slice(0, str.length - 1);
        continue;
      }
      // 추가했는데 값이 없어
      // i = 0 => KA? : K 인덱스 출력  / KA 사전추가
      // i = 1 => AK? : A 인덱스 출력 / AK 사전추가
      // i = 3 => KAO? : KA 인덱스 출력 / KAO 사전추가
      else {
        console.log("str에 값없음 => 값 추가, str 원복");
        count++;
        answer.push(dictionary[str.slice(0, str.length - 1)]);
        dictionary[str] = count;
        str = "";
      }
    }
  }

  return answer;
}

const msg = "KAKAO";
//  'TOBEORNOTTOBEORTOBEORNOT'
solution(msg);
