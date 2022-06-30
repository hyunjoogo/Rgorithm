function solution(record) {
  var answer = [];
  let userDataArr = pushUserData(record);

  for (let i = 0; i < record.length; i++) {
    if (record[i][0] === "C") {
      let userId = record[i].split(" ")[1];
      let userName = record[i].split(" ")[2];
      changeUserData(userDataArr, userId, userName);
    }
  }
  console.log(userDataArr);

  for (let i = 0; i < record.length; i++) {
    if (record[i][0] === "E") {
      let userId = record[i].split(" ")[1];
      let userName = findUserName(userId, userDataArr);
      answer.push(userName + "님이 들어왔습니다.");
    } else if (record[i][0] === "L") {
      let userId = record[i].split(" ")[1];
      let userName = findUserName(userId, userDataArr);
      answer.push(userName + "님이 나갔습니다.");
    } else {
      continue;
    }
  }

  return answer;
}

function pushUserData(record) {
  let userData = [];
  for (let i = 0; i < record.length; i++) {
    if (record[i][0] === "E") {
      let userId = record[i].split(" ")[1];
      let userName = record[i].split(" ")[2];
      if (!searchUser(userId, userData)) {
        userData.push({
          uid: userId,
          name: userName,
        });
      }
    }
  }
  return userData;
}

function searchUser(id, userArr) {
  for (let i = 0; i < userArr.length; i++) {
    if (id === userArr[i].uid) {
      return true;
    }
  }
  return false;
}

function changeUserData(userArr, id, name) {
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].uid === id) {
      userArr[i].name = name;
      return;
    }
  }
}

function findUserName(id, userArr) {
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].uid === id) {
      return userArr[i].name;
    }
  }
}
