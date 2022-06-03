function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const setReport = [...new Set(report)].map((item) => item.split(" "));
  const userData = [];
  const reportingUser = [];
  const reportedUser = [];

  // 각 유저별로 보고 받은 횟수를 표시
  for (let i = 0; i < id_list.length; i++) {
    userData.push({ name: id_list[i], reported: 0 });
  }

  // report된 각 유저의 신고 횟수를 userData에 할당
  for (let i = 0; i < userData.length; i++) {
    for (let j = 0; j < setReport.length; j++) {
      if (setReport[j][1] === userData[i].name) {
        userData[i].reported++;
      }
    }
  }

  // k보다 큰 신고를 받은 유저의 이름으로 새로운 배열을 생성
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].reported >= k) {
      reportingUser.push(userData[i].name);
    }
  }

  // 조건에 만족한 유저를 신고한 유저의 이름으로 새로운 배열을 만든다.
  for (let i = 0; i < reportingUser.length; i++) {
    for (let j = 0; j < setReport.length; j++) {
      if (setReport[j][1] === reportingUser[i]) {
        reportedUser.push(setReport[j][0]);
      }
    }
  }

  // 신고한 유저의 배열을 돌면서 결과 배열에 +1을 해준다.
  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < reportedUser.length; j++) {
      if (id_list[i] === reportedUser[j]) {
        answer[i]++;
      }
    }
  }

  return answer;
}
