function solution(id_list, report, k) {
  var answer = [];
  const list = {};
  for (let i of report) {
    const reportArray = i.split(" ").reverse();
    // [신고대상, 신고한사람]
    const target = reportArray[0];
    const userId = reportArray[1];
    if (!list[target]) {
      list[target] = new Set().add(userId);
    } else {
      list[target].add(userId);
    }
  }
  console.log(list);
  const blockList = Object.keys(list).filter((v) => list[v].size >= k);
  console.log(blockList);
  const countObj = {};

  blockList.forEach((v) => {
    for (let i of list[v]) {
      if (!countObj[i]) {
        countObj[i] = 1;
      } else {
        countObj[i] += 1;
      }
    }
  });
  console.log(countObj);
  for (let i = 0; i < id_list.length; i++) {
    // console.log(id_list[i]);
    answer.push(countObj[id_list[i]] || 0);
  }
  console.log(answer);
  return answer;
}

const test1 = [
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2,
];
const test2 = [
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3,
];

const [id_list, report, k] = test1;
solution(id_list, report, k);

// 1. report array를 돌면서 object 형식으로 만들기
// 2. 기본 구성은 신고한 사람 => 신고한 대상 형식인데 신고대상은 한명이고 신고한 사람은 다수가 될 수 있어서
// 거꾸로 key = 신고한 대상 , value = [신고한사람1, ... ] 으로 구성
// value의 값은 신고대상이 이용정지가 되면 메일을 받는 리스트이기도 함
// 3. 이용정지자 찾기
// - 1. 신고관련 Obj에서 신고횟수 이상을 받은 대상들만 array를 구성
// - 2. 그 array를 돌면서 이용정지를 신고한 사람에 이름과 횟수로 obj생성
// 4. 유저리스트에 맞게 새로운 array에 넣기
// - 메일은 안받는 사람은 undefined 가 뜨니까 0으로 처리할 것
