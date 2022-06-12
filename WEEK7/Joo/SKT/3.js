const n = 5;
const plans = ["100 1 3", "500 4", "2000 5"];
const clients = ["300 3 5", "1500 1", "100 1 3", "50 1 2"];

const plansArr = [];
const clientsArr = [];
let service;
for (let i = 0; i < plans.length; i++) {
  let temp = {};
  const test = plans[i].split(" ");
  temp["giveData"] = Number(test[0]);
  const test1 = plans[i].split(test[0]);

  if (i !== 0) {
    const tempService = test1[1]
      .trim()
      .split(" ")
      .map((v) => +v);
    for (let j of tempService) {
      service.push(j);
    }
  } else {
    service = test1[1]
      .trim()
      .split(" ")
      .map((v) => +v);
  }
  temp["service"] = new Set(service);
  temp["idx"] = i;
  plansArr.push(temp);
}

for (let i = 0; i < clients.length; i++) {
  let temp = {};
  const test = clients[i].split(" ");
  temp["wantData"] = Number(test[0]);
  const test1 = clients[i].split(test[0]);
  temp["wantService"] = test1[1]
    .trim()
    .split(" ")
    .map((v) => +v);
  clientsArr.push(temp);
}

function solution(n, plansArr, clientsArr) {
  var answer = [];

  for (let i = 0; i < clientsArr.length; i++) {
    const plansFilter = plansArr.filter(
      (v) => v.giveData > clientsArr[i].wantData
    );
    console.log(i, plansFilter);
    for (let x = 0; x < clientsArr[i].wantService.length; x++) {
      const temp = [];
      for (let j = 0; j < plansFilter.length; j++) {
        if (plansFilter[j].service.has(clientsArr[i].wantService[x])) {
          temp[x] = true;
        } else {
          temp[x] = false;
        }
      }
      console.log(temp);
    }
  }

  return answer;
}

function findPlan(clientsArr, customer) {}

solution(n, plansArr, clientsArr);

const test1 = [
  5,
  ["100 1 3", "500 4", "2000 5"],
  ["300 3 5", "1500 1", "100 1 3", "50 1 2"],
];
const test2 = [4, ["38 2 3", "394 1 4"], ["10 2 3", "300 1 2 3 4", "500 1"]];
