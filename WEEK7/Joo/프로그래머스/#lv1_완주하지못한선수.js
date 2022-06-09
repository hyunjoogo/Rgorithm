function sol1(participant, completion) {
  var answer = "";
  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      if (participant[i] === completion[j]) {
        participant[i] = 0;
        completion[j] = 1;
      }
    }
  }

  return participant.filter((v) => v !== 0).join("");
}
// 효율성 탈락

// -------------------------------
function sol2(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }

  return participant[participant.length - 1];
}

// 둘 다 sort를 하고 각각 0번째 인덱스 돌면서 다른 것이 있으면 바로 리턴
// 없으면 맨 마지막 번째가 정답
// 근데 해시문제인데??
// [ 'filipa', 'josipa', 'marina', 'nikola', 'vinko' ] [ 'filipa', 'josipa', 'marina', 'nikola' ]
// [ 'ana', 'mislav', 'mislav', 'stanko' ] [ 'ana', 'mislav', 'stanko' ]

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];
    // 값 설정하기
    // 참가자 리스트를 돌면서 참가자 이름 : 판별숫자
    // map에 없으면 0, 있으면 그 값 가지고 오기
    // 참가자 첫번째가 map 없으므로 0 + 1 => {'mislav' => 1}
    // 참가자 두번째가 map 있으므로 -1 + 1 => 중복이 허용되지 않으므로 {'mislav' => 1, 'stanko' => 0}
    // 참가자 세번째가 map 있으므로 1 + 1 => 중복이 허용되지 않으므로 {'mislav' => 2, 'stanko' => 0, 'ana' => -1}
    // 참가자 네번째가 map 있으므로 -1 + 1 => 중복이 허용되지 않으므로 {'mislav' => 1, 'stanko' => 0, 'ana' => 0}
    map.set(a, (map.get(a) || 0) + 1);

    // 완주자 첫번째가 map에 없으므로 0 - 1 => {'mislav' => 1, 'stanko' => -1}
    // 완주자 두번째가 map에 없으므로 0 - 1 => {'mislav' => 1, 'stanko' => 0, 'ana' => -1}
    // 완주자 세번째가 map에 있으므로 2 - 1 => {'mislav' => 1, 'stanko' => 0, 'ana' => -1}
    // 완주자 네번째는 undefined 0 - 1 => {'mislav' => 1, 'stanko' => 0, 'ana' => 0, undefined => -1}
    map.set(b, (map.get(b) || 0) - 1);
  }
  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

function sola(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    map.set(a, (map.get(a) || 0) + 1);
  }
  for (let i = 0; i < completion.length; i++) {
    b = completion[i];
    map.set(b, map.get(b) - 1);
  }

  for (let b of map) {
    console.log(b);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}
sola(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

// 왜? map.set(a, (map.get(a) || 0) + 1);

// 참가자의 중복이 있어서 value를 추가하고 빼는 듯하다.
// 먼저 값이 있는지 없는지 알 수 있는 방법은 map.get(a)를 이용하는 것

// 참가자부터 돌면서 +1 해주고 완주자를 돌면서 -1 해주면
// 참가자의 value가 0보다 크면 미완주자인것이다.

// 만약 참가자부터 돌아보자.
// for문 -1번을 돌면서  (참가자, a)
// 단순하게 map.set(a, 1) 하면 동명이인 (중복) 때문에 아래와 같이 나온다.
// {"mislav" => 1, "stanko" => 1, "ana" => 1}
// 만약 동명이인이 있다면 동명이인의 값을 가져와서 +1 해주는 방식을 사용하면
// map.set(a, (map.get(a) || 0) + 1)
// {"mislav" => 2, "stanko" => 1, "ana" => 1}
// 즉, 'mislav'라는 사람이 두번 통과를 해야지 동명이인 모두 통과한 것이다.

// for문 -2번을 돌면서 (완주자, b)
// 단순하게 map.set(b, -1) 하면 참가자에 키값에 -1 value가 덮어씌어진다.
// {"mislav" => -1, "stanko" => -1, "ana" => -1}

// 그렇다면 참가자의 value를 가지고 와서 -1 해주자.
// map.set(b, map.get(b) - 1) 이렇게 하니까!
// { 'mislav' => 1, 'stanko' => 0, 'ana' => 0 }

// 마지막 for of 문을 돌면서 => [key, value] 형식으로 나온다
// value > 0 인 key 값을 리턴하면 된다.
// 혹시나 1 이 아니라 2이면 어떻게 하죠?
// 문제 조건중에 완주자의 길이는 참가자의 길이보다 1작다고 함
// 뭐 나중에 이런 문제 나오면 stirng 결과값에 추가해도 될 것 같고
// 아니면 array에 push하고 join을 하자.

/*
map.set(key, value)형태로 객체를 추가하게 되는데 
a,즉 participant의 첫번째 요소부터 추가를 하게되는것이죠 
처음 추가를 하게 되면 key값으로 a가 전달이 되고 value값으로 map.get(a) || 0 + 1 이 전달이 되는건데 
a가 처음 추가되는 상황이므로 map.get(a)가 false이므로 0이 출력값이 되고 1을 더하니 
결과적으로 key에 a, value에 1이 map에 저장됩니다


근데 만약 map에 a가 이미 추가되어있는 상황이라면(동명이인) map에 key가 a value가 1인 객체가 있는 상황입니다. 
그렇게 되면 map.get(a)가 true가 되므로 map.get(a) || 0)가 
map.get(a)가 나오게 되고(즉 1이 나오게 됨) +1을 하면 
a의 value값으로 2가 전달이 되는것이죠 
이제 b를 살펴보면 같은 원리로 b가 이미 map에 있다면 (즉 완주자라면)a 1 인 상태에서 -1이 되어 value값이 0이 됩니다 
반대로 없는 경우에는(즉 완주를 못함) a에서는 있었으므로 value값이 1이지만 
완주를 못해 b에는 없으므로 아무변화가 없어 value값이 1인상태로 남게 됩니다 
또한 동명이인의 경우에는 a에서 한번더 1이 더해져 value가 2인상태에서 b에서 1을 뺀다고 해도 값이 1이 남게됩니다 
결국 아래 for 문에서 value값이 0이상 즉 1 인 값들(미완주자, 동명이인)이 출력이 되게 되는것이죠
*/
