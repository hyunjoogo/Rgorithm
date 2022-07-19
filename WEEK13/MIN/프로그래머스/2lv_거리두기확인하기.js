function solution(places) {
  const answer = [];
  lab: for (const place of places) {
    // 전체위치에서 P가 있는지 판단
    for (let i = 0; i < place.length; i++) {
      for (let j = 0; j < place.length; j++) {
        if (place[i][j] === "P") {
          // P인경우 해당 사람이 맨해튼 거리가 2이하인지 판단
          if (!isDistance(place, i, j)) {
            answer.push(0);
            continue lab;
          }
        }
      }
    }
    answer.push(1);
  }
  return answer;
}

function isDistance(place, i, j) {
  // 가로줄 판단
  for (let w = 0; w < 5; w++) {
    if (w === j) continue;
    if (place[i][w] === "P") {
      let distance = Math.abs(w - j);
      if (distance === 1) {
        return false;
      } else if (distance === 2) {
        if (place[i][(w + j) / 2] === "X") {
          continue;
        } else {
          return false;
        }
      } else {
        continue;
      }
    }
  }

  // 세로줄 판단
  for (let h = 0; h < 5; h++) {
    if (h === i) continue;
    if (place[h][j] === "P") {
      let distance = Math.abs(h - i);
      if (distance === 1) {
        return false;
      } else if (distance === 2) {
        if (place[(h + i) / 2][j] === "X") {
          continue;
        } else {
          return false;
        }
      } else {
        continue;
      }
    }
  }

  // 대각선 판단

  // 오른쪽 위 판단
  if (place[i - 1]) {
    if (place[i - 1][j + 1] && place[i - 1][j + 1] === "P") {
      if (place[i - 1][j] === "X" && place[i][j + 1] === "X") {
        return true;
      } else {
        return false;
      }
    }
  }

  // 오른쪽 아래 판단
  if (place[i + 1]) {
    if (place[i + 1][j + 1] && place[i + 1][j + 1] === "P") {
      if (place[i + 1][j] === "X" && place[i][j + 1] === "X") {
        return true;
      } else {
        return false;
      }
    }
  }

  // 왼쪽 위 판단
  if (place[i - 1]) {
    if (place[i - 1][j - 1] && place[i - 1][j - 1] === "P") {
      if (place[i - 1][j] === "X" && place[i][j - 1] === "X") {
        return true;
      } else {
        return false;
      }
    }
  }

  // 왼쪽 아래 판단
  if (place[i + 1]) {
    if (place[i + 1][j - 1] && place[i + 1][j - 1] === "P") {
      if (place[i + 1][j] === "X" && place[i][j - 1] === "X") {
        return true;
      } else {
        return false;
      }
    }
  }

  return true;
}
