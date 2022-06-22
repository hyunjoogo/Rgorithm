function solution(numbers) {
  var answer = "";
  let usedNum = new Array(numbers.length).fill(0);
  let strNumbers = numbers.map((item) => String(item));
  let cnt = 0;
  while (cnt < numbers.length) {
    let max = 0;
    let index;
    for (let i = 0; i < strNumbers.length; i++) {
      let strMax = String(max);
      if (strMax[0] < strNumbers[i][0]) {
        if (usedNum[i] === 0) {
          max = +strNumbers[i];
          index = i;
        } else {
          continue;
        }
      } else if (strMax[0] > strNumbers[i][0]) {
        continue;
      } else {
        if (strMax.length >= 2 && strNumbers[i].length >= 2) {
          if (strMax[1] > strNumbers[i][1]) {
            continue;
          } else if (strMax[1] < strNumbers[i][1]) {
            if (usedNum[i] === 0) {
              max = +strNumbers[i];
              index = i;
            } else {
              continue;
            }
          } else {
            if (strMax.length === 3 && strNumbers[i].length === 3) {
              if (strMax[2] > strNumbers[i][2]) {
                continue;
              } else if (strMax[2] < strNumbers[i][2]) {
                if (usedNum[i] === 0) {
                  max = +strNumbers[i];
                  index = i;
                } else {
                  continue;
                }
              } else {
                continue;
              }
            } else if (strMax.length === 3 && strNumbers[i].length !== 3) {
              if (strMax[1] > strMax[2]) {
                if (usedNum[i] === 0) {
                  max = +strNumbers[i];
                  index = i;
                } else {
                  continue;
                }
              } else if (strMax[1] < strMax[2]) {
                continue;
              } else {
                if (usedNum[i] === 0) {
                  max = +strNumbers[i];
                  index = i;
                } else {
                  continue;
                }
              }
            } else if (strMax.length !== 3 && strNumbers[i].length === 3) {
              if (strNumbers[i][1] > strNumbers[i][2]) {
                continue;
              } else if (strNumbers[i][1] < strNumbers[i][2]) {
                if (usedNum[i] === 0) {
                  max = +strNumbers[i];
                  index = i;
                } else {
                  continue;
                }
              } else {
                continue;
              }
            }
          }
        } else if (strMax.length >= 2 && strNumbers[i].length === 1) {
          if (strMax[0] < strMax[1]) {
            continue;
          } else if (strMax[0] > strMax[1]) {
            if (usedNum[i] === 0) {
              max = +strNumbers[i];
              index = i;
            } else {
              continue;
            }
          } else {
            if (strMax.length === 3) {
              if (strMax[1] < strMax[2]) {
                continue;
              } else if (strMax[1] > strMax[2]) {
                if (usedNum[i] === 0) {
                  max = +strNumbers[i];
                  index = i;
                } else {
                  continue;
                }
              } else {
                if (usedNum[i] === 0) {
                  max = +strNumbers[i];
                  index = i;
                } else {
                  continue;
                }
              }
            } else {
              if (usedNum[i] === 0) {
                max = +strNumbers[i];
                index = i;
              } else {
                continue;
              }
            }
          }
        } else if (strMax.length === 1 && strNumbers[i].length >= 2) {
          if (strNumbers[i][0] < strNumbers[i][1]) {
            if (usedNum[i] === 0) {
              max = +strNumbers[i];
              index = i;
            } else {
              continue;
            }
          } else if (strNumbers[i][0] > strNumbers[i][1]) {
            continue;
          } else {
            if (strNumbers[i].length === 3) {
              if (strNumbers[i][1] < strNumbers[i][2]) {
                if (usedNum[i] === 0) {
                  max = +strNumbers[i];
                  index = i;
                } else {
                  continue;
                }
              } else if (strNumbers[i][1] > strNumbers[i][2]) {
                continue;
              } else {
                continue;
              }
            } else {
              continue;
            }
          }
        } else {
          continue;
        }
      }
    }
    usedNum[index] = 1;
    answer += String(max);
    cnt += 1;
  }

  return answer;
}

// 정렬 함수를 사용하지 않고 최대한 구현하려고 해봤지만 이 방법도 시간초과가 발생한다.
