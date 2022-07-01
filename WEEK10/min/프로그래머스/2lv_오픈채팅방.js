function solution(record) {
  var answer = [];
  let userData = {};

  // 유저정보 db에 넣는 과정
  for (let i = 0; i < record.length; i++) {
    let order = record[i].split(" ")[0];
    let id = record[i].split(" ")[1];
    let name = record[i].split(" ")[2];
    if (order === "Enter" || order === "Change") {
      userData[id] = name;
    }
  }

  // 정보 출력
  for (let i = 0; i < record.length; i++) {
    let order = record[i].split(" ")[0];
    let id = record[i].split(" ")[1];
    if (order === "Enter") {
      answer.push(userData[id] + "님이 들어왔습니다.");
    } else if (order === "Leave") {
      answer.push(userData[id] + "님이 나갔습니다.");
    } else {
      continue;
    }
  }
  return answer;
}

/* 논리
  1. database 객체를 만든다.
  2. record 배열을 돌면서 Enter나 Change인 경우에 uid: 이름 의 프로퍼티를 객체에 만든다. 
  3. record 배열을 돌면서 각 객체의 id와 똑같은 이름으로 출력 배열에 할당한다.
*/

/* 시간복잡도
record가 10만 이기 때문에 2중 반복문은 사용불가능 
배열에 index로 바로 접근하거나 객체에 프로퍼티에 바로 접근하는등의 방식을 활용해야 될꺼같음
 */

// uid가 uid1234의 형식으로 준다는 얘기는 문제에 아무대도 없다. 이거 주의하자 테케에서 그렇게 보인다고 문제에 조건에 없으면 절대 오해하지 말기
