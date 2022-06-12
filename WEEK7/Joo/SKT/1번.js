function solution(p) {
  const answer = new Array(p.length).fill(0);
  let n = p.length;
  for (let i = 0; i < n; i++) {
    const tempArr = [];
    for (let j = i; j < n; j++) {
      tempArr.push({ value: p[j], idx: j });
    }
    const sort = tempArr.sort((a, b) => a.value - b.value);
    if (i !== sort[0].idx) {
      let temp = p[i];
      
      p[i] = sort[0].value;
      p[sort[0].idx] = temp;
      
      answer[i] += 1;
      answer[sort[0].idx] += 1;
    }
  }
  
  return answer;
}
const p = [2, 5, 3, 1, 4];
solution(p);
