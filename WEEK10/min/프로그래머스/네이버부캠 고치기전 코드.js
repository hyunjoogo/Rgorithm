const keyboard = [
  ["가", "호", "저", "론", "남", "드", "부", "이", "프", "설"],
  ["알", "크", "청", "울", "키", "초", "트", "을", "배", "주"],
  ["개", "캠", "산", "대", "단", "지", "역", "구", "너", "양"],
  ["라", "로", "권", "교", "마", "쿼", "파", "송", "차", "타"],
  ["코", "불", "레", "뉴", " ", "서", "한", "산", "리", "개"],
  ["터", "강", "봄", "토", "캠", "상", "호", "론", "운", "삼"],
  ["보", "람", "이", "경", "아", "두", "프", "바", "트", "정"],
  ["스", "웨", "어", "쿼", "일", "소", "라", "가", "나", "도"],
  ["판", "자", "비", "우", "사", "거", "왕", "태", "요", "품"],
  ["안", "배", "차", "캐", "민", "광", "재", "봇", "북", "하"],
];

function solution(word) {
  let answer = [];
  let distanceSum = 0;
  let numberDis = 0;
  let beforeArr = [];
  for (let i = 0; i < word.length; i++) {
    let str = word[i];
    if (!includeArr(str)) {
      distanceSum += 20;
      numberDis += 1;
      continue;
    }

    let strIndex = findIndex(str, keyboard);

    if (beforeArr.length === 0) {
      beforeArr.push(strIndex);
    } else {
      if (strIndex.length >= 2 || beforeArr.length >= 2) {
        let min = 0;
        for (let a = 0; a < beforeArr.length; a++) {
          for (let b = 0; b < strIndex.length; b++) {
            let sum = calDistance(beforeArr[0][a], strIndex[0][b]);
            console.log(beforeArr[a]);
            console.log(sum);
            if (min > sum) {
              min = sum;
            }
          }
        }
        console.log(min);
        distanceSum += min;
        beforeArr = [];
        beforeArr = strIndex;
      } else {
        distanceSum += calDistance(strIndex, beforeArr);
        numberDis += 1;
        beforeArr = [];
      }
    }
  }

  // 다 돌고도 아직 한개가 남아있을때
  if (beforeArr.length === 1) {
    distanceSum += beforeArr[0] + beforeArr[1];
    numberDis += 1;
  } else if (beforeArr.length >= 2) {
    let minSum = 0;
    for (let i = 0; i < beforeArr.length; i++) {
      let sum = beforeArr[i][0] + beforeArr[i][1];
      if (minSum > sum) {
        minSum = sum;
      }
    }
    distanceSum += minSum;
    numberDis += 1;
  }
  answer.push(distanceSum);
  answer.push(numberDis);

  return answer;
}

function findIndex(str, keyboard) {
  let strArr = [];
  if (!includeArr(str)) {
    return -1;
  }
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < keyboard[i].length; j++) {
      if (keyboard[i][j] === str) {
        strArr.push([i, j]);
      }
    }
  }
  return strArr;
}

function includeArr(word) {
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < keyboard[i].length; j++) {
      if (keyboard[i][j] === word) {
        return true;
      }
    }
  }
  return false;
}

function calDistance(numArr1, numArr2) {
  return Math.abs(numArr1[0] - numArr2[0]) + Math.abs(numArr1[1] - numArr2[1]);
}
