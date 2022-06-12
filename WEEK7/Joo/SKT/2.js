function solution(periods, payments, estimates) {
  var answer = [0, 0];
  for (let i = 0; i < periods.length; i++) {
    if (periods[i] <= 22) {
      continue;
    } else if (periods[i] <= 58) {
      let nowIsVip;
      let nextIsVip;
      const pay12 = payments[i].reduce((a, b) => a + b, 0);
      if (pay12 >= 900000) {
        if (periods[i] === 23) {
          nowIsVip = false;
        } else {
          nowIsVip = true;
        }
      } else {
        nowIsVip = false;
      }
      payments[i][0] = estimates[i];
      const payNext12 = payments[i].reduce((a, b) => a + b, 0);

      if (payNext12 >= 900000) {
        nextIsVip = true;
      } else {
        nextIsVip = false;
      }

      if (!nowIsVip & nextIsVip) {
        answer[0] += 1;
      } else if (nowIsVip & !nextIsVip) {
        answer[1] += 1;
      }
    } else {
      let nowIsVip;
      let nextIsVip;
      const pay12 = payments[i].reduce((a, b) => a + b, 0);
      if (pay12 >= 600000) {
        if (periods[i] === 59) {
          if (pay12 >= 900000) {
            nowIsVip = true;
          } else {
            nowIsVip = false;
          }
        } else {
          nowIsVip = true;
        }
      } else {
        nowIsVip = false;
      }
      payments[i][0] = estimates[i];
      const payNext12 = payments[i].reduce((a, b) => a + b, 0);

      if (payNext12 >= 600000) {
        nextIsVip = true;
      } else {
        nextIsVip = false;
      }

      if (!nowIsVip & nextIsVip) {
        answer[0] += 1;
      } else if (nowIsVip & !nextIsVip) {
        answer[1] += 1;
      }
    }
  }

  return answer;
}

const [periods, payments, estimates] = [
  [24, 59, 59, 60],
  [
    [
      50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
      50000, 50000,
    ],
    [
      50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
      50000, 50000,
    ],
    [
      350000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
      50000, 50000,
    ],
    [
      50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
      50000, 50000,
    ],
  ],
  [350000, 50000, 40000, 50000],
];
solution(periods, payments, estimates);
