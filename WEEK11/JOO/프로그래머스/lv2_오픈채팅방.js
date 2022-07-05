function solution(record) {
  // 유저아이디는 고유값이다.
  // obj를 만들어서
  const historyObj = {};
  const recordRoomObj = [];

  for (let i = 0; i < record.length; i++) {
    const action = record[i].split(" ");
    // case1. 처음입장
    if (action[0] === "Enter" && !historyObj[action[1]]) {
      historyObj[action[1]] = { name: action[2], isExist: true };
      recordRoomObj.push({ id: action[1], isComing: true });
    }
    // case2. 닉네임 변경하여 입장
    else if (action[0] === "Enter" && historyObj[action[1]]) {
      historyObj[action[1]] = { name: action[2], isExist: true };
      recordRoomObj.push({ id: action[1], isComing: true });
    }
    // case3. 퇴장
    else if (action[0] === "Leave") {
      historyObj[action[1]].isExist = false;
      recordRoomObj.push({ id: action[1], isComing: false });
    }
    // case4
    else if (action[0] === "Change" && historyObj[action[1]]) {
      historyObj[action[1]].name = action[2];
    }
  }

  const result = recordRoomObj.map((value) => {
    if (value.isComing) {
      return `${historyObj[value.id].name}님이 들어왔습니다.`;
    } else {
      return `${historyObj[value.id].name}님이 나갔습니다.`;
    }
  });
  console.log(historyObj, recordRoomObj, result);
  return result;
}

// 출입한 유저의 아이디와 닉네임, 현재 방에 존재했는지를 알 수 있는 obj를 만든다.
// case1. 입장시 (list[아이디]가 없으면 )
// {
//  'uid1234' : {name : Muzi, isExist : true}
// }
// case2. 닉네임 변경하여 입장시 (list[아이디]가 있으면서 닉네님 변경)
// {
//  'uid1234' : {name : Prodo, isExist : true}
// }

// case3. 퇴장시 (list[아이디]의 isExist를 false로 변경)
// {
//  'uid1234' : {name : Muzi, isExist : false}
// }

// case4. 입장한 상태에서 아이디변경 (list[아이디] 있고, isExist가 true이면)
// {
//  'uid4567' : {name : Ryan, isExist : true}
// }

// 입장, 퇴장만 모아서 아이디에 따라 순서대로 list[아이디].name 님이 입장 또는 퇴장

// 1. 입장 uid1234 Muzi
// -> Muzi님 입장

// 2. 입장 uid4567 Prodo
// -> Muzi님 입장
// -> Prodo님 입장

// 3. 나감 uid1234
// -> Muzi님 입장
// -> Prodo님 입장
// -> Muzi님 퇴장

// 4. 입장 uid1234 Prodo
// -> Muzi님 입장   => Prodo님 입장
// -> Prodo님 입장
// -> Muzi님 퇴장   => Prodo님 입장
// -> Prodo님 입장

// 5. 변경 uid4567 Ryan
// -> Prodo님 입장
// -> Prodo님 입장  => Ryan님 입장
// -> Prodo님 입장
// -> Prodo님 입장

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
console.log(solution(record));
